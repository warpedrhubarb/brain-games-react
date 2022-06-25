import React from 'react';
import { TextField, Button, Panel } from 'react95';

export const Form = ({ condition, genRoundData }) => {
  const [question, correctAnswer] = genRoundData();
  let answer;

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.form.reset();
    if (!answer) {
      alert('Oops! It seems you forgot to type in your answer');
    } else if (answer.toLowerCase() !== correctAnswer.toLowerCase()) {
      alert(`'${answer}' is wrong answer :( Correct answer was '${correctAnswer}'.`);
    } else {
      alert('Correct!');
    }
    answer = '';
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
            <Button type="submit" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </label>
    </form>
  )
};
