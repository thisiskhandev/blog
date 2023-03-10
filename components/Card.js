import Image from "next/image";
import React from "react";
import DefaultImg from "assets/images/default-product-image.png";
import styles from "styles/Product.module.css";
import Link from "next/link";

export default function Card(props) {
  const { title, desc, price, imgsrc, path } = props;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl h-full">
      <figure>
        <Image
          src={imgsrc || DefaultImg}
          alt={title || "demo"}
          width={400}
          height={300}
          className={"object-cover object-top " + styles.img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title || "TITLE"}</h2>
        <p style={{ ...excerpt }}>{desc || "Description"}</p>
        <div className="card-actions justify-end">
          {price && typeof Number ? (
            <button className="btn btn-primary">
              Buy ({"$" + price || 0.0})
            </button>
          ) : (
            <Link href={path || "/"} className="btn btn-primary">
              Read More
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

const excerpt = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "200px",
};
