"use client";

import React from "react";
import Image from "next/image";

const About = () => {
  const [searched, setSearcher] = React.useState(false);

  const handleSearch = () => {
    setSearcher(true);
  };

  return (
    <section className="flex h-screen lg:flex-row flex-col test">
      <div className="lg:max-w-[50vw] w-full px-10 py-32 gap-6 h-full flex flex-col items-center">
        <div className="w-full h-fit relative">
          <input
            className="rounded-[0.5rem] border-opacity-50 outline-none p-2 w-full bg-transparent border-white/20 border-[2px]"
            placeholder="Username / Email"
          />
          <button
            onClick={handleSearch}
            className="bg-white text-black px-6 py-1 rounded-[5px] absolute top-1.5 right-1.5"
          >
            Search
          </button>
        </div>
        <h1 className="font-semibold lg:text-2xl text-lg text-center">
          It looks like you have not searched for anything yet
        </h1>
        {searched ? (
          <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
            <div className="flex gap-4 ">
              <div className="flex flex-col">
                <span className="text-sm text-[#3BD6FF]">Name</span>
                <span className="font-semibold">Utkarsh Singh</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-[#3BD6FF]">Platform</span>
                <span className="font-semibold">LinkedIN</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Applications</span>
              <span className="font-semibold">30</span>
            </div>
          </div>
        ) : (
          <Image src={"/Empty.svg"} width={300} height={300} alt="Empty" />
        )}
      </div>
      <div className="bg-blue-100/20 lg:max-w-[50vw] w-full px-10 py-16 space-y-4 rounded-l-[1.5rem] overflow-y-scroll">
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
        <div className="flex flex-col border-[2px] relative p-2 rounded-[0.5rem] gap-2 w-full border-white/20">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Company name</span>
              <span className="font-semibold">Kaddu private limited</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-[#3BD6FF]">Platform</span>
              <span className="font-semibold">LinkedIN</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-[#3BD6FF]">Founder</span>
            <span className="font-semibold">Not mentioned</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
