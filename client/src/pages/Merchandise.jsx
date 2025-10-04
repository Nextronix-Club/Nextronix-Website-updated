// import { motion } from "framer-motion";
// import { useState } from "react";
// import { MerchData, generateDriveUrls } from "../data/merchData";

// const Merchandise = () => {
//   const [previewModal, setPreviewModal] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [whatsappNumber, setWhatsappNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [orderStatus, setOrderStatus] = useState(null);

//   // Get unique categories for filter
//   const categories = ["All", ...new Set(MerchData.map(item => item.category))];

//   // Filter merchandise based on search and category
//   const filteredMerch = MerchData.filter(item => {
//     const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const getCategoryColor = (category) => {
//     const colors = {
//       "Apparel": "text-blue-400 bg-blue-400/20",
//       "Accessories": "text-green-400 bg-green-400/20",
//       "Collectibles": "text-purple-400 bg-purple-400/20"
//     };
//     return colors[category] || "text-gray-400 bg-gray-400/20";
//   };

//   const handlePreview = (item) => {
//     const urls = generateDriveUrls(item.driveId);
//     setPreviewModal({ ...item, previewUrl: urls.preview });
//   };

//   const handleAddToCart = (item) => {
//     setCart(prev => [...prev, { ...item, quantity: 1 }]);
//   };

//   const handleCheckout = () => {
//     if (!whatsappNumber || !email) {
//       setOrderStatus("Please provide both WhatsApp number and email.");
//       return;
//     }
//     // Simulate sending order confirmation
//     setOrderStatus("Order placed! You will receive confirmation via WhatsApp and email.");
//     setCart([]);
//     setShowCheckout(false);
//     setWhatsappNumber("");
//     setEmail("");
//   };

//   const PreviewModal = () => {
//     if (!previewModal) return null;

//     return (
//       <motion.div
//         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setPreviewModal(null)}
//       >
//         <motion.div
//           className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-4xl w-full h-[80vh] overflow-hidden"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6 border-b border-gray-700 flex justify-between items-center">
//             <h3 className="text-xl font-orbitron font-bold text-white">
//               {previewModal.title}
//             </h3>
//             <button
//               onClick={() => setPreviewModal(null)}
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="h-full">
//             <iframe
//               src={previewModal.previewUrl}
//               className="w-full h-full"
//               title={previewModal.title}
//             />
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   const CheckoutModal = () => {
//     if (!showCheckout) return null;

//     return (
//       <motion.div
//         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         onClick={() => setShowCheckout(false)}
//       >
//         <motion.div
//           className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-md w-full p-6"
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           exit={{ scale: 0.8, opacity: 0 }}
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h3 className="text-xl font-orbitron font-bold text-white mb-4">Checkout</h3>
//           <div className="mb-4">
//             <label className="block text-gray-400 mb-2">WhatsApp Number</label>
//             <input
//               type="text"
//               value={whatsappNumber}
//               onChange={(e) => setWhatsappNumber(e.target.value)}
//               className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue"
//               placeholder="Enter WhatsApp number"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-400 mb-2">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue"
//               placeholder="Enter email"
//             />
//           </div>
//           {orderStatus && (
//             <div className="text-center text-green-400 mb-4">{orderStatus}</div>
//           )}
//           <div className="flex justify-end gap-2">
//             <button
//               onClick={() => setShowCheckout(false)}
//               className="px-4 py-2 rounded-lg bg-gray-700/50 text-gray-400 hover:bg-gray-600/50"
//             >
//               Cancel
//             </button>
//             <motion.button
//               onClick={handleCheckout}
//               className="px-4 py-2 rounded-lg bg-neon-blue text-black font-medium"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Place Order
//             </motion.button>
//           </div>
//         </motion.div>
//       </motion.div>
//     );
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <motion.h1
//         className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white"
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         Merchandise Shop
//       </motion.h1>

//       <motion.p
//         className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//       >
//         Explore our exclusive collection of Nextronix merchandise.
//       </motion.p>

//       {/* Search and Filter Section */}
//       <motion.div
//         className="mb-8 flex flex-col md:flex-row gap-4 items-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.3 }}
//       >
//         <div className="flex-1 max-w-md">
//           <input
//             type="text"
//             placeholder="Search merchandise..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-colors"
//           />
//         </div>
//         <div className="flex gap-2 flex-wrap">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-neon-blue text-black"
//                   : "bg-gray-800/50 text-gray-400 border border-gray-600 hover:border-neon-blue/50 hover:text-neon-blue"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </motion.div>

//       {/* Cart Summary */}
//       <motion.div
//         className="mb-8 flex justify-end"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <motion.button
//           onClick={() => setShowCheckout(true)}
//           className="px-6 py-3 bg-neon-blue text-black font-medium rounded-lg"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           disabled={cart.length === 0}
//         >
//           Cart ({cart.length})
//         </motion.button>
//       </motion.div>

//       {/* Merchandise Grid */}
//       <motion.div
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         {filteredMerch.map((item, index) => (
//           <motion.div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.1 }}
//           >
//             <img
//               src={generateDriveUrls(item.driveId).thumbnail}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 flex flex-col flex-grow">
//               <h3 className="text-lg font-orbitron font-bold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getCategoryColor(item.category)}`}>
//                 {item.category}
//               </span>
//               <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
//               <p className="text-gray-900 font-medium mb-4">${item.price.toFixed(2)}</p>
//               <div className="flex justify-between gap-2">
//                 <motion.button
//                   onClick={() => handlePreview(item)}
//                   className="flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-600/30 hover:border-blue-400 transition-all duration-300 text-sm font-medium"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Preview
//                 </motion.button>
//                 <motion.button
//                   onClick={() => handleAddToCart(item)}
//                   className="flex-1 bg-green-600/20 border border-green-500/30 text-green-400 px-4 py-2 rounded-lg hover:bg-green-600/30 hover:border-green-400 transition-all duration-300 text-sm font-medium"
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Add to Cart
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {filteredMerch.length === 0 && (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-lg mb-2">No items found</div>
//           <div className="text-gray-500">Try adjusting your search or filter criteria</div>
//         </div>
//       )}

//       {/* Stats Section */}
//       <motion.div
//         className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, delay: 0.5 }}
//       >
//         <div className="bg-gray-800/50 rounded-xl border border-neon-blue/30 p-6 text-center">
//           <div className="text-3xl font-orbitron font-bold text-neon-blue mb-2">
//             {MerchData.length}
//           </div>
//           <div className="text-gray-400">Total Items</div>
//         </div>
//         <div className="bg-gray-800/50 rounded-xl border border-neon-blue/30 p-6 text-center">
//           <div className="text-3xl font-orbitron font-bold text-green-400 mb-2">
//             {categories.length - 1}
//           </div>
//           <div className="text-gray-400">Categories</div>
//         </div>
//         <div className="bg-gray-800/50 rounded-xl border border-neon-blue/30 p-6 text-center">
//           <div className="text-3xl font-orbitron font-bold text-purple-400 mb-2">
//             {filteredMerch.length}
//           </div>
//           <div className="text-gray-400">Filtered Results</div>
//         </div>
//       </motion.div>

//       <PreviewModal />
//       <CheckoutModal />
//     </div>
//   );
// };

// export default Merchandise;



// import { useState } from "react";
// import { MerchData, generateDriveUrls } from "../data/merchData";

// const Merchandise = () => {
//   const [previewModal, setPreviewModal] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [whatsappNumber, setWhatsappNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [orderStatus, setOrderStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Get unique categories for filter
//   const categories = ["All", ...new Set(MerchData.map(item => item.category))];

//   // Filter merchandise based on category
//   const filteredMerch = MerchData.filter(item => {
//     const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
//     return matchesCategory;
//   });

//   const getCategoryColor = (category) => {
//     const colors = {
//       "Apparel": "text-blue-400 bg-blue-400/20",
//       "Accessories": "text-green-400 bg-green-400/20",
//       "Collectibles": "text-purple-400 bg-purple-400/20"
//     };
//     return colors[category] || "text-gray-400 bg-gray-400/20";
//   };

//   const handlePreview = (item) => {
//     const urls = generateDriveUrls(item.driveId);
//     setPreviewModal({ ...item, previewUrl: urls.preview });
//   };

//   const handleAddToCart = (item) => {
//     setCart(prev => {
//       const existing = prev.find(cartItem => cartItem.id === item.id);
//       if (existing) {
//         return prev.map(cartItem =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCart(prev => prev.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const handleCheckout = async () => {
//     if (!whatsappNumber || !email) {
//       setOrderStatus("Please provide both WhatsApp number and email.");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       const orderDetails = {
//         whatsappNumber,
//         email,
//         cart,
//         total: getTotalPrice().toFixed(2),
//         timestamp: new Date().toISOString()
//       };
      
//       // Here you would send to linuxtex999@gmail.com
//       // For demo, we'll simulate success after 2 seconds
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       setOrderStatus("Order details sent successfully! We'll contact you soon via WhatsApp and email.");
//       setCart([]);
//       setWhatsappNumber("");
//       setEmail("");
      
//       setTimeout(() => {
//         setShowCheckout(false);
//         setOrderStatus(null);
//       }, 3000);
//     } catch (error) {
//       setOrderStatus("Error processing order. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const PreviewModal = () => {
//     if (!previewModal) return null;

//     return (
//       <div
//         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//         onClick={() => setPreviewModal(null)}
//       >
//         <div
//           className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-4xl w-full h-[80vh] overflow-hidden"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <div className="p-6 border-b border-gray-700 flex justify-between items-center">
//             <h3 className="text-xl font-orbitron font-bold text-white">
//               {previewModal.title}
//             </h3>
//             <button
//               onClick={() => setPreviewModal(null)}
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="h-full">
//             <iframe
//               src={previewModal.previewUrl}
//               className="w-full h-full"
//               title={previewModal.title}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const CheckoutModal = () => {
//     if (!showCheckout) return null;

//     return (
//       <div
//         className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
//         onClick={() => setShowCheckout(false)}
//       >
//         <div
//           className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-lg w-full p-6"
//           onClick={(e) => e.stopPropagation()}
//         >
//           <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center">
//             Checkout
//           </h3>
          
//           {/* Cart Items */}
//           <div className="mb-6 max-h-48 overflow-y-auto">
//             <h4 className="text-lg font-semibold text-white mb-3">Your Items:</h4>
//             {cart.map((item) => (
//               <div key={item.id} className="flex justify-between items-center bg-gray-700/50 rounded-xl p-3 mb-2">
//                 <div className="flex-1">
//                   <div className="text-white font-medium">{item.title}</div>
//                   <div className="text-gray-400 text-sm">${item.price.toFixed(2)} × {item.quantity}</div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     className="w-8 h-8 bg-red-600/20 border border-red-500/30 text-red-400 rounded-full hover:bg-red-600/30 transition-colors"
//                   >
//                     -
//                   </button>
//                   <span className="text-white min-w-8 text-center">{item.quantity}</span>
//                   <button
//                     onClick={() => updateQuantity(item.id, item.quantity + 1)}
//                     className="w-8 h-8 bg-green-600/20 border border-green-500/30 text-green-400 rounded-full hover:bg-green-600/30 transition-colors"
//                   >
//                     +
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="w-8 h-8 bg-gray-600/20 border border-gray-500/30 text-gray-400 rounded-full hover:bg-gray-600/30 transition-colors ml-2"
//                   >
//                     ×
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="text-right text-xl font-bold text-neon-blue mt-4">
//               Total: ₹{getTotalPrice().toFixed(2)}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="space-y-4 mb-6">
//             <div>
//               <label className="block text-gray-400 mb-2 font-medium">WhatsApp Number</label>
//               <input
//                 type="text"
//                 value={whatsappNumber}
//                 onChange={(e) => setWhatsappNumber(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-all"
//                 placeholder="Enter WhatsApp number"
//                 disabled={isSubmitting}
//               />
//             </div>
//             <div>
//               <label className="block text-gray-400 mb-2 font-medium">Email Address</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-all"
//                 placeholder="Enter email address"
//                 disabled={isSubmitting}
//               />
//             </div>
//           </div>

//           {orderStatus && (
//             <div
//               className={`text-center mb-4 p-3 rounded-xl ${
//                 orderStatus.includes('Error') 
//                   ? 'bg-red-500/20 border border-red-400/30 text-red-400'
//                   : 'bg-green-500/20 border border-green-400/30 text-green-400'
//               }`}
//             >
//               {orderStatus}
//             </div>
//           )}

//           <div className="flex justify-end gap-3">
//             <button
//               onClick={() => setShowCheckout(false)}
//               className="px-6 py-3 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleCheckout}
//               className="px-6 py-3 rounded-xl bg-neon-blue text-black font-medium hover:bg-neon-blue/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               disabled={isSubmitting || cart.length === 0}
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
//                   Processing...
//                 </div>
//               ) : (
//                 'Place Order'
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <h1 className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white">
//         Merchandise Shop
//       </h1>

//       <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
//         Explore our exclusive collection of Nextronix merchandise.
//       </p>

//       {/* Category Filter */}
//       <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
//         <div className="flex gap-2 flex-wrap">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-neon-blue text-black"
//                   : "bg-gray-800/50 text-gray-400 border border-gray-600 hover:border-neon-blue/50 hover:text-neon-blue"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Cart Summary */}
//       <div className="mb-8 flex justify-end">
//         <button
//           onClick={() => setShowCheckout(true)}
//           className={`px-6 py-3 font-medium rounded-lg transition-colors ${
//             cart.length > 0
//               ? "bg-neon-blue text-black hover:bg-neon-blue/80"
//               : "bg-gray-800/50 text-gray-400 cursor-not-allowed"
//           }`}
//           disabled={cart.length === 0}
//         >
//           <div className="flex items-center gap-3">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M9.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm7 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
//             </svg>
//             <span>Cart ({cart.length})</span>
//             {cart.length > 0 && (
//               <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                 {cart.reduce((sum, item) => sum + item.quantity, 0)}
//               </span>
//             )}
//           </div>
//         </button>
//       </div>

//       {/* Merchandise Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredMerch.map((item, index) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={generateDriveUrls(item.driveId).thumbnail}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 flex flex-col flex-grow">
//               <h3 className="text-lg font-orbitron font-bold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getCategoryColor(item.category)}`}>
//                 {item.category}
//               </span>
//               <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
//               <p className="text-gray-900 font-medium mb-4">₹ {item.price.toFixed(2)}</p>
//               <div className="flex justify-between gap-2">
//                 <button
//                   onClick={() => handlePreview(item)}
//                   className="flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600/30 hover:border-blue-500 transition-all duration-300 text-sm font-medium"
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => handleAddToCart(item)}
//                   className="flex-1 bg-green-600/20 border border-green-500/30 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600/30 hover:border-green-500 transition-all duration-300 text-sm font-medium"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredMerch.length === 0 && (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-lg mb-2">No items found</div>
//           <div className="text-gray-500">Try selecting a different category</div>
//         </div>
//       )}

//       <PreviewModal />
//       <CheckoutModal />
//     </div>
//   );
// };

// export default Merchandise;

// import { useState } from "react";
// import { MerchData, generateDriveUrls } from "../data/merchData";

// const Merchandise = () => {
//   const [previewModal, setPreviewModal] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [cart, setCart] = useState([]);
//   const [showCheckout, setShowCheckout] = useState(false);
//   const [contactInfo, setContactInfo] = useState("");
//   const [orderStatus, setOrderStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Get unique categories for filter
//   const categories = ["All", ...new Set(MerchData.map(item => item.category))];

//   // Filter merchandise based on category
//   const filteredMerch = MerchData.filter(item => {
//     const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
//     return matchesCategory;
//   });

//   const getCategoryColor = (category) => {
//     const colors = {
//       "Apparel": "text-blue-400 bg-blue-400/20",
//       "Accessories": "text-green-400 bg-green-400/20",
//       "Collectibles": "text-purple-400 bg-purple-400/20"
//     };
//     return colors[category] || "text-gray-400 bg-gray-400/20";
//   };

//   const handlePreview = (item) => {
//     const urls = generateDriveUrls(item.driveId);
//     setPreviewModal({ ...item, previewUrl: urls.preview });
//   };

//   const handleAddToCart = (item) => {
//     setCart(prev => {
//       const existing = prev.find(cartItem => cartItem.id === item.id);
//       if (existing) {
//         return prev.map(cartItem =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + 1 }
//             : cartItem
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity <= 0) {
//       removeFromCart(id);
//       return;
//     }
//     setCart(prev => prev.map(item =>
//       item.id === id ? { ...item, quantity: newQuantity } : item
//     ));
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const handleCheckout = async () => {
//     if (!contactInfo.trim()) {
//       setOrderStatus("Please provide your WhatsApp number and email.");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       const orderDetails = {
//         contactInfo: contactInfo.trim(),
//         cart,
//         total: getTotalPrice().toFixed(2),
//         timestamp: new Date().toISOString()
//       };
      
//       // Here you would send to linuxtex999@gmail.com
//       // For demo, we'll simulate success after 2 seconds
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       setOrderStatus("Order details sent successfully! We'll contact you soon via WhatsApp and email.");
//       setCart([]);
//       setContactInfo("");
      
//       setTimeout(() => {
//         setShowCheckout(false);
//         setOrderStatus(null);
//       }, 3000);
//     } catch (error) {
//       setOrderStatus("Error processing order. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const PreviewModal = () => {
//     if (!previewModal) return null;

//     return (
//       <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//         <div className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-4xl w-full h-[80vh] overflow-hidden">
//           <div className="p-6 border-b border-gray-700 flex justify-between items-center">
//             <h3 className="text-xl font-orbitron font-bold text-white">
//               {previewModal.title}
//             </h3>
//             <button
//               onClick={() => setPreviewModal(null)}
//               className="text-gray-400 hover:text-white transition-colors"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//           <div className="h-full">
//             <iframe
//               src={previewModal.previewUrl}
//               className="w-full h-full"
//               title={previewModal.title}
//             />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const CheckoutModal = () => {
//     if (!showCheckout) return null;

//     return (
//       <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
//         <div className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-lg w-full p-6">
//           <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center">
//             Checkout
//           </h3>
          
//           {/* Cart Items */}
//           <div className="mb-6 max-h-48 overflow-y-auto">
//             <h4 className="text-lg font-semibold text-white mb-3">Your Items:</h4>
//             {cart.map((item) => (
//               <div key={`cart-${item.id}`} className="flex justify-between items-center bg-gray-700/50 rounded-xl p-3 mb-2">
//                 <div className="flex-1">
//                   <div className="text-white font-medium">{item.title}</div>
//                   <div className="text-gray-400 text-sm">${item.price.toFixed(2)} × {item.quantity}</div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       updateQuantity(item.id, item.quantity - 1);
//                     }}
//                     className="w-8 h-8 bg-red-600/20 border border-red-500/30 text-red-400 rounded-full hover:bg-red-600/30 transition-colors"
//                   >
//                     -
//                   </button>
//                   <span className="text-white min-w-8 text-center">{item.quantity}</span>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       updateQuantity(item.id, item.quantity + 1);
//                     }}
//                     className="w-8 h-8 bg-green-600/20 border border-green-500/30 text-green-400 rounded-full hover:bg-green-600/30 transition-colors"
//                   >
//                     +
//                   </button>
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       removeFromCart(item.id);
//                     }}
//                     className="w-8 h-8 bg-gray-600/20 border border-gray-500/30 text-gray-400 rounded-full hover:bg-gray-600/30 transition-colors ml-2"
//                   >
//                     ×
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="text-right text-xl font-bold text-neon-blue mt-4">
//               Total: ${getTotalPrice().toFixed(2)}
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="space-y-4 mb-6">
//             <div>
//               <label className="block text-gray-400 mb-2 font-medium">Contact Information</label>
//               <textarea
//                 value={contactInfo}
//                 onChange={(e) => setContactInfo(e.target.value)}
//                 className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-all resize-none"
//                 placeholder="Enter your WhatsApp number and email address"
//                 disabled={isSubmitting}
//                 rows="3"
//               />
//               <div className="text-gray-500 text-sm mt-1">
//                 Please provide both WhatsApp number and email address
//               </div>
//             </div>
//           </div>

//           {orderStatus && (
//             <div
//               className={`text-center mb-4 p-3 rounded-xl ${
//                 orderStatus.includes('Error') 
//                   ? 'bg-red-500/20 border border-red-400/30 text-red-400'
//                   : 'bg-green-500/20 border border-green-400/30 text-green-400'
//               }`}
//             >
//               {orderStatus}
//             </div>
//           )}

//           <div className="flex justify-end gap-3">
//             <button
//               onClick={() => setShowCheckout(false)}
//               className="px-6 py-3 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
//               disabled={isSubmitting}
//             >
//               Cancel
//             </button>
//             <button
//               onClick={handleCheckout}
//               className="px-6 py-3 rounded-xl bg-neon-blue text-black font-medium hover:bg-neon-blue/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               disabled={isSubmitting || cart.length === 0}
//             >
//               {isSubmitting ? (
//                 <div className="flex items-center gap-2">
//                   <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
//                   Processing...
//                 </div>
//               ) : (
//                 'Place Order'
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <h1 className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white">
//         Merchandise Shop
//       </h1>

//       <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
//         Explore our exclusive collection of Nextronix merchandise.
//       </p>

//       {/* Category Filter */}
//       <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
//         <div className="flex gap-2 flex-wrap">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => setSelectedCategory(category)}
//               className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
//                 selectedCategory === category
//                   ? "bg-neon-blue text-black"
//                   : "bg-gray-800/50 text-gray-400 border border-gray-600 hover:border-neon-blue/50 hover:text-neon-blue"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Cart Summary */}
//       <div className="mb-8 flex justify-end">
//         <button
//           onClick={() => setShowCheckout(true)}
//           className={`px-6 py-3 font-medium rounded-lg transition-colors ${
//             cart.length > 0
//               ? "bg-neon-blue text-black hover:bg-neon-blue/80"
//               : "bg-gray-800/50 text-gray-400 cursor-not-allowed"
//           }`}
//           disabled={cart.length === 0}
//         >
//           <div className="flex items-center gap-3">
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M9.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm7 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
//             </svg>
//             <span>Cart ({cart.length})</span>
//             {cart.length > 0 && (
//               <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
//                 {cart.reduce((sum, item) => sum + item.quantity, 0)}
//               </span>
//             )}
//           </div>
//         </button>
//       </div>

//       {/* Merchandise Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredMerch.map((item, index) => (
//           <div
//             key={item.id}
//             className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={generateDriveUrls(item.driveId).thumbnail}
//               alt={item.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-4 flex flex-col flex-grow">
//               <h3 className="text-lg font-orbitron font-bold text-gray-900 mb-2">
//                 {item.title}
//               </h3>
//               <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getCategoryColor(item.category)}`}>
//                 {item.category}
//               </span>
//               <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
//               <p className="text-gray-900 font-medium mb-4">${item.price.toFixed(2)}</p>
//               <div className="flex justify-between gap-2">
//                 <button
//                   onClick={() => handlePreview(item)}
//                   className="flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600/30 hover:border-blue-500 transition-all duration-300 text-sm font-medium"
//                 >
//                   Preview
//                 </button>
//                 <button
//                   onClick={() => handleAddToCart(item)}
//                   className="flex-1 bg-green-600/20 border border-green-500/30 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600/30 hover:border-green-500 transition-all duration-300 text-sm font-medium"
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {filteredMerch.length === 0 && (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-lg mb-2">No items found</div>
//           <div className="text-gray-500">Try selecting a different category</div>
//         </div>
//       )}

//       <PreviewModal />
//       <CheckoutModal />
//     </div>
//   );
// };

// export default Merchandise;


import { useState } from "react";
import { MerchData } from "../data/merchData";

const Merchandise = () => {
  const [previewModal, setPreviewModal] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [email, setEmail] = useState("");
  const [orderStatus, setOrderStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get unique categories for filter
  const categories = ["All", ...new Set(MerchData.map(item => item.category))];

  // Filter merchandise based on category
  const filteredMerch = MerchData.filter(item => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    return matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      "Apparel": "text-blue-400 bg-blue-400/20",
      "Accessories": "text-green-400 bg-green-400/20",
      "Collectibles": "text-purple-400 bg-purple-400/20"
    };
    return colors[category] || "text-gray-400 bg-gray-400/20";
  };

  const handlePreview = (item) => {
    setPreviewModal(item);
  };

  const handleAddToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(cartItem => cartItem.id === item.id);
      if (existing) {
        return prev.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = async () => {
    if (!whatsappNumber || !email) {
      setOrderStatus("Please provide both WhatsApp number and email.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const orderDetails = {
        whatsappNumber,
        email,
        cart,
        total: getTotalPrice().toFixed(2),
        timestamp: new Date().toISOString()
      };
      
      // Here you would send to linuxtex999@gmail.com
      // For demo, we'll simulate success after 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setOrderStatus("Order details sent successfully! We'll contact you soon via WhatsApp and email.");
      setCart([]);
      setWhatsappNumber("");
      setEmail("");
      
      setTimeout(() => {
        setShowCheckout(false);
        setOrderStatus(null);
      }, 3000);
    } catch (error) {
      setOrderStatus("Error processing order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const PreviewModal = () => {
    if (!previewModal) return null;

    return (
      <div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setPreviewModal(null)}
      >
        <div
          className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-4xl w-full max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 border-b border-gray-700 flex justify-between items-center">
            <h3 className="text-xl font-orbitron font-bold text-white">
              {previewModal.title}
            </h3>
            <button
              onClick={() => setPreviewModal(null)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-6 flex flex-col md:flex-row gap-6 max-h-[calc(90vh-120px)] overflow-y-auto">
            <div className="flex-shrink-0 md:w-1/2">
              <img
                src={previewModal.image}
                alt={previewModal.title}
                className="w-full h-auto max-h-[400px] object-contain rounded-lg bg-white"
              />
            </div>
            <div className="flex-1 text-white">
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${getCategoryColor(previewModal.category)}`}>
                {previewModal.category}
              </div>
              <h4 className="text-2xl font-orbitron font-bold mb-4">{previewModal.title}</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">{previewModal.description}</p>
              {/* <div className="text-3xl font-bold text-neon-blue mb-6">₹{previewModal.price.toFixed(2)}</div> */}
              {/* <button
                onClick={() => {
                  handleAddToCart(previewModal);
                  setPreviewModal(null);
                }}
                className="w-full bg-neon-blue text-black font-bold py-3 px-6 rounded-lg hover:bg-neon-blue/80 transition-colors"
              >
                Add to Cart
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CheckoutModal = () => {
    if (!showCheckout) return null;

    return (
      <div
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={() => setShowCheckout(false)}
      >
        <div
          className="bg-gray-800 rounded-2xl border border-neon-blue/30 max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center">
            Checkout
          </h3>
          
          {/* Cart Items */}
          <div className="mb-6 max-h-48 overflow-y-auto">
            <h4 className="text-lg font-semibold text-white mb-3">Your Items:</h4>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center bg-gray-700/50 rounded-xl p-3 mb-2">
                <div className="flex items-center gap-3 flex-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded-lg bg-white"
                  />
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{item.title}</div>
                    <div className="text-gray-400 text-xs">₹{item.price.toFixed(2)} × {item.quantity}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 bg-red-600/20 border border-red-500/30 text-red-400 rounded-full hover:bg-red-600/30 transition-colors text-sm"
                  >
                    -
                  </button>
                  <span className="text-white min-w-6 text-center text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 bg-green-600/20 border border-green-500/30 text-green-400 rounded-full hover:bg-green-600/30 transition-colors text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="w-6 h-6 bg-gray-600/20 border border-gray-500/30 text-gray-400 rounded-full hover:bg-gray-600/30 transition-colors ml-2 text-sm"
                  >
                    ×
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right text-xl font-bold text-neon-blue mt-4">
              Total: ₹{getTotalPrice().toFixed(2)}
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-gray-400 mb-2 font-medium">WhatsApp Number</label>
              <input
                type="text"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-all"
                placeholder="Enter WhatsApp number"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2 font-medium">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800/50 border border-neon-blue/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue transition-all"
                placeholder="Enter email address"
                disabled={isSubmitting}
              />
            </div>
          </div>

          {orderStatus && (
            <div
              className={`text-center mb-4 p-3 rounded-xl ${
                orderStatus.includes('Error') 
                  ? 'bg-red-500/20 border border-red-400/30 text-red-400'
                  : 'bg-green-500/20 border border-green-400/30 text-green-400'
              }`}
            >
              {orderStatus}
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setShowCheckout(false)}
              className="px-6 py-3 rounded-xl bg-gray-700/50 text-gray-300 hover:bg-gray-600/50 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              onClick={handleCheckout}
              className="px-6 py-3 rounded-xl bg-neon-blue text-black font-medium hover:bg-neon-blue/80 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting || cart.length === 0}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                  Processing...
                </div>
              ) : (
                'Place Order'
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-orbitron font-black text-center mb-4 text-white">
        Merchandise Shop
      </h1>

      <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
        Explore our exclusive collection of Nextronix merchandise.
      </p>

      {/* Category Filter */}
      <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-center">
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-neon-blue text-black"
                  : "bg-gray-800/50 text-gray-400 border border-gray-600 hover:border-neon-blue/50 hover:text-neon-blue"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Cart Summary */}
      {/* <div className="mb-8 flex justify-end">
        <button
          onClick={() => setShowCheckout(true)}
          className={`px-6 py-3 font-medium rounded-lg transition-colors ${
            cart.length > 0
              ? "bg-neon-blue text-black hover:bg-neon-blue/80"
              : "bg-gray-800/50 text-gray-400 cursor-not-allowed"
          }`}
          disabled={cart.length === 0}
        >
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0h7M9.5 18a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm7 0a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
            </svg>
            <span>Cart ({cart.length})</span>
            {cart.length > 0 && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            )}
          </div>
        </button>
      </div> */}

      {/* Merchandise Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMerch.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-orbitron font-bold text-white mb-2">
                {item.title}
              </h3>
              {/* <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-2 ${getCategoryColor(item.category)}`}>
                {item.category}
              </span> */}
              <p className="text-gray-600 text-sm mb-4 flex-grow">{item.description}</p>
              {/* <p className="text-gray-900 font-bold text-lg mb-4">₹{item.price.toFixed(2)}</p> */}
              <div className="flex justify-between gap-2">
                <button
                  onClick={() => handlePreview(item)}
                  className="flex-1 bg-blue-600/20 border border-blue-500/30 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600/30 hover:border-blue-500 transition-all duration-300 text-sm font-medium"
                >
                  Preview
                </button>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="flex-1 bg-green-600/20 border border-green-500/30 text-green-600 px-4 py-2 rounded-lg hover:bg-green-600/30 hover:border-green-500 transition-all duration-300 text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredMerch.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg mb-2">No items found</div>
          <div className="text-gray-500">Try selecting a different category</div>
        </div>
      )}

      <PreviewModal />
      <CheckoutModal />
    </div>
  );
};

export default Merchandise;