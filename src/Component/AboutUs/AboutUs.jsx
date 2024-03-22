/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="mx-4 md:mx-auto">
      <section className="bg-gray-200 text-black py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-16 text-center">About Us</h1>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <img
                src="https://i.ibb.co/9GbfrQJ/istockphoto-614429946-612x612.jpg"
                alt="Team"
                className="rounded-lg shadow-lg w-full h-auto animate-float"
              />
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg mb-4">
                Welcome to our blog! We are passionate about delivering
                high-quality content that informs, educates, and entertains our
                readers. Our team of dedicated writers covers a wide range of
                topics, including technology, lifestyle, health, travel, and
                more.
              </p>
              <p className="text-lg mb-4">
                Our mission is to inspire and empower our audience with
                thought-provoking articles, insightful stories, and useful tips
                and advice. Whether you're looking for the latest trends in
                fashion, tips for healthy living, or travel inspiration, you'll
                find it all here on our blog.
              </p>
              <p className="text-lg">
                Thank you for joining us on this journey. We hope you enjoy
                exploring our content and find value in what we share.
              </p>
              <div className="text-center mt-8">
                <Link
                  to="/"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded shadow"
                >
                  Explore Our Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" text-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Mission & Vision
          </h2>
          <div className="flex flex-wrap justify-center items-center">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget
                justo ac risus pulvinar eleifend. Integer luctus purus vitae
                libero mollis, at mattis enim placerat.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <p className="text-lg mb-4">
                Donec maximus mi eget erat pharetra, ac consectetur velit
                dapibus. Nulla facilisi. Proin hendrerit elit et metus
                tincidunt, eget tempus urna gravida.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
