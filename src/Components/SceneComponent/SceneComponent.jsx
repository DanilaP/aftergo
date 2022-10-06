import React from "react";
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/materials';
import { SkyMaterial } from "@babylonjs/materials";
import { WaterMaterial } from "@babylonjs/materials";
import store from "../../store";

var waterMaterial, skySphere, light, waterMesh, camera, shadowGenerator,
    options, envTex, opts;

class BabylonScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = { useWireFrame: false, shouldAnimate: false }
    }

    componentDidMount = () => {
        this.engine = new BABYLON.Engine(this.canvas, true);
        this.scene = new BABYLON.Scene(this.engine);
        this.FPS = 60;
        this.gravity = -9.81;
        this.scene.gravity = new BABYLON.Vector3(0, this.gravity / this.FPS, 0);
        this.scene.collisionsEnabled = true;

        this.addSky();
        this.addCamera();
        this.addHDR();
        this.addLight();
        this.addShadow();
        this.addWater();
        this.addModels();

        window.addEventListener("resize", this.onWindowResize, false);
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.onWindowResize, false);
        this.engine.dispose(); // to prevent creating two engines, two scenes etc
    }

    onWindowResize = () => {
        if (this.engine) {
            this.engine.resize();
            this.forceUpdate();
        }
    }

    addSky = () => {
        options = {
            segments: 512,
            diameter: 800,
            sideOrientation: BABYLON.Mesh.DOUBLESIDE
        }
        skySphere = BABYLON.MeshBuilder.CreateSphere("sphere", options, this.scene);
        skySphere.material = new SkyMaterial('sky', this.scene);
        skySphere.material.inclination = 0.3;
        skySphere.material.turbidity = 15;
        skySphere.material.useSunPosition = true;
        skySphere.material.sunPosition = new BABYLON.Vector3(0, 5, -50);
    }

    addCamera = () => {
        camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 1.7, 0), this.scene);
        camera.attachControl(this.canvas, true);
        camera.invertRotation = true;
        camera.applyGravity = true;
        camera.checkCollisions = true;
        camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
        camera.minZ = .45;
        camera.speed = .3;
        camera.angularSensibility = 1900;
        camera.keysUp.push(87);
        camera.keysDown.push(83);
        camera.keysLeft.push(65);
        camera.keysRight.push(68);
        camera.rotation.set(0, Math.PI, 0);
    };

    addHDR = () => {
        envTex = BABYLON.CubeTexture.CreateFromPrefilteredData('./textures/ev3.env', this.scene);
        envTex.rotationY = -40.22;
        // envTex.rotationY = 20;
        this.scene.environmentIntensity = .2;
        this.scene.environmentTexture = envTex;
        this.scene.createDefaultSkybox(envTex, true);
    }

    addLight = () => {
        light = new BABYLON.SpotLight("spotLight", new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, -1, 5), Math.PI / 2, 10, this.scene);
        light.position = new BABYLON.Vector3(0, 4, -25);
        light.intensity = 300;
    }

    addShadow = () => {
        shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        shadowGenerator.useBlurExponentialShadowMap = true;
    }

    addWater = () => {
        waterMaterial = new WaterMaterial("waterMaterial", this.scene, new BABYLON.Vector2(512, 512));
        waterMaterial.bumpTexture = new BABYLON.Texture("//www.babylonjs.com/assets/waterbump.png", this.scene);
        waterMaterial.windForce = -5;
        waterMaterial.waveHeight = 0.05;
        waterMaterial.bumpHeight = 0.1;
        waterMaterial.waveLength = 0.1;
        waterMaterial.waveSpeed = 50.0;
        waterMaterial.colorBlendFactor = 0;
        waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
        waterMaterial.colorBlendFactor = 0;
        waterMaterial.mustDepthSortFacets = true;

        waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 512, 512, 32, this.scene, false);
        waterMesh.material = waterMaterial;
        waterMesh.renderingGroupId = 0;
        waterMesh.position.y = -4;

        waterMesh.onBeforeRenderObservable.add(() => {
            this.engine.setStencilMask(0x00);
            this.engine.setStencilFunction(BABYLON.Engine.NOTEQUAL);
            this.engine.setStencilFunctionReference(1);
        });

        waterMaterial.addToRenderList(skySphere);
    }

    addModels = () => {
        const nodeMat_room = new BABYLON.NodeMaterial("nodeMat_room", this.scene);
        nodeMat_room.loadAsync("./textures/cp1.json").then(() => {
            nodeMat_room.build(true);
        });

        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, this.scene);
        sphere.position.z = -30;
        sphere.position.y = .5;
        sphere.material = nodeMat_room;

        this.scene.activeCamera.onViewMatrixChangedObservable.add(() => {
            const distance = BABYLON.Vector3.Distance(this.scene.activeCamera.position, sphere.position);
            const isVisible = distance < 10;
            store.dispatch({type: "SHOWFIRSTSUB", payload: isVisible});
        });

        BABYLON.SceneLoader.ImportMesh("","./models/", "room.glb", this.scene, (meshes) => {
            this.scene.animationGroups.forEach(a => {
                a.loopAnimation = false;
            });
            meshes[0].receiveShadows = true;
            meshes.forEach(mesh => {
                mesh.receiveShadows = true;
                waterMaterial.addToRenderList(mesh);
                if (mesh.material) {
                    mesh.material = nodeMat_room;
                }
            });
        });

        BABYLON.SceneLoader.ImportMesh("","./models/", "collider.glb", this.scene, (meshes) => {
            meshes.map(mesh => {
                mesh.checkCollisions = true;
                mesh.isVisible = false;
            });
        });

        BABYLON.SceneLoader.ImportMesh("","./models/", "LOGO.glb", this.scene, (meshes) => {
            shadowGenerator.addShadowCaster(meshes[0]);
            meshes[0].receiveShadows = true;
        });
        BABYLON.SceneLoader.ImportMesh("","./models/", "info.glb", this.scene, (meshes) => {
            shadowGenerator.addShadowCaster(meshes[0]);
            meshes[0].receiveShadows = true;
        });

        const nodeMat_ground = new BABYLON.NodeMaterial("nodeMat_ground", this.scene);
        nodeMat_ground.loadAsync("./textures/ground1.json").then(() => {
            nodeMat_ground.build(true);
        });

        BABYLON.SceneLoader.ImportMesh("", "./models/", "ground.glb", this.scene, (meshes) => {
            meshes[0].receiveShadows = true;
            meshes.forEach(mesh => {
                mesh.receiveShadows = true;
                if (mesh.material) {
                    mesh.material = nodeMat_ground;
                }
            });
        });

        BABYLON.SceneLoader.ImportMesh("", "./models/", "tv.glb", this.scene);

        const nodeMat_walls = new BABYLON.NodeMaterial("nodeMat_walls", this.scene);
        nodeMat_walls.loadAsync("./textures/rock11.json").then(() => {
            nodeMat_walls.build(true);
        });

        BABYLON.SceneLoader.ImportMesh("", "./models/", "walls2.glb", this.scene, (meshes) => {
            meshes[0].receiveShadows = true;
            meshes.forEach(mesh => {
                mesh.receiveShadows = true;
                if (mesh.material) {
                    mesh.material = nodeMat_walls;
                }
            });
        });

        BABYLON.SceneLoader.ImportMesh("", "./models/", "Grass_type_1.glb", this.scene, (meshes) => {
            const parent = meshes[0];
            const blade = parent.getChildMeshes()[0];
            blade.setParent(null);
            parent.dispose();
            const bladeCount = 200;
            blade.isVisible = false;
            shadowGenerator.addShadowCaster(blade);
            blade.receiveShadows = true;

            function randomIntFromInterval(min, max) {
                return Math.random() * (max - min + 1) + min;
            }

            for (let index = 0; index < bladeCount - 1; index++) {
                const instance = blade.createInstance("blade" + index);
                instance.position.x = randomIntFromInterval(-3.9, 3);
                instance.position.z = randomIntFromInterval(-13, 10);
                instance.scaling.set(.04, .04, .04);
                instance.rotate(BABYLON.Axis.Y, Math.random() * Math.PI * 2, BABYLON.Space.WORLD);
                instance.alwaysSelectAsActiveMesh = true;
                shadowGenerator.addShadowCaster(instance);
            }
        });

        BABYLON.SceneLoader.ImportMesh("", "./models/", "Grass_type_2.glb", this.scene, (meshes) => {
            const parent = meshes[0];
            const blade = parent.getChildMeshes()[0];
            blade.setParent(null);
            parent.dispose();
            const bladeCount = 100;
            blade.isVisible = false;
            shadowGenerator.addShadowCaster(blade);
            blade.receiveShadows = true;

            function randomIntFromInterval(min, max) {
                return Math.random() * (max - min + 1) + min;
            }

            for (let index = 0; index < bladeCount - 1; index++) {
                const instance = blade.createInstance("blade" + index);
                instance.position.x = randomIntFromInterval(-3.3, 3.3);
                instance.position.z = randomIntFromInterval(-13, 10);
                instance.scaling.set(.05, .05, .05);
                instance.rotate(BABYLON.Axis.Y, Math.random() * Math.PI * 2, BABYLON.Space.WORLD);
                instance.alwaysSelectAsActiveMesh = true;
                shadowGenerator.addShadowCaster(instance);
            }
        });

        BABYLON.SceneLoader.ImportMesh("", "./models/", "Fern.glb", this.scene, (meshes) => {
            const parent = meshes[0];
            const blade = parent.getChildMeshes()[0];
            blade.setParent(null);
            parent.dispose();
            const bladeCount = 22;
            blade.isVisible = false;
            shadowGenerator.addShadowCaster(blade);
            blade.receiveShadows = true;

            function randomIntFromInterval(min, max) {
                return Math.random() * (max - min + 1) + min;
            }

            for (let index = 0; index < bladeCount - 1; index++) {
                const instance = blade.createInstance("blade" + index);
                instance.position.x = randomIntFromInterval(-2.8, 2.8);
                instance.position.z = randomIntFromInterval(-13, 10);
                instance.scaling.set(.04, .04, .04);
                instance.rotate(BABYLON.Axis.Y, Math.random() * Math.PI * 2, BABYLON.Space.WORLD);
                instance.alwaysSelectAsActiveMesh = true;
                shadowGenerator.addShadowCaster(instance);
            }
        });
    }

    render() {
        opts = {};
        opts.width = window.innerWidth;
        opts.height = window.innerHeight;
        return (
            <canvas
                {...opts}
                ref={canvas => {this.canvas = canvas}}
            />
        );
    }
}
export default BabylonScene;