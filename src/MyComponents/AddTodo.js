import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	// const [isCompleted, setIsCompleted] = useState(false);

	const submit = (e) => {
		e.preventDefault(); // to avoid page reloading when submit the form
		if (!title || !desc) {
			alert("Title or Description cannot be blank");
		} else {
			addTodo(title, desc);
			setTitle("");
			setDesc("");
		}
	};
	return (
		<div className="container my-3">
			<h3>Add a Todo</h3>
			<form onSubmit={submit}>
				<div className="form-group mb-3">
					<label htmlFor="title">Todo Title</label>
					<input
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						className="form-control"
						id="title"
						aria-describedby="titleHelp"
						placeholder="Enter title"
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="desc">Todo Description</label>
					<input
						type="text"
						value={desc}
						onChange={(e) => setDesc(e.target.value)}
						className="form-control"
						id="desc"
						placeholder="Enter Description"
					/>
				</div>

				<button type="submit" className="btn btn-success btn-sm">
					Add todo
				</button>
			</form>
		</div>
	);
};
