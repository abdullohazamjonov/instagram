import { useParams } from "react-router-dom";
import rightsidebar1 from "../../assets/rightsidebar_1.png";
import rightsidebar2 from "../../assets/rightsidebar_2.png";
import rightsidebar3 from "../../assets/rightsidebar_3.png";
import Feed1 from "../../assets/Feed_1.png";
import Feed2 from "../../assets/Feed_2.png";
import Post1 from "../../assets/post_1.png";

const users = [
  {
    id: 1,
    username: "john_doe",
    fullname: "John Doe",
    image: rightsidebar1,
    followers: "2.5K",
    following: "320",
    posts: "45",
  },
  {
    id: 2,
    username: "messi",
    fullname: "Lionel Messi",
    image: rightsidebar2,
    followers: "504M",
    following: "315",
    posts: "980",
  },
  {
    id: 3,
    username: "ronaldo",
    fullname: "Cristiano Ronaldo",
    image: rightsidebar3,
    followers: "700M",
    following: "560",
    posts: "4100",
  },
  {
    id: 4,
    username: "neymar",
    fullname: "Neymar Jr",
    image: rightsidebar3,
    followers: "230M",
    following: "610",
    posts: "1700",
  },
  {
    id: 5,
    username: "developer",
    fullname: "Developer",
    image: rightsidebar2,
    followers: "1.2K",
    following: "240",
    posts: "67",
  },
];

const Profil2 = () => {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div className="ml-[260px] p-10 text-2xl font-bold">
        User topilmadi.
      </div>
    );
  }

  return (
    <div className="ml-[260px] p-10">
      <div className="flex gap-20">
        <img src={user.image} className="w-40 h-40 rounded-full border" alt=""/>
        <div>
          <div className="flex items-center gap-5">
            <h1 className="text-3xl">
              {user.username}
            </h1>
            <button className="bg-[#0095f6] text-white px-5 py-2 rounded-lg font-semibold">
              Follow
            </button>
            <button className="bg-gray-200 px-5 py-2 rounded-lg font-semibold">
              Message
            </button>
          </div>
          <div className="flex gap-10 mt-8">
            <p>
              <b>{user.posts}</b> posts
            </p>
            <p>
              <b>{user.followers}</b> followers
            </p>
            <p>
              <b>{user.following}</b> following
            </p>
          </div>
          <div className="mt-6">
            <h2 className="font-bold text-lg">
              {user.fullname}
            </h2>
            <p className="text-gray-500">
              Welcome to my Instagram profile 👋
            </p>
          </div>
        </div>
      </div>
      <div className="border-t mt-14 pt-5 flex justify-center gap-20 font-semibold tracking-widest">
        <span>POSTS</span>
        <span>REELS</span>
        <span>TAGGED</span>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <img src={Feed1} className="aspect-square object-cover cursor-pointer" alt=""/>
        <img src={Feed2} className="aspect-square object-cover cursor-pointer" alt=""/>
        <img src={Post1} className="aspect-square object-cover cursor-pointer" alt=""/>
        <img src={Feed2} className="aspect-square object-cover cursor-pointer" alt=""/>
        <img src={Post1} className="aspect-square object-cover cursor-pointer" alt=""/>
        <img src={Feed1} className="aspect-square object-cover cursor-pointer" alt=""/>
      </div>
    </div>
  );
};

export default Profil2;