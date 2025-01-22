import React from "react";

function AddNewItemToCartForm({ cartItems, setCartItems }) {
    const [inputValue, setInputValue] = React.useState('') //setting another state for the input value, local state, to keep input handling local
    const [priceValue, setPriceValue] = React.useState('') //setting a third state for the price value, local state to keep price handling local as well

    function addToCart(event) {
        event.preventDefault(); //prevent page refresh

        setCartItems(prevCartItems => [...prevCartItems, {
            id: crypto.randomUUID(), 
            name: inputValue, 
            price: Number(priceValue), //Number converts the string to number
        }]) //adds new items to the cart

        //reset form after submission
        setInputValue('');
        setPriceValue('');
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