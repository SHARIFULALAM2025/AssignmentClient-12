import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa6'

const Mission = () => {
    return (
      <div className="mt-12">
        <div className="">
          <span className="inline-block mb-4 rounded-full bg-green-200 px-4 py-2 text-sm font-medium text-gray-700">
            Vision & Mission
          </span>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
            We Aim To Care For Every Generation, <br />
            With Trust, Compassion & Connection
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-3">
          {/* Left Content */}

          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Our Vision
            </h4>

            <p className="text-gray-600 mb-6">
              To become the most trusted and indispensable care software,
              dedicated to revolutionizing how people approach their well-being.
              We empower individuals to train smarter.
            </p>

            <button className="rounded-lg bg-sky-800 px-6 py-3 text-sm font-semibold text-white opacity-100 hover:bg-sky-800 transition">
              Get Started Free
            </button>
          </div>

          {/* Center Image */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative h-72 w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://i.ibb.co.com/5grdBfGY/muhammad-noor-ridho-9-YHlodby-KPY-unsplash.jpg" // put image in /public folder
                alt="Fitness Runner"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-1 text-base">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Our Mission
            </h4>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-green-600">
                  <FaCheck></FaCheck>
                </span>
                <p className="text-gray-600">
                  Discover practical strategies, motivating insights, and
                  actionable steps.
                </p>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-green-600">
                  <FaCheck></FaCheck>
                </span>
                <p className="text-gray-600">
                  Foundation of sustainable progress, mindful movement, and
                  holistic well-being.
                </p>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-green-600">
                  <FaCheck></FaCheck>
                </span>
                <p className="text-gray-600">
                  We focus on optimizing processes and fostering continuous
                  learning to help you.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
};

export default Mission;