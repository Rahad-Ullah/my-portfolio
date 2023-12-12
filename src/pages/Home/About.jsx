import SectionTitle from "../../components/SectionTitle";
import photo from "../../../public/st.jpg"

const About = () => {
    return (
        <div className="py-16 px-4 md:px-6 lg:px-8" id="about">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-3/12">
                    <img src={photo} alt="photo" className="rounded-lg"/>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <SectionTitle
                        title={'Transforming visions into exceptional portfolios'}
                        subTitle={'About me'}
                    ></SectionTitle>
                    <p className="text-white mt-8">As a dedicated web developer, my expertise lies in React.js and the MERN stack. My commitment is to provide honest and impeccable services to ensure client satisfaction — that is my ultimate goal. I believe in the power of delivering solutions with integrity and precision. Beyond my current skills, I&apos;m actively expanding my knowledge by delving into data structures and algorithms with JavaScript. This continuous learning reflects my passion for staying at the forefront of technology and delivering top-notch solutions for every project.</p>
                </div>
            </div>
        </div>
    );
};

export default About;