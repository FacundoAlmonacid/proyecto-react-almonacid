import ItemList from "./ItemList";
import { products } from "../../products";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let x = true;
      let arrayFiltered = products.filter(
        (product) => product.category === name
      );
      if (x) {
        resolve(name ? arrayFiltered : products);
      }
    });

    getProducts.then((res) => {
      setItems(res);
    });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
