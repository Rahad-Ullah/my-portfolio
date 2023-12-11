import About from "./About";

const Home = () => {
    return (
        <div>
            <div className="h-screen">
            <h1>Home page</h1>
            <a href="#about">about</a>
            </div>
            <About></About>
        </div>
    );
};

export default Home;