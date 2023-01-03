import { useRouter } from "next/router";
import React from "react";
import Wrapper from "./Wrapper";

const Headings = () => {
  const router = useRouter();
  const heading = router.asPath.replaceAll("/", "");
  return (
    <main className="container mx-auto px-2 my-20">
        <h1 className="title text-start font-bold text-7xl text-sm-3xl uppercase">
          {heading || "Headings"}
        </h1>
    </main>
  );
};

export default Headings;
