
import './App.css';
// import About from './routes/About';
import Navbar from './routes/Navbar';
import React,{useState} from 'react';
import Root from './routes/Root';
import Alert from './routes/Alert';
// import * as ReactDOM from "react-dom/client";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom"
// import ErrorPage from './routes/ErrorPage';
export default function App() {
  const[mode,setMode]=useState("light");  
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
   setAlert({ msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null)
   }, 2000);
  }
  const toggleMode=()=>{
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="#343a40"
      showAlert("Dark Mode Enabled","success")
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Dark Mode Disabled","success")
      
    }
  }
  return(
    <>
    <Navbar toggleMode={toggleMode} mode={mode}/>
    <Alert alert={alert}/>
    <Root heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
    </>
      
  )
  
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: [<Navbar toggleMode={toggleMode} mode={mode}/>,<Alert alert={alert}/>,<Root heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>],
  //     errorElement:<ErrorPage/>
  //   },
  //   {
  //     path: "/About",
  //     element:[<Navbar toggleMode={toggleMode} mode={mode}/>,<Alert alert={alert}/>,<About mode={mode}/>],
  //     errorElement:<ErrorPage/>
  //   },
  //   {
  //     path: "/TextForm",
  //     element: [<Navbar toggleMode={toggleMode} mode={mode} />,<Alert alert={alert}/>,<Root heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>],
  //     errorElement:<ErrorPage/>
  //   },
    
  
  // ]);
  
  // ReactDOM.createRoot(document.getElementById("root")).render(
  //   <React.StrictMode>
  //     <RouterProvider router={router} />
  //   </React.StrictMode>
  // );
    

}




