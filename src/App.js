import React, { Children, Suspense, lazy, useState } from "react";
import UserContext from "./utils/UserContext";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyContainer from "./components/BodyContainer";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import DetailCard from "./components/DetailCard";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./reducer/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=>import("./components/Grocery"));
const AppLayout=()=>{
    const [userName,setUserName] = useState('Vamsi Mopuri')
    return (
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<BodyContainer/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
      {
        path:"/resta/:resoId",
        element:<DetailCard />
      }
    ],
    errorElement:<Error />,
}
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
