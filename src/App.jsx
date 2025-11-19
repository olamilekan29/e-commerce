// import Navbar from './Components/Navbar.jsx'
// import Home from './Components/Home.jsx'
// import Decorate from './Components/Decorate.jsx'
// import Products from './Components/Products.jsx'
// import Dontknow from './Components/Dontknow.jsx'
// import Footer from './Components/Footer.jsx'


// function App() {
 

//   return (
//     <>
//       <Navbar/>
//       <Home/>
//       <Decorate/>
//       <Products/>
//       <Dontknow/>
//       <Footer/>
//     </>
//   )
// }

// export default App



import { useState } from "react";
import Navbar from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Decorate from './Components/Decorate.jsx';
import Products from './Components/Products.jsx';
import Dontknow from './Components/Dontknow.jsx';
import Footer from './Components/Footer.jsx';
import Cart from './Components/Cart.jsx';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add item OR increase quantity
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  // Remove item completely
  const removeItem = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <>
      <Navbar
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setShowCart(!showCart)}
      />

      {showCart && (
        <Cart
          cart={cart}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
          onClose={() => setShowCart(false)}
        />
      )}


      <Home />
      <Decorate />
      <Products onAddToCart={addToCart} />
      
      <Footer />
    </>
  );
}

export default App;
