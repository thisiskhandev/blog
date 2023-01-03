import React from "react";
import Card2 from "../components/Card2";
import Headings from "../components/Headings";
import Wrapper from "../components/Wrapper";

export default function Blogs() {
  return (
    <>
      <Headings />
      <Wrapper styling={styling} test="hi">
        <Card2 />
      </Wrapper>
    </>
  );
}

const styling = {
  height: "100vh",
};
