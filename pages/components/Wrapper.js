import React from "react";
const Wrapper = ({ children, styles, className }) => {
  return (
    <main styles={styles} className={"container mx-auto px-2 my-6 " + className}>
      {children}
    </main>
  );
};

export default Wrapper;
