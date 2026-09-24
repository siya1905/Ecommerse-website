/* import axios from "axios"; */
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Header() {
  const [islogin, setIslogin] = useState(false);
  //here we recived the token from local storage set method
  const token = localStorage.getItem("token");
  console.log("🚀 ~ Header ~ token:", token);

  const navigate = useNavigate();

  useEffect(() => {
    //when the header loads it will check the token there or not
    if (token) {
      setIslogin(true);
    } else {
      setIslogin(false);
    }
  }, []);

  // when the button click it will become false back to login show in ui and token will get remove
  function handlerLogout() {
    setIslogin(false);
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <>
      <header className=" text-2xl text-orange-500 ">
        <nav className="mr-5 p-4 flex  justify-end gap-5">
          <Link
            to="/heropage"
            className="hover:text-orange-700 hover:underline"
          >
            Home
          </Link>
          <Link to="/about" className="hover:text-orange-700 hover:underline">
            About
          </Link>
          <Link
            to="/register"
            className="hover:text-orange-700 hover:underline"
          >
            Register
          </Link>
          {/*  <Link to="/product" className="hover:text-orange-700 hover:underline">
            Product
          </Link> */}

          {islogin ? (
            <button onClick={handlerLogout}> Logout</button>
          ) : (
            <Link to="/login" className="hover:text-orange-700 hover:underline">
              {"Login "}
            </Link>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
