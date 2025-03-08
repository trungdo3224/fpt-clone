const Navbar = () => {
  return (
    <div className="flex flex-row items-center bg-green-400 h-full px-4 group relative">
      <p className="group-hover:text-red-700">Dropdown</p>
      <p className="group-hover:text-red-700">-arrow</p>
      <div className="hidden group-hover:block top-[100%] left-0 group-hover:absolute group-hover:h-24 group-hover:w-[1000px] group-hover:bg-gray-600 "></div>
    </div>
  )
};

export default Navbar;