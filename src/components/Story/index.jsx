import { useState } from "react";

import story1 from "../../assets/story_1.png";
import story2 from "../../assets/story_2.png";
import story3 from "../../assets/story_3.png";

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

export default function Stories() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <>
      <div className="flex gap-5">
        {stories.map((story) => (
          <div
            key={story.id}
            className="cursor-pointer text-center"
            onClick={() => setSelectedStory(story.image)}
          >
            <img
              src={story.image}
              alt={story.name}
              className="w-20 h-20 rounded-full border-2 border-pink-500"
            />
            <p>{story.name}</p>
          </div>
        ))}
      </div>

      {selectedStory && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center"
          onClick={() => setSelectedStory(null)}
        >
          <img
            src={selectedStory}
            alt="Story"
            className="max-w-[90%] max-h-[90%] rounded-xl"
          />
        </div>
      )}
    </>
  );
}