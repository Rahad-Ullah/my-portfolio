import { TypeAnimation } from "react-type-animation";


const Banner = () => {
    return (
        <div className="h-[90vh] flex flex-col justify-center">
            <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
                <div className="text-white space-y-8">
                    <h2 className="text-5xl font-bold">Hi,</h2>
                    <h1 className="text-5xl font-bold mb-4">I&apos;m <span className="text-[#FB9039]">Rahad</span></h1>
                    <div>
                    <TypeAnimation
                        className="text-5xl font-bold"
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
                        <button className="btn btn-secondary text-base">Get Resume</button>
                        <button className="btn btn-secondary btn-outline text-base">My Skills</button>
                    </div>
                </div>
                <div className="w-5/12">
                <iframe className="w-full h-96" src="https://lottie.host/embed/d78cdd91-7887-4b20-988e-0763b140e907/iu277FenVi.lottie"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Banner;