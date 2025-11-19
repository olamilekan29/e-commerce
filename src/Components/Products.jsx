// import React, { useEffect, useState } from "react"

// const Products = () => {
//   // 1️⃣ Create a state to store products
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState(null)

//   // 2️⃣ Fetch data from API using useEffect
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true)
//         const res = await fetch("https://fakestoreapi.com/products")
//         if (!res.ok) throw new Error("Failed to fetch products")
//         const data = await res.json()
//         setProducts(data) // store in state
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProducts()
//   }, []) // runs once when component mounts

//   // 3️⃣ Conditional rendering (loading/error states)
//   if (loading) return <p className="text-center text-white bg-red-600">Loading products...</p>
//   if (error) return <p className="text-center text-red-500">{error}</p>

//   // 4️⃣ Render dynamically with .map()
//   return (
//     <div className="bg-white min-h-screen p-8">
//       <h1 className="text-3xl font-bold text-center text-[rgb(92,61,46)] mb-10">
//         🛒 Product List
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-[rgb(133,102,87)] text-white rounded-xl  hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-64 object-contain p-6"
//             />
//             <div className="px-6 pb-6">
//               <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
//               <p className="text-gray-400 text-sm mb-4 line-clamp-2">
//                 {product.description}
//               </p>
//               <p className="text-white font-bold mb-4">${product.price}</p>
//               <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Products

// import React, { useEffect, useState } from "react";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch("https://dummyjson.com/products/");
//         const data = await res.json();
//         setProducts(data.products);
//       } catch (err) {
//         setError(`Failed to fetch products: ${err.message}`);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-center text-white bg-red-600">
//         <div className="bg-white min-h-screen p-8">
//           <h1 className="text-3xl font-bold text-center text-[rgb(92,61,46)] mb-10">
//             🛒 Products
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-2">
//             <div className="bg-[rgb(133,102,87)] text-white rounded-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex justify-center items-center p-4">
//                 <div className="w-64 h-64 object-contain bg-gray-200 animate-pulse"></div>
//               </div>
//               <div className="px-6 pb-6">
//                 <div className="font-semibold text-lg my-2 w-full bg-gray-200 h-6 animate-pulse"></div>
//                 <div className="text-gray-300 text-sm mb-4 line-clamp-2 bg-gray-200 h-6 animate-pulse"></div>
//                 <p className="font-bold mb-4 bg-gray-200 h-6 w-8 animate-pulse"></p>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg float-left h-10 w-24 animate-pulse mb-4"></button>
//               </div>
//             </div>
//             <div className="bg-[rgb(133,102,87)] text-white rounded-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex justify-center items-center p-4">
//                 <div className="w-64 h-64 object-contain bg-gray-200 animate-pulse"></div>
//               </div>
//               <div className="px-6 pb-6">
//                 <div className="font-semibold text-lg my-2 w-full bg-gray-200 h-6 animate-pulse"></div>
//                 <div className="text-gray-300 text-sm mb-4 line-clamp-2 bg-gray-200 h-6 animate-pulse"></div>
//                 <p className="font-bold mb-4 bg-gray-200 h-6 w-8 animate-pulse"></p>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg float-left h-10 w-24 animate-pulse mb-4"></button>
//               </div>
//             </div>
//             <div className="bg-[rgb(133,102,87)] text-white rounded-xl hover:scale-105 transition-transform duration-300">
//               <div className="flex justify-center items-center p-4">
//                 <div className="w-64 h-64 object-contain bg-gray-200 animate-pulse"></div>
//               </div>
//               <div className="px-6 pb-6">
//                 <div className="font-semibold text-lg my-2 w-full bg-gray-200 h-6 animate-pulse"></div>
//                 <div className="text-gray-300 text-sm mb-4 line-clamp-2 bg-gray-200 h-6 animate-pulse"></div>
//                 <p className="font-bold mb-4 bg-gray-200 h-6 w-8 animate-pulse"></p>
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded-lg float-left h-10 w-24 animate-pulse mb-4"></button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="bg-white min-h-screen p-8">
//       <h1 className="text-3xl font-bold text-center text-[rgb(92,61,46)] mb-10">
//         🛒 Products
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-[rgb(133,102,87)] text-white rounded-xl hover:scale-105 transition-transform duration-300"
//           >
//             <img
//               src={product.thumbnail}
//               alt={product.title}
//               className="w-full h-64 object-contain p-6"
//             />
//             <div className="px-6 pb-6">
//               <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
//               <p className="text-gray-300 text-sm mb-4 line-clamp-2">
//                 {product.description}
//               </p>
//               <p className="text-white font-bold mb-4">${product.price}</p>
//               <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded-lg">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;






import React, { useEffect, useState } from "react";

const Products = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://dummyjson.com/products/");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        setError(`Failed to fetch products: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="bg-white min-h-screen p-8">
        <h1 className="text-3xl font-bold text-center text-[rgb(92,61,46)] mb-10">
          🛒 Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-[rgb(133,102,87)] rounded-xl p-6 animate-pulse h-[400px]"
            ></div>
          ))}
        </div>
      </div>
    );

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-white min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center text-[rgb(92,61,46)] mb-10">
        🛒 Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[rgb(133,102,87)] text-white rounded-xl hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-64 object-contain p-6"
            />

            <div className="px-6 pb-6">
              <h2 className="font-semibold text-lg mb-2">{product.title}</h2>

              <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              <p className="text-white font-bold mb-4">${product.price}</p>

              <button
                onClick={() => onAddToCart(product)}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
