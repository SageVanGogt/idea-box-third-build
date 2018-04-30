import React from 'react';

const IdeaCard = ({ title, body, quality }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <p>Quality: {quality}</p>
    </div>
  )
}

export default IdeaCard;