
import About from "./About";
import Banner from "./Banner";
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
        </div>
    );
};

export default Home;