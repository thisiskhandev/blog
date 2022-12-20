import Card from "./components/Card";
import productsList from "./api/API";
import { useEffect, useState } from "react";
import { SERVER_URL } from "./components/constants";

const products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    productsList()
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="">
      <div className="p-36">
        <h1 className="text-5xl font-bold text-center mb-16">Products</h1>
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {product.map((list, index) => {
            return (
              <Card
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
          })}
        </div>
      </div>
    </main>
  );
};

export default products;
