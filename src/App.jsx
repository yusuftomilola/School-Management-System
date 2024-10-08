import "./App.css";
import "./fonts.css";
import HomeLayout from "./components/HomeLayout";
import GenLayout from "./components/GenLayout";
import CreateSchool from "./pages/CreateSchool";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ComponentsTesting from "./components/ComponentsTesting";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import { SchoolProvider } from "./contexts/schoolContext";
import { TeachersProvider } from "./contexts/teachersContext";

import Classrooms from "./pages/Classrooms";
import Teachers from "./pages/Teachers";
import Subjects from "./pages/Subjects";
import Students from "./pages/Students";
import Scoresheet from "./pages/Scoresheet";
import Schools from "./pages/Schools";
import SchoolCalender from "./pages/SchoolCalender";
import DashboardUsers from "./pages/DashboardUsers";
import Forms from "./components/forms/Forms";
import { FormProvider } from "./components/forms/context";
import CreateAccount from "./pages/CreateAccount";
import SignIn from "./pages/SignIn";
import PrimaryOne from "./pages/PrimaryOne";

import Success from "./pages/Success";
import Student from "./pages/Student";
import CreatingSchool from "./pages/CreatingSchool";
import CreatedSchoolSuccessfully from "./pages/CreatedSchoolSuccessfully";
import AccountCreated from "./pages/AccountCreated";
import ScoresheetSuccess from "./pages/ScoresheetSuccess";
import ClassroomSuccess from "./pages/ClassroomSuccess";
import SubjectSuccess from "./pages/SubjectSuccess";
import DashboardUser from "./pages/DashboardUser";
import { CalenderProvider } from "./contexts/calenderContext";
import Teacher from "./pages/Teacher";
import TeachersCopy from "./pages/TeachersCopy";

function App() {
  return (
    <TeachersProvider>
      <FormProvider>
        <SchoolProvider>
          <CalenderProvider>
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
                  <Route path="/TeachersCopy" element={<TeachersCopy />} />

                  <Route path="/teachers/:userName" element={<Teacher />} />
                  <Route path="/classrooms" element={<Classrooms />} />
                  <Route path="/classrooms/primary1" element={<PrimaryOne />} />
                  <Route path="/students" element={<Students />} />
                  <Route
                    path="/students/:id/:studentName"
                    element={<Student />}
                  />
                  <Route path="/subjects" element={<Subjects />} />
                  <Route path="/scoresheet" element={<Scoresheet />} />
                  <Route path="/school-calender" element={<SchoolCalender />} />
                  <Route path="/userss" element={<DashboardUsers />} />
                  <Route path="/userss/:userName" element={<DashboardUser />} />
                  <Route path="/forms" element={<Forms />} />
                </Route>

                {/* ROUTES/PAGES WITHOUT LAYOUT */}
                {/* Register/signIn Page */}
                <Route path="/" element={<CreateAccount />} />
                <Route path="/sign-in" element={<SignIn />}>
                  {" "}
                </Route>

                {/* Create School Page */}
                <Route path="/create-school" element={<CreateSchool />} />

                {/* hajia route */}
                <Route
                  path="/components-testing"
                  element={<ComponentsTesting />}
                />

                {/* SUCCESS PAGES */}
                <Route path="/success" element={<Success />} />
                <Route path="/creating-school" element={<CreatingSchool />} />
                <Route
                  path="/school-created"
                  element={<CreatedSchoolSuccessfully />}
                />
                <Route path="/_" element={<AccountCreated />} />
                <Route
                  path="/scoresheet-created"
                  element={<ScoresheetSuccess />}
                />
                <Route
                  path="/classroom-created"
                  element={<ClassroomSuccess />}
                />
                <Route path="/subject-created" element={<SubjectSuccess />} />

                {/* NOT FOUND ROUTE */}
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Router>
          </CalenderProvider>
        </SchoolProvider>
      </FormProvider>
    </TeachersProvider>
  );
}

export default App;
