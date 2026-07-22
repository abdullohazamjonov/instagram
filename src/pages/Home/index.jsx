import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import RightSidebar from "../../components/RightSidebar";
import Danger from "../../components/Danger";

const Home = () => {
  return (
    <div className="flex bg-[#fafafa] min-h-screen">
      <Sidebar />
      <div className="ml-[250px] flex justify-center w-full gap-12">
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;