import { useState } from "react";
import { FiPlay } from "react-icons/fi";
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

    setExplorePosts(res.data.photos);
  } catch (err) {
    console.error(err);
  }
}
