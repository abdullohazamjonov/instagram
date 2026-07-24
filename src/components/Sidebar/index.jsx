import { useState } from "react";
import {
  FiHome,
  FiSearch,
  FiCompass,
  FiHeart,
  FiPlusSquare,
  FiLogOut,
} from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";
import Danger from "../Danger";
import sidebar from "../../assets/sidebar.png";

const menus = [
  { icon: <FiHome size={26} />, title: "Home", path: "/" },
  { icon: <FiSearch size={26} />, title: "Search" },
  { icon: <FiCompass size={26} />, title: "Explore" },
  { icon: <MdOutlineSlowMotionVideo size={26} />, title: "Reels" },
  { icon: <RiMessengerLine size={26} />, title: "Messages" },
  { icon: <FiHeart size={26} />, title: "Notifications" },
  { icon: <FiPlusSquare size={26} />, title: "Create" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <div className="w-[250px] h-screen border-r bg-white px-5 py-8 fixed left-0 top-0 hidden md:flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <BsInstagram size={34} />
          <h1 className="text-3xl" style={{ fontFamily: "cursive" }}>
            Instagram
          </h1>
        </div>
        <div className="flex flex-col gap-2">
          {menus.map((item, index) => (
            <div key={index} onClick={() => item.path && navigate(item.path)} className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
                ${
                  location.pathname === item.path
                    ? "bg-gray-200 font-bold"
                    : "hover:bg-gray-100"
                }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
          <div onClick={() => navigate("/profile")} className={`flex items-center gap-4 p-3 rounded-xl cursor-pointer transition
              ${
                location.pathname === "/profile"
                  ? "bg-gray-200 font-bold"
                  : "hover:bg-gray-100"
              }`}
          >
            <img src={sidebar} className="w-7 h-7 rounded-full object-cover" alt="Profile"/>
            <span>Profile</span>
          </div>
        </div>
        <div className="mt-auto">
          <button onClick={() => setShowModal(true)} className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-100 text-red-500 w-full transition">
            <FiLogOut size={22} />
            <span>Log out</span>
          </button>
        </div>
      </div>
      <Danger showModal={showModal} setShowModal={setShowModal} logout={logout}/>
    </>
  );
};

export default Sidebar;