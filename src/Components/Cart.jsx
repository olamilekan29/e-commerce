// const Cart = ({ cart, increaseQty, decreaseQty, removeItem }) => {
//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="fixed right-0 top-0 bg-white shadow-xl w-80 h-full p-5 z-50 overflow-y-auto">
//       <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      

//       {cart.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         cart.map((item) => (
//           <div key={item.id} className="border-b py-3">
//             <div className="flex justify-between">
//               <p>{item.title}</p>
//               <p>${item.price * item.quantity}</p>
//             </div>

//             <div className="flex items-center gap-3 mt-2">
//               <button
//                 onClick={() => decreaseQty(item.id)}
//                 className="px-2 bg-gray-200 rounded"
//               >
//                 -
//               </button>

//               <span>{item.quantity}</span>

//               <button
//                 onClick={() => increaseQty(item.id)}
//                 className="px-2 bg-gray-200 rounded"
//               >
//                 +
//               </button>

//               <button
//                 onClick={() => removeItem(item.id)}
//                 className="ml-auto text-red-500"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))
//       )}

//       {/* FOOTER */}
//       {cart.length > 0 && (
//         <div className="mt-5">
//           <h3 className="text-lg font-semibold">Total: ${total}</h3>

//           <button className="mt-3 w-full bg-green-600 text-white py-2 rounded">
//             Checkout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;



const Cart = ({ cart, increaseQty, decreaseQty, removeItem, onClose }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed right-0 top-0 bg-white shadow-xl w-80 h-full p-5 z-50 overflow-y-auto">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="border-b py-3">
            <div className="flex justify-between">
              <p>{item.title}</p>
              <p>${item.price * item.quantity}</p>
            </div>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 bg-gray-200 rounded"
              >
                +
              </button>

              <button
                onClick={() => removeItem(item.id)}
                className="ml-auto text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="mt-5">
          <h3 className="text-lg font-semibold">Total: ${total}</h3>

          <button className="mt-3 w-full bg-green-600 text-white py-2 rounded">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
