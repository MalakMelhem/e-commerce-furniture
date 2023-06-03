import React, { useEffect,useState,createContext} from 'react';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import { useParams } from 'react-router-dom';

export const productContext = createContext();

const SingleProduct = () => {
  const { productId } = useParams();
  const [data, setData] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://run.mocky.io/v3/bbe6ae4e-7fdb-49bd-8318-f6f4be02de2c'); 
        const jsonData = await response.json();
        setData(jsonData);
    
        const theProduct=jsonData.find(item => {
          return item.id === parseInt(productId);
        });   
        setProduct(theProduct);

      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
    <productContext.Provider value={product}>
      <ProductDetails />
    </productContext.Provider>
    <RelatedProducts product={product} data={data}/>
  </>
  );
}

export default SingleProduct;