import { useEffect, useState } from "react";
import axios from "axios";

import story1 from "../../assets/story_1.png";
import story2 from "../../assets/story_2.png";
import story3 from "../../assets/story_3.png";

const API_KEY = "563492ad6f9170000100000140aab26a784142cba295401ac47d41ab";

const stories = [
  {
    id: 1,
    name: "Johin",
    image: story1,
  },
  {
    id: 2,
    name: "Asad",
    image: story2,
  },
  {
    id: 3,
    name: "Bexruz",
    image: story3,
  },
];

export default function Story() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [storyVideos, setStoryVideos] = useState({});

  useEffect(() => {
    const getVideos = async () => {
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

        const videos = response.data.videos || [];

        const newVideos = {};

        videos.slice(0, stories.length).forEach((video, index) => {
          const videoFile = video.video_files
            ?.filter(
              (file) => file.file_type === "video/mp4"
            )
            ?.sort(
              (a, b) =>
                (b.width || 0) - (a.width || 0)
            )[0];

          if (videoFile) {
            newVideos[index] = videoFile.link;
          }
        });

        setStoryVideos(newVideos);
      } catch (error) {
        console.error(
          "Pexels Story video error:",
          error
        );
      }
    };

    getVideos();
  }, []);

  const previousStory = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) => {
      if (prev === 0) {
        return stories.length - 1;
      }

      return prev - 1;
    });
  };

  const nextStory = (e) => {
    e.stopPropagation();

    setSelectedIndex((prev) => {
      if (prev === stories.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const closeStory = () => {
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="flex gap-6">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className="cursor-pointer text-center"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-pink-500 p-[2px]"
            />

            <p className="mt-1 text-sm">
              {story.name}
            </p>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeStory}
        >
          <div
            className="relative w-[400px] h-[700px] max-w-[90vw] max-h-[90vh] bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-4 bg-gradient-to-b from-black/70 to-transparent">
              <div className="flex items-center gap-3">
                <img
                  src={stories[selectedIndex].image}
                  alt={stories[selectedIndex].name}
                  className="w-10 h-10 rounded-full object-cover border border-white"
                />

                <p className="text-white font-semibold">
                  {stories[selectedIndex].name}
                </p>
              </div>

              <button
                onClick={closeStory}
                className="text-white text-3xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {storyVideos[selectedIndex] ? (
              <video
                src={storyVideos[selectedIndex]}
                autoPlay
                muted
                controls
                playsInline
                className="w-full h-full object-contain bg-black"
              />
            ) : (
              <img
                src={stories[selectedIndex].image}
                alt={stories[selectedIndex].name}
                className="w-full h-full object-contain bg-black"
              />
            )}

            <button
              onClick={previousStory}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white text-2xl flex items-center justify-center hover:bg-black/80 transition"
            >
              ←
            </button>

            <button
              onClick={nextStory}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 text-white text-2xl flex items-center justify-center hover:bg-black/80 transition"
            >
              →
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
              {selectedIndex + 1} / {stories.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}