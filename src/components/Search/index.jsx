import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiSearch, FiPlay } from "react-icons/fi";
import axios from "axios";

import sidebar from "../../assets/sidebar.png";

const users = [
  {
    id: 1,
    username: "abdulloh",
    fullname: "Abdulloh Azamjonov",
    avatar: sidebar,
  },
  {
    id: 2,
    username: "messi",
    fullname: "Lionel Messi",
    avatar: sidebar,
  },
  {
    id: 3,
    username: "ronaldo",
    fullname: "Cristiano Ronaldo",
    avatar: sidebar,
  },
];

const posts = [
  {
    id: 1,
    title: "nature",
  },
  {
    id: 2,
    title: "minecraft",
  },
  {
    id: 3,
    title: "football",
  },
  {
    id: 4,
    title: "anime",
  },
  {
    id: 5,
    title: "car",
  },
  {
    id: 6,
    title: "travel",
  },
];

export default function Search() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [explorePosts, setExplorePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";

  const userResult =
    search.trim() === ""
      ? []
      : users.filter(
          (user) =>
            user.username
              .toLowerCase()
              .includes(search.toLowerCase()) ||
            user.fullname
              .toLowerCase()
              .includes(search.toLowerCase())
        );

  const postResult =
    search.trim() === ""
      ? posts
      : posts.filter((post) =>
          post.title
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  const getExplorePosts = async () => {
    try {
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

      const [photosRes, videosRes] = await Promise.all([
        axios.get(
          `https://api.pexels.com/v1/search?query=${random}&per_page=20`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        ),

        axios.get(
          `https://api.pexels.com/videos/search?query=${random}&per_page=10`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        ),
      ]);

      const photos = photosRes.data.photos.map((photo) => ({
        id: `photo-${photo.id}`,
        type: "image",
        src: photo.src.large,
        alt: photo.alt || "Pexels image",
      }));

      const videos = videosRes.data.videos
        .map((video) => {
          const videoFile = video.video_files
            ?.filter(
              (file) => file.file_type === "video/mp4"
            )
            ?.sort(
              (a, b) =>
                (b.width || 0) - (a.width || 0)
            )[0];

          if (!videoFile) {
            return null;
          }

          return {
            id: `video-${video.id}`,
            type: "video",
            src: videoFile.link,
            thumbnail: video.image,
            alt: "Pexels video",
          };
        })
        .filter(Boolean);

      const mixedPosts = [...photos, ...videos].sort(
        () => Math.random() - 0.5
      );

      setExplorePosts(mixedPosts);
    } catch (error) {
      console.error("Pexels API error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getExplorePosts();
  }, []);

  return (
    <div className="ml-64 flex-1 px-8 py-8">
      <div className="max-w-7xl mx-auto px-8 py-8">
        <div className="min-h-screen bg-white">
          <div className="max-w-6xl mx-auto px-4 py-6">

            <div className="flex items-center gap-4 mb-6">
              <button
                onClick={() => navigate("/")}
                className="p-2 rounded-full hover:bg-gray-200 transition"
              >
                <FiArrowLeft size={22} />
              </button>

              <h1 className="text-2xl font-semibold">
                Search
              </h1>
            </div>
            <div className="relative mb-8">
              <FiSearch
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-14 bg-gray-100 rounded-2xl pl-12 pr-4 outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
            {search && (
              <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">
                  Users
                </h2>

                {userResult.length > 0 ? (
                  <div className="space-y-3">
                    {userResult.map((user) => (
                      <div
                        key={user.id}
                        className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50"
                      >

                        <div className="flex items-center gap-3">
                          <img
                            src={user.avatar}
                            alt={user.username}
                            className="w-12 h-12 rounded-full object-cover"
                          />

                          <div>
                            <p className="font-semibold">
                              {user.username}
                            </p>

                            <p className="text-sm text-gray-500">
                              {user.fullname}
                            </p>
                          </div>
                        </div>

                        <button className="px-5 py-2 bg-black text-white rounded-lg text-sm">
                          Follow
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Foydalanuvchi topilmadi.
                  </p>
                )}
              </section>
            )}
            <section>
              <h2 className="text-xl font-semibold mb-5">
                Explore
              </h2>
              {loading ? (
                <div className="flex justify-center py-20">
                  <p className="text-gray-500">
                    Rasmlar va videolar yuklanmoqda...
                  </p>
                </div>
              ) : explorePosts.length === 0 ? (
                <div className="flex justify-center py-20">
                  <p className="text-gray-500">
                    Postlar topilmadi.
                  </p>
                </div>
              ) : (
                <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                  {explorePosts.map((post) => (
                    <div
                      key={post.id}
                      className="relative group mb-4 break-inside-avoid overflow-hidden rounded-xl bg-gray-100"
                    >

                      {post.type === "image" && (
                        <img
                          src={post.src}
                          alt={post.alt}
                          loading="lazy"
                          className="w-full block object-cover"
                        />
                      )}

                      {post.type === "video" && (
                        <video
                          src={post.src}
                          poster={post.thumbnail}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full block object-cover"
                          onMouseEnter={(e) => {
                            e.currentTarget.play();
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.pause();
                            e.currentTarget.currentTime = 0;
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-200 pointer-events-none" />
                      {post.type === "video" && (
                        <div className="absolute top-3 right-3 bg-black/60 text-white rounded-full p-2">
                          <FiPlay
                            size={16}
                            fill="white"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}