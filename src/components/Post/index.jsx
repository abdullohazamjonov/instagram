import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiSmile,
} from "react-icons/fi";
import {
  BsBookmark,
  BsBookmarkFill,
  BsHeartFill,
} from "react-icons/bs";

const Post = ({
  id,
  profile,
  username,
  image,
  likes,
  caption,
}) => {
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  return (
    <div className="bg-white border rounded-lg mt-6">
      <div className="flex justify-between items-center p-4">
        <div onClick={() => navigate(`/user/${id}`)} className="flex items-center gap-3 cursor-pointer">
          <img src={profile} className="w-10 h-10 rounded-full object-cover" alt={username}/>
          <span className="font-semibold hover:underline">
            {username}
          </span>
        </div>
        <button className="text-xl">
          •••
        </button>
      </div>
      <img src={image} className="w-full cursor-pointer" alt="" onClick={() => navigate(`/user/${id}`)}/>
      <div className="flex justifyetween p-4">
        <div className="flex gap-5">
          {liked ? (
            <BsHeartFill size={26} onClick={handleLike} className="text-red-500 cursor-pointer"/>
          ) : (
            <FiHeart size={26} onClick={handleLike} className="cursor-pointer"/>
          )}
          <FiMessageCircle size={26} className="cursor-pointer"/>
          <FiSend size={26} className="cursor-pointer"/>
        </div>
        {saved ? (
          <BsBookmarkFill size={24} className="cursor-pointer" onClick={() => setSaved(false)}/>
        ) : (
          <BsBookmark size={24} className="cursor-pointer" onClick={() => setSaved(true)}/>
        )}
      </div>
      <div className="px-4 font-semibold">
        {likeCount.toLocaleString()} likes
      </div>
      <div className="px-4 mt-2">
        <span onClick={() => navigate(`/user/${id}`)} className="font-semibold mr-2 cursor-pointer hover:underline">
          {username}
        </span>
        {caption}
      </div>
      <div className="px-4 mt-2 text-xs text-gray-500">
        2 HOURS AGO
      </div>
      <div className="border-t mt-4 flex items-center px-4 py-3">
        <FiSmile size={22} className="mr-3 cursor-pointer"/>
        <input type="text" placeholder="Add a comment..." value={comment} onChange={(e) => setComment(e.target.value)} className="flex-1 outline-none"/>
        <button className="text-[#0095f6] font-semibold">
          Post
        </button>
      </div>
    </div>
  );
};

export default Post;