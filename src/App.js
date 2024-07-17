// import {
//   CircleUserRound,
//   Home,
//   NotebookText,
//   PieChart,
//   Settings,
//   SquarePen,
// } from "lucide-react";
import "./App.css";
// import Sidebar, { SidebarItem } from "./Pages/Sidebar";
import Studentprofile from "./Pages/Studentprofile";
// import Addteacher from "./Components/Addteacher";
// import Admissionform from "./Components/Admissionform";

function App() {
  return (
    <div className="flex">
      {/* <Admissionform /> */}
      {/* <Addteacher /> */}
      <Studentprofile />
      {/* <Sidebar>
        <SidebarItem icon={<Home size={30} />} text="Home" alert />
        <SidebarItem
          icon={<CircleUserRound size={30} />}
          text="profile"
          alert
        />
        <SidebarItem icon={<PieChart size={30} />} text="Attendance" alert />

        <SidebarItem icon={<NotebookText size={30} />} text="Syllabus" alert />

        <SidebarItem icon={<SquarePen size={30} />} text="create-notes" alert />
        <hr className="my-3" />
        <SidebarItem icon={<Settings size={30} />} text="settings" alert />
      </Sidebar> */}
    </div>
  );
}

export default App;
