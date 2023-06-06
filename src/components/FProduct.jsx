
const FProduct = ({path, name, price}) => {

  return (
    <div>
        <img src={path} alt="pizza" />
        <div className="text-center">
            <h2 className="text-lg font-bold py-2">{name}</h2>
             <span className="bg-gray-200 py-1 rounded-full text-sm px-4" >Small</span>
        </div>
        <div className="flex justify-between items-center mt-4">
            <span>Rs. {price}</span>
        </div>
    </div>
  )
}

export default FProduct;