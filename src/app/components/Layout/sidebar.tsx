'use client';
import { FaHome, FaUser } from 'react-icons/fa';
import { FaBuysellads } from 'react-icons/fa6';
import { HiOfficeBuilding } from 'react-icons/hi';
import { MdFeedback } from 'react-icons/md';

const Sidebar = () => {
  return (
    <div className="bg-white w-64 fixed h-full px-4 py-2 shadow">
      <div className="my-2 mb-4 py-1 pl-4">
        <h1 className="text-3xl text-[#343C6A] font-bold">ReachOut</h1>
      </div>
      <ul className="mt-3 text-white font-bold">
        <li className="mb-2 rounded hover:shadow hover:bg-gray-100 py-2">
          <a href="#" className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2" />
            Dashboard
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-100 py-2">
          <a href="#" className="px-3">
            <FaUser className="inline-block w-6 h-6 mr-2 -mt-2" />
            Clientes Parceiros
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-100 py-2">
          <a href="#" className="px-3">
            <HiOfficeBuilding className="inline-block w-6 h-6 mr-2 -mt-2" />
            Estabelecimentos
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-100 py-2">
          <a href="#" className="px-3">
            <FaBuysellads className="inline-block w-6 h-6 mr-2 -mt-2" />
            Anúncios
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-gray-100 py-2">
          <a href="#" className="px-3">
            <MdFeedback className="inline-block w-6 h-6 mr-2 -mt-2" />
            Avaliações
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
