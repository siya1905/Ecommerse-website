import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function Category() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // const [details, setDetails] = useState("");

  function createCategory() {
    // Get token before making API request
    //here it gets the same token that saved by login
    const token = localStorage.getItem("token");

    const payload = { name: name, description: description };
    console.log("Token:", token);
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/api/category`,
        payload ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log("🚀 ~ getCategory ~ response:", response);

        toast.success(response.data.message);

        const token = response.data.data.token;

        //find this from console data
        //if the data is in array it will required to used map but in this it has given direct

        console.log("TOKEN:", token);
        localStorage.setItem("token", token);
      })

      .catch((error) => {
        toast.error(error.response?.data?.message || "user not exits");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white border rounded-lg p-6 w-96">
        <h2 className="text-2xl font-bold text-center mb-5">Add Category</h2>

        <input
          className="border rounded p-2 w-full mb-3"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border rounded p-2 w-full mb-3"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="bg-orange-500 text-white font-bold px-5 py-2 rounded"
          onClick={createCategory}
        >
          Add
        </button>

        {/*   <p>
          <strong>Name:</strong> {details.name}
        </p>

        <p>
          <strong>Description:</strong> {details.description}
        </p> */}
      </div>
    </div>
  );
}

export default Category;
