import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard';

const IdeaContainer = ({ ideas }) => {

  const ideaCards = ideas.map((idea, index) => {
    return (
      <IdeaCard 
        key={index}
        {...idea}
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