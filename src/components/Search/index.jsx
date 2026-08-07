<<<<<<< HEAD
import { useState } from "react";
import { FiPlay } from "react-icons/fi";
=======
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSearch, FiPlay } from "react-icons/fi";
import axios from "axios";

>>>>>>> a1df34734c435444b9f4cde1485b616f72e71d85
import feed1 from "../../assets/Feed_1.png";
import feed2 from "../../assets/Feed_2.png";

const posts = [
  {
    id: 1,
    title: "nature",
    image: feed1,
  },
  {
    id: 2,
    title: "minecraft",
    image: feed2,
  },
  {
    id: 3,
    title: "football",
    image: feed1,
    video: true,
  },
  {
    id: 4,
    title: "anime",
    image: feed2,
  },
  {
    id: 5,
    title: "car",
    image: feed1,
  },
  {
    id: 6,
    title: "travel",
    image: feed2,
    video: true,
  },
];

const [search, setSearch] = useState("");
const [explorePosts, setExplorePosts] = useState([]);
const API_KEY = "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";
async function loadPosts(query = "nature") {
  try {
    const res = await axios.get(
      "https://api.pexels.com/v1/search",
      {
        params: {
          query,
          per_page: 30,
        },
        headers: {
          Authorization: API_KEY,
        },
      }
    );

<<<<<<< HEAD
    setExplorePosts(res.data.photos);
  } catch (err) {
    console.error(err);
  }
}
=======
  const userResult =
    search.trim() === ""
      ? []
      : users.filter(
        (u) =>
          u.username.toLowerCase().includes(search.toLowerCase()) ||
          u.fullname.toLowerCase().includes(search.toLowerCase())
      );

  const postResult =
    search.trim() === ""
      ? posts
      : posts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );

  const API_KEY = "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";

  const getExplorePosts = async () => {
    const query = [
      "nature",
      "travel",
      "cars",
      "anime",
      "football",
      "technology",
      "gaming",
      "city",
      "animals",
      "food",
    ];

    const random =
      query[Math.floor(Math.random() * query.length)];

    const res = await axios.get(
      `https://api.pexels.com/v1/search?query=${random}&per_page=30`,
      {
        headers: {
          Authorization: API_KEY,
        },
      }
    );

    return res.data.photos;
  };

  const [explorePosts, setExplorePosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await getExplorePosts();
      setExplorePosts(data);
    };

    loadPosts();
  }, []);

  return (
    <div className="ml-[250px] p-8 bg-white min-h-screen">
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="p-2 rounded-full hover:bg-gray-200"
        >
          <FiArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-bold">Search</h1>
      </div>
      <div className="relative w-[450px] mb-8">
        <FiSearch className="absolute left-4 top-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-100 rounded-xl py-3 pl-11 pr-4 outline-none"
        />
      </div>
      {search && (
        <>
          <h2 className="font-semibold text-lg mb-3">Users</h2>
          {userResult.length > 0 ? (
            userResult.map((u) => (
              <div
                key={u.id}
                className="flex items-center justify-between py-3 border-b"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={u.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{u.username}</p>
                    <p className="text-gray-500 text-sm">
                      {u.fullname}
                    </p>
                  </div>
                </div>
                <button className="text-blue-500 font-semibold">
                  Follow
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Foydalanuvchi topilmadi.</p>
          )}
        </>
      )}
      <h2 className="font-semibold text-lg mt-8 mb-4">Explore</h2>
      <div className="flex gap-4 flex-wrap">
        {explorePosts.map((post) => (
    <div
      key={post.id}
      className="relative group cursor-pointer"
    >
      <img
        src={post.src.large}
        alt={post.alt}
        className="w-[300px] h-[300px] object-cover rounded-xl"
      />

      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition rounded-xl" />
    </div>
  ))}
      </div>
    </div>
  );
}
>>>>>>> a1df34734c435444b9f4cde1485b616f72e71d85
