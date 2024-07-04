import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'; // Import icons from react-icons library

const ContactUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-semibold text-center mb-4">Contact Us</h2>
          <div className="flex items-center mb-6">
            <FiMail className="text-gray-500 mr-3" />
            <span className="text-lg text-gray-800">Email: contact@example.com</span>
          </div>
          <div className="flex items-center mb-6">
            <FiPhone className="text-gray-500 mr-3" />
            <span className="text-lg text-gray-800">Phone: +1 (123) 456-7890</span>
          </div>
          <div className="flex items-center mb-6">
            <FiMapPin className="text-gray-500 mr-3" />
            <span className="text-lg text-gray-800">Address: 1234 Street, City, Country</span>
          </div>
          <div className="mt-8">
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500 col-span-2"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300 col-span-2 flex-shrink-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
