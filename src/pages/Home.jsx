import Products from "../components/Products";
const Home = () => {

      return (
            <>

                  <div className="hero px-20 py-16">
                        <div className="container mx-auto flex items-center justify-between">
                              <div className="w-1/2 px-28 ">
                                    <h6 className="text-1g"><em>Are you hungry?...</em></h6>
                                    <h1 className="text-3xl md:text-6xl font-bold">Don't wait</h1>
                                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>
                              </div>
                              <div className="w-1/2">
                                    <img src="/images/pizza.png" alt="pizza" className="w-4/5" />
                              </div>
                        </div>
                  </div>
                  <div className="pb-16">
                        <Products />
                  </div>
            </>
      )
}

export default Home;