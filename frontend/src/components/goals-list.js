// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddGoalModal from '../popups/add-goal-modal';

// export default function GoalsList({ userId }) {
//     const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
//     const [goalsList, setGoalsList] = useState([]);

//     // Fetch goals from the server when the component mounts
//     useEffect(() => {
//         const fetchGoals = async () => {
//             try {
//                 const response = await axios.get(`https://plantify-backend.vercel.app/api/goals/user/${userId}`);
//                 setGoalsList(response.data);
//             } catch (error) {
//                 console.error("Error fetching goals:", error);
//             }
//         };

//         fetchGoals();
//     }, [userId]);

//     // Open and close modal functions
//     const handleGoalOpenModal = () => {
//         setIsGoalModalOpen(true);
//     };

//     const handleGoalCloseModal = () => {
//         setIsGoalModalOpen(false);
//     };

//     // Handle checkbox change
//     const handleCheckboxChange = async (goalId) => {
//         const updatedGoals = goalsList.map(goal => {
//             if (goal._id === goalId) {
//                 goal.completed = !goal.completed;
//             }
//             return goal;
//         });

//         setGoalsList(updatedGoals);

//         try {
//             await axios.patch(`https://plantify-backend.vercel.app/api/goals/${goalId}`, {
//                 completed: updatedGoals.find(goal => goal._id === goalId).completed,
//             });
//         } catch (error) {
//             console.error("Error updating goal:", error);
//         }
//     };

//     return (
//         <div className="col-span-1 md:col-span-6 border-2 border-navygreen-100 bg-navygreen-100 p-6 rounded-pl">
//             <div className="mb-4 flex items-center justify-between">
//                 <div className="font-bold text-md">Goals List</div>
//                 <button className="p-2 rounded-full bg-gray-100" onClick={handleGoalOpenModal}>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
//                     </svg>
//                 </button>
//             </div>
            
//             {/* Single Goal Item */}
//             <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
//                 {goalsList.length > 0 ? (
//                     goalsList.map((goal) => (
//                         <li key={goal._id} className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
//                             <div className="flex items-center">
//                                 <input
//                                     type="checkbox"
//                                     name="goal"
//                                     className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
//                                     checked={goal.completed}
//                                     onChange={() => handleCheckboxChange(goal._id)}
//                                 />
//                                 <label className={`text-xsm font-medium ${goal.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
//                                     {goal.title}
//                                 </label>
//                             </div>
//                             <button>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
//                                 </svg>
//                             </button>
//                         </li>
//                     ))
//                 ) : (
//                     <p className='text-center'>No goals yet</p>
//                 )}
                
//             </ul>
//             <AddGoalModal showModal={isGoalModalOpen} closeModal={handleGoalCloseModal} userId={userId} />
//         </div>
//     );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddGoalModal from '../popups/add-goal-modal';

export default function GoalsList({ userId }) {
    const [isGoalModalOpen, setIsGoalModalOpen] = useState(false);
    const [goalsList, setGoalsList] = useState([]);

    // Fetch goals from the server when the component mounts
    useEffect(() => {
        const fetchGoals = async () => {
            try {
                const response = await axios.get(`https://plantify-backend.vercel.app/api/goals/user/${userId}`);
                setGoalsList(response.data);
            } catch (error) {
                console.error("Error fetching goals:", error);
            }
        };

        fetchGoals();
    }, [userId]);

    // Open and close modal functions
    const handleGoalOpenModal = () => {
        setIsGoalModalOpen(true);
    };

    const handleGoalCloseModal = () => {
        setIsGoalModalOpen(false);
    };

    // Handle checkbox change
    const handleCheckboxChange = async (goalId) => {
        const updatedGoals = goalsList.map(goal => {
            if (goal._id === goalId) {
                goal.completed = !goal.completed;
            }
            return goal;
        });

        setGoalsList(updatedGoals);

        try {
            await axios.patch(`https://plantify-backend.vercel.app/api/goals/${goalId}`, {
                completed: updatedGoals.find(goal => goal._id === goalId).completed,
            });
        } catch (error) {
            console.error("Error updating goal:", error);
        }
    };

    // Handle goal deletion
    const handleDeleteGoal = async (goalId) => {
        try {
            await axios.delete(`https://plantify-backend.vercel.app/api/goals/${goalId}`);
            setGoalsList(goalsList.filter(goal => goal._id !== goalId));
        } catch (error) {
            console.error("Error deleting goal:", error);
        }
    };

    return (
        <div className="col-span-1 md:col-span-6 border-2 border-navygreen-100 bg-navygreen-100 p-6 rounded-pl">
            <div className="mb-4 flex items-center justify-between">
                <div className="font-bold text-md">Goals List</div>
                <button className="p-2 rounded-full bg-gray-100" onClick={handleGoalOpenModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>
            
            {/* Single Goal Item */}
            <ul className="flex flex-col gap-4 overflow-y-auto max-h-[260px] py-2">
                {goalsList.length > 0 ? (
                    goalsList.map((goal) => (
                        <li key={goal._id} className="flex items-center bg-neutral justify-between px-4 py-2 rounded-pl border border-navygreen-100 shadow-sm hover:bg-navygreen-50 transition-colors duration-200">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="goal"
                                    className="mr-4 h-5 w-5 text-navygreen-500 border-gray-300 rounded focus:ring-navygreen-300"
                                    checked={goal.completed}
                                    onChange={() => handleCheckboxChange(goal._id)}
                                />
                                <label className={`text-xsm font-medium ${goal.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                    {goal.title}
                                </label>
                            </div>
                            <button onClick={() => handleDeleteGoal(goal._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </li>
                    ))
                ) : (
                    <p className='text-center'>No goals yet</p>
                )}
                
            </ul>
            <AddGoalModal showModal={isGoalModalOpen} closeModal={handleGoalCloseModal} userId={userId} />
        </div>
    );
}
