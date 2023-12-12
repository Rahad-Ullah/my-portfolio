import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-base-100">
            <Outlet></Outlet>
        </div>
    );
};

export default Main;