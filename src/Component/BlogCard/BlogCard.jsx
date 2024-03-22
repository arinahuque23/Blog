/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const BlogCard = ({ blog }) => {
  console.log(blog);

  const { id, title, author, date, content, image, category, likes, comments } =
    blog || {};

  const getFirst10Words = (content) => {
    return content.split(" ").slice(0, 10).join(" ");
  };

  return (
    <div>
      <div className="card card-compact w-80 h-[60vh] bg-base-100 shadow-xl">
        <figure>
          <img className="h-[29vh] w-[48vh] " src={image} alt="img" />
        </figure>
        <div className="flex">
          <div className="avatar mt-2 ml-5">
            <div className="w-[4vh] h-7 rounded-full">
              <img src={author.author_image} />
            </div>
            <h1 className="ml-2 ">{author.name} .</h1>
          </div>
          <div>
            <h1 className="mt-2 ml-5 text-gray-500">{date} </h1>
          </div>
          <div></div>
        </div>
        <div className="card gap-5 mt-2 mx-auto ml-5">
          <p className=" font-bold text-xl">{title}</p>
          <p className="font-serif text-base ">
            {getFirst10Words(content)}
            <Link
              to={`/blogData/${id}`}
              className="text-base text-blue-700 font-semibold"
            >
              ...See More
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
