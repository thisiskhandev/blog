import React from "react";
const Wrapper = ({ children, styling }) => {
  return (
    <main style={styling} className="container mx-auto px-2 my-6">
      {children}
    </main>
  );
};

export default Wrapper;
