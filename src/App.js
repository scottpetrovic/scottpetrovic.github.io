import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, ContactShadows, OrbitControls } from "@react-three/drei";
import "./styles.css";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import libraryData from './data.json';

const Scene = ( {params} ) => {

  console.log(params);  

  let model_data = useLoader(GLTFLoader, `./library/${params.directory}/${params.glbFile}`);

  const scene = useRef();

  useFrame(() => {
    scene.current.rotation.y += 0.005;
    scene.current.rotation.z = 0.2;
  });
  return (
    <>
      <directionalLight intensity={1.5} position={[1,1,1]}  />
      <directionalLight intensity={1.5} position={[-1,-1,-1]}  />
      <group ref={scene}>
        <Suspense fallback={null}>
          <primitive object={model_data.scene} />
        </Suspense>
      </group>
    </>

  );
};

const CanvasObject = ( {params} ) => {

  console.log(params);

  return (
  
    <div className="col" align="center">
        <div className="object-item">
        <Canvas>
          <Scene params={params} />
          <OrbitControls />
        </Canvas>
        <div style={{ marginTop: 5 }}>{ params.friendlyName }</div>
      </div>
    </div>  
  )
}

export default function App() {

  // load up JSON file with data
  let models_to_load = libraryData.slice(0, 10);

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
      <div className="row model-list">
        { models_to_load.map((entry, i) => (  
           <CanvasObject key={entry.id } params={entry}  />
        ))};
      </div>
    </div>  

    </>

  );
}
