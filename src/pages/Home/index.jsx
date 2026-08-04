import Feed from "../../components/Feed";
import RightSidebar from "../../components/RightSidebar";

const Home = () => {
  return (
    <div className="ml-[250px] flex justify-center gap-12 bg-[#fafafa] min-h-screen">
      <Feed />
      <RightSidebar />      
    </div>
  );
};

export default Home;