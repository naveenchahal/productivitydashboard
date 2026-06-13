import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/globalContext";
const menuItems = [
  { id: 1, title: "Dashboard", icon: "📊" },
  { id: 2, title: "Todos", icon: "✅" },
  { id: 3, title: "Notes", icon: "📝" },
  { id: 4, title: "Habits", icon: "🎯" },
  { id: 5, title: "Jobs", icon: "💼" },
  { id: 6, title: "Profile", icon: "👤" },
];

export default function Sidebar() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
      <div className={`basis-1/4 border-2 border-indigo-600 p-4 h-64 ${theme === "light" ? "bg-white" : "bg-gray-400"}`}>
        {menuItems.map((item) => (
          <div key={item.id} className="rounded-full p-2 hover:bg-gray-200">
            <NavLink to={`/${item.title.toLowerCase()}`}>
              {item.icon} {item.title}
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
}