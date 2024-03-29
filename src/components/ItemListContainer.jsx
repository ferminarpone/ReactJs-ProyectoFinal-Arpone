import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";

function ItemListContainer() {
  const [product, setProduct] = useState([]);
  const { category } = useParams();
  //Llamado a la DB.
  useEffect(() => { 
    const dBase = getFirestore();
    const itemsCollection = collection(dBase, "motos");
    getDocs(itemsCollection).then((snapshot) => {
      setProduct(
        snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))
      );
    })  
  }, []);

  //Filtro por categorias.
  const filterCart = product.filter((el) => el.categoria === category);

  return (
    <>
      {category ? (
        <ItemList product={filterCart} categoria={category} />
      ) : (
        <ItemList product={product} />
      )}
    </>
  );
}

export default ItemListContainer;
