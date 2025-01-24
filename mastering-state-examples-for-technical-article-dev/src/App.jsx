import { useState } from 'react'
import AddNewItemToCartForm from './AddNewItemToCartForm';
import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([])

  // Enhanced helper function to handle multiple plural cases
  function formatUnitType(quantity, type) {
    const num = Number(quantity)
    switch(type) {
      case 'bunch(es)':
        return num === 1 ? 'bunch' : 'bunches'
      case 'piece(s)':
        return num === 1 ? 'piece' : 'pieces'
      case 'pack(s)':
        return num === 1 ? 'pack' : 'packs'
      case 'carton(s)':
        return num === 1 ? 'carton' : 'cartons'
      case 'crate(s)':
        return num === 1 ? 'crate' : 'crates'
      default:
        return type  // If the units don't change (lbs, kg, gallons, liters)
    }
  }

  return (
    <>
      <div>
        <h1>Grocery List Calculator</h1>
        <p>Goal: Create your grocery list and calculate the total cost in real-time</p>
      </div>
      <div className='wrapper'>
        <h2>Grocery Items</h2>
        <div className='list-wrapper'>
          <ol className='shopping-list'>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} | {item.unit} {formatUnitType(item.unit, item.unitType)} | ${item.price.toFixed(2)} = ${(item.unit * item.price).toFixed(2)}
              </li>
            ))}
          </ol>
          {cartItems.length > 0 && (
            <div className='cart-total'>
              Total: ${cartItems.reduce((sum, item) => sum + item.unit * Number(item.price), 0).toFixed(2)}
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
