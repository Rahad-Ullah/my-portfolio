
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Projects from "./Projects/Projects";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;