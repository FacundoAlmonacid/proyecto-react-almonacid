import { ProductCard } from "../../components/productCard/ProductCard";
import "./ItemList.css";
import * as React from 'react';

const ItemList = ({ items }) => {
  return (
    <div className="raro">
      {items.map((elemento) => {
        return (



  
          <ProductCard
            key={elemento.id}
            img={elemento.img}
            title={elemento.title}
            description={elemento.description}
            category={elemento.category}
            price={elemento.price}
            stock={elemento.stock}
            id={elemento.id}


          />

        );
      })}
    </div>
  );
};

export default ItemList;
