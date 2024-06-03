import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import BountyCard from './components/BountyCard';
import WorkHistory from './components/WorkHistory';

// import superteamLogo from './assets/superteam-logo.png';

function App() {
  
  const [activeTab, setActiveTab] = useState('Completed');
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
      title: "Design ",
      organization: { name: "Superteam", logo: "/superteam-logo.png" },
      date: "04/04/2023",
      participants: 36,
      prize: { amount: 700, currency: "USDC" },
      place: "1st Place",
      tags: ["Design"]
    },
    {
      title: "Armada ",
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

  // const renderBounties = () => {
  //   if (activeTab === 'Completed') {
  //     return bounties.map((bounty, index) => (
  //       <BountyCard
  //       key={index}
  //       title={bounty.title}
  //       organization={bounty.organization}
  //       date={bounty.date}
  //       participants={bounty.participants}
  //       prize={bounty.prize}
  //       place={bounty.place}
  //       tags={bounty.tags}
  //     />
  //     ));
  //   } else if (activeTab === 'In Review') {
  //     return bountiesReview.map((bounty, index) => (
  //       <BountyCard
  //       key={index}
  //       title={bounty.title}
  //       organization={bounty.organization}
  //       date={bounty.date}
  //       participants={bounty.participants}
  //       prize={bounty.prize}
  //       place={bounty.place}
  //       tags={bounty.tags}
  //     />
  //     ));
  //   }
  //   // Render nothing if the active tab is not 'Completed' or 'In Review'
  //   return null;
  // };

  return (
    <>
     
    <Navbar/>
    
    
     <div className="w-4/5 mx-auto">
     <WorkHistory setActiveTab={setActiveTab}/>
     </div>
     {/* <div className="w-3/5 mx-auto">
        {activeTab === 'Completed' ? (
          bounties.map((bounty, index) => (
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
          ))
        ) : (
          bountiesReview.map((bounty, index) => (
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
          ))
        )}
      </div> */}

    </>
  )
}

export default App
