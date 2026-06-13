import AppLayout from "./layouts/AppLayout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Todo from "./pages/Todo";
import Profile from "./pages/Profile";
import Habits from "./pages/Habbits";
import Jobs from "./pages/Jobs";
function App() {
  return (
<Routes>
  <Route path="/" element={<AppLayout />}>
    <Route index  element={<Dashboard />} />
    <Route path="notes" element={<Notes />} />
    <Route path="todos" element={<Todo />} />
    <Route path="habits" element={<Habits />} />
    <Route path="profile" element={<Profile />} />
    <Route path="jobs" element={<Jobs />} />
    <Route path="*" element={<Dashboard />} />
  </Route>
</Routes>
  );
}

export default App;