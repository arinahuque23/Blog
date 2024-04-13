import { useLoaderData } from "react-router-dom";
import BlogPage from "../../Component/BlogPage/BlogPage";
import OurTeam from "../../Component/OurTeam/OurTeam";
import Banner from "../../Component/Banner/Banner"
import ReadMore from "../../Component/ReadMore/ReadMore";
import AboutUs from "../../Component/AboutUs/AboutUs";

const Home = () => {
       const blogData = useLoaderData()
       console.log(blogData);
  return (
    <div>
    <Banner></Banner>
      <BlogPage blogData={blogData}></BlogPage>
      <ReadMore></ReadMore>
      <h2 className="text-center text-3xl font-extrabold">About Us</h2>
      <AboutUs></AboutUs>
      <OurTeam></OurTeam>
    </div>
  );
};

export default Home;
