import { TextField, Button, Panel } from 'react95';
import React, { useState, useEffect } from 'react';

function StartEngine (condition, genRoundData) {
  const [question, correctAnswer] = genRoundData();
  let answer;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    if (answer !== correctAnswer) {
      alert(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return;
    }
      alert('Correct!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Panel variant='inside' style={{ margin: '1rem', padding: '1rem' }}>{condition}</Panel>
      <br />
      <Panel variant='inside' style={{ margin: '1rem', padding: '1rem' }}>{question}</Panel>
      <br />
      <label>
        <div className="row align-items-center">
          <div className="col-9">
            <TextField
              variant='flat'
              placeholder='Type here...'
              fullWidth
              id="input"
              type="text"
              value={answer}
              autoComplete="off"
              onChange={(e) => {
                answer = e.target.value;
              }}
            />
          </div>
          <div className="col-3">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </label>
    </form>
  )
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export { StartEngine, getRandomInt };
