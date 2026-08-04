const stories = [
  {
    id: 1,
    title: "Travel",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    title: "Food",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    title: "Life",
    image: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    title: "Sport",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 5,
    title: "Games",
    image: "https://i.pravatar.cc/150?img=15",
  },
];

export default function Story() {
  return (
    <div className="flex gap-8 overflow-x-auto py-6 scrollbar-hide">
      {stories.map((story) => (
        <div
          key={story.id}
          className="flex flex-col items-center cursor-pointer"
        >
          <div className="w-20 h-20 rounded-full border-2 border-gray-300 p-1 hover:border-pink-500 transition">
            <img
              src={story.image}
              alt={story.title}
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <p className="text-sm mt-2">{story.title}</p>
        </div>
      ))}
    </div>
  );
}