import SectionTitle from "../../../components/SectionTitle";
import Project from "./Project";
import img1 from "../../../assets/dream weavers 4.jpg"
import img2 from "../../../assets/dream weavers 3.jpg"
import img3 from "../../../assets/dream weavers 1.jpg"
import event1 from "../../../assets/events bd 1.jpg"
import event2 from "../../../assets/events bd 2.jpg"
import event3 from "../../../assets/events bd 3.jpg"
import petcare1 from "../../../assets/pet care 3.jpg"
import petcare2 from "../../../assets/pet care 2.jpg"
import petcare3 from "../../../assets/pet care 1.jpg"

const Projects = () => {
    return (
        <div className="py-16 px-4 md:px-6 lg:px-8 space-y-16" id="projects">
            <div className="text-center flex justify-center">
                <SectionTitle
                    title={"Things I've built so far"}
                    subTitle={'My Projects'}
                ></SectionTitle>
            </div>
            <div className="max-w-5xl mx-auto space-y-20">
                {/* Dream Weavers Library */}
                <Project
                    title={"Dream Weavers Library"}
                    description={"A library management website built with React.js. User can borrow books online and read a part of specific book. They can return the book within specific date. It has also an admin dashboard where the authority can manage their library easily."}
                    img1={img1}
                    img2={img2}
                    img3={img3}
                    liveLink={'https://dream-weavers-library.web.app'}
                    codeLink={'https://github.com/Rahad-Ullah/Dream-Weavers-Library'}
                    rowDirection={'row'}
                ></Project>
                {/* Events BD */}
                <Project
                    title={"Events BD"}
                    description={"An awesome corporate event management website. Service Information: Clear presentation of various event management services offered by your company. Detailed descriptions and key features for each service. Visually appealing service cards on the main page for easy navigation"}
                    img1={event1}
                    img2={event2}
                    img3={event3}
                    liveLink={'https://event-bd.web.app'}
                    codeLink={'https://github.com/Rahad-Ullah/Events-BD'}
                    rowDirection={'row-reverse'}
                ></Project>
                {/* Pet Care */}
                <Project
                    title={"Pet Care"}
                    description={"A pet adoption website. User Adoption Features: Users can view available pets for adoption. Adoption seekers can submit adoption requests for pets. Users can add their pets to the adoption listing. Ability to manage and update pet adoption listings.Donation Campaigns: Users can initiate donation campaigns for specific pets."}
                    img1={petcare1}
                    img2={petcare2}
                    img3={petcare3}
                    liveLink={'https://pet-care-1622a.web.app'}
                    codeLink={'https://github.com/Rahad-Ullah/Pet-Care'}
                    rowDirection={'row'}
                ></Project>
            </div>
        </div>
    );
};

export default Projects;