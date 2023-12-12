import SectionTitle from "../../components/SectionTitle";

const About = () => {
    return (
        <div className="py-16 px-4 md:px-6 lg:px-8" id="about">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-3/12">
                    <img src="https://wpportfoliodesigner.com/wp-content/uploads/2018/09/Freelancer-03-1.jpg" alt="photo" className="rounded-lg"/>
                </div>
                <div className="flex-1 text-center md:text-left">
                    <SectionTitle
                        title={'Transforming visions into exceptional portfolios'}
                        subTitle={'About me'}
                    ></SectionTitle>
                    <p className="text-white mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa exercitationem nobis nemo ut minima similique temporibus, ipsum eius sequi iure vero doloribus quasi commodi consectetur molestias. Laudantium, optio molestias. Omnis impedit quam est tenetur voluptatibus.</p>
                </div>
            </div>
        </div>
    );
};

export default About;