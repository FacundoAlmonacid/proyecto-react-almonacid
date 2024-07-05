const ItemDetail = ({ item }) => {
  return (
    <div>
   
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <p>{item.stock}</p>
      <p>{item.category}</p>
    </div>
  );
};

export default ItemDetail;
