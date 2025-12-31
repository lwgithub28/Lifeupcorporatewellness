import { useEffect, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Routes_App from "./Routes_App/Routes_App.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import Loading from "./Loading/Loading.js";
function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 3500)
  // }, [])
  // if (loading) {
  //   return <Loading />
  // }
  return (
    <>
      <div className="front-page">
        <Routes_App />
      </div>
    </>
  );
}

export default App;
