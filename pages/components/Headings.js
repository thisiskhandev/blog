import { useRouter } from "next/router";
import React from "react";
import Wrapper from "./Wrapper";

const Headings = () => {
  const router = useRouter();
  const objQuery = Object.values(router.query)[0];
  const heading =
    Object.keys(router.query).length > 0
      ? objQuery
      : router.asPath.replaceAll("/", "");
  return (
    <main className="container mx-auto px-2 my-20">
      <h1 className="title text-start font-bold text-7xl text-sm-3xl uppercase">
        {heading.includes("-")
          ? heading.replaceAll("-", " ")
          : heading || "Headings"}
      </h1>
    </main>
  );
};

export default Headings;
