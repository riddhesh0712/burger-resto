import React from 'react';
import herobg from '../../src/images/herobg.png';
import Header from './Header';
import cheif1 from '../../src/images/cheif1.png';
import cheif2 from '../../src/images/cheif2.png';
import cheif3 from '../../src/images/cheif3.png';
import bglogo1 from '../../src/images/bglogo1.svg';
import bglogo2 from '../../src/images/bglogo2.svg';
import bglogo3 from '../../src/images/bglogo3.svg';
import bglogo4 from '../../src/images/bglogo4.svg';
import bglogo5 from '../../src/images/bglogo5.svg';
import bglogo6 from '../../src/images/bglogo6.svg';
import burger from '../../src/images/burger.png'
import burgerpng from '../../src/images/burgerpng.svg'
import harryhanderson from '../../src/images/harryhanderson.png'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";


const LandingPage = () => {
  return (
    <div className="bg-gray-100 z-10 bg-transparent">
      
        <div className='absolute inset-0 h-[100%] overflow-hidden -z-10'>
            <img
              src={herobg}
              alt="Burger"
              className="z-20 "
            />
            <div className='absolute inset-0 bg-gradient-to-b h-full w-full from-black to-transparent z-0'></div>
        </div>
      <Header />
      {/* Hero Section */}
      <section className=" py-20 px-16 h-[100%]">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white max-w-[680px]">
            <h2 className="text-8xl font-bold mb-4">Get Cashback up to 50%</h2>
            <p className="text-lg mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, maxime.
            </p>
            <button className="bg-red-500  py-3 px-16 rounded-3xl text-xl font-bold">
              ORDER NOW
            </button>
          </div>
        </div>    
      </section>

      {/* Our Chef Section */}
      <section className="bg-[#fff1d6] ">
        <div className='relative inset-0 w-full h-full'>
            <img className='absolute w-48 left-[80%] top-[209px]'  src={bglogo1} alt="" />
            <img className='absolute w-48 left-[10%] top-[300px]' src={bglogo2}alt="" />
            <img className='absolute w-48 left-[85%]' src={bglogo3} alt="" />
            {/* <img className='absolute w-48 left-[20%]' src={bglogo4} alt="" /> */}
            {/* <img className='absolute w-48' src={bglogo5} alt="" /> */}
            <img className='absolute w-48' src={bglogo6} alt="" />
        </div>
        <div className="container mx-auto py-36">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Chef</h2>
          <div className="flex justify-center space-x-24    ">
            {/* Chef Cards */}
            <div className="text-center">
              <img
                src={cheif1}
                alt="Chef"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-3xl text-red-500 font-bold">Aiden Hunter</h3>
              <p className="text-gray-500">Founder</p>
            </div>
            <div className="text-center">
              <img
                src={cheif2}
                alt="Chef"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-3xl text-red-500 font-bold">Aiden Hunter</h3>
              <p className="text-gray-500">Founder</p>
            </div>
            <div className="text-center">
              <img
                src={cheif3}
                alt="Chef"
                className="rounded-full w-48 h-48 mx-auto mb-4"
              />
              <h3 className="text-3xl text-red-500 font-bold">Aiden Hunter</h3>
              <p className="text-gray-500">Founder</p>
            </div>
            {/* Add more chef cards as needed */}
          </div>
        </div>
      </section>

      {/* Best burger section*/}
      <section className='flex justify-center items-center bg-red-600 py-20'>
        <div className='flex flex-1 p-20 justify-center items-center'>
          <div className='w-96 rounded-full overflow-hidden'>
            <img src={burger} alt="" />
          </div>
        </div>
        <div className=' flex-1 py-20 pr-20 text-white'> 
          <h1 className='text-6xl font-bold mb-8'>Best Burger</h1>
          <p className='text-xl mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae enim ea expedita fugit quibusdam maiores. Obcaecati corrupti similique minima consequatur eligendi natus! Distinctio officiis maxime aperiam iure, eligendi odio.</p>
          <button className="bg-white text-red-600 py-3 px-16 rounded-3xl text-xl font-bold">
              ORDER NOW
            </button>
        </div>
      </section>

      {/* Big burger section */}
      <section >
      <div className=' inset-0 w-full h-full'>
            
            
            <img className='absolute w-48' src={bglogo6} alt="" />
        </div>
        <div className='flex justify-center items-center bg-[#fff1d6] py-20'>
        <div className=' flex-1 p-20  text-red-600'> 
          <h1 className='text-6xl font-bold mb-8'>Big Burger</h1>
          <p className='text-xl mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae enim ea expedita fugit quibusdam maiores. Obcaecati corrupti similique minima consequatur eligendi natus! Distinctio officiis maxime aperiam iure, eligendi odio.</p>
          <button className="bg-red-600 text-white py-3 px-16 rounded-3xl text-xl font-bold">
              ORDER NOW
            </button>
        </div>
        <div className='flex flex-1 p-20 justify-center items-center'>
          <div className='w-96 rounded-full overflow-hidden'>
            <img src={burger} alt="" />
          </div>
        </div>
        </div>
        
      </section>

        {/* stat section  */}
        <section className='bg-red-600 p-10 text-white'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-8xl font-extrabold mb-8'>Statistics</h1>
                <p className='max-w-[60%] text-xl text-center mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint alias laborum voluptatum repellat perspiciatis inventore voluptate assumenda omnis maiores. Provident voluptatem dolore unde minus fugit.</p>
            </div>
            <div className='flex justify-around py-10'>
                <div className='flex flex-col justify-center items-center w-64 h-64 rounded-full border-4 border-white'>
                    <span className='text-7xl font-extrabold'>7K</span>
                    <p className='text-2xl font-bold'>Customer</p>
                </div>
                <div className='flex flex-col justify-center items-center w-64 h-64 rounded-full border-4 border-white'>
                    <span className='text-7xl font-extrabold'>109</span>
                    <p className='text-2xl font-bold'>Outlets</p>
                </div>
                <div className='flex flex-col justify-center items-center w-64 h-64 rounded-full border-4 border-white'>
                    <span className='text-7xl font-extrabold'>35</span>
                    <p className='text-2xl font-bold'>Country</p>
                </div>
            </div>
        </section>

        {/* Popular Packages Section */}
        <section className='bg-[#fff1d6]'>
          
          <div className='p-20 z-20'>
            <div className='p-10 text-center'>
                <h1 className='text-7xl font-bold text-red-600'>Popular Packages</h1>
            </div>
            <div className='flex justify-around items-center px-24 space-x-8'>
                <div className='flex flex-col justify-center items-center text-center bg-white rounded-lg p-10 text-red-600'>
                    <h3 className='text-3xl font-bold'>Package I</h3>
                    <img src={burgerpng} alt="" className='w-48 mb-3'  />
                    <p className='text-2xl font-semibold mb-4'>$11</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <button className="bg-red-600 text-white mt-8 py-3 px-10 rounded-3xl text-xl font-bold">
                      ORDER NOW
                    </button>
                </div>
                <div className='flex flex-col justify-center items-center text-center bg-white rounded-lg p-10 text-red-600'>
                    <h3 className='text-3xl font-bold'>Package II</h3>
                    <img src={burgerpng} alt="" className='w-48 mb-3'  />
                    <p className='text-2xl font-semibold mb-4'>$31</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <button className="bg-red-600 text-white mt-8 py-3 px-10 rounded-3xl text-xl font-bold">
                      ORDER NOW
                    </button>
                </div><div className='flex flex-col justify-center items-center text-center bg-white rounded-lg p-10 text-red-600'>
                    <h3 className='text-3xl font-bold'>Package III</h3>
                    <img src={burgerpng} alt="" className='w-48 mb-3'  />
                    <p className='text-2xl font-semibold mb-4'>$21</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button className="bg-red-600 text-white mt-8 py-3 px-10 rounded-3xl text-xl font-bold">
                      ORDER NOW
                    </button>
                </div>
            </div>
          </div>
            
        </section>

        {/* Barry Handerson section */}
        <section className="relative">
          <div className="absolute inset-0 bg-red-600 opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 text-white">
            <h1 className='text-7xl font-bold mb-8'>Harry Handerson</h1>
            <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt provident et at voluptatum quis.</p>
          </div>
          <img
            src={harryhanderson}
            alt="Background Image"
            className="w-full h-screen object-cover"
          />
        </section>

        {/* Subscribe section */}
        <section className='relative flex justify-center items-center h-screen bg-[#fff1d6]'>
          <div className='absolute inset-0 w-full h-full z-10'>
            <img src={bglogo1} alt="" className='absolute w-48 left-[80%] top-[70%]'/>
            <img src={bglogo2} alt="" className='absolute w-48 left-[85%] top-[30%]'/>
            <img src={bglogo3} alt="" className='absolute w-56 left-[75%]'/>
            <img src={bglogo4} alt="" className='absolute w-60 top-[50%] left-[10%]'/>
            <img src={bglogo5} alt="" className='absolute w-60 rotate-12 top-[25%] '/>
            <img src={bglogo6} alt="" className='absolute w-48 left-[20%]'/>
          </div>
          <div className='flex flex-col justify-center items-center text-center p-32 max-w-[70%]'>
            <h1 className='text-6xl font-bold mb-8 mt-10 text-red-600 '>Dont miss Our Update</h1>
            <p className='text-xl text-red-600 mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure assumenda officiis, quae pariatur delectus rem error quisquam aperiam perferendis ut deserunt eveniet? Eveniet, possimus adipisci.</p>
            <div className='p-10'>
              <input 
                type="text" 
                placeholder="Enter your email" 
                className="bg-white rounded-l-full py-4 px-16" 
              />

              <button className="bg-red-600 text-white py-4 px-10 rounded-r-3xl font-bold">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </section>

        {/* footer area */}
        <footer className='bg-[#202020] p-20'>
          <div className='flex justify-center items-center py-20 text-white'>
            <div className='flex-1 p-10'>
              <h1 className='text-3xl font-bold mb-5'>Title Here</h1>
              <p className='text-xl mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt provident et at voluptatum quis.</p>
              <div className='flex items-center space-x-4 '>
                <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                  <a href=""><FaWhatsapp color='#202020' size={24}/></a>
                </div>
                <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                  <a href=""><FaFacebook color='#202020' size={24}/></a>
                </div>
                <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                  <a href=""><TiSocialTwitter color='#202020' size={24}/></a>
                </div>
                <div className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
                  <a href=""><FaInstagram color='#202020' size={24}/></a>
                </div>
              </div>
            </div>
            <div className='flex flex-1 justify-around px-24 space-x-8'>
              <div className='space-y-3'>
                <p className='text-2xl font-bold'>Anout</p>
                <ul className='px-3' title='About'>
                  <a href="#"><li>History</li></a>
                  <a href=""><li>Our Team </li></a>
                  <a href=""><li>Brand Guidlines</li></a>
                  <a href=""><li>Terms & Conditions</li></a>
                  <a href=""><li>Privacy Policy</li></a>
                </ul>
              </div>
              <div className='space-y-3'>
                <p className='text-2xl font-bold'>Services</p>
                <ul className='px-3' title='Services'>
                  <a href=""><li>How to order</li></a>
                  <a href=""><li>Our Product</li></a>
                  <a href=""><li>Order Status</li></a>
                  <a href=""><li>Promo</li></a>
                  <a href=""><li>Payment Method</li></a>
                </ul>
              </div>
              <div className='space-y-3'>
                <p className='text-2xl font-bold'>Other</p>
                <ul className='px-3' title='Other'>
                  <a href=""><li>Contact Us</li></a>
                  <a href=""><li>Help</li></a>
                  <a href=""><li>Privacy</li></a>
                </ul>
              </div>
            </div>
          </div>
          
        </footer>
    </div>
  );
};

export default LandingPage;