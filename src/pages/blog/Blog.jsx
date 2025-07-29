import React from 'react'
import blogBacround from '../../assets/blogBacround.png'
import { RiAdminFill } from "react-icons/ri";
import { FaCalendar } from "react-icons/fa";
import { CiShoppingTag, CiSearch } from "react-icons/ci";
import postImg from "../../assets/posts.png"
import recante from "../../assets/recent1.png"

const Blog = () => {
  const Posts = [
    {
      image: "/img1.jpg",
      title: "Going all-in with millennial design",
      date: "03 Aug 2022",
    },
    {
      image: "/img2.jpg",
      title: "Exploring new ways of decorating",
      date: "03 Aug 2022",
    },
    {
      image: "/img3.jpg",
      title: "Handmade pieces that took time to make",
      date: "03 Aug 2022",
    },
    {
      image: "/img4.jpg",
      title: "Modern home in Milan",
      date: "03 Aug 2022",
    },
    {
      image: "/img5.jpg",
      title: "Colorful office redesign",
      date: "03 Aug 2022",
    },
  ];

  return (
    <div className="w-full">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 pt-[105px] flex flex-col lg:flex-row gap-[100px]">
        {/* Left side with image */}
        <div className="lg:w-3/4 w-full">
          <img
            src={blogBacround}
            alt="Blog background"
            className="w-full h-auto rounded-md"
          />
          <div className="flex items-center gap-6 pt-4">
            <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px]">
              <RiAdminFill className="w-[20px] h-[20px]" />
              Admin
            </p>
            <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px]">
              <FaCalendar className="w-[20px] h-[20px]" />
              14 Oct 2022
            </p>
            <p className="flex items-center gap-2 text-[#9F9F9F] text-[16px]">
              <CiShoppingTag className="w-[20px] h-[20px]" />
              Wood
            </p>
          </div>
        </div>

        {/* Right side search and categories */}
        <div className="lg:w-1/4 w-full">
          <div className="flex items-center border border-[#E5E5E5] rounded-lg px-4 py-3 gap-2 mb-6">
            <input
              className="border-none outline-none w-full"
              type="text"
              placeholder="Search..."
            />
            <CiSearch className="w-[24px] h-[24px]" />
          </div>

          <h2 className="text-2xl font-semibold mb-8">Categories</h2>
          <div className="flex flex-col gap-10">
            {[
              { name: "Crafts", count: 2 },
              { name: "Design", count: 8 },
              { name: "Handmade", count: 7 },
              { name: "Interior", count: 3 },
              { name: "Wood", count: 6 },
            ].map((cat, i) => (
              <div className="flex justify-between" key={i}>
                <p className="text-[#9F9F9F] text-lg font-medium">{cat.name}</p>
                <span className="text-[#9F9F9F] text-lg font-medium">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="max-w-7xl mx-auto px-4 py-14 flex flex-col lg:flex-row gap-[100px]">
        <div className="lg:w-3/4 w-full">
          <h2 className="text-3xl font-semibold pb-4">Going all-in with millennial design</h2>
          <p className="text-md text-[#9F9F9F] text-justify pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
            risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
            pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
            ornare aenean euismod elementum.
          </p>
          <span className="text-md font-medium border-b border-black pb-1 cursor-pointer">Read more</span>

          <div className="mt-12">
            <img
              src={postImg}
              alt="Decorating"
              className="w-full h-auto rounded-md"
            />
          </div>

          <div className="text-sm text-gray-500 flex items-center gap-4 mt-4 mb-2">
            <span>👤 Admin</span>
            <span>📅 14 Oct 2022</span>
            <span>🏷 Handmade</span>
          </div>

          <h2 className="text-2xl font-semibold mb-3">Exploring new ways of decorating</h2>

          <p className="text-gray-600 leading-relaxed text-justify mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
            risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras
            pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque
            ornare aenean euismod elementum.
          </p>

          <button className="text-sm font-medium border-b border-black pb-1 hover:opacity-70 transition">
            Read more
          </button>
        </div>

        <aside className="lg:w-1/4 w-full">
          <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
          <ul className="space-y-4">
            {Posts.map((post, i) => (
              <li key={i} className="flex items-center gap-3 pb-10">
                <img
                  src={recante}
                  alt={post.title}
                  className="w-14 h-14 rounded object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{post.title}</p>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Blog;