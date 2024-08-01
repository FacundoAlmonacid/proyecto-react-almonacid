import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { Box, Container, Skeleton } from "@mui/material";
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productCollection = collection(db, "products");

    let consulta = productCollection;

    if (name) {
      consulta = query(productCollection, where("category", "==", name));
    }

    let getProducts = getDocs(consulta);
    getProducts.then((res) => {
      let arrayValido = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayValido);
      console.log(arrayValido);
    });
  }, [name]);

  if (items.length === 0) {
    return (
      <Container
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >

        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        <Box width={300}>
          <Box width={300} padding={2} border={1} borderRadius={2}>
            <Skeleton variant="rectangular" height={150} />
            <Box mt={1}>
              <Skeleton width="60%" height={30} />
            </Box>
            <Box mt={1}>
              <Skeleton width="80%" height={20} />
              <Skeleton width="80%" height={20} mt={0.5} />
              <Skeleton width="40%" height={20} mt={0.5} />
            </Box>
          </Box>
        </Box>
        

      </Container>
    );
  }

  /*    const addProducts= ( )=>{
    let productsCollection = collection(db,"products")
products.forEach(elemento =>{
  
    addDoc(productsCollection,elemento )
})

}  */

  return (
    <div>
      {/*   <Button onClick={addProducts}> Agregar productos </Button>   ; */}

      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
