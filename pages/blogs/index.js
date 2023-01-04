import Card from "@components/Card";
import Headings from "@components/Headings";
import Wrapper from "@components/Wrapper";

export default function Blogs() {
  return (
    <>
      <Headings />
      <Wrapper styles={styling}>
        <Card />
      </Wrapper>
    </>
  );
}

const styling = {
  height: "100vh",
};
