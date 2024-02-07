// PollingHomepage.jsx

import React, { useState } from 'react';
import './PollingHomePage.css';
import { useNavigate } from 'react-router-dom';

const PollingHomePage = () => {
  const Navigate = useNavigate();

  const [pollOptions, setPollOptions] = useState([
    { id: 1, text: 'Option 1', count: 0 },
    { id: 2, text: 'Option 2', count: 0 },
    { id: 3, text: 'Option 3', count: 0 },
  ]);

  const handleVote = (optionId) => {
    const updatedOptions = pollOptions.map((option) => {
      if (option.id === optionId) {
        return { ...option, count: option.count + 1 };
      }
      return option;
    });
    setPollOptions(updatedOptions);
  };

  const totalVotes = pollOptions.reduce((total, option) => total + option.count, 0);

  // Find the winning option based on count
  const winningOption = pollOptions.reduce((winner, option) =>
    option.count > winner.count ? option : winner
  );

  return (
    <div className="poll-container">
      <div className="background-image"></div>
      <div className="poll-content">
        <h1 className="poll-title">Live Polling</h1>
        <div className="poll-options">
          {pollOptions.map((option) => (
            <div key={option.id} className="poll-option">
              <button onClick={() => handleVote(option.id)}>{option.text}</button>
              <span>{option.count} votes</span>
            </div>
          ))}
        </div>
        <div className="total-votes">Total Votes: {totalVotes}</div>
        {totalVotes > 0 && (
          <div className="winner">
            Winner: {winningOption.text} with {winningOption.count} votes
          </div>
        )}
      </div>
    </div>
  );
};

export default PollingHomePage;
