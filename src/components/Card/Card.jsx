import React from 'react';

export default function Card({ title, body, id, deleteIdeas }){
	return (
		<div>
			<h2>{title}</h2>
			<p>{body}</p>
			<button onClick={() => deleteIdeas(id)}>🗑</button>
		</div>
	);
}
