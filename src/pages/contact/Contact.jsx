import React, { useState } from "react";
import { IoLocationSharp, IoTime } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="w-full min-h-screen bg-white py-16 px-4 md:px-16">
      <div className="text-center flex flex-col gap-2 pb-32">
        <h2 className="text-2xl md:text-3xl font-semibold ">Get In Touch With Us</h2>
         <p className="text-gray-500 text-sm md:text-base">
            For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-1">
        <div className="md:w-1/2 space-y-8">
         

          <div className="space-y-6 mt-6 flex flex-col gap-4 sm:gap-1.5">
            <div className="flex items-start gap-4">
              <IoLocationSharp className="text-xl text-black" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="md:text-md sm:text-sm text-gray-600">
                  236 5th SE Avenue, New York NY10000,<br /> United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-xl"/>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-md text-sm text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-md text-sm text-gray-600">Hotline: +(64) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <IoTime className="text-xl"/>
              <div>
                <h4 className="font-semibold">Working Time</h4>
                <p className="text-md text-sm text-gray-600">Monday–Friday: 9:00 – 22:00</p>
                <p className="text-md text-sm text-gray-600">Saturday–Sunday: 9:00 – 21:00</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 space-y-5 bg-white p-1"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium">Your name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Abc"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="abc@def.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="This is an optional"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Hi! I'd like to ask about..."
            />
          </div>

          <button
            type="submit"
            className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}