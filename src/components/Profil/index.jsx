import { useEffect, useState } from "react";
import axios from "axios";

import sidebar from "../../assets/sidebar.png";
import Story1 from "../../assets/stories_1.jpg";
import Story2 from "../../assets/stories_2.png";
import Story3 from "../../assets/stories_3.png";

  const API_KEY = "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";

const Profil = () => {
  const [media, setMedia] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const queries = [
          "nature",
          "cars",
          "anime",
          "travel",
          "city",
          "football",
          "gaming",
          "mountains",
          "technology",
        ];

        const random =
          queries[Math.floor(Math.random() * queries.length)];

        const [imagesResponse, videosResponse] =
          await Promise.all([
            axios.get(
              `https://api.pexels.com/v1/search?query=${random}&per_page=10`,
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

        const images = imagesResponse.data.photos || [];

        const imageMedia = images.map((photo) => ({
          type: "image",
          src: photo.src.large,
        }));

        const videos = videosResponse.data.videos || [];

        const videoMedia = videos
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
              type: "video",
              src: videoFile.link,
            };
          })
          .filter(Boolean);

        const allMedia = [
          ...imageMedia,
          ...videoMedia,
        ];

        const shuffled = [...allMedia].sort(
          () => Math.random() - 0.5
        );

        setMedia(shuffled.slice(0, 9));
      } catch (error) {
        console.error(
          "Pexels profile media error:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getMedia();
  }, []);

  return (
    <div className="ml-[270px] p-10">

      <div className="flex gap-20">

        <img
          src={sidebar}
          className="w-40 h-40 rounded-full border"
          alt="Profile"
        />

        <div className="flex-1">

          <div className="flex items-center gap-4">

            <h1 className="text-3xl font-light">
              purplehybrid
            </h1>

            <button className="bg-gray-200 px-4 py-1 rounded-lg font-semibold hover:bg-gray-300">
              Edit Profile
            </button>

            <button className="bg-gray-200 px-4 py-1 rounded-lg font-semibold hover:bg-gray-300">
              View Archive
            </button>

          </div>

          <div className="flex gap-12 mt-6 text-lg">

            <p>
              <b>9</b> posts
            </p>

            <p>
              <b>1,500</b> followers
            </p>

            <p>
              <b>320</b> following
            </p>

          </div>

          <div className="mt-5">

            <h2 className="font-bold text-lg">
              Purple Hybrid
            </h2>

            <p>Keep it Purple 💜</p>
            <p>Developer</p>

          </div>

        </div>
      </div>


      <div className="flex gap-8 mt-16">

        <div className="text-center">

          <img
            src={Story1}
            className="w-20 h-20 rounded-full border p-1 object-cover"
            alt="Travel"
          />

          <p className="mt-2">
            Travel
          </p>

        </div>


        <div className="text-center">

          <img
            src={Story2}
            className="w-20 h-20 rounded-full border p-1 object-cover"
            alt="Food"
          />

          <p className="mt-2">
            Food
          </p>

        </div>


        <div className="text-center">

          <img
            src={Story3}
            className="w-20 h-20 rounded-full border p-1 object-cover"
            alt="Life"
          />

          <p className="mt-2">
            Life
          </p>

        </div>


        <div className="text-center">

          <div className="w-20 h-20 rounded-full border flex items-center justify-center text-4xl">
            +
          </div>

          <p className="mt-2">
            New
          </p>

        </div>

      </div>


      <div className="border-t mt-12 pt-5 flex justify-center gap-16 font-semibold text-sm tracking-wider">

        <span className="cursor-pointer">
          POSTS
        </span>

        <span className="cursor-pointer">
          REELS
        </span>

        <span className="cursor-pointer">
          TAGGED
        </span>

      </div>


      {loading ? (

        <div className="flex justify-center py-20">

          <p className="text-gray-500">
            Rasmlar va videolar yuklanmoqda...
          </p>

        </div>

      ) : (

        <div className="grid grid-cols-3 gap-4 mt-8">

          {media.map((item, index) => (

            <div
              key={index}
              className="aspect-square overflow-hidden bg-black"
            >

              {item.type === "video" ? (

                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                />

              ) : (

                <img
                  src={item.src}
                  alt={`Post ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profil;