import React, { useState } from 'react'
import './style.css'
import Data from './Data'

const App = () => {

  let [cartOpen, setCartOpen] = useState(false)


  let [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });


  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  const addToCart = ((item) => {
    const updatedcart = [...cartItems, item]
    setCartItems(updatedcart)
    localStorage.setItem('cart', JSON.stringify(updatedcart));
  })


  return (
    <>
      <nav class="bg-white shadow-md w-full fixed top-0 left-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">

            <div class="flex-shrink-0">
              <a href="#" class="text-2xl font-bold text-orange-500">MyLogo</a>
            </div>

            <div class="relative flex-shrink-0">
              <button
                onClick={openCart}
                class="flex items-center gap-2 cursor-pointer bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition relative"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 2m6 6a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
                Cart

                {/* Badge */}
                {cartItems.length > 0 && (
                  <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>


          </div>
        </div>
      </nav>

      {
        cartOpen ?
          <div className="pt-28 px-4 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-3xl shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-orange-500 flex items-center gap-2">
                  🛒 Your Cart
                </h2>
                <button
                  onClick={closeCart}
                  className="bg-red-500 text-white px-4 py-2 rounded-full shadow hover:bg-red-600 transition"
                >
                  Close
                </button>
              </div>

              {cartItems.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {cartItems.map((e, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                    >
                      <div className="w-24 h-24 flex-shrink-0 bg-white rounded-xl p-2 border">
                        <img
                          src={e.image}
                          alt="Product"
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">{e.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{e.description}</p>
                        <p className="text-md font-bold text-green-600 mt-2">${e.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400 text-lg font-medium">
                  🛍️ Your cart is empty. Start adding delicious items!
                </div>
              )}
            </div>
          </div>

          :
          <Data addToCart={addToCart} />
      }
    </>
  )
}

export default App
