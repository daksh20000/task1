"use client"
import { useEffect, useState } from "react"
import ProductCard from "@/components/ProductCard"

export default function Home() {

  const [allProducts, setAllProducts] = useState([])
  const [numOfProdToShow, setnumOfProdToShow] = useState(20) //displaying 20at first


  const fetchData = async () => {
    try {
      const apiData = await fetch("https://dummyjson.com/carts")
      const jsonData = await apiData.json()
      const flattenedProducts = jsonData.carts.flatMap(cart => cart.products)//because of complex dtatstruc of prods api
      setAllProducts(flattenedProducts)
    } catch (error) {

      console.log(error)
    }
  };

  useEffect(() => {
    fetchData()
  }, [])

  const loadMoreProducts = () => {
    setnumOfProdToShow(numOfProdToShow + 20)
  }
  const productsToDisplay = allProducts.slice(0, numOfProdToShow)

  const addToCart = (product) => {
    alert(`${product.title} has been added to your cart!`)
  }

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productsToDisplay.map((product,index) => (
          <ProductCard
            key={index}// key given as index because api is giving me same products.
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>


      {numOfProdToShow < allProducts.length ?(
        <div className="mt-6 text-center">
        <button
          onClick={loadMoreProducts}
          className="py-2 px-6 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition-all duration-300 transform hover:scale-105"
        >
          Load More
        </button>
      </div>
      ):<div className="mt-6 text-center font-bold">You reached the end of it... <br /> <br /><u >Drink some water, Might be tired</u></div> }
    </div>
  );
}
