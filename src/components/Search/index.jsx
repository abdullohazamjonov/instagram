import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import axios from "axios";

function Search() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [explorePosts, setExplorePosts] = useState([]);

  const API_KEY =
    "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";

  const getExplorePosts = async () => {
    const queries = [
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
      queries[Math.floor(Math.random() * queries.length)];

    try {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${random}&per_page=30`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );

      setExplorePosts(res.data.photos);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getExplorePosts();
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

        <h1 className="text-2xl font-bold">
          Search
        </h1>
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

      <div className="grid grid-cols-3 gap-4">
        {explorePosts.map((post) => (
          <img
            key={post.id}
            src={post.src.large}
            alt={post.alt}
            className="w-full h-[300px] object-cover rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}

export default Search;