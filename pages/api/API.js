import { API_URL } from "components/constants";

const productsList = async () => {
  let res = await fetch(`${API_URL}/products?populate=*`);
  let data = await res.json();
  return data;
};

export default productsList;
