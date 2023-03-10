import Card from "components/Card";
import productsList from "../api/API";
import { useEffect, useState } from "react";
import { SERVER_URL } from "components/constants";
import SkeletonCard from "components/SkeletonCard";
import Wrapper from "components/Wrapper";
import Headings from "components/Headings";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    productsList()
      .then((res) => {
        setLoading(true);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper>
      <section>
        <Headings />
        <div className="grid gap-10 grid-cols-3 grid-rows-3 place-items-center">
          {isLoading ? (
            <SkeletonCard count={6} />
          ) : product ? (
            product.map((list, index) => {
              return (
                <Card
                  key={index}
                  title={list.attributes.title}
                  price={list.attributes.price}
                  imgsrc={
                    list.attributes.cover.data
                      ? SERVER_URL + list.attributes.cover.data.attributes.url
                      : ""
                  }
                  desc={list.attributes.desc}
                />
              );
            })
          ) : (
            <h2>☹️ No Products found!</h2>
          )}
        </div>
      </section>
    </Wrapper>
  );
}
