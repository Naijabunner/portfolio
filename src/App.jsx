import React,{ useReducer, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Side from "./components/sidenav";
import Routepages from "./react-router/app_router";
const initialState = false
const navigation = (state, action) => {
  if (action) {
    return true;
  }
};
export const navContext = React.createContext();
function App() {
  const [navState, dispatch]= useReducer(navigation, initialState)
  return (
    <>
    <div className="app">
     <navContext.Provider value={{navState, dispatch}}>
      <Routepages/>
      <Footer />
      <div className="body_links">
        <div className="line_design"></div>
        <a href="https://wa.me/8130806204" target="blank">
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href="mailto:Okechukwudaniel12@gmail.com" target="blank">
          <i className="fa-regular fa-envelope"></i>
        </a>
        <a href="www.linkedin.com/in/okechukwudaniel" target="blank">
          <i className="fa-brands fa-linkedin-in"></i>
        </a>
      </div>
       <Side/>
     </navContext.Provider>
      
    </div>
      
    </>
  );
}

export default App;
