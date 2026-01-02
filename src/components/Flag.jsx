import React from "react";
import brFlag from "../assets/img/br-flag.png";
import eeFlag from "../assets/img/ee-flag.png";

const countryFlags = {
  br: brFlag,
  ee: eeFlag,
};

const Flag = ({ country }) => {
  return <img src={countryFlags[country]} width={18} alt={"flag-" + country}></img>;
};

export default Flag;
