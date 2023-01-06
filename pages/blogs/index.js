import { useState } from "react";
import Card from "@components/Card";
import Headings from "@components/Headings";
import Wrapper from "@components/Wrapper";
import { NEWS_API } from "@components/constants";
import SkeletonCard from "@components/SkeletonCard";

export const getStaticProps = async () => {
  // const [isLoading, setLoading] = useState(false);
  const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-12-04&sortBy=publishedAt&apiKey=${NEWS_API}`;
  const res = await fetch(url);
  // setLoading(true);
  const data = await res.json();
  // setLoading(false);
  console.log(url);
  return {
    props: {
      news: data,
    },
  };
};

const Blogs = ({ news }) => {
  console.log(news);
  return (
    <>
      <Wrapper styles={styling}>
        <section>
          <Headings />
          <div className="grid gap-10 grid-cols-3 place-items-center">
            {news.articles ? (
              news.articles.slice(0, 6).map((elem, index) => {
                {
                  /* let titlee = elem.title
                .replaceAll(" ", "-")
                .toLowerCase()
                .replace(/[^-a-z0-9]+/g, ""); */
                }
                return (
                  <Card
                    key={index}
                    title={elem.title}
                    path={`/blog/${index + 1}`}
                    imgsrc={elem.urlToImage}
                    desc={elem.description}
                  />
                );
              })
            ) : (
              <p>No news found!</p>
            )}
          </div>
          <div className="w-80 mx-auto my-24">
            <div className="btn-group grid grid-cols-2">
              <button className="btn btn-outline">Previous</button>
              <button className="btn btn-outline">Next</button>
            </div>
          </div>
        </section>
      </Wrapper>
    </>
  );
};

export default Blogs;

const styling = {
  height: "auto",
};
