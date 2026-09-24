import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate} from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);
  //const [error, setError] = useState("");

  const navigate = useNavigate()

  function SignUPUser() {
    // setError("");
    /*     console.log("USERNAME:", username);
    console.log("PASSWORD:", password); */
    axios

      .post(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("1 WHOLE RESPONSE:", response);
        console.log("2 ONLY DATA:", response.data.message);
        toast.success(response.data.message);

        const token = response.data.accessToken;

        console.log("TOKEN:", token);
        localStorage.setItem("token", token);
        navigate("/login")
      })

      .catch((error) => {
        toast.error(error.response?.data?.message || "something went wrong ");
        console.log("error", error);
      });

  }

  /* const getProfile = () => {  
    const token = localStorage.getItem("token");

    console.log("TOKEN FROM STORAGE:", token);

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("PROFILE RESPONSE:", response);
        console.log("PROFILE DATA:", response.data);

        setUser(response.data);
      })
      .catch((error) => {
        console.log("PROFILE ERROR:", error);
      });
  }; */

  return (
    <>
      <div className=" min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white border rounded-lg w-100 p-6 ">
          <h1 className="text-2xl font-bold text-center mb-6">Register</h1>

          <input
            className="border rounded w-full p-2 mb-1"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br />
          <br />

          <input
            className=" border  rounded p-2 w-full mb-1 " //placeholder:text-center if want 
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />
          <br />

          <input
            className="border rounded w-full p-2 mb-1"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />
          <div className="flex justify-center">
            <button
              className="font-bold text-white   bg-orange-500 rounded px-3 py-1 mt-3 "
              onClick={SignUPUser}
            >
              Sign Up{" "}
            </button>
          </div>

          {/*  <button onClick={getProfile}>Get Profile</button> */}

          {user && (
            <>
              <h2>Profile</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Register;
