import { SiBootstrap, SiExpress, SiFigma, SiGit, SiGithub, SiJavascript, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from "@icons-pack/react-simple-icons";
import SectionTitle from "../../components/SectionTitle";

const Skills = () => {
    return (
        <div className="py-16 px-4 md:px-6 lg:px-8" id="skills">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
                <SectionTitle
                    title={'The skills, tools and technologies I am really good at'}
                    subTitle={'My Skills'}
                ></SectionTitle>
                <div className="mt-12 flex flex-wrap justify-center gap-4 max-w-screen-md">
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiJavascript color='default' size={40} title='JavaScript'/>
                        <p className="text-sm mt-3">JavaScript</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiReact color='default' size={40} title='React'/>
                        <p className="text-sm mt-3">React</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiExpress color='gray' size={40} title='Express'/>
                        <p className="text-sm mt-3">Express</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiNodedotjs color='default' size={40} title='Node'/>
                        <p className="text-sm mt-3">Node</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiMongodb color='default' size={40} title='MongoDB'/>
                        <p className="text-sm mt-3">MongoDB</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiTailwindcss color='default' size={40} title='Tailwind'/>
                        <p className="text-sm mt-3">Tailwind</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiBootstrap color='default' size={40} title='Bootstrap'/>
                        <p className="text-sm mt-3">Bootstrap</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiGit color='default' size={40} title='Git'/>
                        <p className="text-sm mt-3">Git</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiGithub color='gray' size={40} title='Github'/>
                        <p className="text-sm mt-3">Github</p>
                    </div>
                    <div className="w-28 h-28 bg-neutral rounded-md flex flex-col justify-center items-center text-[#dddddd]  hover:shadow-[0_2px_16px_0px_rgb(78,109,177)]">
                        <SiFigma color='default' size={40} title='Figma'/>
                        <p className="text-sm mt-3">Figma</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;