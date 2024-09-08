import "./App.css";
import HomeLayout from "./components/HomeLayout";
import GenLayout from "./components/GenLayout";
import CreateSchool from "./pages/CreateSchool";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Users from "./pages/Users";

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
        </Route>

        {/* ROUTES/PAGES WITHOUT LAYOUT */}
        {/* Register/signIn Page */}
        <Route
          path="/"
          element={
            <div>
              <h1 className="bg-red-500">Register/SignIn Page</h1>
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
