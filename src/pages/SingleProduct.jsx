import { useNavigate } from "react-router-dom"

const SingleProduct = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto px-64 mt-32">
        <button className="mb-12 text-xl rounded-full bg-black-400 font-bold" onClick={()=>navigate(-1)}>Back</button>
        <div className="flex">
            <img src="/images/peproni.png" alt="pizza" />
            <div className="ml-16">
                <h1 className="text-xl font-bold">Havana Special</h1>
                <div className="text-mid">Small</div>
                <div className="font-bold mt-2">Rs. 400</div>
                <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
            </div>

        </div>
        
    </div> 
  )
}
export default SingleProduct