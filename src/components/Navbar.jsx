import { useContext } from "react";
import { ThemeContext } from "../context/globalContext";


export default function Navbar() {
    const {theme,setTheme}=useContext(ThemeContext)
     
    return(<nav className={`h-16 px-6 border-b ${theme === "light" ? "bg-white" : "bg-gray-400"}`}>
  <div className="flex items-center justify-between h-full">

    {/* Logo */}
    <div>
      <h1 className="text-xl font-bold">
        Placementor
      </h1>
    </div>

    {/* Links */}
    

    {/* Right Section */}
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="border px-3 py-2 rounded-md"
      />

      <button>🔔</button>

      <button>👤</button>
   <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>

    </div>

  </div>
</nav>)
}