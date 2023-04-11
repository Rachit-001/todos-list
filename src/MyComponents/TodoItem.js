import React from "react";
import "./style.css";
import { useState } from "react";

export const TodoItem = ({ todo, onDelete, index, changeCompleted }) => {
	const [isCompletedStyle, setIsCompletedStyle] = useState(false);

	const disabledStyle = {
		textDecoration: "line-through",
		opacity: 0.6,
	};
	const deleteButtonStyle = {
		backgroundColor: "#ff031b",
		borderColor: "#dc3545",
	};
	return (
		<>
			<div className="container">
				<input
					type="checkbox"
					className="checkboxInput"
					id={index}
					checked={todo.isCompleted}
					onChange={(e) => {
						changeCompleted(index);
						setIsCompletedStyle(!todo.isCompleted);
					}}
					style={{ width: "15px", height: "15px" }}
				/>
				<label className="form-check-label" htmlFor={index}>
					<div
						className="container"
						id={index}
						// style={isCompletedStyle ? disabledStyle : {}}
					>
						<h4 style={isCompletedStyle ? disabledStyle : {}}> {todo.title}</h4>

						{/* <div className="input-group">
								<input type="checkbox" className="" id={index} />
								<label className="form-check-label todoLine" htmlFor={index}>
									{todo.desc}
								</label>
							</div> */}
						{/* <input type="checkbox" className="" id={index} /> <span>{todo.desc}</span> */}

						<p style={isCompletedStyle ? disabledStyle : {}}> {todo.desc} </p>
						<button
							className="btn btn-sm btn-danger"
							onClick={() => {
								onDelete(todo);
							}}
							style={isCompletedStyle ? deleteButtonStyle : {}}
						>
							Delete
						</button>
					</div>
				</label>
			</div>

			<hr />
		</>
	);
};
