import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import "./styles.css";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Scene = ( ) => {

  let model_data = useLoader(GLTFLoader, '/ambulance.glb');

  const scene = useRef();

  useFrame(() => {
    scene.current.rotation.y += 0.005;
    scene.current.rotation.z = 2;
  });
  return (
    <>
      <directionalLight intensity={1.5} position={[0,1,1]}  />
      <ambientLight intensity={0.05} />
      <group ref={scene}>
        {/* <Suspense fallback={null}>
          <primitive object={model_data.scene} />
        </Suspense> */}
        

        <Box>
          <meshLambertMaterial color="white" />
        </Box>
      </group>
    </>

  );
};

const CanvasObject = ( ) => {

  return (
    <>
    <div className="object-item">
      <Canvas>
        <Scene />
        <OrbitControls />
      </Canvas>
      <div style={{ marginTop: 5 }}>Name</div>
    </div>
     
    </>
  )
}

export default function App() {
  return (
    <>
    <div className="container-fluid nav mb-5">
      <div className="row">
        <div className="col logo">
            3d Models for web
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col" align="center">
            <CanvasObject />           
        </div>
        <div className="col" align="center">
            <CanvasObject />
        </div>
        <div className="col" align="center">
            <CanvasObject  />
        </div>
        <div className="col" align="center">
            <CanvasObject  />
        </div>

        <div className="col" align="center">
            <CanvasObject />           
        </div>
        <div className="col" align="center">
            <CanvasObject />
        </div>
        <div className="col" align="center">
            <CanvasObject />
        </div>
        <div className="col" align="center">
            <CanvasObject />
        </div>
      </div>


    </div>



   

    </>

  );
}
