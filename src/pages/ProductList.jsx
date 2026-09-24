import axios from "axios";
import { TOKEN } from "../constant/token";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function ProductList() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/products`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((response) => {
        console.log("🚀 ~ ProductList ~ response:", response.data.data);
        setProduct(response.data.data);
        toast.success(response.statusText);
      })
      .catch((error) => {
        toast.error(error.response?.statusText || "use not exits");
      });
  }, []);

  return (
    <>
      {/*  {product.map((showData) => (
        <div key={showData._id}>
          <h2>{showData.name}</h2>
          <p>{showData.description}</p>
          <p>{showData.price}</p>
          <p>{showData.stock}</p>
        </div>
      ))} */}

    {/*   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {product.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
         
            <div className="h-60 bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400"><img src = {item.image} alt={item.name}/></span>
            </div>

         
            <div className="p-5">
              <h2 className="text-xl font-bold">{item.name}</h2>

              <p className="text-gray-500 mt-2">{item.description}</p>

              <p className="text-lg font-bold text-orange-500 mt-3">
                ₹{item.price}
              </p>

              <p className="text-sm text-gray-500 mt-1">Stock: {item.stock}</p>

              <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg">
                Add to Cart 
              </button>

             
            </div>
          </div>
        ))}
      </div> */}

    
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  {product.map((item) => (
    <div
      key={item._id}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
    >
      {/* Image */}
      <div className="h-60 bg-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {item.name}
        </h2>

        <p className="text-gray-500 mt-2 line-clamp-2">
          {item.description}
        </p>

        <p className="text-xl font-bold text-orange-500 mt-4">
          ₹{item.price}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          Stock: {item.stock}
        </p>

        <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg transition">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>


    </>
  );
}
export default ProductList;
