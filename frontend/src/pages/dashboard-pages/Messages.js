import React, { useState } from 'react';
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa';

const Message = () => {
  const [selectedThread, setSelectedThread] = useState(null);
  const [message, setMessage] = useState('');
  const threads = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey, how are you?', time: '12:30 PM', unread: 2 },
    { id: 2, name: 'Jane Smith', lastMessage: 'Let’s catch up later!', time: '11:45 AM', unread: 0 },
  ];
  const messages = [
    { id: 1, sender: 'John Doe', content: 'Hello!', time: '12:20 PM' },
    { id: 2, sender: 'Me', content: 'Hey, how are you?', time: '12:21 PM' },
  ];

  const handleSendMessage = () => {
    // Logic for sending a message
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/images/dashboardbg.png'})` }}    >
      {/* Parent container: Sidebar and Main Conversation in 1 row */}
      <div className="flex w-full ml-64 mr-80 mt-8">
        {/* Sidebar for message threads */}
        <div className="w-1/4 bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md border-r p-4">
          <h2 className="text-lg font-semibold mb-4">Messages</h2>
          <ul>
            {threads.map((thread) => (
              <li
                key={thread.id}
                onClick={() => setSelectedThread(thread)}
                className="p-3 mb-2 flex items-center justify-between bg-white hover:bg-blue-100 rounded-md cursor-pointer"
              >
                <div>
                  <p className="font-bold">{thread.name}</p>
                  <p className="text-sm text-gray-600">{thread.lastMessage}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-gray-500">{thread.time}</span>
                  {thread.unread > 0 && (
                    <span className="ml-2 bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                      {thread.unread}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Main conversation area */}
        <div className="flex-1 flex flex-col bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md ml-4">
          {/* Conversation Header */}
          {selectedThread ? (
            <>
              <div className="p-4 bg-white bg-opacity-30 border-b flex justify-between items-center">
                <h3 className="text-lg font-bold">{selectedThread.name}</h3>
                <button className="text-sm text-gray-600">Clear Chat</button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mb-4 p-3 rounded-lg max-w-sm ${msg.sender === 'Me' ? 'bg-blue-100 ml-auto' : 'bg-gray-100'
                      }`}
                  >
                    <p className="font-semibold">{msg.sender}</p>
                    <p>{msg.content}</p>
                    <span className="text-xs text-gray-500">{msg.time}</span>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white bg-opacity-30 border-t flex items-center">
                <button className="text-gray-500 mr-4">
                  <FaPaperclip size={20} />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex-1 p-2 border rounded-lg"
                  placeholder="Type a message"
                />
                <button onClick={handleSendMessage} className="ml-4 bg-blue-500 text-white p-2 rounded-lg">
                  <FaPaperPlane size={20} />
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a thread to start chatting</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
