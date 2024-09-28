import { Canvas } from '@react-three/fiber';
import React from 'react';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from './Loader';


const Ball = (props) => {
  const[decal] = useTexture([props.imgUrl])
 return (
    <>
    <Float speed={2.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0,0,0.05]}/>
      <mesh castShadow receiveShadow scale={3}>
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
        color="#fff8eb"
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        />
        <Decal 
        position={[0,0,1]}
        map={decal}
        />
      </mesh>
    </Float>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    frameloop='demand'
    gl={{preserveDrawingBuffer:true}}
    >
        <Suspense
      fallback={<Loader/>}
    >
      <OrbitControls enableZoom={false}/>
      <Ball imgUrl={icon}/>
        </Suspense>
        <Preload all/>
    </Canvas>
  );
};

export default BallCanvas;
