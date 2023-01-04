const CTA = (props) => {
  return (
    <a href={props.link || "/#"}>
      <button className="btn my-2 p-0 w-52">{props.name || "Button"}</button>
    </a>
  );
};

export default CTA;
