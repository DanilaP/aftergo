import React from "react";
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/materials';
import { SkyMaterial } from "@babylonjs/materials";
import { WaterMaterial } from "@babylonjs/materials";
import FirstWindow from "../FirstWindow/firstWindow";

const MiniMap = props => {
    const canvasRef = React.useRef(null);
    const [sceneState, setSceneState] = React.useState(false);
    const ops = {};
    ops.width = window.innerWidth;
    ops.height = window.innerHeight;

    React.useEffect(() => {
       const canvas = canvasRef.current;
       const engine = new BABYLON.Engine(canvas, true);

       const createScene = () => {
            const scene = new BABYLON.Scene(engine);

            const light4 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
            light4.intensity = 0.7;
            const camera = new BABYLON.ArcRotateCamera("Camera", (Math.PI / 1.8), 3.8, 900, BABYLON.Vector3.Zero(), scene);
            camera.lowerBetaLimit = (Math.PI / 2) * 0.8;
            camera.upperBetaLimit = (Math.PI / 2) * 0.6;
            camera.panningAxis = new BABYLON.Vector3(.3, .3, .3);
            camera.wheelPrecision = 4;
            camera.wheelDeltaPercentage = 0.01;
            camera.lowerRadiusLimit = 500;
            camera.upperRadiusLimit = 900;
            camera.attachControl(canvas, true);

            scene.clearColor = new BABYLON.Color3(0.9, 0.9, 0.85);

            // const skyOptions = {
            //     segments: 512,
            //     diameter: 3000,
            //     sideOrientation: BABYLON.Mesh.DOUBLESIDE
            // }
            // const skySphere = BABYLON.MeshBuilder.CreateSphere("sphere", skyOptions, scene);
            // skySphere.material = new SkyMaterial('sky', scene);
            // skySphere.material.inclination = 0.3;
            // skySphere.material.turbidity = 15;
            // skySphere.material.useSunPosition = true;
            // skySphere.material.sunPosition = new BABYLON.Vector3(-50, 15, -50);

        //     const waterMaterial = new WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(512, 512));
        //    waterMaterial.bumpTexture = new BABYLON.Texture("./textures/waterbump.png", scene);
        //    waterMaterial.windForce = -5;
        //    waterMaterial.waveHeight = 0.05;
        //    waterMaterial.bumpHeight = 0.1;
        //    waterMaterial.waveLength = 0.1;
        //    waterMaterial.waveSpeed = 50.0;
        //    waterMaterial.colorBlendFactor = 0;
        //    waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
        //    waterMaterial.colorBlendFactor = 0;
        //    waterMaterial.mustDepthSortFacets = true;
        //    const waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 4096, 4096, 256, scene, false);
        //    waterMesh.material = waterMaterial;
        //    waterMesh.renderingGroupId = 0;
        //    waterMesh.position.y = -8;
        //    waterMesh.onBeforeRenderObservable.add(() => {
        //        engine.setStencilMask(0x00);
        //        engine.setStencilFunction(BABYLON.Engine.NOTEQUAL);
        //        engine.setStencilFunctionReference(1);
        //    });
        //    waterMaterial.addToRenderList(skySphere);

            const nodeMat_map = new BABYLON.NodeMaterial("nodeMat_map", scene);
            nodeMat_map.loadAsync("./textures/pick_map.json").then(() => {
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

            BABYLON.SceneLoader.ImportMesh("","./models/mini_map/", "advanced_lands.glb", undefined, (meshes) => {
                // meshes[0].position.y = -15;
                meshes.forEach(mesh => {
                    console.log(mesh.name);
                    if (
                        mesh.name === 'advanced_3_primitive1'
                        || mesh.name === 'advanced_2_primitive1'
                        || mesh.name === 'advanced_1_primitive1'
                        ) {
                        mesh.material = nodeMat_border;
                    }
                    if (
                        mesh.name === 'advanced_3_primitive0'
                        || mesh.name === 'advanced_2_primitive0'
                        || mesh.name === 'advanced_1_primitive0'
                        ) {
                        mesh.material = nodeMat_grass;
                    }
                });
            });
            BABYLON.SceneLoader.ImportMesh("","./models/mini_map/", "basic_lands.glb", undefined, (meshes) => {
                // meshes[0].position.y = -15;
                meshes.forEach(mesh => {
                    console.log(mesh.name);
                    if (
                        mesh.name === 'basic_2_primitive0'
                        || mesh.name === 'basic_8_primitive0'
                        || mesh.name === 'basic_1_primitive0'
                        || mesh.name === 'basic_6_primitive0'
                        || mesh.name === 'basic_5_primitive0'
                        || mesh.name === 'basic_4_primitive0'
                        || mesh.name === 'basic_7_primitive0'
                        || mesh.name === 'basic_9_primitive0'
                        || mesh.name === 'basic_3_primitive0'
                        || mesh.name === 'basic_10_primitive0'
                    ) {
                        mesh.material = nodeMat_border;
                    }
                    if (
                        mesh.name === 'basic_2_primitive1'
                        || mesh.name === 'basic_8_primitive1'
                        || mesh.name === 'basic_1_primitive1'
                        || mesh.name === 'basic_6_primitive1'
                        || mesh.name === 'basic_5_primitive1'
                        || mesh.name === 'basic_4_primitive1'
                        || mesh.name === 'basic_7_primitive1'
                        || mesh.name === 'basic_9_primitive1'
                        || mesh.name === 'basic_3_primitive1'
                        || mesh.name === 'basic_10_primitive1'
                    ) {
                        mesh.material = nodeMat_grass;
                    }
                });
            });
            // BABYLON.SceneLoader.ImportMesh("","./models/mini_map/", "basic_tombs_colliders.glb", undefined, (meshes) => {
            //     // meshes[0].position.y = -15;
            //     meshes.forEach(mesh => {
            //         console.log(mesh.name);
                    
            //     });
            // });
            BABYLON.SceneLoader.ImportMesh("","./models/mini_map/", "mini_map.glb", undefined, (meshes) => {
                meshes[0].position.y = -15;
                meshes.forEach(mesh => {
                    // console.log(mesh.name);
                    mesh.material = nodeMat_map;
                });
            });
            BABYLON.SceneLoader.ImportMesh("","./models/mini_map/", "premium_lands.glb", undefined, (meshes) => {
                // meshes[0].position.y = -15;
                meshes.forEach(mesh => {
                    // console.log(mesh.name);
                    if (
                        mesh.name === 'premium_1_primitive1'
                        || mesh.name === 'premium_2_primitive1'
                        || mesh.name === 'premium_3_primitive1'
                        || mesh.name === 'premium_4_primitive1'
                        ) {
                        mesh.material = nodeMat_border;
                    }
                    if (
                        mesh.name === 'premium_1_primitive0'
                        || mesh.name === 'premium_2_primitive0'
                        || mesh.name === 'premium_3_primitive0'
                        || mesh.name === 'premium_4_primitive0'
                        ) {
                        mesh.material = nodeMat_grass;
                    }
                });
            });

            // BABYLON.SceneLoader.ImportMesh("","./models/tombstones/", "tomb_b.glb", undefined, (meshes) => {
            //     meshes[0].position.set(256.3398499395301, -4.260748863220101, -34.61611681280294);
            //     meshes[0].name = 'tombstone';
            // });
            // BABYLON.SceneLoader.ImportMesh("","./models/tombstones/", "tomb_b_s.glb", undefined, (meshes) => {
            //     meshes[0].position.set(-111.56073990738753, -4.260748863220215, -92.87194607228571);
            //     meshes[0].name = 'tombstone';
            // });
            // BABYLON.SceneLoader.ImportMesh("","./models/tombstones/", "tomb_b_forsale.glb", undefined, (meshes) => {
            //     meshes[0].position.set(-106.33845391985741, -4.300273980538009, 134.1246274343418);
            //     meshes[0].name = 'tombstone';
            // });

            scene.onPointerObservable.add(function (pointerInfo) {
        
            switch (pointerInfo.type) {
                case BABYLON.PointerEventTypes.POINTERPICK:
                    let m = pointerInfo.pickInfo.pickedMesh;
                    console.log(m.name);
                    
                    // if (m.name === 'tombstone_1.001_primitive5'
                    //     || m.name === 'tombstone_1.001_primitive0'
                    //     || m.name === 'tombstone_1.001_primitive2'
                    //     || m.name === 'tombstone_1.001_primitive0'
                    //     || m.name === 'merge5.001'
                    //     || m.name === 'merge5.005'
                    //     || m.name === 'merge5.003'
                    //     || m.name === 'merge5.002'
                    //     ) {
                    //     console.log(m.name);
                    //     var ease = new BABYLON.CubicEase();
                    //     ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEOUT);
                    //     var position = pointerInfo.pickInfo.pickedPoint
                    //     position.y = camera.position.y;
                    //     var direction = pointerInfo.pickInfo.ray.direction
                    //     direction.y = 0
                    //     var target = position.add(direction)
                    //     var tempCamera = camera.clone()
                    //     tempCamera.position = position
                    //     tempCamera.setTarget(target)
                    //     var start = BABYLON.Quaternion.FromRotationMatrix(camera.getWorldMatrix())
                    //     var end = BABYLON.Quaternion.FromRotationMatrix(tempCamera.getWorldMatrix())
                    //     var endx = end.toEulerAngles();
                    //     var endz = new BABYLON.Vector3(endx.x + 3, endx.y + 2, endx.z + 1);
                    //     tempCamera.dispose();

                    //     let pos = pointerInfo.pickInfo.pickedMesh.absolutePosition;
                    //     // let isPosX = camera.position.x > pos.x ? pos.x + 6 : pos.x - 6;
                    //     // let isPosZ = camera.position.z > pos.z ? pos.z + 6 : pos.z - 6;
                    //     let pos2 = new BABYLON.Vector3(pos.x, pos.y + 7, pos.z);

                    //     BABYLON.Animation.CreateAndStartAnimation("transition", camera, "rotation", 90, 240, start.toEulerAngles(), end.toEulerAngles(), 0);
                    //     BABYLON.Animation.CreateAndStartAnimation("transition", camera, "target", 90, 240, camera.getTarget(), m.absolutePosition, 0);
                    //     BABYLON.Animation.CreateAndStartAnimation("transition", camera, "position", 90, 240, camera.globalPosition, pos2, 0, undefined);
                    // }

                break;
                default: return null;
            }
            });

            let pickedMesh = null;
            let hl = new BABYLON.HighlightLayer("h1", scene);
            scene.onPointerMove = function() {
                let result = scene.pick(scene.pointerX, scene.pointerY);
                if (result.pickedMesh !== pickedMesh) {
                    if (pickedMesh) {
                        hl.removeAllMeshes();
                    }
                    pickedMesh = result.pickedMesh;
                    if (pickedMesh) {
                        if (
                            pickedMesh.name === 'premium_1_primitive0'
                            || pickedMesh.name === 'premium_2_primitive0'
                            || pickedMesh.name === 'premium_3_primitive0'
                            || pickedMesh.name === 'premium_4_primitive0'

                            || pickedMesh.name === 'basic_1_primitive1'
                            || pickedMesh.name === 'basic_2_primitive1'
                            || pickedMesh.name === 'basic_3_primitive1'
                            || pickedMesh.name === 'basic_4_primitive1'
                            || pickedMesh.name === 'basic_5_primitive1'
                            || pickedMesh.name === 'basic_6_primitive1'
                            || pickedMesh.name === 'basic_7_primitive1'
                            || pickedMesh.name === 'basic_8_primitive1'
                            || pickedMesh.name === 'basic_9_primitive1'
                            || pickedMesh.name === 'basic_10_primitive1'

                            || pickedMesh.name === 'advanced_1_primitive0'
                            || pickedMesh.name === 'advanced_2_primitive0'
                            || pickedMesh.name === 'advanced_3_primitive0'
                        ) {
                            hl.addMesh(pickedMesh, BABYLON.Color3.Blue(), true);
                        }
                    }
                }
            };

           return scene
       }

       const scene = createScene();
       engine.runRenderLoop(() => {
           scene.render();
       });

       scene.executeWhenReady(() => {
        setSceneState(true);
       });

       window.addEventListener('resize', () => {
           engine.resize();
       });

        return () => {
            engine.dispose();

            if (window) {
                window.removeEventListener("resize", window);
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
            {
                sceneState ? null : <FirstWindow/>
            }
        </>
    );
}

export default MiniMap