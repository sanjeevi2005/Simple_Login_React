import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const navigate = useNavigate();

    function check() {
        var loginstatus = axios.post("http://localhost:5000/login", {
            username: user,
            password: pass,
        });
        loginstatus.then((data) => {
            if (data.data == true) {
                navigate("/success", { state: { username: user } });
            } else {
                navigate("/fail", { state: { username: user } });
            }
        });
    }

    return (
        <div className="bg-gray-200 flex justify-center items-center h-screen w-full">
            <div className="flex flex-col gap-4 justify-center items-center p-10 rounded-4xl shadow-2xl">
                <h1 className="text-2xl font-bold text-left m-2 ">
                    Login :-){" "}
                </h1>
                <input
                    className="flex justify-center items-center p-4 w-xl border rounded-2xl border-black 
                    focus:border-2 focus:scale-102 duration-300"
                    type="text"
                    placeholder="Username"
                    name="username"
                    autoComplete="off"
                    value={user}
                    onChange={(e) => {
                        setUser(e.target.value);
                    }}
                />
                <input
                    className="flex justify-center items-center p-4 w-xl border rounded-2xl border-black 
                    focus:border-2 focus:scale-102 duration-300"
                    type="password"
                    placeholder="Password"
                    name="paasword"
                    autoComplete="off"
                    value={pass}
                    onChange={(e) => {
                        setPass(e.target.value);
                    }}
                />
                <button
                    className="bg-blue-600 p-2 h-12 w-24 rounded-2xl text-white font-semibold cursor-pointer hover:bg-blue-700 hover:scale-102 duration-300"
                    type="submit"
                    onClick={check}
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default App;
