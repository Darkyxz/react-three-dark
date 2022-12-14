/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/darkdan.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Empty"
          position={[-6.7827878, 30.56546402, -3.96153164]}
          rotation={[0.00000711, 0, 0]}
        >
          <mesh
            name="tazongigante"
            castShadow
            receiveShadow
            geometry={nodes.tazongigante.geometry}
            material={materials.neonrose}
            position={[0, 1.42646849, 0]}
          />
        </group>
        <group
          name="Empty001"
          position={[-7.21915436, 0.62901402, -15.17048931]}
          rotation={[-Math.PI, 0.10343305, -Math.PI]}
        >
          <group
            name="Curve016"
            position={[0, 2.2570529, -0.00000372]}
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
          position={[-6.77974796, 0, 5.15288639]}
          rotation={[0, 0.9866971, 0]}
        />
        <group
          name="casa"
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube012"
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Cube012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials["Material.028"]}
          />
          <mesh
            name="Cube012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_2.geometry}
            material={materials["Material.033"]}
          />
        </group>
        <group
          name="antena"
          position={[-6.77974796, 13.67393875, -4.22391033]}
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
        <mesh
          name="batery"
          castShadow
          receiveShadow
          geometry={nodes.batery.geometry}
          material={materials["Material.032"]}
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="Bancos"
          position={[-8.68697643, 13.74510574, 2.608006]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube021"
            castShadow
            receiveShadow
            geometry={nodes.Cube021.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials["Material.011"]}
          />
        </group>
        <group
          name="inversor"
          position={[-6.77974796, 13.67393875, -4.22391033]}
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
            material={materials.neonblue}
          />
        </group>
        <mesh
          name="Power"
          castShadow
          receiveShadow
          geometry={nodes.Power.geometry}
          material={materials["Material.032"]}
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="Letrero"
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube022"
            castShadow
            receiveShadow
            geometry={nodes.Cube022.geometry}
            material={materials["Material.023"]}
          />
          <mesh
            name="Cube022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube022_1.geometry}
            material={materials["Material.024"]}
          />
        </group>
        <group
          name="tazon1"
          position={[-8.75717449, 5.61274242, 8.90450478]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Circle010"
            castShadow
            receiveShadow
            geometry={nodes.Circle010.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Circle010_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle010_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="holog"
          position={[-6.77974796, 13.67393875, -4.22391033]}
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
            material={materials.neonrose}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials.neonblue}
          />
        </group>
        <mesh
          name="palo"
          castShadow
          receiveShadow
          geometry={nodes.palo.geometry}
          material={materials["Material.018"]}
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="tazon3"
          position={[-2.91388607, 5.61274242, 8.90450478]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Circle012"
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Circle012_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="tazon2"
          position={[-14.58398724, 5.61274242, 8.90450478]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Circle011"
            castShadow
            receiveShadow
            geometry={nodes.Circle011.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Circle011_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle011_1.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <mesh
          name="mantel"
          castShadow
          receiveShadow
          geometry={nodes.mantel.geometry}
          material={materials["Material.019"]}
          position={[-8.75413418, 13.27688026, 5.53443432]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="pantallas"
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube025"
            castShadow
            receiveShadow
            geometry={nodes.Cube025.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cube025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="poste"
          position={[-30.35490227, 7.93576813, 21.30815506]}
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
            material={materials.Material}
          />
          <mesh
            name="Cylinder002_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_3.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            name="Cylinder002_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder002_4.geometry}
            material={materials["Material.002"]}
          />
        </group>
        <mesh
          name="Banderines"
          castShadow
          receiveShadow
          geometry={nodes.Banderines.geometry}
          material={materials["Material.016"]}
          position={[-6.77974796, 13.84499454, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Text002"
          castShadow
          receiveShadow
          geometry={nodes.Text002.geometry}
          material={materials["Material.029"]}
          position={[-14.28403473, 21.91089249, 6.34137678]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="mesa"
          castShadow
          receiveShadow
          geometry={nodes.mesa.geometry}
          material={materials["Material.036"]}
          position={[-6.78278732, 6.00980091, 8.68737125]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="puerta"
          castShadow
          receiveShadow
          geometry={nodes.puerta.geometry}
          material={materials["Material.036"]}
          position={[3.20379734, 6.01022243, 7.3154521]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="palos"
          castShadow
          receiveShadow
          geometry={nodes.palos.geometry}
          material={materials["Material.021"]}
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials["Material.009"]}
          position={[5.15872478, 4.90080547, 5.06414557]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="poste001"
          castShadow
          receiveShadow
          geometry={nodes.poste001.geometry}
          material={materials["Material.020"]}
          position={[-30.35490227, 7.93576813, 21.30815506]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials["Material.038"]}
          position={[2.76094532, 27.87062454, 6.67733812]}
          rotation={[Math.PI / 2, -0.30177227, Math.PI]}
        />
        <mesh
          name="Plane004"
          castShadow
          receiveShadow
          geometry={nodes.Plane004.geometry}
          material={materials["Material.037"]}
          position={[2.76094532, 27.87062454, 6.98900652]}
          rotation={[Math.PI / 2, -0.30177227, Math.PI]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["Material.013"]}
          position={[-6.77975082, 31.35136414, -52.57998276]}
          rotation={[Math.PI / 2, -1.6e-7, Math.PI]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials["Material.013"]}
          position={[41.91889191, 31.95441628, -4.09467697]}
          rotation={[Math.PI / 2, 6e-8, -Math.PI / 2]}
        />
        <mesh
          name="Text003"
          castShadow
          receiveShadow
          geometry={nodes.Text003.geometry}
          material={materials["Material.030"]}
          position={[-14.28403473, 21.91089249, 6.37742281]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="darkdan"
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube026"
            castShadow
            receiveShadow
            geometry={nodes.Cube026.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cube026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube026_1.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.neonblue}
          position={[2.76094532, 27.87062454, 6.75706148]}
          rotation={[Math.PI / 2, -0.30177227, Math.PI]}
        />
        <mesh
          name="neon"
          castShadow
          receiveShadow
          geometry={nodes.neon.geometry}
          material={materials.neonblue}
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        />
        <group
          name="Arcade"
          position={[-6.77974796, 13.67393875, -4.22391033]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube029"
            castShadow
            receiveShadow
            geometry={nodes.Cube029.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            name="Cube029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_2.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube029_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_3.geometry}
            material={materials["Material.026"]}
          />
        </group>
        <group
          name="Arcade001"
          position={[-6.77974844, 13.67393875, -12.17425632]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <mesh
            name="Cube031"
            castShadow
            receiveShadow
            geometry={nodes.Cube031.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Cube031_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube031_1.geometry}
            material={materials["Material.031"]}
          />
          <mesh
            name="Cube031_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube031_2.geometry}
            material={materials["Material.025"]}
          />
          <mesh
            name="Cube031_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube031_3.geometry}
            material={materials["Material.026"]}
          />
        </group>
        <mesh
          name="Plane006"
          castShadow
          receiveShadow
          geometry={nodes.Plane006.geometry}
          material={materials["Material.031"]}
          position={[2.76094532, 27.87062454, 6.67733812]}
          rotation={[Math.PI / 2, -0.30177227, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/darkdan.glb");
