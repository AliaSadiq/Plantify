import React, { useState } from 'react';
import { PencilIcon } from '@heroicons/react/24/solid';

const QuestionSection = () => {
  const [questions, setQuestions] = useState([
    {
      user: 'Nuno Serra',
      time: 'a year ago',
      text: "Bonjour, j'ai deux arbres plantées à Chaingay, est-ce que c'est possible de les visiter pour prendre des photos? Merci!",
      replies: [
        {
          user: 'Horizon Forêt',
          time: 'a year ago',
          text: 'Bonjour, Je vous laisse contacter les équipes de Tree-Nation pour envisager une rencontre. Belle journée',
        },
      ],
    },
  ]);
  const [newQuestion, setNewQuestion] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    setNewQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions, { user: 'You', time: 'Just now', text: newQuestion, replies: [] }]);
    setNewQuestion('');
    setShowForm(false);
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
              onClick={() => setShowForm(false)}
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
            <img src="https://via.placeholder.com/48" alt={question.user} className="rounded-full w-12 h-12" />
            <div className="ml-4">
              <div className="text-gray-700 font-bold">{question.user}</div>
              <div className="text-gray-500 text-sm">{question.time}</div>
            </div>
          </div>
          <p className="mt-2">{question.text}</p>
          {question.replies.map((reply, replyIndex) => (
            <div key={replyIndex} className="ml-12 mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
              <div className="flex items-center">
                <img src="https://via.placeholder.com/48" alt={reply.user} className="rounded-full w-12 h-12" />
                <div className="ml-4">
                  <div className="text-black font-bold">{reply.user}</div>
                  <div className="text-black text-sm">{reply.time}</div>
                </div>
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
