import React from "react";
import useApi from "utils/Hooks/useApi";
import { useParams } from "react-router-dom";

const Country: React.FC = () => {
  const { country } = useParams();
  const [state, setState] = useApi({
    method: "GET",
    url: country
      ? `https://api.covid19api.com/total/country/${country.toLocaleLowerCase()}`
      : "",
  });

  console.log(state);

  return (
    <div>
      <h1>{country}</h1>
    </div>
  );
};
export default Country;
