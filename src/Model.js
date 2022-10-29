/*
Auto-generated mby: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/ns.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="camera" position={[10, 0, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <PerspectiveCamera fov={40} near={10} far={1000} />
      </group>
      <group name="sun" position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]}>
        <pointLight intensity={2} />
      </group>
      <group name="Scene">
      <group name="Empty" position={[-5.46, 30.57, -2.73]}>
          <mesh
            name="tazongigante"
            castShadow
            receiveShadow
            geometry={nodes.tazongigante.geometry}
            material={materials["Material.012"]}
            position={[0, 1.43, 0]}
          />
        </group>
        <group
          name="Empty001"
          position={[-5.9, 0.63, -13.94]}
          rotation={[-Math.PI, 0.1, -Math.PI]}
        >
          <group
            name="Curve016"
            position={[0, 2.26, 0]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              name="Curve017"
              castShadow
              receiveShadow
              geometry={nodes.Curve017.geometry}
              material={materials["SVGMat.005"]}
            />
            <mesh
              name="Curve017_1"
              castShadow
              receiveShadow
              geometry={nodes.Curve017_1.geometry}
              material={materials["SVGMat.001"]}
            />
            <mesh
              name="Curve017_2"
              castShadow
              receiveShadow
              geometry={nodes.Curve017_2.geometry}
              material={materials["SVGMat.002"]}
            />
            <mesh
              name="Curve017_3"
              castShadow
              receiveShadow
              geometry={nodes.Curve017_3.geometry}
              material={materials["SVGMat.003"]}
            />
            <mesh
              name="Curve017_4"
              castShadow
              receiveShadow
              geometry={nodes.Curve017_4.geometry}
              material={materials["SVGMat.004"]}
            />
            <mesh
              name="Curve017_5"
              castShadow
              receiveShadow
              geometry={nodes.Curve017_5.geometry}
              material={materials["SVGMat.006"]}
            />
          </group>
        </group>
        <mesh
          name="suelo"
          castShadow
          receiveShadow
          geometry={nodes.suelo.geometry}
          material={materials["Material.027"]}
          position={[-5.46, 0, -2.99]}
          rotation={[0, 0.99, 0]}
        />
        <group
          name="antena"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube009"
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            name="Cube009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube009_1.geometry}
            material={materials["Material.032"]}
          />
        </group>
        <group
          name="Bancos"
          position={[-7.36, 13.67, 3.84]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials["Material.011"]}
          />
        </group>
        <group
          name="casa"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube005"
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Cube005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_1.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            name="Cube005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_2.geometry}
            material={materials["Material.033"]}
          />
          <mesh
            name="Cube005_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_3.geometry}
            material={materials["Material.035"]}
          />
          <mesh
            name="Cube005_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube005_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <mesh
          name="batery"
          castShadow
          receiveShadow
          geometry={nodes.batery.geometry}
          material={materials["Material.032"]}
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="inversor"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube007"
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials["Material.032"]}
          />
          <mesh
            name="Cube007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube007_1.geometry}
            material={materials["Material.031"]}
          />
        </group>
        <mesh
          name="Power"
          castShadow
          receiveShadow
          geometry={nodes.Power.geometry}
          material={materials["Material.032"]}
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="Letrero"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            name="Cube014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube014_1.geometry}
            material={materials["Material.024"]}
          />
        </group>
        <group
          name="tazon1"
          position={[-7.43, 6.01, 10.14]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Circle006"
            castShadow
            receiveShadow
            geometry={nodes.Circle006.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Circle006_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle006_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="holog"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube006"
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials["Material.014"]}
          />
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials["Material.031"]}
          />
        </group>
        <group
          name="tazon2"
          position={[-13.26, 6.01, 10.14]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Circle008"
            castShadow
            receiveShadow
            geometry={nodes.Circle008.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Circle008_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle008_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="tazon3"
          position={[-1.59, 6.01, 10.14]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Circle007"
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Circle007_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <mesh
          name="casa001"
          castShadow
          receiveShadow
          geometry={nodes.casa001.geometry}
          material={materials["Material.018"]}
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Bancos001"
          castShadow
          receiveShadow
          geometry={nodes.Bancos001.geometry}
          material={materials["Material.019"]}
          position={[-7.43, 13.67, 6.77]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="pantallas"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube010"
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cube010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube010_1.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="darkdan"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube019"
            castShadow
            receiveShadow
            geometry={nodes.Cube019.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cube019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="poste"
          position={[-29.03, 7.8, 22.54]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cylinder002"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002.geometry}
            material={materials["Material.020"]}
          />
          <mesh
            name="Cylinder002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_1.geometry}
            material={materials["Material.006"]}
          />
          <mesh
            name="Cylinder002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_2.geometry}
            material={materials["Material.040"]}
          />
        </group>
        <mesh
          name="neon"
          castShadow
          receiveShadow
          geometry={nodes.neon.geometry}
          material={materials["Material.031"]}
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["Material.029"]}
          position={[-12.96, 21.91, 7.57]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="cable"
          castShadow
          receiveShadow
          geometry={nodes.cable.geometry}
          material={materials["Material.031"]}
          position={[4.08, 27.87, 7.91]}
          rotation={[Math.PI / 2, -0.3, Math.PI]}
        />
        <mesh
          name="Banderines"
          castShadow
          receiveShadow
          geometry={nodes.Banderines.geometry}
          material={materials["Material.016"]}
          position={[-5.46, 13.84, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.038"]}
          position={[4.08, 27.87, 7.91]}
          rotation={[Math.PI / 2, -0.3, Math.PI]}
        />
        <mesh
          name="mesa"
          castShadow
          receiveShadow
          geometry={nodes.mesa.geometry}
          material={materials["Material.036"]}
          position={[-5.46, 6.01, 9.92]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="puerta"
          castShadow
          receiveShadow
          geometry={nodes.puerta.geometry}
          material={materials["Material.036"]}
          position={[4.53, 6.01, 8.55]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="perol"
          castShadow
          receiveShadow
          geometry={nodes.perol.geometry}
          material={materials["Material.009"]}
          position={[6.48, 4.9, 6.3]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="mando"
          castShadow
          receiveShadow
          geometry={nodes.mando.geometry}
          material={materials["Material.037"]}
          position={[4.08, 27.87, 8.22]}
          rotation={[Math.PI / 2, -0.3, Math.PI]}
        />
        <mesh
          name="butons"
          castShadow
          receiveShadow
          geometry={nodes.butons.geometry}
          material={materials["Material.031"]}
          position={[4.08, 27.87, 7.99]}
          rotation={[Math.PI / 2, -0.3, Math.PI]}
        />
        <group
          name="Arcade"
          position={[-5.46, 13.67, -2.99]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube011"
            castShadow
            receiveShadow
            geometry={nodes.Cube011.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            name="Cube011_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_3.geometry}
            material={materials["Material.031"]}
          />
        </group>
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials["Material.030"]}
          position={[-12.96, 21.91, 7.61]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="Arcade001"
          position={[-5.46, 13.67, -10.94]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube027"
            castShadow
            receiveShadow
            geometry={nodes.Cube027.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube027_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_2.geometry}
            material={materials["Material.026"]}
          />
          <mesh
            name="Cube027_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_3.geometry}
            material={materials["Material.031"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/ns.glb");
