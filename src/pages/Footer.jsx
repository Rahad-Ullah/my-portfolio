import { SiFacebook, SiGithub, SiLinkedin, SiTelegram } from "@icons-pack/react-simple-icons";
import logo from "../../public/nav_logo.png"
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="px-4 md:px-6 lg:px-8">
            <div className="border-t border-gray-700 py-3 max-w-5xl mx-auto flex justify-between items-center">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="w-24"/>
                </Link>  
                <div className="flex gap-6">
                    <Link to={"https://www.facebook.com/rtub4231423/"} target="_blank"><SiFacebook className="hover:text-primary"></SiFacebook></Link>
                    <Link to={'www.github.com/Rahad-Ullah'} target="_blank"><SiGithub className="hover:text-primary"></SiGithub></Link>
                    <a href="#home"><SiTelegram className="hover:text-primary"></SiTelegram></a>
                    <a href="#home"><SiLinkedin className="hover:text-primary"></SiLinkedin></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;