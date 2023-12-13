
import { TypeAnimation } from "react-type-animation";


const Banner = () => {
    const filePath = "../../../public/Personal_Branding.pdf"

    return (
        <div className="flex flex-col justify-center px-4 md:px-6 lg:px-8" id="home">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center w-full py-12 lg:py-16">
                <div className="w-full md:w-5/12">
                    <iframe className="w-full h-96" src="https://lottie.host/embed/d78cdd91-7887-4b20-988e-0763b140e907/iu277FenVi.lottie"></iframe>
                </div>
                <div className="text-white space-y-8">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold">Hi,</h2>
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">I&apos;m <span className="text-[#FB9039]">Rahad</span></h1>
                    <div>
                    <TypeAnimation
                        className="text-2xl md:text-3xl lg:text-5xl font-semibold"
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Frontend Developer',
                            1000,
                            'React.js Developer',
                            1000,
                            'MERN Stack Developer',
                            1000,
                            'JavaScript Developer',
                            1000,
                        ]}
                        speed={30}
                        repeat={Infinity}
                        />
                    </div>
                    <div className="flex gap-4">
                        <a href={filePath} download={'downloaded-file.pdf'} className="btn btn-primary text-sm lg:text-base">Get Resume</a>
                        <a href={'#skills'} className="btn btn-primary btn-outline text-sm lg:text-base">My Skills</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;