import logo from "../../../public/nav_logo.png"

const Navbar = () => {
    return (
        <div className="drawer text-white top-4 md:top-6">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col px-4 md:px-6 lg:px-8">
            {/* Navbar */}
            <div className="w-full navbar flex-row-reverse lg:flex-row justify-between p-3 rounded-lg max-w-5xl mx-auto px-4 md:px-6 lg:px-8 z-20 bg-neutral bg-opacity-80 border border-[#24334e]">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="">
                    <img src={logo} alt="logo" className="w-24"/>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex gap-6">
                    {/* Navbar menu content here */}
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
                {/* right content here */}
                <div className="hidden lg:block">
                    <a className="btn btn-primary text-base" href="#contact">Contact</a>
                </div>
            </div>
            {/* Page content here */}
                        {/* <ul className="flex gap-6 font-semibold text-white p-4 px-6 my-4 rounded-full bg-white bg-opacity-30">
                <li>
                    <Link activeClass="active" className="test1" to="/" spy={true} smooth={true} offset={-50} duration={500} >Home</Link>
                </li>
                <li>
                    <Link activeClass="active" className="test1" to="about" spy={true} smooth={true} offset={-50} duration={500} >About</Link>
                </li>
            </ul> */}
        </div> 
        <div className="drawer-side z-30">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className=" p-8 pt-12 w-80 min-h-full bg-base-200 space-y-4">
            {/* Sidebar content here */}
            <li><a href="#home" className=" hover:text-primary py-2">Home</a></li>
            <li><a href="#about" className=" hover:text-primary py-2">About</a></li>
            <li><a href="#skills" className=" hover:text-primary py-2">Skills</a></li>
            <li><a href="#projects" className=" hover:text-primary py-2">Projects</a></li>
            <li><a href="#contact" className=" hover:text-primary py-2">Contact</a></li>
            </ul>
        </div>
    </div>
    );
};

export default Navbar;