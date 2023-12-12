import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-[#272727]">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;