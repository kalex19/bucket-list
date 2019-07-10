import React from 'react';
import Card from '../Card/Card';
export default function Container({ ideas, deleteIdeas }){
	const IdeaCards = ideas.map(idea => <Card {...idea} deleteIdeas={deleteIdeas} />);
	return <div>{IdeaCards}</div>;
}
