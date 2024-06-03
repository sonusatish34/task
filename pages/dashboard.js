import { useEffect, useState } from 'react';
import Image from 'next/image';
import Loader from './loader';
import HamburgerMenu from './hamburger';
export default function Dashboard({ cars }) {
  const [loading, setLoading] = useState(true); // State to manage loading
  useEffect(() => {
    setLoading(false); // Set loading to false once data is fetched
  }, []);

  return (

    <div className='bg-gray-400 p-2'>
      <div className='rounded-lg hamburger my-1 mx-4 p-2 text-3xl text-blue-600 bg-sky-200'>
        <HamburgerMenu />
      </div>
      <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 p-4'>
        {cars.map((item, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden'>
            <div className='p-4'>
              <ul className='space-y-2'>
                <li className='text- text-gray-700'>{item.maker_model} from ₹ {item.price_6_hours}</li>
                {loading ? (
                  <li className='text-sm text-gray-700'><Loader /></li> // Render loader while loading
                ) : (
                  <li className='h-96'>
                    <img
                      src={item.car_image_front_view}
                      alt='Car Image'
                      className='w-full h-full object-cover'
                    />
                  </li>
                )}
                {/* Uncomment below lines if needed */}
                {/* <li className='text-sm text-red-600'>User contact: {item.user_phone}</li>
          <li className='text-sm text-red-600'>{item.maker_model}</li> */}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}


export async function getStaticProps() {
  const response = await fetch('https://longdrivecarz.in/util/testing-home?limit=200');
  const items = await response.json();
  const cars = items?.data?.results
  return {
    props: {
      items,
      cars
    },
  };
}
