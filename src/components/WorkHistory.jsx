import React, { useState } from 'react';
import BountyCard from './BountyCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const WorkHistory = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tabs = ['Completed', 'In Review'];

  const bounties = [
    {
      title: "Design Earn’s Talent Leaderboard",
      organization: { name: "Superteam", logo: "/superteam-logo.png" },
      date: "04/04/2023",
      participants: 36,
      prize: { amount: 700, currency: "USDC" },
      place: "1st Place",
      tags: ["Design"]
    },
    {
      title: "Armada UI/UX Review",
      organization: { name: "Dean's List Dao", logo: "/deanslist-logo.png" },
      date: "21/03/2023",
      participants: 7,
      prize: { amount: 0, currency: "" },
      place: "",
      tags: ["Design"]
    },
    {
      title: "Create a Frame for Farcaster",
      organization: { name: "Deribet", logo: "/deribet-logo.png" },
      date: "14/03/2023",
      participants: 20,
      prize: { amount: 500, currency: "USDC" },
      place: "1st Place",
      tags: ["Frontend", "Backend", "Blockchain"]
    },
    {
      title: "Write a thread with memes for PP Program on Solana",
      organization: { name: "pSTAKE Finance", logo: "/pstake-logo.png" },
      date: "06/03/2023",
      participants: 12,
      prize: { amount: 100, currency: "USDC" },
      place: "3rd Place",
      tags: ["Content"]
    }
  ];
  const bountiesReview = [
    {
      title: "Write a thread with memes for PP Program on Solana ",
      organization: { name: "pSTAKE Finance", logo: "/pstake-logo.png" },
      date: "04/04/2023",
      participants: 36,
      prize: { amount: 700, currency: "USDC" },
      place: "1st Place",
      tags: ["Content"]
    },
    {
      title: "Armada UI/UX Review ",
      organization: { name: "Dean's List Dao", logo: "/deanslist-logo.png" },
      date: "21/03/2023",
      participants: 7,
      prize: { amount: 0, currency: "" },
      place: "",
      tags: ["Design"]
    },
    {
      title: "Design Earn’s Talent Leaderboard",
      organization: { name: "Superteam", logo: "/superteam-logo.png" },
      date: "14/03/2023",
      participants: 20,
      prize: { amount: 500, currency: "USDC" },
      place: "1st Place",
      tags: ["Design"]
    },
    {
      title: "Create a Frame for Farcaster",
      organization: { name: "Deribet", logo: "/deribet-logo.png" },
      date: "06/03/2023",
      participants: 12,
      prize: { amount: 100, currency: "USDC" },
      place: "3rd Place",
      tags: ["Frontend", "Backend", "Blockchain"]
    }
  ];
  const renderBounties = () => {
    if (activeTab === 'Completed') {
      return bounties.map((bounty, index) => (
        <BountyCard
          key={index}
          title={bounty.title}
          organization={bounty.organization}
          date={bounty.date}
          participants={bounty.participants}
          prize={bounty.prize}
          place={bounty.place}
          tags={bounty.tags}
        />
      ));
    } else if (activeTab === 'In Review') {
      return bountiesReview.map((bounty, index) => (
        <BountyCard
          key={index}
          title={bounty.title}
          organization={bounty.organization}
          date={bounty.date}
          participants={bounty.participants}
          prize={bounty.prize}
          place={bounty.place}
          tags={bounty.tags}
        />
      ));
    }
    return null;
  };
  // const renderedBounties = renderBounties();

  return (
    <div className="flex flex-row ">
    <div className="px-8 py-5 bg-white max-md:px-5">
      <div className="flex justify-between items-center border-b-2 border-gray-200 ">
        <div className="flex gap-8 items-center">
          <div className="pb-2 text-gray-600 font-bold text-lg">Work History</div>
          <div className="border-r border-gray-300 h-6 self-center"></div>
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`cursor-pointer pb-4 mt-4 ${
                activeTab === tab ? 'border-b-2 border-blue-600 text-black text-custom-base items-center ' : 'text-gray-600 text-custom-base items-center'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          
          {/* Filter component */}
          {/* <div className="flex items-center gap-2"> */}
            <img src="/filter.png" alt="Filter Icon" className="h-4 w-5" /> {/* Placeholder icon */}
            <span className="text-gray-500 text-custom-base">Filter By</span>
          {/* </div> */}
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="px-4 py-1 border rounded-md text-blue-600 bg-white appearance-none text-sm pr-3 mr-1 cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path fill='none' d='M0 0h20v20H0z'/><path fill='gray' d='M10 12l-4-4h8l-4 4z'/></svg>")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 0.5rem center',
              backgroundSize: '1.5em',
              marginLeft:3
            }}
          >
            <option value="All" className="text-[#6366F1]">Design</option>
            <option value="Design" className="text-[#6366F1]">Frontend</option>
            <option value="Development " className="text-[#6366F1]">Backend</option>
            <option value="Content" className="text-[#6366F1]">Blockchain</option>
            <option value="Content" className="text-[#6366F1]">Content</option>
          </select>
          {/* Search component */}
          {/* <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Bounties, Profiles, and more..."
              className="pl-10 pr-4 py-2 border rounded-md text-[#5A5A62]"
            />
            <img
              src="/search.png" // Replace this with your search.png path
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            />
          </div> */}
        </div>
      </div>
      {/* Placeholder for tab content */}
      <div className="pt-4 ">
      {renderBounties()}
      </div>
    </div>
    <div>
    <div className="border-r border-gray-300 h-7/8 mt-8 "></div>
    </div>
    

      <div className="relative ml-7">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Bounties, Profiles, and more..."
              className="pl-11 pr-7 py-2 border rounded-full text-sm  text-[#5A5A62] mt-8 bg-[#F1F5F9] w-72"
            />
            <img
              src="/search.png" // Replace this with your search.png path
              alt="Search Icon"
              className="absolute left-3 top-1 ml-2 mt-10  h-4 w-4 text-gray-400  "
            />
          </div>
    </div>
  );
};

export default WorkHistory;
