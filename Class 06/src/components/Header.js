function Header() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-3 fixed top-0 left-0 right-0 shadow-md z-10">
      {/* Logo */}
      <img src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" className="h-[50px] mb-2 md:mb-0 ml-5" alt="Myntra Logo"/>
      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 text-gray-500 font-semibold text-sm md:text-base">
        <button className="hover:text-md">Men</button>
        <button>Women</button>
        <button>Kids</button>
        <button>Home</button>
        <button>Beauty</button>
        <button>Studio</button>
      </div>

      {/* Search + Profile */}
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <input type="text" placeholder="Search for products, brands and more"className="text-gray-500 p-1 md:p-2 rounded-md w-[150px] md:w-[250px] focus:outline-none"/>
        <button className="text-gray-500 font-bold text-sm md:text-base">Profile</button>
        <button className="text-gray-500 font-bold text-sm md:text-base">Wishlist</button>
        <button className="text-gray-500 font-bold text-sm md:text-base">Bag</button>
      </div>
    </div>
  );
}
export default Header