import React from 'react';
import Card from '../Card/Card';
import './Container.css';
export default function Container({ ideas, deleteIdeas }){
	const IdeaCards = ideas.map(idea => <Card {...idea} deleteIdeas={deleteIdeas} />);
	return <div className="card-container">{IdeaCards}</div>;
}
