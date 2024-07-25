import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate = useNavigate();
  
  function moveTo(){
    navigate("/Instruction");
  }
    return (
      <>
      
      </>
    );
  };

  export default Header;