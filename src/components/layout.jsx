import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./sidebar";

function Layout() {
  return (
    <div className="flex min-h-screen">
      
      <Sidebar />

      <div className="flex-1">
        <Header />
        <Outlet />
      </div>
    
    </div>
  );
}

export default Layout;

