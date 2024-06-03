import React from 'react';

const BountyCard = ({ title, organization, date, participants, prize, place, tags }) => {
  return (
    <div className="flex gap-5 justify-between px-8 py-5 bg-white rounded-lg max-md:flex-wrap max-md:px-5 hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex gap-5 max-md:flex-wrap">
        <img
          loading="lazy"
          srcSet={organization.logo}
          className="shrink-0 w-20 aspect-square"
        />
        <div className="flex flex-col grow shrink-0 my-auto basis-0 w-fit max-md:max-w-full">
          <div className="flex gap-2 text-lg font-semibold leading-7 max-md:flex-wrap">
            <div className="text-neutral-800">
              {title}
            </div>
            <div className="text-sm tracking-wide leading-5 text-slate-500 mt-1">
              by
            </div>
            <div className="text-slate-400">{organization.name}</div>
          </div>
          <div className="flex gap-4 items-center pr-20 mt-3 max-md:flex-wrap max-md:pr-5">
            <div className="flex gap-1 items-center self-stretch whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5324a8e42ab2c1c3cf507052ed812255f587db6980b8776a75a99faf330b6cc0?"
                className="shrink-0 self-stretch my-auto w-6 aspect-square"
              />
              <div className="self-stretch text-xl font-semibold leading-7 text-neutral-800">
              {prize.amount} 
              </div>
              <div className="self-stretch my-auto text-lg tracking-normal text-slate-400">
              {prize.currency}
              </div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/304ded300b2dcb8d06ceba1957c711d406465eaf3ef0023276fc7ea7487733dd?"
              className="shrink-0 self-stretch my-auto w-px border border-solid aspect-[0.04] border-slate-300 stroke-[1px] stroke-slate-300"
            />
            <div className="flex gap-1 self-stretch my-auto text-lg tracking-normal text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/41bb1e7f526eab4fda96a67d760409dc5dea4a124852d74c5303351d3b60e78c?"
                className="shrink-0 my-auto aspect-square w-[13px]"
              />
              <div>{place} Place</div>
            </div>
            {tags.map((tag, index) => (
              <div
                key={index}
                className={`justify-center self-stretch px-3 py-1 my-auto text-xs tracking-normal leading-4 whitespace-nowrap rounded ${getTagColor(tag)}`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-auto text-lg tracking-normal whitespace-nowrap">
        <div className="text-slate-500">{date}</div>
        <div className="flex gap-2 mt-4">
          <div className="text-right text-neutral-800">{participants}</div>
          <div className="text-slate-500">Participants</div>
        </div>
      </div>
    </div>
  );
};

// Function to get tag color based on the tag value
const getTagColor = (tag) => {
  switch (tag) {
    case 'Design':
      return 'bg-[#F2EDFF] text-[#8948F2]';
    case 'Frontend':
      return 'bg-[#EBF3FF] text-[#3EA7FF]';
    case 'Backend':
      return 'bg-[#FFF2EB] text-[#FF8370]';
    case 'Blockchain':
      return 'bg-[#FFEBF9] text-[#FF3EC9]';
    case 'Content':
      return 'bg-[#EFF6F8] text-[#5EA8C4]';
    default:
      return 'bg-[#EBF3FF] text-gray-600';
  }
};

export default BountyCard;
