import sidebar from "../../assets/sidebar.png";
import Feed1 from "../../assets/Feed_1.png";
import Feed2 from "../../assets/Feed_2.png";
import Post1 from "../../assets/post_1.png";
import Right1 from "../../assets/rightsidebar_1.png";
import Right2 from "../../assets/rightsidebar_2.png";
import Right3 from "../../assets/rightsidebar_3.png";
import Story1 from "../../assets/stories_1.jpg";
import Story2 from "../../assets/stories_2.png";
import Story3 from "../../assets/stories_3.png";

const Profil = () => {
  return (
    <div className="ml-[270px] p-10">
      <div className="flex gap-20">
        <img src={sidebar} className="w-40 h-40 rounded-full border" alt="Profile"/>
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-light">
              purplehybrid
            </h1>
            <button className="bg-gray-200 px-4 py-1 rounded-lg font-semibold hover:bg-gray-300">
              Edit Profile
            </button>
            <button className="bg-gray-200 px-4 py-1 rounded-lg font-semibold hover:bg-gray-300">
              View Archive
            </button>
          </div>
          <div className="flex gap-12 mt-6 text-lg">
            <p><b>9</b> posts</p>
            <p><b>1,500</b> followers</p>
            <p><b>320</b> following</p>
          </div>
          <div className="mt-5">
            <h2 className="font-bold text-lg">
              Purple Hybrid
            </h2>
            <p>Keep it Purple 💜</p>
            <p>Developer</p>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mt-16">
        <div className="text-center">
          <img src={Story1} className="w-20 h-20 rounded-full border p-1 object-cover" alt=""/>
          <p className="mt-2">Travel</p>
        </div>
        <div className="text-center">
          <img src={Story2} className="w-20 h-20 rounded-full border p-1 object-cover" alt=""/>
          <p className="mt-2">Food</p>
        </div>
        <div className="text-center">
          <img src={Story3} className="w-20 h-20 rounded-full border p-1 object-cover" alt=""/>
          <p className="mt-2">Life</p>
        </div>
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border flex items-center justify-center text-4xl">
            +
          </div>
          <p className="mt-2">New</p>
        </div>
      </div>
      <div className="border-t mt-12 pt-5 flex justify-center gap-16 font-semibold text-sm tracking-wider">
        <span className="cursor-pointer">POSTS</span>
        <span className="cursor-pointer">REELS</span>
        <span className="cursor-pointer">TAGGED</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <img src={Feed1} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Feed2} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Post1} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Right1} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Right2} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Right3} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Story1} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Story2} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
        <img src={Story3} alt="" className="aspect-square object-cover cursor-pointer hover:opacity-90"/>
      </div>
    </div>
  );
};

export default Profil;