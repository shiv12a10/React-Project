import { Link } from "react-router-dom";
import FProduct from "./FProduct";
import { useEffect, useState } from "react";
//------------------------------- DETAILS FROM BACKEND
const productList = [
  {
    path: '/images/peproni.png',
    name: 'Havana Special',
    price: 500
  },
  {
    path: '/images/peproni.png',
    name: 'Cheese Pasta Mix',
    price: 900
  },
  {
    path: '/images/peproni.png',
    name: 'Chinese Special',
    price: 900
  },
  {
    path: '/images/peproni.png',
    name: 'Indian Special',
    price: 900
  },
  {
    path: '/images/peproni.png',
    name: 'Domino\'s',
    price: 800
  },
  {
    path: '/images/peproni.png',
    name: 'Havana Special',
    price: 400
  },
  {
    path: '/images/pizza.png',
    name: 'Cheese Burst',
    price: 500
  },
  {
    path: '/images/peproni.png',
    name: 'Capsicum Mix',
    price: 4000
  },
  {
    path: '/images/peproni.png',
    name: 'Onion Mix',
    price: 5000
  },
  {
    path: '/images/peproni.png',
    name: 'Red Chilli',
    price: 1000
  },
]


const Products = () => {
  const [produstList, setProductList] = useState([]);
  const handleCart = (element) => {
    const data = {
      name: element.name,
      price: element.price,
      path: element.path
    }
    let newItems = [...produstList];
    newItems.push(data);
    // console.log(newItems);
    setProductList(newItems);
    console.log(produstList);
  }
  // useEffect(() => {
  //   localStorage.setItem('items', JSON.stringify(produstList));
  // }, [produstList]);

  return (
    <Link to='/products/single-product'>
      <div className="container mx-auto px-28 pb-24">
        <h1 className="text-xl font-bold my-8 mx-">
          Products
        </h1>
        <div className="grid grid-cols-5 my-8 gap-24">
          {productList.map((element, index) => {
            return <div key={index}>
              <FProduct path={element.path} price={element.price} name={element.name} />
              <button className="bg-yellow-400 rounded-full py-1 px-4 font-bold text-sm" onClick={() => handleCart(element)}>ADD</button>
            </div>
          })}

        </div>
      </div>
    </Link>
  )
}

export default Products;