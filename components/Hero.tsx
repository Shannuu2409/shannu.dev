import { FaLocationArrow } from "react-icons/fa6"; // Use FaLocationArrow from 'react-icons/fa6'
import { Spotlight } from "@/components/ui/Spotlight" // Keep your original import path for Spotlight
import { cn } from "@/lib/utils" // cn utility is not needed in the new structure, but keeping the import
import { TextGenerateEffect } from "./ui/TextGenerateEffect" // Adjust TextGenerateEffect import path
import { MagicButton } from "./MagicButton" // Adjust MagicButton import path

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            {/* Spotlights */}
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full" // Updated class name for purple spotlight
                    fill="purple"
                />
                <Spotlight 
                    className="left-80 top-28 h-[80vh] w-[50vw]" // Updated class name for blue spotlight
                    fill="blue"
                />
            </div>

          
            <div
                
                className="h-screen w-full dark:bg-black-100 bg-white absolute top-0 left-0 flex items-center justify-center"
            >
              
                <div
                    className={cn(
                        "absolute inset-0 pointer-events-none flex items-center justify-center",
                        "dark:bg-black-100 bg-white",
                        "[background-size:40px_40px]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                    )}
                />
                
                
                <div
                    
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                   bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />
            </div>

            
            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
                        Hey <span className="text-purple">Welcome </span> to my Portfolio
                    </p>

                    <TextGenerateEffect
                        // Keeping your original words and the className from the second snippet
                        words="Transforming Concepts into Seamless Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />

                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi, I&apos;m Shannu, MERN Stack Developer.
                    </p>

                    <a href="#projects">
                        <MagicButton
                            title="Show My Work"
                            icon={<FaLocationArrow />}
                            position="right"
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;