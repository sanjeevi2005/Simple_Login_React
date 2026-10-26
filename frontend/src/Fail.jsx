import { useLocation } from "react-router-dom";

function Fail() {
    const location = useLocation();
    const user = location.state;
    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen w-full text-2xl font-bold">
            {" "}
            <span className="font-extrabold mr-2 uppercase">
                {user.username}{" "}
            </span>{" "}
            Login Failed...
        </div>
    );
}

export default Fail;
