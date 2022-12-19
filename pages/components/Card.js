import Image from "next/image";
import React from "react";

const Card = (props) => {
  const { title, desc, price, imgsrc } = props;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          src={imgsrc || "https://placeimg.com/400/225/arch"}
          alt={title}
          width={400}
          height={400}
          className="object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title || "TITLE"}</h2>
        <p>{desc || "Description"}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy ({"$"+price || "PRICE"})</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
