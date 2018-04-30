import React from 'react';

const IdeaCard = ({ title, body, quality, id, deleteIdea }) => {
  return (
    <div id={id}>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Quality: {quality}</p>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  )
}

export default IdeaCard;