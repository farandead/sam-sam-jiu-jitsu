import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '../PageLayout';
import ImageSlider from '../ImageSlider'; // Import the ImageSlider component
import image1 from '../../assets/images/1.png';
import image2 from '../../assets/images/5.png';

const Memberships = () => {
  const navigate = useNavigate();

  const handleDetailsRedirect = (programType) => {
    navigate(`/membership-details`, { state: { programType } });
  };

  // Images for slideshow
  const adultProgramImages = [image1, image2]; // Add more images as needed
  const kidsProgramImages = [image2, image1]; // Add more images as needed

  return (
    <PageLayout className="pt-5 mt-3">
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-[#23b6cb] sm:text-4xl">
            Our Memberships
          </h2>
          <p className="mt-4 text-center text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, officiis labore? Pariatur vel dolor accusamus voluptate! Repellat autem aut delectus quae atque minima voluptatum omnis numquam consequatur, iure voluptatibus.
          </p>

          {/* Adults Programme Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mt-12">
            {/* Left Image */}
            <div className="w-full lg:w-1/2">
              <ImageSlider images={adultProgramImages} />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-12 text-left">
              <h3 className="text-3xl font-bold text-[#23b6cb]">Adults Programme</h3>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis labore vitae veritatis nulla molestiae ducimus magni asperiores eius nam nemo ipsum quos quidem, aut nihil reiciendis iure tempora maxime provident.
              </p>
              <p className="mt-6 font-semibold text-black">
                Starting from <span className="font-bold text-xl text-[#23b6cb]">£45/month</span>
              </p>
              <button
                className="mt-6 px-6 py-3 bg-[#23b6cb] text-white font-semibold rounded-md hover:bg-blue-800 transition duration-200"
                onClick={() => handleDetailsRedirect('Adult')}
              >
                More Details
              </button>
            </div>
          </div>

          {/* Kids Programme Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between mt-12">
            {/* Right Image */}
            <div className="w-full lg:w-1/2">
              <ImageSlider images={kidsProgramImages} />
            </div>

            {/* Left Content */}
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:mr-12 text-left">
              <h3 className="text-xl font-bold text-[#23b6cb]">Kids Programme</h3>
              <p className="mt-4 text-gray-700">
              Our kids program is designed to foster character development and discipline in a fun and engaging way. Through interactive games and coordination exercises, we help children improve both their mental and physical abilities. It’s a lively and enjoyable way for kids to learn new skills, build confidence, and develop social skills while making plenty of new friends.
              </p>
              <p className="mt-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, inventore.
              </p>
              <p className="mt-6 font-semibold text-black">
                Starting from <span className="font-bold text-xl text-[#23b6cb]">£30/month</span>
              </p>
              <button
                className="mt-6 px-6 py-3 bg-[#23b6cb] text-white font-semibold rounded-md hover:bg-blue-800 transition duration-200"
                onClick={() => handleDetailsRedirect('Kids')}
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Memberships;
