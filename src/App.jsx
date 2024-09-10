import "./App.css";
import HomeLayout from "./components/HomeLayout";
import GenLayout from "./components/GenLayout";
import CreateSchool from "./pages/CreateSchool";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserCard from "./components/UserCard"
import SearchFilterButton from "./components/SearchFilterButton";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Users from "./pages/Users";

import Classrooms from "./pages/Classrooms";
import Teachers from "./pages/Teachers";
import Subjects from "./pages/Subjects";
import Students from "./pages/Students";
import Scoresheet from "./pages/Scoresheet";
import Schools from "./pages/Schools";
import SchoolCalender from "./pages/SchoolCalender";
import DashboardUsers from "./pages/DashboardUsers";

import Forms from "./components/forms/Forms";
import CreateNewButton from "./components/CreateNewButton";

function App() {
  return (
    <Router>
      <Routes>
        {/* ROUTES WITH HOME LAYOUT */}
        <Route element={<HomeLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* ROUTES WITH GENERAL LAYOUT */}
        <Route element={<GenLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/classrooms" element={<Classrooms />} />
          <Route path="/students" element={<Students />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/scoresheet" element={<Scoresheet />} />
          <Route path="/school-calender" element={<SchoolCalender />} />
          <Route path="/userss" element={<DashboardUsers />} />
          <Route path="/forms" element={<Forms />} />
        </Route>

        {/* ROUTES/PAGES WITHOUT LAYOUT */}
        {/* Register/signIn Page */}
        <Route
          path="/"
          element={
            <div>
              {/* <h1 className="bg-red-500">Register/SignIn Page</h1> */}
              <UserCard />
              <CreateNewButton />
              <SearchFilterButton />
            </div>
          }
          
        />

        {/* Create School Page */}
        <Route path="/create-school" element={<CreateSchool />} />

        {/* NOT FOUND ROUTE */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
