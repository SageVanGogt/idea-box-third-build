import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';
import PropTypes from 'prop-types';

const IdeaContainer = ({ ideas, deleteIdea }) => {

  const ideaCards = ideas.map((idea, index) => {
    return (
      <IdeaCard 
        key={index}
        {...idea}
        deleteIdea={deleteIdea}
      />
    )
  })

  return (
    <div>
      {ideaCards}
    </div>
  )
}

IdeaContainer.propTypes = {
  deleteIdea: PropTypes.func.isRequired,
  ideas: PropTypes.array.isRequired
}

export default IdeaContainer;