import { useState } from 'react'
import AddNewItemToCartForm from './AddNewItemToCartForm';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <div>
        <h1>Grocery List Calculator</h1>
        <p>Goal: Create your grocery list and calculate the total cost in real-time.</p>
      </div>
      <div className='wrapper'>
        <h2>Grocery Items</h2>
        <div className='list-wrapper'>
          <ol className='shopping-list'>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ol>
          {cartItems.length > 0 && (
            <div className='cart-total'>
              Total: ${cartItems.reduce((sum, item) => sum + Number(item.price), 0).toFixed(2)}
            </div>
          )}
        </div>
        <AddNewItemToCartForm 
          cartItems = {cartItems} 
          setCartItems ={setCartItems}
        />
      </div>
    </>
  )
}

export default App
