import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import CircularProgress  from "@mui/material/CircularProgress";

const SignIn = lazy(() => import("../pages/Login"));
const Hoe =lazy(()=> import('../pages/Group'));
const Regis =lazy(()=> import('../pages/Register'));
const Page =lazy(()=> import('./Product'));
const About = lazy(()=> import('../pages/Chat1'));
const Contact = lazy(()=> import('../pages/Home'));

const myRoutesArray = [
  {
    path: "/",
    element: <Suspense fallback={<CircularProgress />}> <SignIn /> </Suspense>,
  }, {
    path: "/group",
    element: <Suspense fallback={<CircularProgress />}> <Hoe />  </Suspense>,
  }, {
    path: "/Register",
    element:<Suspense fallback={<CircularProgress />}> <Regis/>  </Suspense>,
  },{
    path: "/React",
    element:<Suspense fallback={<CircularProgress/>}><Page/></Suspense>
  },{
    path: "/Chat1",
    element:<Suspense fallback={<CircularProgress/>}><About/></Suspense>
  },{
    path: "/home",
    element:<Suspense fallback={<CircularProgress/>}><Contact/></Suspense>
  }
]


const router = createBrowserRouter(myRoutesArray, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  },
});




function MyRoutes() {
  return (
    
      <RouterProvider router={router}  />
    
  )
}


export default MyRoutes