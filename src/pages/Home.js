import React from "react";
import Layout from "../components/Layout";
import Maps from "./Maps";


const Home = () => {
  return (
    <div>
    <Layout />
      <div className="-z-10 absolute w-screen h-screen">
        <Maps />
      </div>
    
    </div>
  );
};

export default Home;
