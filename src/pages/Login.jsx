import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);
  console.log("🚀 ~ Login ~ user:", user);
  //const [error, setError] = useState("");

  const navigate = useNavigate();

  function loginUser() {
    // setError("");
    /*     console.log("USERNAME:", username);
    console.log("PASSWORD:", password); */
    axios

      .post(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("1 WHOLE RESPONSE:", response);
        console.log("2 ONLY DATA:", response.data);
        console.log("msg:", response.message);
        toast.success(response.data.message);

        const token = response.data.data.token;
        //find this from console data
        //if the data is in array it will required to used map but in this it has given direct

        console.log("TOKEN:", token);
        localStorage.setItem("token", token);
        navigate("/heropage");
      })

      .catch((error) => {
        toast.error(error.response?.data?.message || "user not exits");
      });
  }

  const getProfile = () => {
    const token = localStorage.getItem("token");

    console.log("TOKEN FROM STORAGE:", token);

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/auth/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("🚀 ~ getProfile ~ response:", response);

        setUser(response.data);
        toast.success(response.statusText);
      })
      .catch((error) => {
        console.log("🚀 ~ getProfile ~ error:", error);
        toast.error(error.response?.statusText || "user not exits");
      });
  };

  console.log("🚀 ~ Login ~ user:", user);

  // just used to logout direct not in real you have to do this
  /*   function handlerRemove() {
    setUser("");
    
  } */

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border rounded-lg p-6 w-100">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <input
          className="border rounded w-full p-2 mb-4"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border rounded w-full p-2 mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex justify-center">
          <button
            className="bg-orange-500 text-white rounded w-30 p-2 font-bold mb-3 hover:bg-amber-600"
            onClick={loginUser}
          >
            Login
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-orange-500 text-white rounded w-30  font-bold p-2 mb-3  hover:bg-amber-600"
            onClick={getProfile}
          >
            Get Profile
          </button>
        </div>

        {user && (
          <div className="mt-6 border-t pt-4">
            <h2 className="text-lg font-bold mb-2">Profile</h2>

            <p>Name: {user.data.name}</p>
            <p>Email: {user.data.email}</p>
            <p>Role: {user.data.role}</p>

            <button
              className="bg-red-500 text-white rounded px-3 py-1 mt-3"
              onClick={handlerRemove}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
