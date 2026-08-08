import { useEffect, useState } from "react";
import axios from "axios";

import {
  FiHeart,
  FiMessageCircle,
  FiSend,
  FiBookmark,
  FiMoreHorizontal,
} from "react-icons/fi";

const API_KEY = "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";

const Post = ({
  id,
  username,
  profile,
  image,
  likes,
  caption,
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [video, setVideo] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const queries = [
          "nature",
          "cars",
          "anime",
          "football",
          "travel",
          "city",
          "gaming",
        ];

        const random =
          queries[Math.floor(Math.random() * queries.length)];

        const response = await axios.get(
          `https://api.pexels.com/videos/search?query=${random}&per_page=10`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );

        const videos = response.data.videos;

        if (videos.length > 0) {
          const randomVideo =
            videos[Math.floor(Math.random() * videos.length)];

          const videoFile = randomVideo.video_files
            ?.filter(
              (file) => file.file_type === "video/mp4"
            )
            ?.sort(
              (a, b) =>
                (b.width || 0) - (a.width || 0)
            )[0];

          if (videoFile) {
            setVideo(videoFile.link);
          }
        }
      } catch (error) {
        console.error("Pexels video error:", error);
      }
    };

    getVideo();
  }, []);

  return (
    <article>
      <div className="flex items-center justify-between px-3 py-3">
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt={username}
            className="w-9 h-9 rounded-full object-cover"
          />

          <div>
            <p className="text-sm font-semibold">
              {username}
            </p>

            <p className="text-xs text-gray-500">
              Uzbekistan
            </p>
          </div>
        </div>

        <button className="p-1">
          <FiMoreHorizontal size={22} />
        </button>
      </div>

      <div className="w-full bg-black">
        {video ? (
          <video
            src={video}
            controls
            playsInline
            className="w-full max-h-[700px] object-contain"
          />
        ) : (
          <div className="w-full h-[500px] flex items-center justify-center bg-gray-100">
            <p className="text-gray-500 text-sm">
              Video yuklanmoqda...
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-3 pt-3">
        <div className="flex items-center gap-4">

          <button
            onClick={() => {
              setLiked(!liked);
              setLikeCount((prev) =>
                liked ? prev - 1 : prev + 1
              );
            }}
            className="hover:scale-110 transition"
          >
            <FiHeart
              size={25}
              className={
                liked ? "text-red-500" : "text-black"
              }
              fill={liked ? "red" : "none"}
            />
          </button>

          <button className="hover:scale-110 transition">
            <FiMessageCircle size={24} />
          </button>

          <button className="hover:scale-110 transition">
            <FiSend size={24} />
          </button>
        </div>

        <button
          onClick={() => setSaved(!saved)}
          className="hover:scale-110 transition"
        >
          <FiBookmark
            size={24}
            className="text-black"
            fill={saved ? "black" : "none"}
          />
        </button>
      </div>

      <div className="px-3 pt-2">
        <p className="text-sm font-semibold">
          {likeCount?.toLocaleString()} likes
        </p>
      </div>

      <div className="px-3 pt-1">
        <p className="text-sm">
          <span className="font-semibold mr-2">
            {username}
          </span>

          {caption}
        </p>
      </div>

      <button className="px-3 pt-2 pb-3 text-sm text-gray-500">
        View all comments
      </button>
    </article>
  );
};

export default Post;