/* eslint-disable react/prop-types */
import BlogCard from "../BlogCard/BlogCard";

const BlogPage = ({ blogData }) => {
  console.log(blogData);
  return (
    <div>
      <h2 className="text-center text-3xl font-bold mt-10 mb-10">Popular Posts</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 mx-auto gap-10 lg:ml-10 mb-10">
        {blogData?.map((blog) => (
          <BlogCard key={blog.id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
