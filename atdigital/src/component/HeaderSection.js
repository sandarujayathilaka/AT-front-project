import React from 'react';
import headerImage from '../assert/andy-kelly.png';
import pcImage from "../assert/image 2.png";
import searchImage from "../assert/image 1.png";
import logo from "../assert/Logo.png";

function HeaderSection() {
  return (
    <div className="max-w-full">
      <img src={headerImage} alt="headerImage" className="w-full h-auto" />

      <div className="h-[294px] px-5 pt-16 pb-8 left-0 absolute bg-gradient-to-l from-cyan-500 to-green-400 flex-col justify-start items-start gap-5 inline-flex md:w-[768px] lg:w-[516px] lg:h-[256px] lg:top-[378px] lg:ml-[60px] lg:mb-[40px] lg:pt-[24px] lg:px-[40px] lg:pb-[32px] lg:gap-[20px]">
        <div className="self-stretch text-white text-4xl font-bold font-['Inter'] capitalize leading-9 ">
          We crush your competitors, goals, and sales records - without the B.S.
        </div>
        <button className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex">
          <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
            Get free consultation
          </div>
        </button>
      </div>

      <div className="h-[572.82px] left-[20px] top-[649px] absolute flex-col justify-center items-center gap-5 inline-flex md:flex-row md:top-[843px] md:left-[40px] md:w-[688px] md:h-[275px] lg:top-[857px] lg:ml-[152px] lg:gap-[20px] lg:w-[896px] lg:h-[346px">
        <img
          className="w-[275px] h-[275.82px] lg:w-[346px] lg:h-[346px]"
          src={pcImage}
        />
        <div className="self-stretch h-[277px] flex-col justify-center items-center gap-5 flex ">
          <div className="self-stretch text-center text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide md:text-left">
            Web & Mobile App Development
          </div>
          <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] md:text-left">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </div>
          <button className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex ">
            <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
              LEARN MORE
            </div>
          </button>
        </div>
      </div>

      <div className="h-[573px] left-[20px] top-[1281.82px] absolute flex-col justify-center items-center gap-5 inline-flex md:flex-row-reverse md:top-[1178px] md:left-[40px] md:w-[688px] md:h-[276px] lg:top-[1283px] lg:bottom-[832px] lg:w-[896px] lg:h-[348px]">
        <img
          className="w-[275px] h-[276px] lg:w-[346px] lg:h-[348px] relative"
          src={searchImage}
          alt="searchImage"
        />
        <div className="self-stretch h-[277px] flex-col justify-center items-center gap-5 flex lg:top-[1711px] lg:ml-[152px]">
          <div className="self-stretch text-center text-violet-700 text-[27px] font-semibold font-['Poppins'] leading-[33px] tracking-wide md:text-left ">
            Digital Strategy Consulting
          </div>
          <div className="self-stretch text-center text-black text-base font-normal font-['Inter'] md:text-left lg:w-[530px]">
            Your digital strategy should complement the overall marketing
            strategy of the company. In online marketing, each component will
            never work in isolation and every business needs a different mix. We
            provide a clear concept and strategic overview to find the most
            efficient model for your business.
          </div>
          <button className="px-5 py-3 bg-orange-400 rounded justify-start items-start gap-2 inline-flex md:w-[129px] md:content-start ">
            <div className="text-white text-sm font-bold font-['Inter'] uppercase leading-[14px]">
              LEARN MORE
            </div>
          </button>
        </div>
      </div>

      <div className="h-[715px] px-5 pt-10 pb-5 left-0 top-[1934.82px] absolute bg-violet-700 flex-col justify-start items-center gap-10 inline-flex md:top-[1524px] md:w-full lg:top-[1711px]  ">
        <div className="self-stretch h-[590px] flex-col justify-start items-start gap-[60px] flex md:h-[361px] lg:flex-row xl:flex-row lg:gap-[112px]">
          <div className="self-stretch h-[121px] flex-col justify-start items-start gap-5 flex ">
            <div className="w-[238.89px] h-[25px] relative">
              <div className="w-[238.89px] h-[36.11px] left-0 top-[-11.11px] absolute">
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className="self-stretch text-white text-base font-normal font-['Lato'] md:w-[413px] ">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </div>
          </div>
          <div className="self-stretch h-[409px] flex-col justify-start items-start gap-10 md:gap-[79px] flex md:flex-row">
            <div className="h-[199px] flex-col justify-start items-start gap-3 flex">
              <div className="text-white text-[21px] font-semibold font-['Inter']">
                Our Technologies
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-white text-sm font-medium font-['Inter'] capitalize">
                  ReactJS
                </div>
                <div className="text-white text-sm font-medium font-['Inter'] capitalize">
                  Gatsby
                </div>
                <div className="text-white text-sm font-medium font-['Inter'] capitalize">
                  NextJS
                </div>
                <div className="text-white text-sm font-medium font-['Inter'] capitalize">
                  NodeJS
                </div>
                <div className="text-white text-sm font-medium font-['Inter'] capitalize">
                  GraphQL
                </div>
                <div className="text-white text-sm font-medium font-['Inter'] capitalize">
                  Laravel
                </div>
              </div>
            </div>
            <div className="h-[170px] flex-col justify-start items-start gap-3 flex">
              <div className="text-white text-[21px] font-semibold font-['Inter']">
                Our Services
              </div>
              <div className="self-stretch h-[133px] flex-col justify-start items-start gap-3 flex md:gap-[12px]">
                <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">
                  Social media Marketing
                </div>
                <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">
                  Web & Mobile App Development
                </div>
                <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">
                  Data & Analytics
                </div>
                <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">
                  Google Marketing solutions
                </div>
                <div className="self-stretch text-white text-sm font-medium font-['Inter'] capitalize">
                  Search Engine Optimization
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[25px] flex-col justify-start items-center gap-2 flex">
          <div className="self-stretch h-[0px] border border-white"></div>
          <div className="justify-center items-center gap-4 inline-flex">
            <div className="text-white text-sm font-medium font-['Inter'] capitalize">
              Privacy Policy
            </div>
            <div className="w-4 h-[0px] origin-top-left rotate-90 border border-white"></div>
            <div className="text-white text-sm font-medium font-['Inter'] capitalize">
              Terms & Conditions
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
