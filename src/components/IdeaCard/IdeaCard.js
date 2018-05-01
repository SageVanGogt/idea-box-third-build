import React from 'react';
import PropTypes from 'prop-types';

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

IdeaCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.isRequired,
  deleteIdea: PropTypes.isRequired
}


export default IdeaCard;