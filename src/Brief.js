import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Brief_component/header";
import Content from "./Brief_component/content"
import Content1 from "./Brief_component/content2"
import Content2 from "./Brief_component/content3"

function Brief() {
  const navigate = useNavigate();

  const level_1 = () => {
    navigate('/Test', { state: { id: 3 } });
  };
  

  return (
    <>
    <Header />
    <Content2 />
    <Content />
    <Content1 />

    </>
  );
}

export default Brief;
