/* import { TOKEN } from "../constant/token"; */
/* console.log("token",TOKEN) */
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { TOKEN } from "../constant/token";

function GetAllCategory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!TOKEN) return;
    allCategory();
  }, [TOKEN]);

  const allCategory = () => {
    const token = localStorage.getItem("token");

    console.log("TOKEN FROM STORAGE:", token);

    axios
      .get(`${import.meta.env.VITE_API_URL}/api/category/get-all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("🚀 ~ getProfile ~ response:", response);

        setData(response.data.data);
        toast.success(response.statusText);
      })
      .catch((error) => {
        console.log("🚀 ~ getProfile ~ error:", error);
        toast.error(error.response?.statusText || "user not exits");
      });
  };
  console.log("🚀 ~ GetAllCategory ~ data:", data);
  return (
    <>
      <div className="text-center mb-5">
        {/*     <button
          className="bg-orange-500 text-white font-bold px-5 py-2 rounded"
          onClick={allCategory}
        >
          All category
        </button> */}
      </div>

      {data.map((list) => {
        console.log("🚀 ~ GetAllCategory ~ list:", list);
        return (
          <ul
            key={list._id}
            className="border rounded p-3 mb-3 mx-auto w-80 bg-gray-50"
          >
            <li className="font-semibold">Name: {list.name || list._id}</li>

            <li className="text-gray-600">Description: {list.description}</li>
          </ul>
        );
      })}
    </>
  );
}

export default GetAllCategory;


   
  /*   <select  value={category} ></select> */

         {/*  <option value="">Select Category</option>

          {categaires.map((list) => (
            <option key={list._id} value={list._id}>
              {list.name}
            </option>
          ))}
        </select> */}