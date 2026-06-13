import Card from "../components/Card";
import WelcomeCard from "../components/WelcomeCard";
import TaskItem from "../components/Taskitem";
import {ThemeContext} from "../context/globalContext"
import { useContext } from "react";

const dashboardData = [
  {
    id: 1,
    title: "Total Users",
    value: "12,450",
    icon: "👥",
  },
  {
    id: 2,
    title: "Total Jobs",
    value: "320",
    icon: "💼",
  },
  {
    id: 3,
    title: "Applications",
    value: "8,920",
    icon: "📄",
  },
  {
    id: 4,
    title: "Interviews",
    value: "245",
    icon: "🎯",
  },
  {
    id: 5,
    title: "Revenue",
    value: "$18,500",
    icon: "💰",
  },
];

const tasks = [
  {
    id: 1,
    title: "Complete React Router",
    status: "In Progress",
  },
  {
    id: 2,
    title: "Build Notes Page",
    status: "Pending",
  },
  {
    id: 3,
    title: "Learn useEffect",
    status: "Completed",
  },
    {
    id: 4,
    title: "Learn usestate",
    status: "Completed",
  },
    {
    id: 5,
    title: "backend integration",
    status: "pending",
  },
];
export default function Dashboard() {
    const {theme} = useContext(ThemeContext);
    return( <div className={`flex flex-col gap-4 basis-3/4 border-2 border-indigo-600 ${theme === "light" ? "bg-white" : "bg-gray-400"}`} p-4>
    <WelcomeCard />
    <div class=" grid grid-cols-2 gap-4 p-4">
  
  {dashboardData.map((item) => (
    <Card key={item.id} title={item.title} value={item.value} icon={item.icon} />
  ))}
 
</div>

<div>
    <h1>Tasks:</h1>
    <ol  className="flex flex-col gap-4 p-4">
        {tasks.map((task) => (
            <li key={task.id}>
                <TaskItem title={task.title} status={task.status} />
            </li>
        ))}
    </ol>
</div>

    </div>)
}