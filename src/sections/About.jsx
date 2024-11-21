import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText("aakashpavar87@gmail.com")
        setHasCopied(true)
        setTimeout(() => setHasCopied(false), 2000)
    }
  return (
    <section className="c-space my-20" id="about">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid1.png" alt="grid-1" className="h-fit w-full object-contain sm:h-[276px]" />
                    <div>
                        <p className="grid-headtext">Hi I'm Aakash</p>
                        <p className="grid-subtext">With 2 Years of experience, I have honed my skills in frontend and backend development, with a focus on animated 3D websites.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid2.png" alt="grid-2" className="w-full sm:w-[276px] h-fit object-contain" />
                    <div>
                        <p className="grid-headtext">Tech Stack</p>
                        <p className="grid-subtext">I specialize in Javascript with a focus on React and Next.js ecosystems also python enthusiast.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className="grid-container">
                    <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                        <Globe 
                            backgroundColor="rgba(0,0,0,0)"
                            showAtmosphere
                            showGraticules
                            width={326}
                            height={326}
                            globeImageUrl={"//unpkg.com/three-globe/example/img/earth-day.jpg"}
                            // bumpImageUrl={"//unpkg.com/three-globe/example/img/earth-topology.jpg"}
                            // labelsData={[{
                            //     lat: 40,
                            //     lng: -100,
                            //     text: "I 'm Here !!!",
                            //     color: "red",
                            //     size: 20
                            // }]}
                        />
                    </div>
                    <div>
                        <p className="grid-headtext">I work remotely across the timezones.</p>
                        <p className="grid-subtext">I'm based in India with remote work available.</p>
                        <Button name="Contact Me" isBeam containerClass={"w-full mt-10"} />
                    </div>
                </div>
            </div>
            <div className="xl:col-span-2 xl:row-span-3">
                <div className="grid-container">
                    <img src="/assets/grid3.png" className="w-full sm:h-[266px] h-fit object-contain" alt="grid3"/>
                    <div>
                        <p className="grid-headtext">My Pasion for Coding</p>
                        <p className="grid-subtext">I'm a passionate coder with a knack for creating visually stunning and interactive websites.</p>
                    </div>
                </div>
            </div>
            <div className="xl:col-span-1 xl:row-span-2">
                <div className="grid-container">
                    <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[136px] sm:h-[276px] h-fit object-contain sm:object-top"/>
                    <div className="space-y-2">
                        <p className="grid-subtext text-center">Contact Me</p>
                        <div className="copy-container" onClick={handleCopy}>
                            <img src={hasCopied ? "/assets/tick.svg": "/assets/copy.svg"} alt="copy-button"/>
                            <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">aakashpavar87@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About