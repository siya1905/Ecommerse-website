  import axios from "axios";
  import { useState, useEffect } from "react";
  import { TOKEN } from "../constant/token";
  import { toast } from "react-toastify";

  function Product() {
    const [name, setName] = useState("");
    console.log("🚀 ~ Product ~ name:", name);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [stock, setStock] = useState("");
    const [image, setImage] = useState(null);
    console.log("🚀 ~ Product ~ image:", image);
    const [categaires, setCategaires] = useState([]);
    const [detail,setDetail] = useState([]);

    const [selectCategory, setSelectCategory] = useState("");
    console.log("🚀 ~ Product ~ selectCategory:", selectCategory)

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

          setCategaires(response.data.data);
          toast.success(response.statusText);
        })
        .catch((error) => {
          console.log("🚀 ~ getProfile ~ error:", error);
          toast.error(error.response?.statusText || "user not exits");
        });
    };

    function getProduct() {
      // Get token before making API request
      //here it gets the same token that saved by login
      const token = localStorage.getItem("token");

      console.log("Token:", token);

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("stock", stock);
      //formData.append("categaires", categaires);
      formData.append("category", selectCategory);
      
      axios
        .post(`${import.meta.env.VITE_API_URL}/api/products`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("🚀 ~ getProduct ~ response:", response);

          setDetail({
            name,
            description,
            price,
            stock,
            image,
            categaires,
          });
        })
        .catch((error) => {
          console.log("Error:", error.response?.data || error);
        });
    }

    console.log("🚀 ~ Product ~ categaires:", categaires);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white border rounded-lg p-6 w-96">
          <h2 className="text-2xl font-bold text-center mb-5">Add Product</h2>

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

          <input
            className="border rounded p-2 w-full mb-3"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          {/* <input
          className="border rounded p-2 w-full mb-3"
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        /> */}
          <input
            className="border rounded p-2 w-full mb-3
              file:bg-gray-500 file:text-white
              file:border-0 file:rounded file:px-3 file:py-1
              file:mr-3"
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />

          <input
            className="border rounded p-2 w-full mb-4"
            type="number"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <select
            className="border rounded p-2 w-full mb-4"
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option value="">Select Category</option>

            {categaires.map((list) => (
              <option key={list._id} value={list._id}>
                {list.name}
              </option>
            ))}
          </select>

          <div className="flex justify-center">
            <button
              className="bg-orange-500 text-white font-bold px-5 py-2 rounded"
              onClick={getProduct}
            >
              Add Products
            </button>
          </div>

          {/* {details && (
            <div className="mt-6 border-t pt-4">
              <h2 className="text-xl font-bold mb-3">Product Details</h2>

              <img
                className="w-48 h-48 object-cover rounded mb-3"
                src={details.image}
                alt={details.name}
              />

              <p>
                <strong>Name:</strong> {details.name}
              </p>

              <p>
                <strong>Description:</strong> {details.description}
              </p>

              <p>
                <strong>Price:</strong> ₹{details.price}
              </p>

              <p>
                <strong>Stock:</strong> {details.stock}
              </p>
            </div>
          )} */}
        </div>
      </div>
    );
  }

  export default Product;
