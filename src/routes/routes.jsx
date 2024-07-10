import { createBrowserRouter } from "react-router-dom";
import MainlayOut from "../layout/MainlayOut";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home";
import About_Us from "../pages/About_Us";
import ContactUs from "../pages/ContactUs";
import DeshboardLayOut from "../layout/DeshboardLayOut";
import DashBoard from "../components/DashBoard";
import AddCources from "../pages/AddCources";
import Login from "../components/login-registration/Login";
import Register from "../components/login-registration/Register";
import AllCourses from "../pages/AllCourses";
import EditCourse from "../pages/EditCourse";
import SeeDatiles from "../pages/SeeDatiles";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import BookingUser from "../pages/BookingUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainlayOut />,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://online-course-server-pdwu.onrender.com/courses"),
      },
      {
        path: "about",
        element: <About_Us />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "courses/:id",
        element: (
          <PrivateRoute>
            <SeeDatiles />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://online-course-server-pdwu.onrender.com/courses/${params.id}`
          ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    element: <DeshboardLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home",
        element: <DashBoard />,
      },
      {
        path: "bookingDetails",
        element: <BookingUser></BookingUser>,
      },
      {
        path: "addCources",
        element: <AddCources />,
      },

      {
        path: "allcourse",
        element: <AllCourses />,
        loader: () =>
          fetch("https://online-course-server-pdwu.onrender.com/courses"),
      },
      {
        path: "allcourse/edit/:id",
        element: <EditCourse />,
        loader: ({ params }) =>
          fetch(
            `https://online-course-server-pdwu.onrender.com/courses/${params.id}`
          ),
      },
    ],
  },
]);
