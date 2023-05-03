import { Oval } from "react-loader-spinner";
import React from "react";

function Loader({ height, width, color }) {
  return (
    <Oval
      height={height}
      width={width}
      color={color}
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#FFFFFF"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
}

export default Loader;
