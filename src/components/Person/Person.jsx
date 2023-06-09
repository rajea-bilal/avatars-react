import React from 'react';

function Person({ person, handleForward, handlePrev }) {
  console.log(person)
  return (
    <>
      <article className="person">
        <div className="img-box">
          <img src={person.image} alt={person.name} />
        </div>
        <div className="text-box">
        <h3>{person.name}</h3>
        <span>{person.job}</span>
        <p>{person.text}</p>

        <div className="btn-container">
        <button className="btn back-btn" onClick={handlePrev}>Prev</button>
        <button className="btn forward-btn" onClick={handleForward}>Next</button>
        </div>

        </div>
      </article>
    </>
  );
}

export default Person;
