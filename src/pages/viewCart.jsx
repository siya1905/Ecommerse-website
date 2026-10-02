import { useEffect, useState } from "react";
import { TOKEN } from "../constant/token";

function ViewCart() {
  const cartData = localStorage.getItem("cart");
  console.log("🚀 ~ ViewCart ~ cartData:", cartData);

  const [showCart, setShowCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(cartData);
    setShowCart(cartItems);
  }, []);
  return (
    <>
     {/*  {showCart.map((item) => (
         <div>
    <img src={item.image} />
    <h2>{item.name}</h2>
    <p>{item.description}</p>
    <p>₹{item.price}</p>
    <p>Stock: {item.stock}</p>
  </div>
      ))} */}


      <div className="min-h-screen bg-gray-50 p-6">
  <h1 className="text-3xl font-bold text-gray-800 mb-6">
    Shopping Cart
  </h1>

  <div className="max-w-4xl space-y-4">
    {showCart.map((item) => (
      <div
        key={item._id}
        className="flex gap-5 bg-white rounded-xl shadow-sm p-4 border border-gray-100"
      >
        {/* Product Image */}
        <div className="w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">
            {item.name}
          </h2>

          <p className="text-gray-500 text-sm mt-2 line-clamp-2">
            {item.description}
          </p>

          <p className="text-lg font-bold text-orange-500 mt-3">
            ₹{item.price}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Stock: {item.stock}
          </p>
        </div>

        {/* Action */}
        <div className="flex items-center">
          <button className="px-4 py-2 border border-red-300 text-red-500 rounded-lg hover:bg-red-50">
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
}
export default ViewCart;
