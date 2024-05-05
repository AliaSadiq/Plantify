import React from 'react';

const Team = ({ members }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {members.map((member, index) => (
        <div key={index} className="flex flex-col items-center">
          <img src={member.profilePic} alt={member.name} className="w-16 h-16 rounded-full mb-2" />
          <div>{member.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Team;
