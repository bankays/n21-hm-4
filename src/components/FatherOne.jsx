// import React, { useDeferredValue, useEffect, useState } from "react";
// import One from "./One";

// const FatherOne = () => {
//   const [productdata, setProductdata] = useState([]);
//   //   useEffect(() => {
//   //     fetch("https://fortnite-api.com/v1/banners")
//   //       .then((response) => response.json())
//   //       .then((data) => setProductdata(data))
//   //       .catch((error) => console.log(error));
//   //   }, []);

//   useEffect(() => {
//     fetch("https://fortnite-api.com/v1/banners")
//       .then((response) => response.json())
//       .then((data) => setProductdata(data))
//       .catch((error) => console.log(error));
//   }, []);
//   //   console.log(productdata);
//   return (
//     <>
//       {/* {productdata((product) => (
//         <One name={product.name} />
//       ))} */}
//       {productdata.map((pproduct) => {
//         <div>
//           <h1>{pproduct.name}</h1>
//           console.log("product.name");
//         </div>;
//       })}
//     </>
//   );
// };

// export default FatherOne;
import React, { useEffect, useState } from "react";
import One from "./One";

const FatherOne = () => {
  const [heritage, setHeritage] = useState([]);
  useEffect(() => {
    fetch(" https://reqres.in/api/users")
      .then((response) => response.json())
      .then((evidance) => setHeritage(evidance.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {heritage.map((background) => (
        <One
          email={background.email}
          firstName={background.first_name}
          key={background.key}
          img={background.avatar}
        />
      ))}
    </div>
  );
};

export default FatherOne;
