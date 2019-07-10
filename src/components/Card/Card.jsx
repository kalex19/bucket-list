import React from 'react';
import './Card.css';

export default function Card({ title, body, id, deleteIdeas }){
	return (
		<div className="card">
			<h2>{title}</h2>
			<p>{body}</p>
			<button className="deleteBtn" onClick={() => deleteIdeas(id)}>
				🗑
			</button>
		</div>
	);
}
