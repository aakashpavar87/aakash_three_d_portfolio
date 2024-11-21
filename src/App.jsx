import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Clients from './sections/Clients'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
    </main>
  )
}

export default App
// Added code for using react-three fiber for practice purposes.
// import React, { useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";

// const RotatingCube = () => {
//   const meshRef = useRef()
//   useFrame(()=>{
//     if(meshRef.current) {
//       meshRef.current.rotation.x += 0.01;
//       meshRef.current.rotation.y += 0.01;
//     }
//   })
//   return <mesh ref={meshRef}>
//     <cylinderGeometry args={[1,1,1]}/>
//     <meshLambertMaterial color={"#BD45A3"} emissive={"#BD45A3"} />
//   </mesh>
// }

// const App = () => {
//   return (
//     <Canvas
//       style={{
//         height: "100vh",
//         width: "100vw",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}>
//         <RotatingCube />
//         <OrbitControls enablePan enableRotate enableZoom/>
//         <directionalLight position={[1,1,1]} color={0x468585} intensity={10}/>
//         <color attach={"background"} args={['#f0f0f0']}/>
//       </Canvas>
//   );
// };

// export default App;
