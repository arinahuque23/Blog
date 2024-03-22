import "./Banner.css";

const Banner = () => {
  return (
    <section className="relative bg-gray-900 text-white py-60 overflow-hidden">
      <div className="bg-parallax"></div>
      <div className="container mx-auto flex flex-col items-center justify-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center transform -skew-y-3 animate-fadeIn animate-scale">
          Welcome to Our Blog
        </h1>
        <p className="text-lg md:text-xl mb-8 text-center transform -skew-y-3 animate-fadeIn animate-rotate">
          Discover Engaging Stories
        </p>
        <a
          href="/"
          className="btn bg-yellow-500 text-white font-semibold py-2 px-4 rounded shadow transform -skew-y-3 animate-fadeIn animate-float"
        >
          Explore Now
        </a>
      </div>
    </section>
  );
};

export default Banner;
