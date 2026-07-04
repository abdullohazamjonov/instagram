import Post from "../Post";

import feed1 from "../../assets/Feed_1.png";
import feed2 from "../../assets/Feed_2.png";

const posts = [
  {
    id: 1,
    username: "abdulloh",
    profile: feed1,
    image: feed2,
    likes: 1523,
    caption: "Beautiful day ❤️",
  },
  {
    id: 2,
    username: "john",
    profile: feed2,
    image: feed1,
    likes: 8843,
    caption: "Nature is amazing 🌿",
  },
];

const Feed = () => {
  return (
    <div className="w-[630px] mt-8">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Feed;