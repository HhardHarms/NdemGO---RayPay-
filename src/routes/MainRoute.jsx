import React, { lazy, Suspense } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Error404 from "../components/404/Err404";
import Error400 from "../components/400/Err400";
import SignUp from "../pages/Sign Up/SignUp";
import SignIn from "../pages/Sign In/SignIn";
import ResetPassword from "../pages/Reset Password/ResetPassword";

const AuthenticatedLayout = lazy(() => import("../Layout/AuthenticatedLayout"));
const UnAuthenticatedLayout = lazy(() =>
  import("../Layout/UnauthenticatedLayout")
);

const MainBody = ({ children }) => {
  return (
    <main className="h-[100vh] max-w-[100%]">
      {children ? children : <Outlet />}
    </main>
  );
};

const MainRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainBody />,
      errorElement: <Error400 />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loader />}>
              <AuthenticatedLayout />
            </Suspense>
          ),
          errorElement: <Error400 />,
        },
        {
          path: "auth",
          element: (
            <Suspense fallback={<Loader />}>
              <UnAuthenticatedLayout />
            </Suspense>
          ),
          errorElement: <Error400 />,
          children: [
            {
              index: true,
              element: <SignIn />,
              errorElement: <Error400 />,
            },
            {
              path: "signup",
              element: <SignUp />,
              errorElement: <Error400 />,
            },
            {
              path: "reset-password",

              children: [
                {
                  index: true,
                  element: <ResetPassword />,
                  errorElement: <Error400 />,
                },
                {
                  path: ":email",
                  element: <h1>Hello User With Email</h1>,
                  errorElement: <Error400 />,
                },
              ],
            },
            {
              path: "*",
              element: <Error404 />,
            },
          ],
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MainRoute;
