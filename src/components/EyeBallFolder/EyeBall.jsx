import { useState, Suspense, useEffect, useRef } from "react";
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Eyeball from "../../../public/Eyeball.jsx";
import './Eyeball.css';









 function EyeFunction () {
   const meshRef = useRef();
   const [mousePos, setMousePos] =  useState({ x: 0, y: 0 });
 
//function to handle mouse movement
   const handleMouseMove = (event) => {
     setMousePos ({
     x: (event.clientX / window.innerWidth) * 2 - 1,
     y: -(event.clientY / window.innerHeight) * 2 + 1,
     });
   };
  
  useEffect(() => {
    // add mouse move listener
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
 
 
  },[]);
 

useFrame(() => {
 
const cursorPosition = new THREE.Vector3(-mousePos.x,-mousePos.y, 0);
const pupilPosition = new THREE.Vector3(0, 0, 1); 
const direction = new THREE.Vector3().subVectors(cursorPosition, pupilPosition);
meshRef.current.lookAt(direction);
});

 

   return (
     <mesh ref={meshRef} >
       <Eyeball />
       <meshStandardMaterial color="blue" />
     </mesh>
   );
 }
function Scene() {
 
  return (
 <div className="canvasWrapper ">
    <Canvas >
         
         
      <ambientLight intensity={2.5} />
      <pointLight position={[0, 0, 0.1]} /> 
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
                 <EyeFunction />
        </Suspense>
    
      </Canvas> 
      </div>
  );
}
export default function App() {
  return <Scene />;
}
 
Environment.presets;
// city, park, matcap, warehouse, apartment, forest, stadium, sunset, night, dawn, dusk