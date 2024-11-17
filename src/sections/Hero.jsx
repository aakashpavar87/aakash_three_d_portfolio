import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
  // const x = useControls('HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10
  //   },
  //   scale: {
  //     value: 0.1,
  //     min: -10,
  //     max: 10
  //   }
  // })
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizes = calculateSizes(isSmall, isMobile, isLaptop);
  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Aakash <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Brands & Products
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 ">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera>
              <HackerRoom
                // scale={ isMobile ? 0.07 : 0.1}
                // position={[2, -8, 2]}
                // rotation={[0, - Math.PI, 0]}
                scale={sizes.deskScale}
                position={sizes.deskPosition}
                rotation={[0, -Math.PI, 0]}
              />
            </HeroCamera>
            <group>
              {/* <Target position={sizes.targetPosition} rotation={[0, Math.PI/5, 0]} /> */}
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
              <Rings position={sizes.ringPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 5]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
      <div className="absolute bottom-7 right-0 left-0 w-full z-10 c-space">
        <Button name="Let's work together" isBeam containerClass={"sm:w-fit w-full sm:min-w-96"} />
      </div>
    </section>
  );
};

export default Hero;
