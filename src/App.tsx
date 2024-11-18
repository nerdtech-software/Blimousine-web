import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Review from "./components/Review";
import About from "./page/About";
import Booking from "./page/Booking";
import Contact from "./page/Contact";
import Fleet from "./page/Fleet";
import Home from "./page/Home";
import Service from "./page/Service";

function App() {
  const Layout = () => (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/service",
          element: <Service ButtonTextColor="text-black" HeaderColor="text-black" />,
        },
        {
          path: "/review",
          element: <Review />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/booking",
          element: <Booking />,
        },
        {
          path: "/fleet",
          element: <Fleet bannerTextColor="text-black"  ButtonTextColors="text-black" />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
