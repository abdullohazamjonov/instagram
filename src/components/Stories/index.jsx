import stories1 from "../../assets/stories_1.png"
import stories2 from "../../assets/stories_2.png"
import stories3 from "../../assets/stories_3.png"

const stories = [
  {
    id: 1,
    name: "abdulloh",
    image: stories1,
  },
  {
    id: 2,
    name: "john",
    image: stories2,
  },
  {
    id: 3,
    name: "alex",
    image: stories3,
  },
  {
    id: 4,
    name: "messi",
    image: stories1,
  },
  {
    id: 5,
    name: "ronaldo",
    image: stories2,
  },
  {
    id: 6,
    name: "neymar",
    image: stories3,
  },
  {
    id: 7,
    name: "hazard",
    image: stories1,
  },
  {
    id: 8,
    name: "developer",
    image: stories2,
  },
];

const Stories = () => {
  return (
    <div className="bg-white border rounded-lg p-4 flex gap-5 overflow-x-auto scrollbar-hide">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center cursor-pointer min-w-[70px]">
          <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[3px] rounded-full">
            <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full border-2 border-white"/>
          </div>
          <p className="text-xs mt-2 truncate w-16 text-center">
            {story.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stories;