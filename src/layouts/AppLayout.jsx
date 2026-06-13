import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import{Outlet} from "react-router-dom"
export default function AppLayout() {

    return(
        <>
         <Navbar />
  <div class="flex flex-row h-auto gap-4">
  <Sidebar />
 <div className="flex-1 p-4">
          <Outlet />
        </div>
</div>
        </>
    )
}