import { useLoaderData } from "react-router-dom";
import BlogPage from "../../Component/BlogPage/BlogPage";
import OurTeam from "../../Component/OurTeam/OurTeam";
import Banner from "../../Component/Banner/Banner"

const Home = () => {
       const blogData = useLoaderData()
       console.log(blogData);
  return (
    <div>
    <Banner></Banner>
      <BlogPage blogData={blogData}></BlogPage>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
