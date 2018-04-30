import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

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

export default IdeaContainer;