import React from "react";
import Home from "./components/pages/Home";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Setting from "./components/pages/settings/Setting";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import { BrowserRouter ,Routes, Route } from "react-router-dom"

function App() {
  const currentUser = false;

  return (
        <BrowserRouter>
            <Topbar/>
           <Routes>
              
             <Route path="/" element={<Home/>}/>
             <Route path="/register" element={currentUser ? <Home/> : <Register/>}/>
             <Route path="/login" element={currentUser ? <Home/> : <Login/>}/>
             <Route path="/write" element={<Write/>}/>
             <Route path="/setting" element={currentUser ? <Setting/> : <Register/>}/>
             <Route path="/post/:postId" element={<Single/>}/>

             
           </Routes>

        </BrowserRouter>
  );
}

export default App;
