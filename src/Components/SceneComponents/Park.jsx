import React from "react";
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/materials';
import { SkyMaterial } from "@babylonjs/materials";

const ops = {};
ops.width = window.innerWidth;
ops.height = window.innerHeight;

const Park = props => {
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
       const canvas = canvasRef.current;
       const engine = new BABYLON.Engine(canvas, true);

       const createScene = () => {
           const scene = new BABYLON.Scene(engine);
           const FPS = 60;
           const gravity = -9.81;
           scene.gravity = new BABYLON.Vector3(0, gravity / FPS, 0);
           scene.collisionsEnabled = true;

           const skyOptions = {
               segments: 512,
               diameter: 800,
               sideOrientation: BABYLON.Mesh.DOUBLESIDE
           }
           const skySphere = BABYLON.MeshBuilder.CreateSphere("sphere", skyOptions, scene);
           skySphere.material = new SkyMaterial('sky', scene);
        //    skySphere.material.inclination = 0.3;
        //    skySphere.material.turbidity = 15;
           skySphere.material.inclination = 1.6;
           skySphere.material.turbidity = 18;
           skySphere.material.useSunPosition = true;
        //    skySphere.material.sunPosition = new BABYLON.Vector3(0, 5, -50);
           skySphere.material.sunPosition = new BABYLON.Vector3(0, 100, 0);

           

           const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 1.7, 0), scene);
           camera.attachControl(canvas, true);
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

           const envTex = BABYLON.CubeTexture.CreateFromPrefilteredData('./textures/ev3.env', scene);
           envTex.rotationY = -40.22;
           scene.environmentIntensity = .8;
           scene.environmentTexture = envTex;
           scene.createDefaultSkybox(envTex, true);

           const nodeMat_map = new BABYLON.NodeMaterial("nodeMat_map", scene);
           nodeMat_map.loadAsync("./textures/map20.json").then(() => {
            nodeMat_map.build(true);
           });
           const nodeMat_border = new BABYLON.NodeMaterial("nodeMat_border", scene);
            nodeMat_border.loadAsync("./textures/border4.json").then(() => {
                nodeMat_border.build(true);
            });
            const nodeMat_grass = new BABYLON.NodeMaterial("nodeMat_grass", scene);
            nodeMat_grass.loadAsync("./textures/grass2.json").then(() => {
                nodeMat_grass.build(true);
            });
            const nodeMat_water = new BABYLON.NodeMaterial("nodeMat_water", scene);
            nodeMat_water.loadAsync("./textures/map_water.json").then(() => {
                nodeMat_water.build(true);
            });

           BABYLON.SceneLoader.ImportMesh("","./models/", "map_low.glb", undefined, (meshes) => {
                meshes[0].position.y = -10.3;
                meshes.forEach(mesh => {
                    mesh.material = nodeMat_map;
                    localStorage.getItem('map') ? mesh.isVisible = true : mesh.isVisible = false;
                    mesh.checkCollisions = true;
                });
            });
            BABYLON.SceneLoader.ImportMesh("","./models/", "map_high.glb", undefined, (meshes) => {
                meshes[0].position.y = -10.3;
                meshes.forEach(mesh => {
                    if (mesh.name === 'geo5_primitive0') mesh.material = nodeMat_grass;
                    if (mesh.name === 'geo5_primitive1') mesh.material = nodeMat_border;
                    if (mesh.name === 'geo5_primitive4') mesh.material = nodeMat_water;
                    localStorage.getItem('map') ? mesh.isVisible = true : mesh.isVisible = false;
                    mesh.checkCollisions = true;
                });
            });

           return scene
       }

       const scene = createScene();
       const resize = () => {
          engine.resize();
       }

       engine.runRenderLoop(() => {
           scene.render();
       });

       window.addEventListener('resize', resize);

        return () => {
            engine.dispose();

            if (window) {
                window.removeEventListener("resize", resize);
            }
        };

    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                {...ops}
                {...props}
            ></canvas>
        </>
    );
}

export default Park