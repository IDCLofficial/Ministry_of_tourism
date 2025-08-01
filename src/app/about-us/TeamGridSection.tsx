import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  position: string;
  imgSrc: string;
}

interface TeamGridSectionProps {
  members: TeamMember[];
}

const TeamGridSection: React.FC<TeamGridSectionProps> = ({ members }) => {
  return (
    <section className="w-full px-2 md:px-4 pb-10 bg-white mx-auto" id="team">
      <h2 className="text-2xl md:text-3xl lg:text-[43px] font-medium text-center mb-6 md:mb-10 text-dark-primary">Our Team</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        {members.map((member, idx) => (
          <div key={idx} className="flex flex-col rounded-xl w-full md:w-[300px] shadow-md border border-gray-200">
            <div className="w-full mb-2 md:mb-4 relative">
              <Image src={member.imgSrc} alt={member.name} width={100} height={100} className="w-full h-[230px] md:h-[230px] object-fit" />
            </div>
            <div className="p-2">
              <h3 className="text-xl md:text-lg font-semibold text-[#232c39] mb-1">{member.name}</h3>
              <span className="text-green-600 text-xs md:text-sm font-medium">{member.position}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGridSection; 