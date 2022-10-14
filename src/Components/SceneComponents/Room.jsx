import React from "react";
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/materials';
import { SkyMaterial } from "@babylonjs/materials";
import { WaterMaterial } from "@babylonjs/materials";

const ops = {};

const Room = props => {
    ops.width = props.innerWidth;
    ops.height = props.innerHeight;
    const canvasRef = React.useRef(null);

    React.useEffect(() => {
       const canvas = canvasRef.current;
       const engine = new BABYLON.Engine(canvas, true);

       const createScene = () => {
            const scene = new BABYLON.Scene(engine);

            const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7;
            const camera = new BABYLON.ArcRotateCamera("Camera", 0, 3.8, 200, BABYLON.Vector3.Zero(), scene);
            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.9;
            camera.attachControl(canvas, true);

            const skyOptions = {
                segments: 512,
                diameter: 3000,
                sideOrientation: BABYLON.Mesh.DOUBLESIDE
            }
            const skySphere = BABYLON.MeshBuilder.CreateSphere("sphere", skyOptions, scene);
            skySphere.material = new SkyMaterial('sky', scene);
            skySphere.material.inclination = 0.3;
            skySphere.material.turbidity = 15;
            skySphere.material.useSunPosition = true;
            skySphere.material.sunPosition = new BABYLON.Vector3(-90, 5, -50);

            BABYLON.SceneLoader.ImportMesh("", "./models/test/", "scene.gltf", scene);

           return scene
       }

       const scene = createScene();
       engine.runRenderLoop(() => {
           scene.render();
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
        <canvas
            ref={canvasRef}
            {...ops}
            {...props}
            className="room__canvas"
        ></canvas>
    );
}

export default Room