import { useState } from "react";
import { useFinTechContext } from "./context/Context";
import StraightAnglePieChart from "./components/PieChart/PieChart";
import { AuthForm } from "./components/AuthForm/AuthForm";
import ApiService from "./services/Api.services";

import "./App.scss";

function App() {
  const {user, login, logout} = useFinTechContext();

  console.log(user,'user')

  async function fetchData() {
    try {
      const data = await ApiService.get("posts", { limit: 10 });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  // console.log(fetchData(), "dsaadas");

  if(!user) {
    return <AuthForm />;
  }

  return (
    <>
      {/* <AuthForm /> */}
      <StraightAnglePieChart />
      
    </>
  );
}

export default App;
