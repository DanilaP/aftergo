import React from "react";
import * as BABYLON from "@babylonjs/core";
import "@babylonjs/loaders";
import "@babylonjs/materials";
import { SkyMaterial } from "@babylonjs/materials";
import { WaterMaterial } from "@babylonjs/materials";
import ContinueButton from "../FirstEnterComponents/ContinueButton";
import FirstSubtitleComponent from "../FirstEnterComponents/FirstSubtitleComponent";
import SecondSubtitleComponent from "../FirstEnterComponents/SecondSubtitleComponent";
import FirstEnterMenu from "../FirstEnterComponents/FirstEnterMenu";

const ops = {};
ops.width = window.innerWidth;
ops.height = window.innerHeight;

const Capsule = (props) => {
  const canvasRef = React.useRef(null);
  const [sub1State, setSub1State] = React.useState(true);
  const [sub2State, setSub2State] = React.useState(false);
  const [btnState, setBtnState] = React.useState(false);
  const [modalState, setModalState] = React.useState(false);
  const [menuState, setMenuState] = React.useState(false);
  const [count, setCount] = React.useState(0);

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
        sideOrientation: BABYLON.Mesh.DOUBLESIDE,
      };
      const skySphere = BABYLON.MeshBuilder.CreateSphere(
        "sphere",
        skyOptions,
        scene
      );
      skySphere.material = new SkyMaterial("sky", scene);
      //    skySphere.material.inclination = 0.3;
      //    skySphere.material.turbidity = 15;
      skySphere.material.inclination = 1.6;
      skySphere.material.turbidity = 18;
      skySphere.material.useSunPosition = true;
      //    skySphere.material.sunPosition = new BABYLON.Vector3(0, 5, -50);
      skySphere.material.sunPosition = new BABYLON.Vector3(0, 8, -50);

      const light = new BABYLON.SpotLight(
        "spotLight",
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(0, -1, 5),
        Math.PI / 2,
        10,
        scene
      );
      light.position = new BABYLON.Vector3(0, 4, -25);
      light.intensity = 300;
      light.diffuse = new BABYLON.Color3(0.93, 0.8, 0.46);
      light.specular = new BABYLON.Color3(1, 0.77, 0);

      const light2 = new BABYLON.SpotLight(
        "spotLight2",
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(40, 0, 25),
        Math.PI / 2,
        10,
        scene
      );
      light2.position = new BABYLON.Vector3(0, 1, -225);
      light2.intensity = 1000;
      light2.diffuse = new BABYLON.Color3(0.93, 0.8, 0.46);
      light2.specular = new BABYLON.Color3(1, 0.77, 0);

      const light3 = new BABYLON.SpotLight(
        "spotLight3",
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(-70, -1, 45),
        Math.PI / 2,
        10,
        scene
      );
      light3.position = new BABYLON.Vector3(0, 15, -125);
      light3.intensity = 800;
      light3.diffuse = new BABYLON.Color3(0.93, 0.8, 0.46);
      light3.specular = new BABYLON.Color3(1, 0.77, 0);

      const camera = new BABYLON.FreeCamera(
        "camera",
        new BABYLON.Vector3(0, 1.7, 0),
        scene
      );
      camera.attachControl(canvas, true);
      camera.invertRotation = true;
      camera.applyGravity = true;
      camera.checkCollisions = true;
      camera.ellipsoid = new BABYLON.Vector3(1, 1, 1);
      camera.minZ = 0.45;
      camera.speed = 0.3;
      camera.angularSensibility = 1900;
      camera.keysUp.push(87);
      camera.keysDown.push(83);
      camera.keysLeft.push(65);
      camera.keysRight.push(68);
      camera.rotation.set(0, Math.PI, 0);

      const envTex = BABYLON.CubeTexture.CreateFromPrefilteredData(
        "./textures/ev3.env",
        scene
      );
      envTex.rotationY = -40.22;
      scene.environmentIntensity = 0.2;
      scene.environmentTexture = envTex;
      scene.createDefaultSkybox(envTex, true);

      const shadowGenerator = new BABYLON.ShadowGenerator(2048, light);
      shadowGenerator.useBlurExponentialShadowMap = true;
      shadowGenerator.setDarkness(0.1);
      shadowGenerator.setTransparencyShadow(true);
      shadowGenerator.usePoissonSampling = true;
      const shadowMap = shadowGenerator.getShadowMap();

      const waterMaterial = new WaterMaterial(
        "waterMaterial",
        scene,
        new BABYLON.Vector2(512, 512)
      );
      waterMaterial.bumpTexture = new BABYLON.Texture(
        "./textures/waterbump.png",
        scene
      );
      waterMaterial.windForce = -5;
      waterMaterial.waveHeight = 0.05;
      waterMaterial.bumpHeight = 0.1;
      waterMaterial.waveLength = 0.1;
      waterMaterial.waveSpeed = 50.0;
      waterMaterial.colorBlendFactor = 0;
      waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
      waterMaterial.colorBlendFactor = 0;
      waterMaterial.mustDepthSortFacets = true;
      const waterMesh = BABYLON.Mesh.CreateGround(
        "waterMesh",
        512,
        512,
        32,
        scene,
        false
      );
      waterMesh.material = waterMaterial;
      waterMesh.renderingGroupId = 0;
      waterMesh.position.y = -3;
      waterMesh.onBeforeRenderObservable.add(() => {
        engine.setStencilMask(0x00);
        engine.setStencilFunction(BABYLON.Engine.NOTEQUAL);
        engine.setStencilFunctionReference(1);
      });
      waterMaterial.addToRenderList(skySphere);

      const nodeMat_room = new BABYLON.NodeMaterial("nodeMat_room", scene);
      nodeMat_room.loadAsync("./textures/cp1.json").then(() => {
        nodeMat_room.build(true);
      });

      const sphere = BABYLON.MeshBuilder.CreateSphere(
        "sphere",
        { diameter: 2, segments: 32 },
        scene
      );
      sphere.position.z = -30;
      sphere.position.y = 0.5;
      sphere.material = nodeMat_room;

      scene.activeCamera.onViewMatrixChangedObservable.add(() => {
        const distance = BABYLON.Vector3.Distance(
          scene.activeCamera.position,
          sphere.position
        );
        distance < 10 ? setModalState(true) : setModalState(false);
      });

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "room.glb",
        scene,
        (meshes) => {
          scene.animationGroups.forEach((a) => {
            a.loopAnimation = false;
            a.speedRatio = 0.3;
          });
          meshes[0].receiveShadows = true;
          meshes.forEach((mesh) => {
            mesh.receiveShadows = true;
            shadowMap.renderList.push(mesh);
            waterMaterial.addToRenderList(mesh);
            if (mesh.material) {
              mesh.material = nodeMat_room;
            }
          });
        }
      );

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "collider.glb",
        scene,
        (meshes) => {
          meshes.map((mesh) => {
            mesh.checkCollisions = true;
            mesh.isVisible = false;
          });
        }
      );

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "LOGO.glb",
        scene,
        (meshes) => {
          //    shadowGenerator.addShadowCaster(meshes[0]);
          shadowMap.renderList.push(meshes[0]);
          meshes[0].receiveShadows = true;
        }
      );
      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "info.glb",
        scene,
        (meshes) => {
          //    shadowGenerator.addShadowCaster(meshes[0]);
          shadowMap.renderList.push(meshes[0]);
          meshes[0].receiveShadows = true;
          meshes.forEach((mesh) => {
            mesh.checkCollisions = true;
          });
        }
      );

      const nodeMat_ground = new BABYLON.NodeMaterial("nodeMat_ground", scene);
      nodeMat_ground.loadAsync("./textures/ground1.json").then(() => {
        nodeMat_ground.build(true);
      });

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "ground.glb",
        scene,
        (meshes) => {
          meshes[0].receiveShadows = true;
          meshes.forEach((mesh) => {
            mesh.receiveShadows = true;
            if (mesh.material) {
              mesh.material = nodeMat_ground;
            }
          });
        }
      );

      BABYLON.SceneLoader.ImportMesh("", "./models/", "TV.glb", scene);

      const nodeMat_walls = new BABYLON.NodeMaterial("nodeMat_walls", scene);
      nodeMat_walls.loadAsync("./textures/nm12.json").then(() => {
        nodeMat_walls.build(true);
      });

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "walls2.glb",
        scene,
        (meshes) => {
          meshes[0].receiveShadows = true;
          meshes.forEach((mesh) => {
            mesh.receiveShadows = true;
            shadowMap.renderList.push(mesh);
            if (mesh.material) {
              mesh.material = nodeMat_walls;
            }
          });
        }
      );

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "Grass_type_1.glb",
        scene,
        (meshes) => {
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
            const instance1 = blade.createInstance("blade" + index);
            instance1.position.x = randomIntFromInterval(-3.9, 3);
            instance1.position.z = randomIntFromInterval(-13, 10);
            instance1.scaling.set(0.04, 0.04, 0.04);
            instance1.rotate(
              BABYLON.Axis.Y,
              Math.random() * Math.PI * 2,
              BABYLON.Space.WORLD
            );
            instance1.alwaysSelectAsActiveMesh = true;
            //    shadowGenerator.addShadowCaster(instance1);
            shadowMap.renderList.push(instance1);
          }
        }
      );

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "Grass_type_2.glb",
        scene,
        (meshes) => {
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
            const instance2 = blade.createInstance("blade" + index);
            instance2.position.x = randomIntFromInterval(-3.3, 3.3);
            instance2.position.z = randomIntFromInterval(-13, 10);
            instance2.scaling.set(0.05, 0.05, 0.05);
            instance2.rotate(
              BABYLON.Axis.Y,
              Math.random() * Math.PI * 2,
              BABYLON.Space.WORLD
            );
            instance2.alwaysSelectAsActiveMesh = true;
            //    shadowGenerator.addShadowCaster(instance2);
            shadowMap.renderList.push(instance2);
          }
        }
      );

      BABYLON.SceneLoader.ImportMesh(
        "",
        "./models/",
        "Fern.glb",
        scene,
        (meshes) => {
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
            const instance3 = blade.createInstance("blade" + index);
            instance3.position.x = randomIntFromInterval(-2.8, 2.8);
            instance3.position.z = randomIntFromInterval(-13, 10);
            instance3.scaling.set(0.04, 0.04, 0.04);
            instance3.rotate(
              BABYLON.Axis.Y,
              Math.random() * Math.PI * 2,
              BABYLON.Space.WORLD
            );
            instance3.alwaysSelectAsActiveMesh = true;
            //    shadowGenerator.addShadowCaster(instance3);
            shadowMap.renderList.push(instance3);
          }
        }
      );

      return scene;
    };

    const scene = createScene();
    const resize = () => {
      engine.resize();
    };

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", resize);

    return () => {
      engine.dispose();

      if (window) {
        window.removeEventListener("resize", resize);
      }
    };
  }, []);

  const clickHandle = () => {
    setCount(count + 1);
    switch (count) {
      case 0:
        return setSub1State(false) & setSub2State(true);
      case 1:
        return setSub2State(false) & setBtnState(true);
      case 2:
        return setBtnState(false) & setMenuState(true);
      default:
        return null;
    }
  };

  return (
    <>
      <canvas ref={canvasRef} {...ops} {...props}></canvas>
      <div
        style={{ visibility: modalState ? "visible" : "hidden" }}
        onClick={clickHandle}
      >
        {sub1State ? <FirstSubtitleComponent /> : null}
        {sub2State ? <SecondSubtitleComponent /> : null}
        {btnState ? <ContinueButton /> : null}
        {menuState ? <FirstEnterMenu /> : null}
      </div>
    </>
  );
};

export default Capsule;
