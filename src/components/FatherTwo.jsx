import React, { useEffect, useState } from "react";
import Two from "./Two";

const FatherTwo = () => {
  const [heritage, setHeritage] = useState([]);
  useEffect(() => {
    fetch(" https://fortnite-api.com/v1/banners")
      .then((response) => response.json())
      .then((evidance) => setHeritage(evidance.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      {heritage.map((background) => (
        <Two
          name={background.name}
          description={background.description}
          key={background.key}
        />
      ))}
    </div>
  );
};

export default FatherTwo;
