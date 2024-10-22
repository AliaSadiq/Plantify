
import React, { useState, useEffect } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import axios from 'axios';
import Swal from 'sweetalert2';
const QuestionSection = ({ groupId, showReplyOption }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingReply, setEditingReply] = useState(null);
  const [showReplies, setShowReplies] = useState({}); // To track which question's replies are shown
  const [showReplyInput, setShowReplyInput] = useState({}); // Track reply input visibility
  const [errorMessage, setErrorMessage] = useState(null); // To handle errors

  const user = JSON.parse(localStorage.getItem('user')); // Get logged-in user info

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/socialgroup-question/${groupId}/questions`)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => console.error('Error fetching questions:', error));
  }, [groupId]);

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      setErrorMessage('Please log in to ask a question.');
      return;
    }

    setErrorMessage(null);

    if (editingQuestion) {
      axios
        .put(
          `http://localhost:5000/api/socialgroup-question/${groupId}/question/${editingQuestion._id}`,
          { text: newQuestion }
        )
        .then((response) => {
          const updatedQuestions = questions.map((q) =>
            q._id === editingQuestion._id ? response.data : q
          );
          setQuestions(updatedQuestions);
          setEditingQuestion(null);
          setNewQuestion('');
          setShowForm(false);
        })
        .catch((error) => {
          setErrorMessage('Error editing question. Please try again.');
          console.error('Error editing question:', error);
        });
    } else {
      axios
        .post(`http://localhost:5000/api/socialgroup-question/${groupId}/question`, {
          text: newQuestion,
          userId: user._id,
        })
        .then((response) => {
          setQuestions([...questions, response.data]);
          setNewQuestion('');
          setShowForm(false);
        })
        .catch((error) => {
          setErrorMessage('Error adding question. Please try again.');
          console.error('Error adding question:', error);
        });
    }
  };

  const handleReplySubmit = (questionId, replyText) => {
    if (!user) {
      setErrorMessage('Please log in to submit a reply.');
      return;
    }

    setErrorMessage(null);

    if (editingReply) {
      axios
        .put(
          `http://localhost:5000/api/socialgroup-question/${groupId}/reply/${editingReply._id}`,
          { text: replyText }
        )
        .then((response) => {
          const updatedQuestions = questions.map((q) => {
            if (q._id === questionId) {
              q.replies = q.replies.map((r) =>
                r._id === editingReply._id ? response.data : r
              );
            }
            return q;
          });
          setQuestions(updatedQuestions);
          setEditingReply(null);
        })
        .catch((error) => {
          setErrorMessage('Error editing reply. Please try again.');
          console.error('Error editing reply:', error);
        });
    } else {
      axios
        .post(`http://localhost:5000/api/socialgroup-question/${groupId}/reply`, {
          text: replyText,
          userId: user._id,
          questionId,
        })
        .then((response) => {
          const updatedQuestions = questions.map((q) => {
            if (q._id === questionId) {
              q.replies.push(response.data);
            }
            return q;
          });
          setQuestions(updatedQuestions);
        })
        .catch((error) => {
          setErrorMessage('Error adding reply. Please try again.');
          console.error('Error adding reply:', error);
        });
    }
  };

  const handleEditQuestion = (question) => {
    setEditingQuestion(question);
    setNewQuestion(question.text);
    setShowForm(true);
  };

  // const handleDeleteQuestion = (questionId) => {
  //   axios
  //     .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/question/${questionId}`)
  //     .then(() => {
  //       setQuestions(questions.filter((q) => q._id !== questionId));
  //     })
  //     .catch((error) => {
  //       setErrorMessage('Error deleting question. Please try again.');
  //       console.error('Error deleting question:', error);
  //     });
  // };
  const handleDeleteQuestion = (questionId) => {
    // Show a confirmation popup before proceeding
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this question? This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Make an API call to delete the question
        axios
        .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/question/${questionId}`)
          .then(() => {
            // Update the state to remove the question from the list
            setQuestions(questions.filter((q) => q._id !== questionId));
      
            
            // Show success alert
            Swal.fire(
              'Deleted!',
              'The question has been deleted.',
              'success'
            );
          })
          .catch((error) => {
            // Show an error alert if the deletion fails
            Swal.fire(
              'Error!',
              'There was an error deleting the question. Please try again.',
              'error'
            );
            console.error('Error deleting question:', error);
          });
      }
    });
  };
  //edit
  const handleEditReply = (reply) => {
    setEditingReply(reply);
  };
  const handleDeleteReply = (replyId, questionId) => {
    axios
      .delete(`http://localhost:5000/api/socialgroup-question/${replyId}`) // Assuming this is the correct endpoint
      .then(() => {
        // Update the questions state by filtering out the deleted reply
        const updatedQuestions = questions.map((q) => {
          if (q._id === questionId) {
            // Remove the reply from the replies array
            q.replies = q.replies.filter((r) => r._id !== replyId);
          }
          return q;
        });
        setQuestions(updatedQuestions);
      })
      .catch((error) => {
        setErrorMessage('Error deleting reply. Please try again.');
        console.error('Error deleting reply:', error);
      });
  };
  

  const toggleReplies = (questionId) => {
    setShowReplies((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const toggleReplyInput = (questionId) => {
    setShowReplyInput((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
  <h2 className="text-2xl font-bold">Questions</h2>

  {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

  {!showReplyOption && !showForm && (
    <div className="flex justify-end mb-4">
      <button
        className="border border-green-500 text-green-500 py-2 px-4 rounded-full flex items-center"
        onClick={() => setShowForm(true)}
      >
        <PencilIcon className="h-5 w-5 mr-2" />
        Ask a question
      </button>
    </div>
  )}

  {showForm && (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg">
      <textarea
        value={newQuestion}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
        placeholder="Write a question..."
      />
      <div className="flex justify-between mt-2">
        <button
          type="button"
          className="bg-gray-500 text-white py-2 px-4 rounded-full"
          onClick={() => {
            setShowForm(false);
            setEditingQuestion(null);
            setNewQuestion('');
          }}
        >
          Back
        </button>
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-full">
          Submit question
        </button>
      </div>
    </form>
  )}

  {/* Apply scrollbar and light gray lines as boundaries */}
  <div className="bg-inherit w-full p-2 border-neutral border-2 rounded-[10px] mt-4">

    <ul className="flex flex-col items-start overflow-y-auto max-h-80">
      {questions.map((question, index) => (
        <li key={index} className="relative w-full p-2 border-b border-gray-300 mb-2">
          <div className="w-full flex flex-row items-center">
            <img
              src={`/assets/avatars/${question.user.avatar}`}
              alt={question.user.username}
              className="rounded-full w-8 h-8"
            />
            <div className="ml-2 w-full">
              <div className="text-gray-700 font-bold text-sm">{question.user.username}</div>
              <div className="text-gray-500 text-xs">{question.time}</div>
            </div>
          </div>
          <div className="mt-2 text-gray-800 text-sm">{question.text}</div>

          {/* Edit and Delete buttons (only for the user who posted the question) */}
          {user && user._id === question.user._id && !showReplyOption && (
            <div className="flex justify-end mt-2">
              <button
                className="text-blue-500 text-xs mr-2"
                onClick={() => handleEditQuestion(question._id)}
              >
                Edit
              </button>
              <button
                className="text-red-500 text-xs"
                onClick={() => handleDeleteQuestion(question._id)}
              >
                Delete
              </button>
            </div>
          )}

          {/* Replies section */}
          {question.replies.length > 0 && (
            <button
              className="mt-2 text-xs text-blue-500"
              onClick={() => toggleReplies(question._id)}
            >
              {showReplies[question._id] ? 'Hide Replies' : 'Show Replies'}
            </button>
          )}

          {showReplies[question._id] && (
            <div className="mt-4">
              {question.replies.map((reply, replyIndex) => (
                <div key={replyIndex} className="ml-4 mt-2 p-2 border-l-2">
                  <div className="flex items-center">
                    <img
                      src={`/assets/${reply.socialGroup.image}`}
                      alt={reply.socialGroup.name}
                      className="rounded-full w-6 h-6"
                    />
                    <div className="ml-2">
                      <div className="text-gray-700 font-bold text-xs">{reply.socialGroup.name}</div>
                      <div className="text-gray-500 text-xs">{reply.time}</div>
                    </div>
                    <button
                      className="ml-2 text-blue-500 text-xs"
                      onClick={() => handleEditReply(reply)}
                    >
                      Edit
                    </button>
                    <button
                      className="ml-2 text-red-500 text-xs"
                      onClick={() => handleDeleteReply(reply._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="text-gray-800 text-sm">{reply.text}</div>
                </div>
              ))}
            </div>
          )}

          {/* Reply button */}
          {showReplyOption && !showReplyInput[question._id] && (
            <button
              className="mt-2 text-xs text-blue-500"
              onClick={() => toggleReplyInput(question._id)}
            >
              Reply
            </button>
          )}

          {/* Reply input if toggled */}
          {showReplyInput[question._id] && (
            <div className="mt-2">
              <textarea
                className="border p-2 rounded w-full text-xs"
                placeholder="Write a reply..."
                onChange={(e) => handleReplySubmit(question._id, e.target.value)}
              />
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>

    // <div className="p-4 max-w-3xl mx-auto">
    //   <h2 className="text-2xl font-bold">Questions</h2>

    //   {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

    //   {!showReplyOption && !showForm && (
    //     <div className="flex justify-end mb-4">
    //       <button
    //         className="border border-green-500 text-green-500 py-2 px-4 rounded-full flex items-center"
    //         onClick={() => setShowForm(true)}
    //       >
    //         <PencilIcon className="h-5 w-5 mr-2" />
    //         Ask a question
    //       </button>
    //     </div>
    //   )}

    //   {showForm && (
    //     <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-md">
    //       <textarea
    //         value={newQuestion}
    //         onChange={handleInputChange}
    //         className="border p-2 rounded w-full"
    //         placeholder="Write a comment..."
    //       />
    //       <div className="flex justify-between mt-2">
    //         <button
    //           type="button"
    //           className="bg-gray-500 text-white py-2 px-4 rounded-full"
    //           onClick={() => {
    //             setShowForm(false);
    //             setEditingQuestion(null);
    //             setNewQuestion('');
    //           }}
    //         >
    //           Back
    //         </button>
    //         <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-full">
    //           Submit question
    //         </button>
    //       </div>
    //     </form>
    //   )}

    //   <div className="overflow-y-auto max-h-96 border-t border-gray-200">
    //     {questions.map((question, index) => (
    //       <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
    //         <div className="flex items-center">
    //           <img
    //             src={`/assests/${question.user.avatar}`}
    //             alt={question.user.username}
    //             className="rounded-full w-12 h-12"
    //           />
    //           <div className="ml-4">
    //             <div className="text-gray-700 font-bold">{question.user.username}</div>
    //             <div className="text-gray-500 text-sm">{question.time}</div>
    //           </div>
    //           {/* Show edit/delete buttons only if the logged-in user is the question author and it's not the dashboard */}
    //           {user && user._id === question.user._id && !showReplyOption && (
    //             <>
    //               <button className="ml-2 text-blue-500" onClick={() => handleEditQuestion(question)}>
    //                 Edit
    //               </button>
    //               <button className="ml-2 text-red-500" onClick={() => handleDeleteQuestion(question._id)}>
    //                 Delete
    //               </button>
    //             </>
    //           )}
    //         </div>
    //         <div className="mt-4 text-gray-800">{question.text}</div>

    //         {/* Show/Hide replies button */}
    //         {question.replies.length > 0 && (
    //           <button
    //             className="mt-2 text-sm text-blue-500"
    //             onClick={() => toggleReplies(question._id)}
    //           >
    //             {showReplies[question._id] ? 'Hide Replies' : 'Show Replies'}
    //           </button>
    //         )}

    //         {/* Show replies if toggled */}
    //         {showReplies[question._id] && (
    //           <div className="mt-4">
    //             {question.replies.map((reply, replyIndex) => (
    //               <div key={replyIndex} className="ml-8 mt-2 p-2 border-l-2">
    //                 <div className="flex items-center">
    //                   <img
    //                     src={`/assets/${reply.socialGroup.image}`}
    //                     alt={reply.socialGroup.name}
    //                     className="rounded-full w-8 h-8"
    //                   />
    //                   <div className="ml-4">
    //                     <div className="text-gray-700 font-bold">{reply.socialGroup.name}</div>
    //                     <div className="text-gray-500 text-sm">{reply.time}</div>
    //                   </div>
    //                   {/* {user && user._id === reply.user._id && ( */}
    //                     <>
    //                       <button
    //                         className="ml-2 text-blue-500"
    //                         onClick={() => handleEditReply(reply)}
    //                       >
    //                         Edit
    //                       </button>
    //                       <button
    //                         className="ml-2 text-red-500"
    //                         onClick={() => handleDeleteReply(reply._id, question._id)}
    //                       >
    //                         Delete
    //                       </button>
    //                     </>
    //                   {/* )} */}
    //                 </div>
    //                 <div className="text-gray-800">{reply.text}</div>
    //               </div>
    //             ))}
    //           </div>
    //         )}

    //         {/* Reply button */}
    //         {showReplyOption && !showReplyInput[question._id] && (
    //           <button
    //             className="mt-2 text-sm text-blue-500"
    //             onClick={() => toggleReplyInput(question._id)}
    //           >
    //             Reply
    //           </button>
    //         )}

    //         {/* Show reply input if toggled */}
    //         {showReplyInput[question._id] && (
    //           <div className="mt-2">
    //             <textarea
    //               className="border p-2 rounded w-full"
    //               placeholder="Write a reply..."
    //               onChange={(e) => handleReplySubmit(question._id, e.target.value)}
    //             />
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default QuestionSection;








// import React, { useState, useEffect } from 'react';
// import { PencilIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';

// const QuestionSection = ({ groupId, showReplyOption  }) => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [editingQuestion, setEditingQuestion] = useState(null);
//   const [editingReply, setEditingReply] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null); // To handle errors

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/socialgroup-question/${groupId}/questions`)
//       .then((response) => {
//         setQuestions(response.data);
//       })
//       .catch((error) => console.error('Error fetching questions:', error));
//   }, [groupId]);

//   const handleInputChange = (e) => {
//     setNewQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (!user) {
//       setErrorMessage('Please log in to ask a question.');
//       return;
//     }

//     setErrorMessage(null);

//     if (editingQuestion) {
//       axios
//         .put(
//           `http://localhost:5000/api/socialgroup-question/${groupId}/question/${editingQuestion._id}`,
//           { text: newQuestion }
//         )
//         .then((response) => {
//           const updatedQuestions = questions.map((q) =>
//             q._id === editingQuestion._id ? response.data : q
//           );
//           setQuestions(updatedQuestions);
//           setEditingQuestion(null);
//           setNewQuestion('');
//           setShowForm(false);
//         })
//         .catch((error) => {
//           setErrorMessage('Error editing question. Please try again.');
//           console.error('Error editing question:', error);
//         });
//     } else {
//       axios
//         .post(`http://localhost:5000/api/socialgroup-question/${groupId}/question`, {
//           text: newQuestion,
//           userId: user._id,
//         })
//         .then((response) => {
//           setQuestions([...questions, response.data]);
//           setNewQuestion('');
//           setShowForm(false);
//         })
//         .catch((error) => {
//           setErrorMessage('Error adding question. Please try again.');
//           console.error('Error adding question:', error);
//         });
//     }
//   };

//   const handleReplySubmit = (questionId, replyText) => {
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (!user) {
//       setErrorMessage('Please log in to submit a reply.');
//       return;
//     }

//     setErrorMessage(null);

//     if (editingReply) {
//       axios
//         .put(
//           `http://localhost:5000/api/socialgroup-question/${groupId}/reply/${editingReply._id}`,
//           { text: replyText }
//         )
//         .then((response) => {
//           const updatedQuestions = questions.map((q) => {
//             if (q._id === questionId) {
//               q.replies = q.replies.map((r) =>
//                 r._id === editingReply._id ? response.data : r
//               );
//             }
//             return q;
//           });
//           setQuestions(updatedQuestions);
//           setEditingReply(null);
//         })
//         .catch((error) => {
//           setErrorMessage('Error editing reply. Please try again.');
//           console.error('Error editing reply:', error);
//         });
//     } else {
//       axios
//         .post(`http://localhost:5000/api/socialgroup-question/${groupId}/reply`, {
//           text: replyText,
//           userId: user._id,
//           questionId,
//         })
//         .then((response) => {
//           const updatedQuestions = questions.map((q) => {
//             if (q._id === questionId) {
//               q.replies.push(response.data);
//             }
//             return q;
//           });
//           setQuestions(updatedQuestions);
//         })
//         .catch((error) => {
//           setErrorMessage('Error adding reply. Please try again.');
//           console.error('Error adding reply:', error);
//         });
//     }
//   };

//   const handleEditQuestion = (question) => {
//     setEditingQuestion(question);
//     setNewQuestion(question.text);
//     setShowForm(true);
//   };

//   const handleDeleteQuestion = (questionId) => {
//     axios
//       .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/question/${questionId}`)
//       .then(() => {
//         setQuestions(questions.filter((q) => q._id !== questionId));
//       })
//       .catch((error) => {
//         setErrorMessage('Error deleting question. Please try again.');
//         console.error('Error deleting question:', error);
//       });
//   };

//   const handleEditReply = (reply) => {
//     setEditingReply(reply);
//   };

//   const handleDeleteReply = (replyId, questionId) => {
//     axios
//       .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/reply/${replyId}`)
//       .then(() => {
//         const updatedQuestions = questions.map((q) => {
//           if (q._id === questionId) {
//             q.replies = q.replies.filter((r) => r._id !== replyId);
//           }
//           return q;
//         });
//         setQuestions(updatedQuestions);
//       })
//       .catch((error) => {
//         setErrorMessage('Error deleting reply. Please try again.');
//         console.error('Error deleting reply:', error);
//       });
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <h2 className="text-2xl font-bold">Questions</h2>

//       {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

//       {/* Conditionally show "Ask a Question" button if it's user side */}
//       {!showReplyOption && !showForm && (
//         <div className="flex justify-end mb-4">
//           <button
//             className="border border-green-500 text-green-500 py-2 px-4 rounded-full flex items-center"
//             onClick={() => setShowForm(true)}
//           >
//             <PencilIcon className="h-5 w-5 mr-2" />
//             Ask a question
//           </button>
//         </div>
//       )}

//       {showForm && (
//         <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-md">
//           <textarea
//             value={newQuestion}
//             onChange={handleInputChange}
//             className="border p-2 rounded w-full"
//             placeholder="Write a comment..."
//           />
//           <div className="flex justify-between mt-2">
//             <button
//               type="button"
//               className="bg-gray-500 text-white py-2 px-4 rounded-full"
//               onClick={() => {
//                 setShowForm(false);
//                 setEditingQuestion(null);
//                 setNewQuestion('');
//               }}
//             >
//               Back
//             </button>
//             <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-full">
//               Submit question
//             </button>
//           </div>
//         </form>
//       )}

//       {questions.map((question, index) => (
//         <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
//           <div className="flex items-center">
//             <img
//               src="https://via.placeholder.com/48"
//               alt={question.user.username}
//               className="rounded-full w-12 h-12"
//             />
//             <div className="ml-4">
//               <div className="text-gray-700 font-bold">{question.user.username}</div>
//               <div className="text-gray-500 text-sm">{question.time}</div>
//             </div>
//             <button className="ml-2 text-blue-500" onClick={() => handleEditQuestion(question)}>
//               Edit
//             </button>
//             <button className="ml-2 text-red-500" onClick={() => handleDeleteQuestion(question._id)}>
//               Delete
//             </button>
//           </div>
//           <p className="mt-2">{question.text}</p>

//           {/* Render reply input for admin or group member */}
//           {(showReplyOption || question.isGroupMember) && (
//             <div
//               className={`ml-12 mt-2 p-2 border rounded-lg shadow-md ${
//                 showReplyOption ? 'w-3/4' : 'w-full'
//               }`}
//             >
//               <textarea
//                 className="border p-2 rounded w-full"
//                 placeholder="Write your reply..."
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' && e.target.value.trim()) {
//                     e.preventDefault();
//                     handleReplySubmit(question._id, e.target.value);
//                     e.target.value = ''; // Clear the input after submitting
//                   }
//                 }}
//               />
//             </div>
//           )}

//           {/* Render replies */}
//           {question.replies.map((reply, replyIndex) => (
//             <div key={replyIndex} className="ml-12 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
//               <div className="flex items-center">
//                 <img
//                   src="https://via.placeholder.com/48"
//                   alt={reply.user}
//                   className="rounded-full w-12 h-12"
//                 />
//                 <div className="ml-4">
//                   <div className="text-black font-bold">{reply.socialGroup.name}</div>
//                   <div className="text-black text-sm">{reply.time}</div>
//                 </div>
//                 <button
//                   className="ml-auto text-red-500"
//                   onClick={() => handleDeleteReply(reply._id, question._id)}
//                 >
//                   Delete
//                 </button>
//                 <button className="ml-2 text-blue-500" onClick={() => handleEditReply(reply)}>
//                   Edit
//                 </button>
//               </div>
//               <p className="mt-2">{reply.text}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionSection;




// import React, { useState, useEffect } from 'react';
// import { PencilIcon } from '@heroicons/react/24/solid';
// import axios from 'axios';

// const QuestionSection = ({ groupId,isAdmin }) => {
//   const [questions, setQuestions] = useState([]);
//   const [newQuestion, setNewQuestion] = useState('');
//   const [showForm, setShowForm] = useState(false);
//   const [editingQuestion, setEditingQuestion] = useState(null);
//   const [editingReply, setEditingReply] = useState(null);
//   const [errorMessage, setErrorMessage] = useState(null); // To handle errors

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/socialgroup-question/${groupId}/questions`)
//       .then((response) => {
//         console.log(response.data); // Check what the API returns
//         setQuestions(response.data);
  
//       })
//       .catch((error) =>
//         console.error('Error fetching questions:', error)
//       );
//   }, [groupId]);

//   const handleInputChange = (e) => {
//     setNewQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const user = JSON.parse(localStorage.getItem('user'));

//     // Handle the case where the user is not logged in
//     if (!user) {
//       setErrorMessage('Please log in to ask a question.');
//       return;
//     }

//     // Reset error message
//     setErrorMessage(null);

//     if (editingQuestion) {
//       axios
//         .put(
//           `http://localhost:5000/api/socialgroup-question/${groupId}/question/${editingQuestion._id}`,
//           { text: newQuestion }
//         )
//         .then((response) => {
//           const updatedQuestions = questions.map((q) =>
//             q._id === editingQuestion._id ? response.data : q
//           );
//           setQuestions(updatedQuestions);
//           setEditingQuestion(null);
//           setNewQuestion('');
//           setShowForm(false);
//         })
//         .catch((error) => {
//           setErrorMessage('Error editing question. Please try again.');
//           console.error('Error editing question:', error);
//         });
//     } else {
//       axios
//         .post(`http://localhost:5000/api/socialgroup-question/${groupId}/question`, {
//           text: newQuestion,
//           userId: user._id,
//         })
//         .then((response) => {
//           setQuestions([...questions, response.data]);
//           setNewQuestion('');
//           setShowForm(false);
//         })
//         .catch((error) => {
//           setErrorMessage('Error adding question. Please try again.');
//           console.error('Error adding question:', error);
//         });
//     }
//   };

//   const handleReplySubmit = (questionId, replyText) => {
//     const user = JSON.parse(localStorage.getItem('user'));

//     if (!user) {
//       setErrorMessage('Please log in to submit a reply.');
//       return;
//     }

//     setErrorMessage(null); // Reset error message

//     if (editingReply) {
//       axios
//         .put(
//           `http://localhost:5000/api/socialgroup-question/${groupId}/reply/${editingReply._id}`,
//           { text: replyText }
//         )
//         .then((response) => {
//           const updatedQuestions = questions.map((q) => {
//             if (q._id === questionId) {
//               q.replies = q.replies.map((r) =>
//                 r._id === editingReply._id ? response.data : r
//               );
//             }
//             return q;
//           });
//           setQuestions(updatedQuestions);
//           setEditingReply(null);
//         })
//         .catch((error) => {
//           setErrorMessage('Error editing reply. Please try again.');
//           console.error('Error editing reply:', error);
//         });
//     } else {
//       axios
//         .post(`http://localhost:5000/api/socialgroup-question/${groupId}/reply`, {
//           text: replyText,
//           userId: user._id,
//           questionId,
//         })
//         .then((response) => {
//           const updatedQuestions = questions.map((q) => {
//             if (q._id === questionId) {
//               q.replies.push(response.data);
//             }
//             return q;
//           });
//           setQuestions(updatedQuestions);
//         })
//         .catch((error) => {
//           setErrorMessage('Error adding reply. Please try again.');
//           console.error('Error adding reply:', error);
//         });
//     }
//   };

//   const handleEditQuestion = (question) => {
//     setEditingQuestion(question);
//     setNewQuestion(question.text);
//     setShowForm(true);
//   };

//   const handleDeleteQuestion = (questionId) => {
//     axios
//       .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/question/${questionId}`)
//       .then(() => {
//         setQuestions(questions.filter((q) => q._id !== questionId));
//       })
//       .catch((error) => {
//         setErrorMessage('Error deleting question. Please try again.');
//         console.error('Error deleting question:', error);
//       });
//   };

//   const handleEditReply = (reply) => {
//     setEditingReply(reply);
//   };

//   const handleDeleteReply = (replyId, questionId) => {
//     axios
//       .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/reply/${replyId}`)
//       .then(() => {
//         const updatedQuestions = questions.map((q) => {
//           if (q._id === questionId) {
//             q.replies = q.replies.filter((r) => r._id !== replyId);
//           }
//           return q;
//         });
//         setQuestions(updatedQuestions);
//       })
//       .catch((error) => {
//         setErrorMessage('Error deleting reply. Please try again.');
//         console.error('Error deleting reply:', error);
//       });
//   };

//   return (
//     <div className="p-4 max-w-3xl mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-2xl font-bold">Questions</h2>
//         {!showForm && (
//           <button
//             className="border border-green-500 text-green-500 py-2 px-4 rounded-full flex items-center"
//             onClick={() => setShowForm(true)}
//           >
//             <PencilIcon className="h-5 w-5 mr-2" />
//             Ask a question
//           </button>
//         )}
//       </div>

//       {/* Display error messages */}
//       {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

//       {showForm && (
//         <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-md">
//           <textarea
//             value={newQuestion}
//             onChange={handleInputChange}
//             className="border p-2 rounded w-full"
//             placeholder="Write a comment..."
//           />
//           <div className="flex justify-between mt-2">
//             <button
//               type="button"
//               className="bg-gray-500 text-white py-2 px-4 rounded-full"
//               onClick={() => {
//                 setShowForm(false);
//                 setEditingQuestion(null);
//                 setNewQuestion('');
//               }}
//             >
//               Back
//             </button>
//             <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-full">
//               Submit question
//             </button>
//           </div>
//         </form>
//       )}
//       {questions.map((question, index) => (
//         <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
//           <div className="flex items-center">
//             <img
//               src="https://via.placeholder.com/48"
//               alt={question.user.username}
//               className="rounded-full w-12 h-12"
//             />
//             <div className="ml-4">
//               <div className="text-gray-700 font-bold">{question.user.username}</div>
//               <div className="text-gray-500 text-sm">{question.time}</div>
//             </div>
//             {/* <button
//               className="ml-auto text-red-500"
//               onClick={() => handleDeleteQuestion(question._id)}
//             >
//               Delete
//             </button> */}
//             <button className="ml-2 text-blue-500" onClick={() => handleEditQuestion(question)}>
//               Edit
//             </button>
//           </div>
//           <p className="mt-2">{question.text}</p>
//           {question.replies.map((reply, replyIndex) => (
//             <div key={replyIndex} className="ml-12 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
//               <div className="flex items-center">
//                 <img
//                   src="https://via.placeholder.com/48"
//                   alt={reply.user}
//                   className="rounded-full w-12 h-12"
//                 />
//                 <div className="ml-4">
//                   <div className="text-black font-bold">{reply.user}</div>
//                   <div className="text-black text-sm">{reply.time}</div>
//                 </div>
//                 <button
//                   className="ml-auto text-red-500"
//                   onClick={() => handleDeleteReply(reply._id, question._id)}
//                 >
//                   Delete
//                 </button>
//                 <button className="ml-2 text-blue-500" onClick={() => handleEditReply(reply)}>
//                   Edit
//                 </button>
//               </div>
//               <p className="mt-2">{reply.text}</p>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionSection;

