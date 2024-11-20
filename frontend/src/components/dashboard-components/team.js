

// import React, { useState } from 'react';
// import { Input } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

// const teamMembersData = [
//   { name: 'Joel Von', status: 'Invitation sent', imageUrl: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', imageUrl: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(teamMembersData);
//   const [showOptions, setShowOptions] = useState(null);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = teamMembersData.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100">
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.imageUrl || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                  <div className="absolute -left-9 -mt-8  rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100 "
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TeamMember;
// import React, { useState } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// const initialTeamMembers = [
//   { name: 'Joel Von', status: 'Invitation sent', imageUrl: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', imageUrl: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', imageUrl: '' });

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = initialTeamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', imageUrl: '' });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   const handleAddMember = async () => {
//     try {
//       // Replace with your API endpoint
//       await axios.post('http://localhost:5000/api/team-members', newMember);
//       setTeamMembers([...teamMembers, { ...newMember, status: 'Invitation sent', joined: '' }]);
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.imageUrl || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog}>
//         <DialogHeader>Add New Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Profile Image URL"
//               name="imageUrl"
//               value={newMember.imageUrl}
//               onChange={handleInputChange}
//             />
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// // export default TeamMember;
// import React, { useState } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// const initialTeamMembers = [
//   { name: 'Joel Von', status: 'Invitation sent', imageUrl: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', imageUrl: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', imageUrl: '' });
//   const [imageFile, setImageFile] = useState(null);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = initialTeamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', imageUrl: '' });
//     setImageFile(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewMember({ ...newMember, imageUrl: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddMember = async () => {
//     try {
//       // Replace with your API endpoint
//       await axios.post('http://localhost:5000/api/team', newMember);
//       setTeamMembers([...teamMembers, { ...newMember, status: 'Invitation sent', joined: '' }]);
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.imageUrl || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog}>
//         <DialogHeader>Add New Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {newMember.imageUrl && (
//                 <img
//                   src={newMember.imageUrl}
//                   alt="Preview"
//                   className="mt-2 w-24 h-24 object-cover rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// // export default TeamMember;
// import React, { useState } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// const initialTeamMembers = [
//   { name: 'Joel Von', status: 'Invitation sent', imageUrl: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', imageUrl: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', imageUrl: '' });
//   const [imageFile, setImageFile] = useState(null);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = initialTeamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', imageUrl: '' });
//     setImageFile(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewMember({ ...newMember, imageUrl: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddMember = async () => {
//     try {
//       let imageUrl = newMember.imageUrl;

//       // If imageFile is present, upload it to the server first
//       if (imageFile) {
//         const formData = new FormData();
//         formData.append('file', imageFile);
        
//         const response = await axios.post('http://localhost:5000/api/upload-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });

//         imageUrl = response.data.imageUrl; // Assumes the server responds with the URL of the uploaded image
//       }

//       // Then add the team member with the image URL
//       const teamMemberData = { ...newMember, imageUrl };
//       await axios.post('http://localhost:5000/api/team', teamMemberData);

//       setTeamMembers([...teamMembers, { ...teamMemberData, status: 'Invitation sent', joined: '' }]);
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.imageUrl || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog}>
//         <DialogHeader>Add Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {newMember.imageUrl && (
//                 <img
//                   src={newMember.imageUrl}
//                   alt="Preview"
//                   className="mt-2 w-24 h-24 object-cover rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// // export default TeamMember;
// import React, { useState } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// const initialTeamMembers = [
//   { name: 'Joel Von', status: 'Invitation sent', imageUrl: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', imageUrl: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', imageUrl: '' });
//   const [imageFile, setImageFile] = useState(null);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = initialTeamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', profilePic: '' });
//     setImageFile(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewMember({ ...newMember, profilePic: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleAddMember = async () => {
//     try {
//       let profilePic = newMember.profilePic;

//       if (imageFile) {
//         const formData = new FormData();
//         formData.append('file', imageFile);
        
//         const response = await axios.post('http://localhost:5000/api/upload-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });

//       profilePic = response.data.profilePic;
//       }

//       const teamMemberData = { ...newMember, profilePic };
//       await axios.post('http://localhost:5000/api/team', teamMemberData);

//       setTeamMembers([...teamMembers, { ...teamMemberData, status: 'Invitation sent', joined: '' }]);
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.imageUrl || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog} className="max-w-sm h-auto">
//         <DialogHeader>Add Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {newMember.profilePic && (
//                 <img
//                   src={newMember.profilePic}
//                   alt="Preview"
//                   className="mt-2 w-24 h-24 object-cover rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default TeamMember;

// import React, { useState } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// const initialTeamMembers = [
//   { name: 'Joel Von', status: 'Invitation sent', imageUrl: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', imageUrl: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', picture: '' });
//   const [imageFile, setImageFile] = useState(null);

//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = initialTeamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', picture: '' });
//     setImageFile(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewMember({ ...newMember, picture: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // const handleAddMember = async () => {
//   //   try {
//   //     let profilePic = newMember.imageUrl;

//   //     if (imageFile) {
//   //       const formData = new FormData();
//   //       formData.append('file', imageFile);
        
//   //       const response = await axios.post('http://localhost:5000/api/upload-image', formData, {
//   //         headers: {
//   //           'Content-Type': 'multipart/form-data'
//   //         }
//   //       });

//   //       profilePic = response.data.profilePic;
//   //     }

//   //     const teamMemberData = { ...newMember, imageUrl: profilePic };
//   //     await axios.post('http://localhost:5000/api/team', teamMemberData);

//   //     setTeamMembers([...teamMembers, { ...teamMemberData, status: 'Invitation sent', joined: '' }]);
//   //     handleCloseDialog();
//   //   } catch (error) {
//   //     console.error("Error adding team member:", error);
//   //   }
//   // };
//   const handleAddMember = async () => {
//     try {
//       let profilePic = newMember.picture;
  
//       // If there's an image to upload
//       if (imageFile) {
//         const formData = new FormData();
//         formData.append('file', imageFile);
        
//         // Upload the image and retrieve the uploaded image URL
//         const response = await axios.post('http://localhost:5000/api/upload-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
  
//         profilePic = response.data.profilePic; // Make sure your API returns the image URL correctly
//       }
  
//       // Creating team member data
//       const teamMemberData = { 
//         name: newMember.name, 
//         role: newMember.role, 
//         picture: profilePic // Using the uploaded profile image URL
//       };
  
//       // Post the new team member data to the backend
//       await axios.post('http://localhost:5000/api/team', teamMemberData);
  
//       // Update the local state with the new member
//       setTeamMembers([...teamMembers, { ...teamMemberData, status: 'Invitation sent', joined: '' }]);
      
//       // Close the dialog after successful submission
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };
  
//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.picture || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog} className="max-w-sm h-auto">
//         <DialogHeader>Add Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {newMember.picture && (
//                 <img
//                   src={newMember.picture}
//                   alt="Preview"
//                   className="mt-2 w-24 h-24 object-cover rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// // export default TeamMember;
// import React, { useState } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// // Initial state with some example team members
// const initialTeamMembers = [
//   { name: 'Joel Von', status: 'Invitation sent', picture: 'https://via.placeholder.com/150', joined: '' },
//   { name: 'Holly Heller', status: 'Joined today', picture: 'https://via.placeholder.com/150', joined: 'today' },
// ];

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', picture: '' });
//   const [imageFile, setImageFile] = useState(null);

//   // Search handler
//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = initialTeamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   // Toggles the display of options for a team member
//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   // Deletes a member from the list
//   const deleteMember = (index) => {
//     const updatedMembers = teamMembers.filter((_, i) => i !== index);
//     setTeamMembers(updatedMembers);
//   };

//   // Opens the dialog to add a new member
//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   // Closes the dialog and resets the form
//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', picture: '' });
//     setImageFile(null);
//   };

//   // Updates input fields for the new member
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   // Handles image file selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewMember({ ...newMember, picture: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Adds a new team member
//   const handleAddMember = async () => {
//     try {
//       let profilePic = newMember.picture;

//       // If there's an image file to upload
//       if (imageFile) {
//         const formData = new FormData();
//         formData.append('file', imageFile);

//         // Upload the image to the server
//         const response = await axios.post('http://localhost:5000/api/teams', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });

//         profilePic = response.data.profilePic; // Ensure the backend returns the correct image URL
//       }

//       // Creating the new team member data
//       const teamMemberData = {
//         name: newMember.name,
//         role: newMember.role,
//         picture: profilePic // Use the uploaded image URL or base64 string
//       };

//       // Post the new team member to the backend API
//       await axios.post('http://localhost:5000/api/teams', teamMemberData);

//       // Add the new member to the state and reset the form
//       setTeamMembers([...teamMembers, { ...teamMemberData, status: 'Invitation sent', joined: '' }]);
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.picture || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog} className="max-w-sm h-auto">
//         <DialogHeader>Add Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {newMember.picture && (
//                 <img
//                   src={newMember.picture}
//                   alt="Preview"
//                   className="mt-2 w-24 h-24 object-cover rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default TeamMember;
// import React, { useState, useEffect } from 'react';
// import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
// import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// import axios from 'axios';

// const TeamMember = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [teamMembers, setTeamMembers] = useState([]);
//   const [showOptions, setShowOptions] = useState(null);
//   const [showDialog, setShowDialog] = useState(false);
//   const [newMember, setNewMember] = useState({ name: '', role: '', picture: '' });
//   const [imageFile, setImageFile] = useState(null);

//   // Fetch team data on component mount
//   useEffect(() => {
//     const fetchTeamData = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/teams');
//         setTeamMembers(response.data);
//       } catch (error) {
//         console.error('Error fetching team data:', error);
//       }
//     };

//     fetchTeamData();
//   }, []);

//   // Search handler
//   const handleSearch = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);
//     const filteredMembers = teamMembers.filter((member) =>
//       member.name.toLowerCase().includes(value)
//     );
//     setTeamMembers(filteredMembers);
//   };

//   // Toggles the display of options for a team member
//   const toggleOptions = (index) => {
//     setShowOptions(showOptions === index ? null : index);
//   };

//   // Deletes a member from the list
//   const deleteMember = async (index) => {
//     try {
//       const memberToDelete = teamMembers[index];
//       await axios.delete(`http://localhost:5000/api/teams/${memberToDelete._id}`);
//       const updatedMembers = teamMembers.filter((_, i) => i !== index);
//       setTeamMembers(updatedMembers);
//     } catch (error) {
//       console.error('Error deleting team member:', error);
//     }
//   };

//   // Opens the dialog to add a new member
//   const handleOpenDialog = () => {
//     setShowDialog(true);
//   };

//   // Closes the dialog and resets the form
//   const handleCloseDialog = () => {
//     setShowDialog(false);
//     setNewMember({ name: '', role: '', picture: '' });
//     setImageFile(null);
//   };

//   // Updates input fields for the new member
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewMember({ ...newMember, [name]: value });
//   };

//   // Handles image file selection
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setNewMember({ ...newMember, picture: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   // Adds a new team member
//   const handleAddMember = async () => {
//     try {
//       let profilePic = newMember.picture;

//       // If there's an image file to upload
//       if (imageFile) {
//         const formData = new FormData();
//         formData.append('file', imageFile);

//         // Upload the image to the server
//         const response = await axios.post('http://localhost:5000/api/upload-image', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });

//         profilePic = response.data.profilePic; // Ensure the backend returns the correct image URL
//       }

//       // Creating the new team member data
//       const teamMemberData = {
//         name: newMember.name,
//         role: newMember.role,
//         picture: profilePic // Use the uploaded image URL or base64 string
//       };

//       // Post the new team member to the backend API
//       await axios.post('http://localhost:5000/api/teams', teamMemberData);

//       // Add the new member to the state and reset the form
//       setTeamMembers([...teamMembers, { ...teamMemberData, status: 'Invitation sent', joined: '' }]);
//       handleCloseDialog();
//     } catch (error) {
//       console.error("Error adding team member:", error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-transparent p-6">
//       <div className="flex flex-row justify-between items-center mb-4">
//         <div>
//           <p className="text-md font-semibold">Group's Team</p>
//         </div>
//         <button
//           className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
//           onClick={handleOpenDialog}
//         >
//           Add Team
//         </button>
//       </div>

//       <div className="flex w-full gap-2">
//         <div className="w-full rounded-md bg-navygreen-100">
//           <Input
//             label="Search"
//             icon={<MagnifyingGlassIcon className="h-5 w-5" />}
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//         </div>
//       </div>

//       <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
//         {teamMembers.map((member, index) => (
//           <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
//             <div className="flex items-center space-x-4">
//               <img
//                 src={member?.picture || 'https://via.placeholder.com/150'}
//                 alt={member?.name || 'Member'}
//                 className="w-10 h-10 rounded-full"
//               />
//               <div>
//                 <p className="font-medium">{member?.name || 'No Name Provided'}</p>
//                 <p className="text-sm text-orange-500">{member?.status || 'Status Unknown'}</p>
//               </div>
//             </div>
//             <div className="relative">
//               <button className="text-gray-500" onClick={() => toggleOptions(index)}>
//                 <EllipsisVerticalIcon className="w-6 h-6" />
//               </button>
//               {showOptions === index && (
//                 <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
//                   <button
//                     className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
//                     onClick={() => deleteMember(index)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Add Team Dialog */}
//       <Dialog open={showDialog} handler={handleCloseDialog} className="max-w-sm h-auto">
//         <DialogHeader>Add Team Member</DialogHeader>
//         <DialogBody>
//           <div className="flex flex-col gap-4">
//             <Input
//               label="Name"
//               name="name"
//               value={newMember.name}
//               onChange={handleInputChange}
//             />
//             <Input
//               label="Role"
//               name="role"
//               value={newMember.role}
//               onChange={handleInputChange}
//             />
//             <div>
//               <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
//               <Input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//               />
//               {newMember.picture && (
//                 <img
//                   src={newMember.picture}
//                   alt="Preview"
//                   className="mt-2 w-24 h-24 object-cover rounded-full"
//                 />
//               )}
//             </div>
//           </div>
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleCloseDialog}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="gradient"
//             color="green"
//             onClick={handleAddMember}
//             className="font-josefin-sans text-sm font-semibold"
//           >
//             Add
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </div>
//   );
// };

// export default TeamMember;











import React, { useState, useEffect } from 'react';
import { Input, Dialog, DialogHeader, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import axios from 'axios';

const TeamMember = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [teamMembers, setTeamMembers] = useState([]);
  const [showOptions, setShowOptions] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [newMember, setNewMember] = useState({ name: '', role: '', profilePic: '' });
  const [imageFile, setImageFile] = useState(null);

  // Fetch team data on component mount
  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/teams');
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  // Search handler
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredMembers = teamMembers.filter((member) =>
      member.name.toLowerCase().includes(value)
    );
    setTeamMembers(filteredMembers);
  };

  // Toggles the display of options for a team member
  const toggleOptions = (index) => {
    setShowOptions(showOptions === index ? null : index);
  };

  // Deletes a member from the list
  const deleteMember = async (index) => {
    try {
      const memberToDelete = teamMembers[index];
      await axios.delete(`http://localhost:5000/api/teams/${memberToDelete._id}`);
      const updatedMembers = teamMembers.filter((_, i) => i !== index);
      setTeamMembers(updatedMembers);
    } catch (error) {
      console.error('Error deleting team member:', error);
    }
  };

  // Opens the dialog to add a new member
  const handleOpenDialog = () => {
    setShowDialog(true);
  };

  // Closes the dialog and resets the form
  const handleCloseDialog = () => {
    setShowDialog(false);
    setNewMember({ name: '', role: '', profilePic: '' });
    setImageFile(null);
  };

  // Updates input fields for the new member
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  // Handles image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewMember({ ...newMember, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Adds a new team member
  const handleAddMember = async () => {
    try {
      let profilePic = newMember.profilePic;

      // If there's an image file to upload
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);

        // Upload the image to the server
        const response = await axios.post('http://localhost:5000/api/teams', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

        profilePic = response.data.profilePic; // Ensure the backend returns the correct image URL
      }

      // Creating the new team member data
      const teamMemberData = {
        name: newMember.name,
        role: newMember.role,
        profilePic: newMember.profilePic // Use the uploaded image URL or base64 string
      };

      // Post the new team member to the backend API
      await axios.post('http://localhost:5000/api/teams', teamMemberData);

      // Add the new member to the state and reset the form
      setTeamMembers([...teamMembers, { ...teamMemberData }]);
      handleCloseDialog();
    } catch (error) {
      console.error("Error adding team member:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-transparent p-6">
      <div className="flex flex-row justify-between items-center mb-4">
        <div>
          <p className="text-md font-semibold">Group's Team</p>
        </div>
        <button
          className="font-josefin-sans w-24 text-sm font-semibold text-white bg-gray-100 p-1 rounded hover:rounded-full border-2 border-gray-100"
          onClick={handleOpenDialog}
        >
          Add Team
        </button>
      </div>

      <div className="flex w-full gap-2">
        <div className="w-full rounded-md bg-navygreen-100">
          <Input
            label="Search"
            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>

      <ul className="space-y-2 mt-4 overflow-y-auto w-full h-52">
        {teamMembers.map((member, index) => (
          <li key={index} className="flex items-center justify-between h-14 pl-4 pr-4 border bg-white rounded-lg shadow-md">
            <div className="flex items-center space-x-4">
              <img
                src={member?.profilePic || 'https://via.placeholder.com/150'}
                alt={member?.name || 'Member'}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{member?.name || 'No Name Provided'}</p>
                <p className="text-sm text-orange-500">{member?.role || 'Role Unknown'}</p>
              </div>
            </div>
            <div className="relative">
              <button className="text-gray-500" onClick={() => toggleOptions(index)}>
                <EllipsisVerticalIcon className="w-6 h-6" />
              </button>
              {showOptions === index && (
                <div className="absolute -left-9 -mt-8 rounded-lg shadow-lg">
                  <button
                    className="font-josefin-sans text-xm font-semibold text-gray-100 h-6 w-10 rounded hover:rounded-full hover:text-red-600 border-2 border-gray-100"
                    onClick={() => deleteMember(index)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Add Team Dialog */}
      <Dialog open={showDialog} handler={handleCloseDialog} className="max-w-sm h-auto">
        <DialogHeader>Add Team Member</DialogHeader>
        <DialogBody>
          <div className="flex flex-col gap-4">
            <Input
              label="Name"
              name="name"
              value={newMember.name}
              onChange={handleInputChange}
            />
            <Input
              label="Role"
              name="role"
              value={newMember.role}
              onChange={handleInputChange}
            />
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Profile Image</label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {newMember.profilePic && (
                <img
                  src={newMember.profilePic}
                  alt="Preview"
                  className="mt-2 w-24 h-24 object-cover rounded-full"
                />
              )}
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleCloseDialog}
            className="font-josefin-sans text-sm font-semibold"
          >
            Cancel
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleAddMember}
            className="font-josefin-sans text-sm font-semibold"
          >
            Add
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default TeamMember;
