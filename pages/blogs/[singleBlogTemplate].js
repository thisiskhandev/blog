import { useRouter } from "next/router";
import Wrapper from "@components/Wrapper";
import Headings from "@components/Headings";

const pageNo = () => {
  const router = useRouter();
  const pageNumber = router.query.singleBlogTemplate;
  return (
    <>
      <Wrapper>
        <Headings pageName={pageNumber} />
      </Wrapper>
    </>
  );
};

export default pageNo;
