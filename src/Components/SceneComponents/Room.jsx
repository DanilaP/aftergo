import React from "react";
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import '@babylonjs/materials';
import FirstWindow from "../FirstWindow/firstWindow";

const Room = props => {
    const canvasRef = React.useRef(null);
    const [sceneState, setSceneState] = React.useState(false);
    const ops = {};
    ops.width = props.width ?? window.innerWidth;
    ops.height = props.height ?? window.innerHeight;
    const path = props.path ?? './models/test/';
    const name = props.name ?? 'scene.gltf';

    React.useEffect(() => {
       const canvas = canvasRef.current;
       const engine = new BABYLON.Engine(canvas, true);

       const createScene = () => {
            const scene = new BABYLON.Scene(engine);

            const light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
            light.intensity = 0.7;
            const camera = new BABYLON.ArcRotateCamera("Camera", 40, 3.8, 900, BABYLON.Vector3.Zero(), scene);
            camera.lowerBetaLimit = 0.1;
            camera.upperBetaLimit = (Math.PI / 2) * 0.9;
            camera.lowerRadiusLimit = 300;
            camera.upperRadiusLimit = 1000;
            camera.wheelPrecision = 2;
            camera.attachControl(canvas, true);

            scene.clearColor = new BABYLON.Color3(0.9, 0.9, 0.85);

            BABYLON.SceneLoader.ImportMesh("", path, name, scene, (meshes) => {
                meshes[0].position.y = -135;
            });

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
                className="room__canvas"
            ></canvas>
            {
                sceneState ? null : <FirstWindow/>
            }
        </>
    );
}

export default Room