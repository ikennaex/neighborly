import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Make sure you have axios installed
import { Link } from 'react-router-dom';
import { fridge } from '../../imports';
import './herosection.css';
import { baseUrl } from '../../baseUrl';

const Herosection = () => {
  const [ads, setAds] = useState([]);
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  // Fetch ads when the component mounts
  useEffect(() => {
    const fetchAds = async () => {
      try {
        const response = await axios.get(`${baseUrl}runadvert`);
        setAds(response.data); // if the response contains the ads array
      } catch (error) {
        console.error("Error fetching ads:", error);
      }
    };

    fetchAds();
  }, []); // Run only once when the component mounts

  // Update the ad every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length); // Cycle through ads
    }, 6000); // 6 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [ads.length]);

  // only display active ads 
  const activeAds = ads.filter(ad => ad.active === true);
  // Get the current ad based on the index
  const currentAd = activeAds[currentAdIndex];

  return (
    <div className="pb-7">
      <div className="flex justify-between items-center bg-customBlue h-72 lg:h-96 rounded-xl overflow-clip">
        <div className="py-3 px-4 lg:px-9 w-1/2">
          <div className="mb-7 text-white">
            <p className="text-2xl lg:text-5xl font-bold mb-2">
              {currentAd ? currentAd.name : 'Best Deals in your Neighbourhood'}
            </p>
            <p className="italic text-md lg:text-xl">
               {currentAd ? "in " + currentAd.location : ''}
            </p>
            <p className="italic text-md lg:text-xl">
              {currentAd ? "₦" + currentAd.price : '...buy with ease'}
            </p>
          </div>
          <Link target='_blank' to={currentAd ? currentAd.link : ''}>
            <button className="bg-customYellow p-3 border-black font-semibold">
              Buy now
            </button>
          </Link>
        </div>

        <div className="">
          <img
            className={currentAd ? `lg:h-96 h-72 w-fit object-cover pr-4` :`h-80 lg:h-[29rem] w-fit object-cover ` }
            src={currentAd ? `${currentAd.img}` : fridge} // Fallback to fridge image if no ad
            alt={currentAd ? currentAd.name : 'Product image'}
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;