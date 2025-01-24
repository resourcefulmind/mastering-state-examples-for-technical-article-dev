# Grocery List Calculator

A real-time grocery list calculator built with React(Vite) that helps users manage their shopping list and calculate total costs.

PS: This all started from building out an example for an article i was writing on how to master React state. Original example code was supposed to be a shopping cart but a grocery list app made more sense(I am never satisfied with just writing list in the Notes app on my phone and doing the calculations myself)

## Features

### Core Functionality

- Add grocery items with names and prices
- Real-time calculation of individual item totals
- Automatic cart total calculation
- Responsive design for all screen sizes

### Unit Management

- Quantity input for each item
- Smart unit type selector
- Automatic pluralization of units (e.g., piece/pieces, bunch/bunches)
- Support for various measurement units:
  - Countable items (pieces, bunches, packs, cartons, crates)
  - Weight units (lbs, kg)
  - Volume units (gallons, liters)

### User Interface

- Clean, intuitive form layout
- Responsive design with optimized layouts for:
  - Desktop screens
  - Tablets
  - Mobile devices
- Two-column form layout for efficient space usage
- Real-time updates and calculations

## Technical Details

### Built With

- React (Vite)
- CSS3
- JavaScript

### Key Components

- `App.jsx`: Main application component
- `AddNewItemToCartForm.jsx`: Form handling component
- Helper functions for unit type formatting and calculations

### State Management

- React useState for state management
- Local state handling for form inputs
- Centralized cart state management

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open http://localhost:5173 to view it in your browser

## Usage

1. Enter item details in the form:
   - Item name
   - Quantity
   - Unit type
   - Price

2. Click "Add To Cart" to add the item to your list

3. The total cost will automatically update

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

- React documentation
- Modern CSS techniques
- Responsive design principles
- Josh Comeau's "Joy Of React"