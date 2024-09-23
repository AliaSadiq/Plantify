// import React, { useState } from 'react';
// import { PencilIcon } from '@heroicons/react/24/solid';

// const QuestionSection = () => {
//   const [questions, setQuestions] = useState([
//     {
//       user: 'Nuno Serra',
//       time: 'a year ago',
//       text: "Bonjour, j'ai deux arbres plantées à Chaingay, est-ce que c'est possible de les visiter pour prendre des photos? Merci!",
//       replies: [
//         {
//           user: 'Horizon Forêt',
//           time: 'a year ago',
//           text: 'Bonjour, Je vous laisse contacter les équipes de Tree-Nation pour envisager une rencontre. Belle journée',
//         },
//       ],
//     },
//   ]);
//   const [newQuestion, setNewQuestion] = useState('');
//   const [showForm, setShowForm] = useState(false);

//   const handleInputChange = (e) => {
//     setNewQuestion(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setQuestions([...questions, { user: 'You', time: 'Just now', text: newQuestion, replies: [] }]);
//     setNewQuestion('');
//     setShowForm(false);
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
//               onClick={() => setShowForm(false)}
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
//             <img src="https://via.placeholder.com/48" alt={question.user} className="rounded-full w-12 h-12" />
//             <div className="ml-4">
//               <div className="text-gray-700 font-bold">{question.user}</div>
//               <div className="text-gray-500 text-sm">{question.time}</div>
//             </div>
//           </div>
//           <p className="mt-2">{question.text}</p>
//           {question.replies.map((reply, replyIndex) => (
//             <div key={replyIndex} className="ml-12 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
//               <div className="flex items-center">
//                 <img src="https://via.placeholder.com/48" alt={reply.user} className="rounded-full w-12 h-12" />
//                 <div className="ml-4">
//                   <div className="text-black font-bold">{reply.user}</div>
//                   <div className="text-black text-sm">{reply.time}</div>
//                 </div>
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
import React, { useState, useEffect } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';
import axios from 'axios';

const QuestionSection = ({ groupId }) => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingQuestion, setEditingQuestion] = useState(null);
  const [editingReply, setEditingReply] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null); // To handle errors

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/socialgroup-question/${groupId}/questions`)
      .then((response) => {
        console.log(response.data); // Check what the API returns
        setQuestions(response.data);
  
      })
      .catch((error) =>
        console.error('Error fetching questions:', error)
      );
  }, [groupId]);

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user'));

    // Handle the case where the user is not logged in
    if (!user) {
      setErrorMessage('Please log in to ask a question.');
      return;
    }

    // Reset error message
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
    const user = JSON.parse(localStorage.getItem('user'));

    if (!user) {
      setErrorMessage('Please log in to submit a reply.');
      return;
    }

    setErrorMessage(null); // Reset error message

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

  const handleDeleteQuestion = (questionId) => {
    axios
      .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/question/${questionId}`)
      .then(() => {
        setQuestions(questions.filter((q) => q._id !== questionId));
      })
      .catch((error) => {
        setErrorMessage('Error deleting question. Please try again.');
        console.error('Error deleting question:', error);
      });
  };

  const handleEditReply = (reply) => {
    setEditingReply(reply);
  };

  const handleDeleteReply = (replyId, questionId) => {
    axios
      .delete(`http://localhost:5000/api/socialgroup-question/${groupId}/reply/${replyId}`)
      .then(() => {
        const updatedQuestions = questions.map((q) => {
          if (q._id === questionId) {
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

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Questions</h2>
        {!showForm && (
          <button
            className="border border-green-500 text-green-500 py-2 px-4 rounded-full flex items-center"
            onClick={() => setShowForm(true)}
          >
            <PencilIcon className="h-5 w-5 mr-2" />
            Ask a question
          </button>
        )}
      </div>

      {/* Display error messages */}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded-lg shadow-md">
          <textarea
            value={newQuestion}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            placeholder="Write a comment..."
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
      {questions.map((question, index) => (
        <div key={index} className="mb-4 p-4 border rounded-lg shadow-md">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/48"
              alt={question.user.username}
              className="rounded-full w-12 h-12"
            />
            <div className="ml-4">
              <div className="text-gray-700 font-bold">{question.user.username}</div>
              <div className="text-gray-500 text-sm">{question.time}</div>
            </div>
            {/* <button
              className="ml-auto text-red-500"
              onClick={() => handleDeleteQuestion(question._id)}
            >
              Delete
            </button> */}
            <button className="ml-2 text-blue-500" onClick={() => handleEditQuestion(question)}>
              Edit
            </button>
          </div>
          <p className="mt-2">{question.text}</p>
          {question.replies.map((reply, replyIndex) => (
            <div key={replyIndex} className="ml-12 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
              <div className="flex items-center">
                <img
                  src="https://via.placeholder.com/48"
                  alt={reply.user}
                  className="rounded-full w-12 h-12"
                />
                <div className="ml-4">
                  <div className="text-black font-bold">{reply.user}</div>
                  <div className="text-black text-sm">{reply.time}</div>
                </div>
                <button
                  className="ml-auto text-red-500"
                  onClick={() => handleDeleteReply(reply._id, question._id)}
                >
                  Delete
                </button>
                <button className="ml-2 text-blue-500" onClick={() => handleEditReply(reply)}>
                  Edit
                </button>
              </div>
              <p className="mt-2">{reply.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuestionSection;

