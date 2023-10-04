import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group } from "three";
import { GLTF } from "three-stdlib";
import { gsap } from "gsap";

type GLTFResult = GLTF & {
  nodes: {
    Curve001: THREE.Mesh;
    Curve002: THREE.Mesh;
    Curve003: THREE.Mesh;
    Curve004: THREE.Mesh;
    Curve005: THREE.Mesh;
    Curve006: THREE.Mesh;
    Curve007: THREE.Mesh;
    Curve008: THREE.Mesh;
    Curve009: THREE.Mesh;
    Curve010: THREE.Mesh;
    Curve011: THREE.Mesh;
    Curve012: THREE.Mesh;
    Curve013: THREE.Mesh;
    Curve014: THREE.Mesh;
    Curve015: THREE.Mesh;
    Curve016: THREE.Mesh;
    Curve017: THREE.Mesh;
    Curve018: THREE.Mesh;
    Curve019: THREE.Mesh;
    Curve020: THREE.Mesh;
    Curve021: THREE.Mesh;
    Curve022: THREE.Mesh;
    Curve023: THREE.Mesh;
    Curve024: THREE.Mesh;
    Curve025: THREE.Mesh;
    Curve026: THREE.Mesh;
    Curve027: THREE.Mesh;
    Curve028: THREE.Mesh;
    Curve029: THREE.Mesh;
    Curve030: THREE.Mesh;
    Curve031: THREE.Mesh;
    Curve032: THREE.Mesh;
    Curve033: THREE.Mesh;
    Curve034: THREE.Mesh;
    Curve035: THREE.Mesh;
    Curve036: THREE.Mesh;
    Curve037: THREE.Mesh;
    Curve038: THREE.Mesh;
    Curve039: THREE.Mesh;
    Curve040: THREE.Mesh;
    Curve041: THREE.Mesh;
    Curve042: THREE.Mesh;
    Curve043: THREE.Mesh;
    Curve044: THREE.Mesh;
    Curve045: THREE.Mesh;
    Curve046: THREE.Mesh;
    Curve047: THREE.Mesh;
    Curve048: THREE.Mesh;
    Curve049: THREE.Mesh;
    Curve050: THREE.Mesh;
    Curve051: THREE.Mesh;
    Curve052: THREE.Mesh;
    Curve053: THREE.Mesh;
    Curve054: THREE.Mesh;
    Curve055: THREE.Mesh;
    Curve056: THREE.Mesh;
    Curve057: THREE.Mesh;
    Curve058: THREE.Mesh;
    Curve059: THREE.Mesh;
    Curve060: THREE.Mesh;
    Curve061: THREE.Mesh;
    Curve062: THREE.Mesh;
    Curve063: THREE.Mesh;
    Curve064: THREE.Mesh;
    Curve065: THREE.Mesh;
    Curve066: THREE.Mesh;
    Curve067: THREE.Mesh;
    Curve068: THREE.Mesh;
    Curve069: THREE.Mesh;
    Curve070: THREE.Mesh;
    Curve071: THREE.Mesh;
    Curve072: THREE.Mesh;
    Curve073: THREE.Mesh;
    Curve074: THREE.Mesh;
    Curve075: THREE.Mesh;
    Curve076: THREE.Mesh;
    Curve077: THREE.Mesh;
    Curve078: THREE.Mesh;
    Curve079: THREE.Mesh;
    Curve080: THREE.Mesh;
    Curve081: THREE.Mesh;
    Curve082: THREE.Mesh;
    Curve083: THREE.Mesh;
    Curve084: THREE.Mesh;
    Curve085: THREE.Mesh;
    Curve086: THREE.Mesh;
    Curve087: THREE.Mesh;
    Curve088: THREE.Mesh;
    Curve089: THREE.Mesh;
    Curve090: THREE.Mesh;
    Curve091: THREE.Mesh;
    Curve092: THREE.Mesh;
    Curve093: THREE.Mesh;
    Curve094: THREE.Mesh;
    Curve095: THREE.Mesh;
    Curve096: THREE.Mesh;
    Curve097: THREE.Mesh;
    Curve098: THREE.Mesh;
    Curve099: THREE.Mesh;
    Curve100: THREE.Mesh;
    Curve101: THREE.Mesh;
    Curve102: THREE.Mesh;
    Curve103: THREE.Mesh;
    Curve104: THREE.Mesh;
    Curve105: THREE.Mesh;
    Curve106: THREE.Mesh;
    Curve107: THREE.Mesh;
    Curve108: THREE.Mesh;
    Curve109: THREE.Mesh;
    Curve110: THREE.Mesh;
    Curve111: THREE.Mesh;
    Curve112: THREE.Mesh;
    Curve113: THREE.Mesh;
    Curve114: THREE.Mesh;
    Curve115: THREE.Mesh;
    Curve116: THREE.Mesh;
    Curve117: THREE.Mesh;
    Curve118: THREE.Mesh;
    Curve119: THREE.Mesh;
    Curve120: THREE.Mesh;
    Curve121: THREE.Mesh;
    Curve122: THREE.Mesh;
    Curve123: THREE.Mesh;
    Curve124: THREE.Mesh;
    Curve125: THREE.Mesh;
    Curve126: THREE.Mesh;
    Curve127: THREE.Mesh;
    Curve128: THREE.Mesh;
    Curve129: THREE.Mesh;
    Curve130: THREE.Mesh;
    Curve131: THREE.Mesh;
    Curve132: THREE.Mesh;
    Curve133: THREE.Mesh;
    Curve134: THREE.Mesh;
    Curve135: THREE.Mesh;
    Curve136: THREE.Mesh;
    Curve137: THREE.Mesh;
    Curve138: THREE.Mesh;
    Curve139: THREE.Mesh;
    Curve140: THREE.Mesh;
    Curve141: THREE.Mesh;
    Curve142: THREE.Mesh;
    Curve143: THREE.Mesh;
    Curve144: THREE.Mesh;
    Curve145: THREE.Mesh;
    Curve146: THREE.Mesh;
    Curve147: THREE.Mesh;
    Curve148: THREE.Mesh;
    Curve149: THREE.Mesh;
    Curve150: THREE.Mesh;
    Curve151: THREE.Mesh;
    Curve152: THREE.Mesh;
    Curve153: THREE.Mesh;
    Curve154: THREE.Mesh;
    Curve155: THREE.Mesh;
    Curve156: THREE.Mesh;
    Curve157: THREE.Mesh;
    Curve158: THREE.Mesh;
    Curve159: THREE.Mesh;
    Curve160: THREE.Mesh;
    Curve161: THREE.Mesh;
    Curve162: THREE.Mesh;
    Curve163: THREE.Mesh;
    Curve164: THREE.Mesh;
    Curve165: THREE.Mesh;
    Curve166: THREE.Mesh;
    Curve167: THREE.Mesh;
    Curve168: THREE.Mesh;
    Curve169: THREE.Mesh;
    Curve170: THREE.Mesh;
    Curve171: THREE.Mesh;
    Curve172: THREE.Mesh;
    Curve173: THREE.Mesh;
    Curve174: THREE.Mesh;
    Curve175: THREE.Mesh;
    Curve176: THREE.Mesh;
    Curve177: THREE.Mesh;
    Curve178: THREE.Mesh;
    Curve179: THREE.Mesh;
    Curve180: THREE.Mesh;
    Curve181: THREE.Mesh;
    Curve182: THREE.Mesh;
    Curve183: THREE.Mesh;
    Curve184: THREE.Mesh;
    Curve185: THREE.Mesh;
    Curve186: THREE.Mesh;
    Curve187: THREE.Mesh;
    Curve188: THREE.Mesh;
    Curve189: THREE.Mesh;
    Curve190: THREE.Mesh;
    Curve191: THREE.Mesh;
    Curve192: THREE.Mesh;
    Curve193: THREE.Mesh;
    Curve194: THREE.Mesh;
    Curve195: THREE.Mesh;
    Curve196: THREE.Mesh;
    Curve197: THREE.Mesh;
    Curve198: THREE.Mesh;
    Curve199: THREE.Mesh;
    Curve200: THREE.Mesh;
    Curve201: THREE.Mesh;
    Curve202: THREE.Mesh;
    Curve203: THREE.Mesh;
    Curve204: THREE.Mesh;
    Curve205: THREE.Mesh;
    Curve206: THREE.Mesh;
    Curve207: THREE.Mesh;
    Curve208: THREE.Mesh;
    Curve209: THREE.Mesh;
    Curve210: THREE.Mesh;
    Curve211: THREE.Mesh;
    Curve212: THREE.Mesh;
    Curve213: THREE.Mesh;
    Curve214: THREE.Mesh;
    Curve215: THREE.Mesh;
    Curve216: THREE.Mesh;
    Curve217: THREE.Mesh;
    Curve218: THREE.Mesh;
    Curve219: THREE.Mesh;
    Curve220: THREE.Mesh;
    Curve221: THREE.Mesh;
    Curve222: THREE.Mesh;
    Curve223: THREE.Mesh;
    Curve224: THREE.Mesh;
    Curve225: THREE.Mesh;
    Curve226: THREE.Mesh;
    Curve227: THREE.Mesh;
    Curve228: THREE.Mesh;
    Curve229: THREE.Mesh;
    Curve230: THREE.Mesh;
    Curve231: THREE.Mesh;
    Curve232: THREE.Mesh;
    Curve233: THREE.Mesh;
    Curve234: THREE.Mesh;
    Curve235: THREE.Mesh;
    Curve236: THREE.Mesh;
    Curve237: THREE.Mesh;
    Curve238: THREE.Mesh;
    Curve239: THREE.Mesh;
    Curve240: THREE.Mesh;
    Curve241: THREE.Mesh;
    Curve242: THREE.Mesh;
    Curve243: THREE.Mesh;
    Curve244: THREE.Mesh;
    Curve245: THREE.Mesh;
    Curve246: THREE.Mesh;
    Curve247: THREE.Mesh;
    Curve248: THREE.Mesh;
    Curve249: THREE.Mesh;
    Curve250: THREE.Mesh;
    Curve251: THREE.Mesh;
    Curve252: THREE.Mesh;
    Curve253: THREE.Mesh;
    Curve254: THREE.Mesh;
    Curve255: THREE.Mesh;
    Curve256: THREE.Mesh;
    Curve257: THREE.Mesh;
    Curve258: THREE.Mesh;
    Curve259: THREE.Mesh;
    Curve260: THREE.Mesh;
    Curve261: THREE.Mesh;
    Curve262: THREE.Mesh;
    Curve263: THREE.Mesh;
    Curve264: THREE.Mesh;
    Curve265: THREE.Mesh;
    Curve266: THREE.Mesh;
    Curve267: THREE.Mesh;
    Curve268: THREE.Mesh;
    Curve269: THREE.Mesh;
    Curve270: THREE.Mesh;
    Curve271: THREE.Mesh;
    Curve272: THREE.Mesh;
    Curve273: THREE.Mesh;
    Curve274: THREE.Mesh;
    Curve275: THREE.Mesh;
    Curve276: THREE.Mesh;
    Curve277: THREE.Mesh;
    Curve278: THREE.Mesh;
    Curve279: THREE.Mesh;
    Curve280: THREE.Mesh;
    Curve281: THREE.Mesh;
    Curve282: THREE.Mesh;
    Curve283: THREE.Mesh;
    Curve284: THREE.Mesh;
    Curve285: THREE.Mesh;
    Curve286: THREE.Mesh;
    Curve287: THREE.Mesh;
    Curve288: THREE.Mesh;
    Curve289: THREE.Mesh;
    Curve290: THREE.Mesh;
    Curve291: THREE.Mesh;
    Curve292: THREE.Mesh;
    Curve293: THREE.Mesh;
    Curve294: THREE.Mesh;
    Curve295: THREE.Mesh;
    Curve296: THREE.Mesh;
    Curve297: THREE.Mesh;
    Curve298: THREE.Mesh;
    Curve299: THREE.Mesh;
    Curve300: THREE.Mesh;
    Curve301: THREE.Mesh;
    Curve302: THREE.Mesh;
    Curve303: THREE.Mesh;
    Curve304: THREE.Mesh;
    Curve305: THREE.Mesh;
    Curve306: THREE.Mesh;
    Curve307: THREE.Mesh;
    Curve311: THREE.Mesh;
    Curve315: THREE.Mesh;
    Curve308: THREE.Mesh;
    Curve309: THREE.Mesh;
    Curve310: THREE.Mesh;
    Curve312: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

export function Qr(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/qr-improved.glb") as GLTFResult;
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    if (groupRef.current) {
      const positions = groupRef.current.children.map((child) => ({
        x: child.position.x,
        y: child.position.y,
        z: child.position.z,
      }));
      groupRef.current.children.forEach((child) => {
        child.position.x = Math.random() * 5 - 2.5;
        child.position.y = Math.random() * 5 - 2.5;
        child.position.z = Math.random() * 5 - 2.5;
      });

      setTimeout(() => {
        groupRef.current!.children.forEach((child, index) => {
          gsap.to(child.position, {
            duration: 20,
            x: positions[index].x,
            y: positions[index].y,
            z: positions[index].z,
            ease: "power1.inOut",
          });
        });
      }, 500);
    }
  }, []);

  return (
    <>
      <pointLight position={[0, 0.5, 0.5]} intensity={100} />
      <group {...props} dispose={null} ref={groupRef} scale={[3.5, 3.5, 3.5]}>
        <mesh
          geometry={nodes.Curve001.geometry}
          material={materials.Material}
          position={[-0.248, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve002.geometry}
          material={materials.Material}
          position={[-0.199, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve003.geometry}
          material={materials.Material}
          position={[-0.101, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve004.geometry}
          material={materials.Material}
          position={[0.046, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve005.geometry}
          material={materials.Material}
          position={[0.144, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve006.geometry}
          material={materials.Material}
          position={[0.193, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve007.geometry}
          material={materials.Material}
          position={[0.242, 0.657, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve008.geometry}
          material={materials.Material}
          position={[-0.248, 0.608, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve009.geometry}
          material={materials.Material}
          position={[-0.15, 0.608, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve010.geometry}
          material={materials.Material}
          position={[0.046, 0.608, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve011.geometry}
          material={materials.Material}
          position={[0.095, 0.608, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve012.geometry}
          material={materials.Material}
          position={[0.193, 0.608, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve013.geometry}
          material={materials.Material}
          position={[0.292, 0.608, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve014.geometry}
          material={materials.Material}
          position={[-0.101, 0.559, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve015.geometry}
          material={materials.Material}
          position={[0.095, 0.559, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve016.geometry}
          material={materials.Material}
          position={[0.144, 0.559, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve017.geometry}
          material={materials.Material}
          position={[0.193, 0.559, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve018.geometry}
          material={materials.Material}
          position={[0.292, 0.559, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve019.geometry}
          material={materials.Material}
          position={[-0.15, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve020.geometry}
          material={materials.Material}
          position={[-0.101, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve021.geometry}
          material={materials.Material}
          position={[0.046, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve022.geometry}
          material={materials.Material}
          position={[0.095, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve023.geometry}
          material={materials.Material}
          position={[0.193, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve024.geometry}
          material={materials.Material}
          position={[0.242, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve025.geometry}
          material={materials.Material}
          position={[-0.15, 0.461, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve026.geometry}
          material={materials.Material}
          position={[-0.003, 0.461, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve027.geometry}
          material={materials.Material}
          position={[0.046, 0.461, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve028.geometry}
          material={materials.Material}
          position={[0.095, 0.461, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve029.geometry}
          material={materials.Material}
          position={[-0.297, 0.412, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve030.geometry}
          material={materials.Material}
          position={[-0.199, 0.412, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve031.geometry}
          material={materials.Material}
          position={[0.046, 0.412, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve032.geometry}
          material={materials.Material}
          position={[0.095, 0.412, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve033.geometry}
          material={materials.Material}
          position={[0.193, 0.412, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve034.geometry}
          material={materials.Material}
          position={[0.242, 0.412, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve035.geometry}
          material={materials.Material}
          position={[-0.297, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve036.geometry}
          material={materials.Material}
          position={[-0.199, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve037.geometry}
          material={materials.Material}
          position={[-0.101, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve038.geometry}
          material={materials.Material}
          position={[-0.003, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve039.geometry}
          material={materials.Material}
          position={[0.095, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve040.geometry}
          material={materials.Material}
          position={[0.193, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve041.geometry}
          material={materials.Material}
          position={[0.292, 0.363, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve042.geometry}
          material={materials.Material}
          position={[-0.248, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve043.geometry}
          material={materials.Material}
          position={[-0.15, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve044.geometry}
          material={materials.Material}
          position={[-0.101, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve045.geometry}
          material={materials.Material}
          position={[-0.003, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve046.geometry}
          material={materials.Material}
          position={[0.046, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve047.geometry}
          material={materials.Material}
          position={[0.095, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve048.geometry}
          material={materials.Material}
          position={[0.144, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve049.geometry}
          material={materials.Material}
          position={[0.242, 0.314, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve050.geometry}
          material={materials.Material}
          position={[-0.69, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve051.geometry}
          material={materials.Material}
          position={[-0.543, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve052.geometry}
          material={materials.Material}
          position={[-0.445, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve053.geometry}
          material={materials.Material}
          position={[-0.396, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve054.geometry}
          material={materials.Material}
          position={[-0.297, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve055.geometry}
          material={materials.Material}
          position={[-0.248, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve056.geometry}
          material={materials.Material}
          position={[-0.15, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve057.geometry}
          material={materials.Material}
          position={[-0.101, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve058.geometry}
          material={materials.Material}
          position={[0.095, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve059.geometry}
          material={materials.Material}
          position={[0.292, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve060.geometry}
          material={materials.Material}
          position={[0.341, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve061.geometry}
          material={materials.Material}
          position={[0.439, 0.265, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve062.geometry}
          material={materials.Material}
          position={[-0.69, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve063.geometry}
          material={materials.Material}
          position={[-0.641, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve064.geometry}
          material={materials.Material}
          position={[-0.592, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve065.geometry}
          material={materials.Material}
          position={[-0.543, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve066.geometry}
          material={materials.Material}
          position={[-0.445, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve067.geometry}
          material={materials.Material}
          position={[-0.347, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve068.geometry}
          material={materials.Material}
          position={[-0.297, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve069.geometry}
          material={materials.Material}
          position={[-0.248, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve070.geometry}
          material={materials.Material}
          position={[-0.101, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve071.geometry}
          material={materials.Material}
          position={[0.095, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve072.geometry}
          material={materials.Material}
          position={[0.144, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve073.geometry}
          material={materials.Material}
          position={[0.292, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve074.geometry}
          material={materials.Material}
          position={[0.341, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve075.geometry}
          material={materials.Material}
          position={[0.39, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve076.geometry}
          material={materials.Material}
          position={[0.439, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve077.geometry}
          material={materials.Material}
          position={[0.537, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve078.geometry}
          material={materials.Material}
          position={[0.684, 0.216, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve079.geometry}
          material={materials.Material}
          position={[-0.69, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve080.geometry}
          material={materials.Material}
          position={[-0.543, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve081.geometry}
          material={materials.Material}
          position={[-0.494, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve082.geometry}
          material={materials.Material}
          position={[-0.396, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve083.geometry}
          material={materials.Material}
          position={[-0.297, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve084.geometry}
          material={materials.Material}
          position={[-0.199, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve085.geometry}
          material={materials.Material}
          position={[-0.15, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve086.geometry}
          material={materials.Material}
          position={[-0.101, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve087.geometry}
          material={materials.Material}
          position={[0.193, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve088.geometry}
          material={materials.Material}
          position={[0.242, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve089.geometry}
          material={materials.Material}
          position={[0.341, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve090.geometry}
          material={materials.Material}
          position={[0.39, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve091.geometry}
          material={materials.Material}
          position={[0.439, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve092.geometry}
          material={materials.Material}
          position={[0.488, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve093.geometry}
          material={materials.Material}
          position={[0.537, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve094.geometry}
          material={materials.Material}
          position={[0.586, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve095.geometry}
          material={materials.Material}
          position={[0.635, 0.167, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve096.geometry}
          material={materials.Material}
          position={[-0.641, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve097.geometry}
          material={materials.Material}
          position={[-0.592, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve098.geometry}
          material={materials.Material}
          position={[-0.543, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve099.geometry}
          material={materials.Material}
          position={[-0.494, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve100.geometry}
          material={materials.Material}
          position={[-0.445, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve101.geometry}
          material={materials.Material}
          position={[-0.297, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve102.geometry}
          material={materials.Material}
          position={[-0.199, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve103.geometry}
          material={materials.Material}
          position={[-0.003, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve104.geometry}
          material={materials.Material}
          position={[0.095, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve105.geometry}
          material={materials.Material}
          position={[0.193, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve106.geometry}
          material={materials.Material}
          position={[0.242, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve107.geometry}
          material={materials.Material}
          position={[0.488, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve108.geometry}
          material={materials.Material}
          position={[0.586, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve109.geometry}
          material={materials.Material}
          position={[0.635, 0.117, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve110.geometry}
          material={materials.Material}
          position={[-0.641, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve111.geometry}
          material={materials.Material}
          position={[-0.592, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve112.geometry}
          material={materials.Material}
          position={[-0.543, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve113.geometry}
          material={materials.Material}
          position={[-0.445, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve114.geometry}
          material={materials.Material}
          position={[-0.396, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve115.geometry}
          material={materials.Material}
          position={[-0.297, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve116.geometry}
          material={materials.Material}
          position={[-0.248, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve117.geometry}
          material={materials.Material}
          position={[0.046, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve118.geometry}
          material={materials.Material}
          position={[0.095, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve119.geometry}
          material={materials.Material}
          position={[0.144, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve120.geometry}
          material={materials.Material}
          position={[0.292, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve121.geometry}
          material={materials.Material}
          position={[0.341, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve122.geometry}
          material={materials.Material}
          position={[0.39, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve123.geometry}
          material={materials.Material}
          position={[0.439, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve124.geometry}
          material={materials.Material}
          position={[0.537, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve125.geometry}
          material={materials.Material}
          position={[0.635, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve126.geometry}
          material={materials.Material}
          position={[0.684, 0.068, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve127.geometry}
          material={materials.Material}
          position={[-0.69, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve128.geometry}
          material={materials.Material}
          position={[-0.641, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve129.geometry}
          material={materials.Material}
          position={[-0.543, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve130.geometry}
          material={materials.Material}
          position={[-0.494, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve131.geometry}
          material={materials.Material}
          position={[-0.347, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve132.geometry}
          material={materials.Material}
          position={[-0.248, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve133.geometry}
          material={materials.Material}
          position={[-0.199, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve134.geometry}
          material={materials.Material}
          position={[-0.101, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve135.geometry}
          material={materials.Material}
          position={[0.095, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve136.geometry}
          material={materials.Material}
          position={[0.144, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve137.geometry}
          material={materials.Material}
          position={[0.193, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve138.geometry}
          material={materials.Material}
          position={[0.242, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve139.geometry}
          material={materials.Material}
          position={[0.292, 0.019, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve140.geometry}
          material={materials.Material}
          position={[-0.543, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve141.geometry}
          material={materials.Material}
          position={[-0.445, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve142.geometry}
          material={materials.Material}
          position={[-0.396, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve143.geometry}
          material={materials.Material}
          position={[-0.101, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve144.geometry}
          material={materials.Material}
          position={[0.095, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve145.geometry}
          material={materials.Material}
          position={[0.144, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve146.geometry}
          material={materials.Material}
          position={[0.39, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve147.geometry}
          material={materials.Material}
          position={[0.537, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve148.geometry}
          material={materials.Material}
          position={[0.586, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve149.geometry}
          material={materials.Material}
          position={[0.635, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve150.geometry}
          material={materials.Material}
          position={[0.684, -0.03, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve151.geometry}
          material={materials.Material}
          position={[-0.641, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve152.geometry}
          material={materials.Material}
          position={[-0.543, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve153.geometry}
          material={materials.Material}
          position={[-0.445, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve154.geometry}
          material={materials.Material}
          position={[-0.347, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve155.geometry}
          material={materials.Material}
          position={[-0.248, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve156.geometry}
          material={materials.Material}
          position={[-0.15, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve157.geometry}
          material={materials.Material}
          position={[-0.052, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve158.geometry}
          material={materials.Material}
          position={[-0.003, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve159.geometry}
          material={materials.Material}
          position={[0.144, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve160.geometry}
          material={materials.Material}
          position={[0.341, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve161.geometry}
          material={materials.Material}
          position={[0.39, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve162.geometry}
          material={materials.Material}
          position={[0.439, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve163.geometry}
          material={materials.Material}
          position={[0.537, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve164.geometry}
          material={materials.Material}
          position={[0.635, -0.079, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve165.geometry}
          material={materials.Material}
          position={[-0.494, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve166.geometry}
          material={materials.Material}
          position={[-0.396, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve167.geometry}
          material={materials.Material}
          position={[-0.101, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve168.geometry}
          material={materials.Material}
          position={[-0.052, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve169.geometry}
          material={materials.Material}
          position={[-0.003, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve170.geometry}
          material={materials.Material}
          position={[0.144, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve171.geometry}
          material={materials.Material}
          position={[0.242, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve172.geometry}
          material={materials.Material}
          position={[0.635, -0.128, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve173.geometry}
          material={materials.Material}
          position={[-0.641, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve174.geometry}
          material={materials.Material}
          position={[-0.543, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve175.geometry}
          material={materials.Material}
          position={[-0.347, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve176.geometry}
          material={materials.Material}
          position={[0.095, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve177.geometry}
          material={materials.Material}
          position={[0.144, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve178.geometry}
          material={materials.Material}
          position={[0.39, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve179.geometry}
          material={materials.Material}
          position={[0.439, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve180.geometry}
          material={materials.Material}
          position={[0.537, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve181.geometry}
          material={materials.Material}
          position={[0.684, -0.177, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve182.geometry}
          material={materials.Material}
          position={[-0.69, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve183.geometry}
          material={materials.Material}
          position={[-0.592, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve184.geometry}
          material={materials.Material}
          position={[-0.543, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve185.geometry}
          material={materials.Material}
          position={[-0.445, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve186.geometry}
          material={materials.Material}
          position={[-0.396, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve187.geometry}
          material={materials.Material}
          position={[-0.199, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve188.geometry}
          material={materials.Material}
          position={[-0.052, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve189.geometry}
          material={materials.Material}
          position={[0.193, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve190.geometry}
          material={materials.Material}
          position={[0.292, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve191.geometry}
          material={materials.Material}
          position={[0.39, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve192.geometry}
          material={materials.Material}
          position={[0.635, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve193.geometry}
          material={materials.Material}
          position={[0.684, -0.226, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve194.geometry}
          material={materials.Material}
          position={[-0.543, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve195.geometry}
          material={materials.Material}
          position={[-0.494, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve196.geometry}
          material={materials.Material}
          position={[-0.297, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve197.geometry}
          material={materials.Material}
          position={[-0.15, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve198.geometry}
          material={materials.Material}
          position={[-0.101, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve199.geometry}
          material={materials.Material}
          position={[-0.052, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve200.geometry}
          material={materials.Material}
          position={[0.046, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve201.geometry}
          material={materials.Material}
          position={[0.144, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve202.geometry}
          material={materials.Material}
          position={[0.193, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve203.geometry}
          material={materials.Material}
          position={[0.488, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve204.geometry}
          material={materials.Material}
          position={[0.635, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve205.geometry}
          material={materials.Material}
          position={[0.684, -0.275, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve206.geometry}
          material={materials.Material}
          position={[-0.69, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve207.geometry}
          material={materials.Material}
          position={[-0.543, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve208.geometry}
          material={materials.Material}
          position={[-0.396, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve209.geometry}
          material={materials.Material}
          position={[-0.248, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve210.geometry}
          material={materials.Material}
          position={[-0.199, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve211.geometry}
          material={materials.Material}
          position={[-0.101, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve212.geometry}
          material={materials.Material}
          position={[-0.003, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve213.geometry}
          material={materials.Material}
          position={[0.095, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve214.geometry}
          material={materials.Material}
          position={[0.292, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve215.geometry}
          material={materials.Material}
          position={[0.341, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve216.geometry}
          material={materials.Material}
          position={[0.39, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve217.geometry}
          material={materials.Material}
          position={[0.439, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve218.geometry}
          material={materials.Material}
          position={[0.488, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve219.geometry}
          material={materials.Material}
          position={[0.586, -0.324, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve220.geometry}
          material={materials.Material}
          position={[-0.297, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve221.geometry}
          material={materials.Material}
          position={[-0.248, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve222.geometry}
          material={materials.Material}
          position={[-0.199, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve223.geometry}
          material={materials.Material}
          position={[-0.15, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve224.geometry}
          material={materials.Material}
          position={[-0.101, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve225.geometry}
          material={materials.Material}
          position={[-0.052, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve226.geometry}
          material={materials.Material}
          position={[0.095, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve227.geometry}
          material={materials.Material}
          position={[0.292, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve228.geometry}
          material={materials.Material}
          position={[0.488, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve229.geometry}
          material={materials.Material}
          position={[0.586, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve230.geometry}
          material={materials.Material}
          position={[0.635, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve231.geometry}
          material={materials.Material}
          position={[0.684, -0.373, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve232.geometry}
          material={materials.Material}
          position={[-0.248, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve233.geometry}
          material={materials.Material}
          position={[-0.15, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve234.geometry}
          material={materials.Material}
          position={[-0.101, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve235.geometry}
          material={materials.Material}
          position={[-0.052, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve236.geometry}
          material={materials.Material}
          position={[-0.003, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve237.geometry}
          material={materials.Material}
          position={[0.095, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve238.geometry}
          material={materials.Material}
          position={[0.144, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve239.geometry}
          material={materials.Material}
          position={[0.292, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve240.geometry}
          material={materials.Material}
          position={[0.39, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve241.geometry}
          material={materials.Material}
          position={[0.488, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve242.geometry}
          material={materials.Material}
          position={[0.635, -0.422, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve243.geometry}
          material={materials.Material}
          position={[-0.297, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve244.geometry}
          material={materials.Material}
          position={[-0.199, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve245.geometry}
          material={materials.Material}
          position={[-0.052, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve246.geometry}
          material={materials.Material}
          position={[0.095, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve247.geometry}
          material={materials.Material}
          position={[0.193, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve248.geometry}
          material={materials.Material}
          position={[0.292, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve249.geometry}
          material={materials.Material}
          position={[0.488, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve250.geometry}
          material={materials.Material}
          position={[0.537, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve251.geometry}
          material={materials.Material}
          position={[0.586, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve252.geometry}
          material={materials.Material}
          position={[0.635, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve253.geometry}
          material={materials.Material}
          position={[0.684, -0.471, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve254.geometry}
          material={materials.Material}
          position={[-0.248, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve255.geometry}
          material={materials.Material}
          position={[-0.15, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve256.geometry}
          material={materials.Material}
          position={[-0.101, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve257.geometry}
          material={materials.Material}
          position={[-0.003, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve258.geometry}
          material={materials.Material}
          position={[0.144, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve259.geometry}
          material={materials.Material}
          position={[0.292, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve260.geometry}
          material={materials.Material}
          position={[0.341, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve261.geometry}
          material={materials.Material}
          position={[0.39, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve262.geometry}
          material={materials.Material}
          position={[0.439, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve263.geometry}
          material={materials.Material}
          position={[0.488, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve264.geometry}
          material={materials.Material}
          position={[0.635, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve265.geometry}
          material={materials.Material}
          position={[0.684, -0.52, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve266.geometry}
          material={materials.Material}
          position={[-0.297, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve267.geometry}
          material={materials.Material}
          position={[-0.052, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve268.geometry}
          material={materials.Material}
          position={[-0.003, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve269.geometry}
          material={materials.Material}
          position={[0.242, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve270.geometry}
          material={materials.Material}
          position={[0.39, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve271.geometry}
          material={materials.Material}
          position={[0.439, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve272.geometry}
          material={materials.Material}
          position={[0.488, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve273.geometry}
          material={materials.Material}
          position={[0.537, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve274.geometry}
          material={materials.Material}
          position={[0.586, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve275.geometry}
          material={materials.Material}
          position={[0.635, -0.569, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve276.geometry}
          material={materials.Material}
          position={[-0.248, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve277.geometry}
          material={materials.Material}
          position={[-0.199, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve278.geometry}
          material={materials.Material}
          position={[-0.15, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve279.geometry}
          material={materials.Material}
          position={[-0.003, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve280.geometry}
          material={materials.Material}
          position={[0.095, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve281.geometry}
          material={materials.Material}
          position={[0.242, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve282.geometry}
          material={materials.Material}
          position={[0.292, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve283.geometry}
          material={materials.Material}
          position={[0.488, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve284.geometry}
          material={materials.Material}
          position={[0.537, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve285.geometry}
          material={materials.Material}
          position={[0.586, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve286.geometry}
          material={materials.Material}
          position={[0.684, -0.619, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve287.geometry}
          material={materials.Material}
          position={[-0.248, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve288.geometry}
          material={materials.Material}
          position={[-0.101, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve289.geometry}
          material={materials.Material}
          position={[0.095, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve290.geometry}
          material={materials.Material}
          position={[0.144, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve291.geometry}
          material={materials.Material}
          position={[0.242, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve292.geometry}
          material={materials.Material}
          position={[0.292, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve293.geometry}
          material={materials.Material}
          position={[0.635, -0.668, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve294.geometry}
          material={materials.Material}
          position={[-0.297, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve295.geometry}
          material={materials.Material}
          position={[-0.199, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve296.geometry}
          material={materials.Material}
          position={[-0.15, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve297.geometry}
          material={materials.Material}
          position={[-0.052, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve298.geometry}
          material={materials.Material}
          position={[0.046, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve299.geometry}
          material={materials.Material}
          position={[0.144, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve300.geometry}
          material={materials.Material}
          position={[0.193, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve301.geometry}
          material={materials.Material}
          position={[0.242, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve302.geometry}
          material={materials.Material}
          position={[0.292, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve303.geometry}
          material={materials.Material}
          position={[0.39, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve304.geometry}
          material={materials.Material}
          position={[0.439, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve305.geometry}
          material={materials.Material}
          position={[0.488, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve306.geometry}
          material={materials.Material}
          position={[0.537, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve307.geometry}
          material={materials.Material}
          position={[0.635, -0.717, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve311.geometry}
          material={materials.Material}
          position={[0.537, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve315.geometry}
          material={materials.Material}
          position={[0.537, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve308.geometry}
          material={materials.Material}
          position={[-0.548, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve309.geometry}
          material={materials.Material}
          position={[-0.548, 0.51, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve310.geometry}
          material={materials.Material}
          position={[-0.548, -0.574, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
        <mesh
          geometry={nodes.Curve312.geometry}
          material={materials.Material}
          position={[-0.548, -0.574, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={4.799}
        />
      </group>
    </>
  );
}

useGLTF.preload("/qr-improved.glb");
