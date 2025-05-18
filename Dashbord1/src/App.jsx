// import React, { useContext, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard"; // ✅ Fixed spelling
// import Login from "./components/Login";
// import AddNewDoctor from "./components/AddNewDoctor";
// import Messages from "./components/Messages";
// import Doctors from "./components/Doctors";
// import { Context } from "./main"; // ✅ Ensure correct export from 'main.js'
// import axios from "axios";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Sidebars from "./components/Sidebars";
// import AddNewAdmin from "./components/AddNewAdmin";
// import "./App.css";

// const App = () => {
//   const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context); // ✅ Ensure correct context usage

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await axios.get(
//           "https://prateekbackend.onrender.com/api/v1/user/admin/me",
//           { withCredentials: true }
//         );
//         setIsAuthenticated(true);
//         setUser(response.data.user);
//       } catch (error) {
//         setIsAuthenticated(false);
//         setUser({});
//       }
//     };
//     fetchUser();
//   }, []); // ✅ Use empty dependency array to avoid infinite loops

//   return (
//     <Router>
//       <Sidebars />
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/doctor/addnew" element={<AddNewDoctor />} />
//         <Route path="/admin/addnew" element={<AddNewAdmin />} />
//         <Route path="/messages" element={<Messages />} />
//         <Route path="/doctors" element={<Doctors />} />
//       </Routes>
//       <ToastContainer position="top-center" />
//     </Router>
//   );
// };

// export default App;



import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddNewDoctor from "./components/AddNewDoctor";
import Messages from "./components/Messages";
import Doctors from "./components/Doctors";
import { Context } from "./main";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebars from "./components/Sidebars";
import AddNewAdmin from "./components/AddNewAdmin";
import "./App.css";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://prateekbackend.onrender.com/api/v1/user/admin/me",
          {
            withCredentials: true, // ✅ This is required to send cookies
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, []); // ✅ This should run only once when the app loads

  return (
    <Router>
      <Sidebars />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor/addnew" element={<AddNewDoctor />} />
        <Route path="/admin/addnew" element={<AddNewAdmin />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/doctors" element={<Doctors />} />
      </Routes>
      <ToastContainer position="top-center" />
    </Router>
  );
};

export default App;
