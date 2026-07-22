import {
  FiHome,
  FiSearch,
  FiCompass,
  FiHeart,
  FiPlusSquare,
} from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineSlowMotionVideo, MdOutlineLogout } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import sidebar from "../../assets/sidebar.png";
import Danger from "../Danger";
import { useState } from "react";

const menus = [
  { icon: <FiHome size={26} />, title: "Home" },
  { icon: <FiSearch size={26} />, title: "Search" },
  { icon: <FiCompass size={26} />, title: "Explore" },
  { icon: <MdOutlineSlowMotionVideo size={26} />, title: "Reels" },
  { icon: <RiMessengerLine size={26} />, title: "Messages" },
  { icon: <FiHeart size={26} />, title: "Notifications" },
  { icon: <FiPlusSquare size={26} />, title: "Create" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  // Modalni ochish
  const handleLogoutClick = () => {
    setClick(true);
  };

  const handleConfirmLogout = () => {
    setClick(false);
    
    localStorage.removeItem("user"); 

    navigate("/login", { replace: true }); 
  };

  const handleCancelLogout = () => {
    setClick(false);
  };

  return (
    <>
      {/* Modal ekranga chiqishi uchun */}
      {click && (
        <Danger 
          title="Tizimdan chiqish" 
          para="Haqiqatan ham sahifadan chiqmoqchimisiz?" 
          onConfirm={handleConfirmLogout} 
          onCancel={handleCancelLogout} 
        />
      )}

      <div className="w-[250px] h-screen border-r bg-white px-5 py-8 fixed left-0 top-0 hidden md:flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <BsInstagram size={34} />
          <h1 className="text-3xl" style={{ fontFamily: "cursive" }}>
            Instagram
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          {menus.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 cursor-pointer transition">
              {item.icon}
              <span className="text-[16px]">{item.title}</span>
            </div>
          ))}
          <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={sidebar} className="w-7 h-7 rounded-full" alt="Profile" />
            <span>Profile</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <button 
            onClick={handleLogoutClick} 
            className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-100 cursor-pointer transition w-full text-red-500"
          >
            <MdOutlineLogout size={22} /> Log out
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;