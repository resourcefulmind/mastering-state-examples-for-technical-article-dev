import React from "react";

function AddNewItemToCartForm({ cartItems, setCartItems }) {
    const [inputValue, setInputValue] = React.useState('') //first state in App.js, setting another state for the input value, local state, to keep input handling local
    const [priceValue, setPriceValue] = React.useState('0.00') //setting a third state for the price value, local state to keep price handling local as well
    const [unitValue, setUnitValue] = React.useState('1') //setting a fourth state for the unit value, local state to keep unit handling local as well
    const [unitType, setUnitType] = React.useState('pieces') //setting a fifth state for the unit type, local state to keep unit handling local as well

    const unitTypes = [
        'piece(s)', 
        'lbs', 
        'kg', 
        'gallon(s)', 
        'liter(s)', 
        'bunch(es)', 
        'pack(s)', 
        'carton(s)', 
        'crate(s)'
    ]


    function addToCart(event) {
        event.preventDefault(); //prevent page refresh

        setCartItems(prevCartItems => [...prevCartItems, {
            id: crypto.randomUUID(), 
            name: inputValue, 
            price: Number(priceValue), //Number converts the string to number
            unit: Number(unitValue), 
            unitType: unitType, 
            
        }]) //adds new items to the grocery cart

        //reset form after submission
        setInputValue('');
        setPriceValue('0.00');
        setUnitValue('1');
        setUnitType('pieces')
    }

    return (
        <div className="new-list-item-form">
            <form onSubmit={addToCart}>
                <div className="row">
                    <div>
                        <label htmlFor="new-list-form-input">
                            Item Name:
                        </label>
                        <input 
                            required={true}
                            id="new-list-form-input"
                            type="text"
                            value={inputValue}
                            onChange={event => setInputValue(event.target.value)}
                        />
                    </div>

                    <div>
                       <label htmlFor="new-list-form-input">
                        Quantity: 
                        </label> 
                        <input 
                            required={true} 
                            id="new-list-form-input" 
                            type="number" 
                            value={unitValue}
                            onChange={event => setUnitValue(event.target.value)}
                        />
                    </div>

                    <div>
                       <label htmlFor="unit-type">
                        Unit: 
                        </label> 
                        <select 
                            required={true} 
                            id="unit-type"  
                            value={unitType}
                            onChange={event => setUnitType(event.target.value)}
                        >
                            <option value="">Select Unit Type</option>
                            {unitTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    
                    <div>
                        <label htmlFor="new-list-form-price">
                            Price ($):
                        </label>
                        <input 
                            required={true}
                            id="new-list-form-price"
                            type="number"
                            min="0"
                            step="0.01"
                            value={priceValue}
                            onChange={event => setPriceValue(event.target.value)}
                        />
                    </div>
                    <button>Add To Cart</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewItemToCartForm;