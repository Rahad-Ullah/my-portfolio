import { NavLink } from "react-router-dom";
import logo from "../../assets/wepik--20231212083611waTx.png"

const Navbar = () => {
    return (
        <div className="drawer text-white">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col mt-8">
            {/* Navbar */}
            <div className="w-full navbar flex-row-reverse lg:flex-row justify-between p-3 rounded-lg max-w-5xl mx-auto px-4 md:px-6 lg:px-8 z-20 sticky top-0 bg-[#2d2d2d] bg-opacity-80 border border-[#3b3b3b]">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-ghost px-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div> 
                <div className="px-2 mx-2">
                    {/* <h2 className="text-2xl font-semibold text-amber-500">{"<Rahad/>"}</h2> */}
                    <img src={logo} alt="logo" className="w-24"/>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex gap-1">
                    {/* Navbar menu content here */}
                        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Home</NavLink></li>
                        <li><NavLink to={'/add-book'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Add Book</NavLink></li>
                        <li><NavLink to={'/all-books'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>All Books</NavLink></li>
                        <li><NavLink to={'/borrowed-books'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Borrowed Books</NavLink></li>
                    </ul>
                </div>
                {/* right content here */}
                <div className="hidden lg:block">
                    <NavLink to={'/borrowed-books'} className={({isActive}) => isActive ? 'btn btn-sm btn-primary normal-case text-base' : 'btn btn-sm btn-ghost normal-case text-base'}>Contact</NavLink>
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
        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className=" p-4 w-80 min-h-full bg-base-200">
            {/* Sidebar content here */}
                <li><NavLink to={'/'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Home</NavLink></li>
                <li><NavLink to={'/add-book'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Add Book</NavLink></li>
                <li><NavLink to={'/all-books'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>All Books</NavLink></li>
                <li><NavLink to={'/borrowed-books'} className={({isActive}) => isActive ? 'btn btn-primary normal-case text-base w-full' : 'btn btn-ghost normal-case text-base w-full'}>Borrowed Books</NavLink></li>
            </ul>
        </div>
    </div>
    );
};

export default Navbar;