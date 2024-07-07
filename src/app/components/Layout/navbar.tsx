import { FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white px-4 py-3 flex justify-between fixed w-full top-0 z-10 ml-64 mt-3 shadow">
      <div className="flex items-center text-xl">
        <span className="text-[#343C6A] font-semibold">Dashboard</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6 mt-1" />
        </div>
        <div className="relative">
          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-1" />
          </button>
          <div className="z-10 hidden absolute rounded-lg shadow-lg w-32 group-focus:block bg-white">
            <ul className="text-black">
              <li className="px-4 py-2 hover:bg-gray-200">
                <a href="#">Perfil</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <a href="#">Configurações</a>
              </li>
              <li className="px-4 py-2 hover:bg-gray-200">
                <a href="#">Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
