import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
import Card from './Components/Card';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "product"));
        const productList = [];
        querySnapshot.forEach((doc) => {
          productList.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productList);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    fetchData();
  }, []);

  return (


    <>
    <Navbar />    
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            image={product.image}
            title={product.name}
            description={product.description}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductPage;
