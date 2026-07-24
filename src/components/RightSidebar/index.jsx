import { useNavigate } from "react-router-dom";
import rightsidebar1 from "../../assets/rightsidebar_1.png";
import rightsidebar2 from "../../assets/rightsidebar_2.png";
import rightsidebar3 from "../../assets/rightsidebar_3.png";

const suggestions = [
  {
    id: 1,
    username: "john_doe",
    fullname: "John Doe",
    image: rightsidebar1,
  },
  {
    id: 2,
    username: "messi",
    fullname: "Lionel Messi",
    image: rightsidebar2,
  },
  {
    id: 3,
    username: "ronaldo",
    fullname: "Cristiano Ronaldo",
    image: rightsidebar3,
  },
  {
    id: 4,
    username: "neymar",
    fullname: "Neymar Jr",
    image: rightsidebar3,
  },
  {
    id: 5,
    username: "developer",
    fullname: "Developer",
    image: rightsidebar2,
  },
];

const RightSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden xl:block w-[320px] mt-8">
      <div className="flex items-center justify-between">
        <div onClick={() => navigate("/profile")} className="flex items-center gap-4 cursor-pointer">
          <img src={rightsidebar1} className="w-14 h-14 rounded-full" alt=""/>
          <div>
            <h3 className="font-semibold">abdulloh</h3>
            <p className="text-sm text-gray-500">
              Abdulloh Azamjonov
            </p>
          </div>
        </div>
        <button className="text-[#0095f6] font-semibold text-sm">
          Switch
        </button>
      </div>
      <div className="flex justify-between mt-8 mb-5">
        <span className="text-gray-500 font-semibold">
          Suggested for you
        </span>
        <button className="font-semibold text-sm">
          See All
        </button>
      </div>
      {suggestions.map((user) => (
        <div key={user.id} className="flex items-center justify-between mb-5">
          <div onClick={() => navigate(`/user/${user.id}`)} className="flex items-center gap-3 cursor-pointer">
            <img src={user.image} className="w-11 h-11 rounded-full" alt=""/>
            <div>
              <h4 className="font-semibold text-sm">
                {user.username}
              </h4>
              <p className="text-xs text-gray-500">
                Suggested for you
              </p>
            </div>
          </div>
          <button className="text-[#0095f6] text-sm font-semibold">
            Follow
          </button>
        </div>
      ))}
      <div className="mt-10 text-xs text-gray-400 leading-6">
        About · Help · Press · API · Jobs · Privacy · Terms · Locations ·
        Language
      </div>
      <div className="text-xs text-gray-400 mt-6">
        © 2026 INSTAGRAM FROM META
      </div>
    </div>
  );
};

export default RightSidebar;