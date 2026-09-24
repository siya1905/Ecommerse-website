import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-56 min-h-screen bg-orange-500 text-white p-5">
      <h1 className="text-2xl shadow bg-amber-900 rounded p-3  font-bold mb-8 ">
        Prayo Jewels
      </h1>

      <div className="space-y-3">
        <Link
        //whatever you have right in path write in to 
          to="/product"
          className="block px-4 py-3 rounded-lg hover:bg-orange-900"
        >
          Product
        </Link>

        <Link
          to="/category"
          className="block px-4 py-3 rounded-lg hover:bg-orange-900"
        >
          category
        </Link>

        <Link
          to="/all-categories"
          className="block px-4 py-3 rounded-lg hover:bg-orange-900"
        >
          AllCategory
        </Link>

        <Link
        to="product-list"
        className="block px-4 py-3 rounded-lg hover:bg-orange-900"
        >Product List</Link>
      </div>
    </div>
  );
}

export default Sidebar;
