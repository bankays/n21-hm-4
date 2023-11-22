import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
import FatherOne from "./components/FatherOne";
import FatherTwo from "./components/FatherTwo";
function App() {
  // const [productdata, setProductdata] = useState([]);

  // useEffect(() => {
  //   fetch("https://fortnite-api.com/v1/banners")
  //     .then((response) => response.json())
  //     .then((data) => setProductdata(data))
  //     .catch((error) => console.log(error));
  // }, []);
  // console.log(productdata);

  return (
    <>
      {/* {productdata.map((product) => (
        <div>
          <h1>{product.name}</h1>
        </div>
      ))} */}
      {/* <FatherOne />;
       */}
      <FatherOne /> <FatherTwo />
    </>
  );
}

export default App;
