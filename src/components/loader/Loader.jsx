import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed bg-gray-800 bg-opacity-40 z-10 top-0 left-0 bottom-0 right-0">
      <div className="absolute z-50 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
      <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#7c2d12', '#7c2d12', '#7c2d12', '#7c2d12', '#7c2d12']}
  />
      </div>
    </div>
  );
};

export default Loader;
