import { useState } from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiSmile,
} from "react-icons/fi";
import post1 from "../../assets/post_1.png"
import post2 from "../../assets/post_2.png"
import {
  BsBookmark,
  BsBookmarkFill,
  BsHeartFill,
} from "react-icons/bs";
const Post = ({
  profile,
  username,
  image,
  likes,
  caption,
}) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [comment, setComment] = useState("");
  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div className="bg-white border rounded-lg mt-6">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <img src={post1} className="w-9 h-9 rounded-full" alt={username}/>
          <span className="font-semibold">
            {username}
          </span>
        </div>
        <button className="text-xl">
          •••
        </button>
      </div>
      <img src={post2} className="w-full" alt=""/>
      <div className="flex justify-between p-4">
        <div className="flex gap-5">
          {liked ? (
            <BsHeartFill onClick={handleLike} size={26} className="text-red-500 cursor-pointer"/>
          ) : (
            <FiHeart onClick={handleLike} size={26} className="cursor-pointer"/>
          )}
          <FiMessageCircle size={26} className="cursor-pointer"/>
          <FiSend size={26} className="cursor-pointer"/>
        </div>
        {saved ? (
          <BsBookmarkFill onClick={() => setSaved(false)} size={24} className="cursor-pointer"/>
        ) : (
          <BsBookmark onClick={() => setSaved(true)} size={24} className="cursor-pointer"/>
        )}
      </div>
      <div className="px-4 font-semibold">
        {likeCount.toLocaleString()} likes
      </div>
      <div className="px-4 mt-2">
        <span className="font-semibold mr-2">
          {username}
        </span>
        {caption}
      </div>
      <div className="px-4 mt-2 text-xs text-gray-500">
        2 HOURS AGO
      </div>
      <div className="border-t mt-4 flex items-center px-4 py-3">
        <FiSmile size={22} className="mr-3 cursor-pointer"/>
        <input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value) } className="flex-1 outline-none"/>
        <button className="text-[#0095f6] font-semibold">
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;