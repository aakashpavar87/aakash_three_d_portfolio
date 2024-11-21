import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

const Target = (props) => {
    const targetRef = useRef()
    useGSAP(()=>{
        gsap.to(targetRef.current.position, {
          y: targetRef.current.position.y + 0.5,
          yoyo: true,
          duration: 1.5,
          repeat: -1
        })
    })
    const {scene} = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf')
  return (
    <mesh {...props} ref={targetRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Target