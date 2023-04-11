import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { useState } from "react";
import { AddTodo } from "./MyComponents/AddTodo";
import { useEffect } from "react";
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./MyComponents/style.css";

function App() {
	let initTodos;
	if (localStorage.getItem("todos") === null) {
		initTodos = [];
	} else {
		initTodos = JSON.parse(localStorage.getItem("todos"));
	}
	const onDelete = (todo) => {
		console.log("This is onDelete of todo", todo);
		// console.log("This is onDelete of todo srno", todo.srno);
		setTodos(
			todos.filter((e) => {
				return e !== todo;
			})
		);
	};

	const addTodo = (title, desc) => {
		console.log("add this to todo list :", title, desc);
		let srno;

		srno = todos.length ? todos[todos.length - 1].srno + 1 : 1;
		const myTodo = {
			srno: srno,
			title: title,
			desc: desc,
			isCompleted: false,
		};
		setTodos([...todos, myTodo]);
		console.log(myTodo);
	};

	// const [todos, setTodos] = useState([]);
	const [todos, setTodos] = useState(initTodos);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos)); //to store todos in local
	}, [todos]);

	// const [todos, setTodos] = useState([
	// 	{
	// 		srno: 1,
	// 		title: "Go to the market",
	// 		desc: "Complete the work",
	// 	},
	// 	{
	// 		srno: 2,
	// 		title: "Go to the mall",
	// 		desc: "Complete the work",
	// 	},
	// 	{
	// 		srno: 3,
	// 		title: "Go to the library",
	// 		desc: "Complete the work",
	// 	},
	// ]);

	function changeCompleted(index) {
		console.log(index, "index");
		console.log(todos, "todos");

		setTodos((prevState) => {
			return [
				...prevState.slice(0, index),

				{
					srno: prevState[index].srno,
					title: prevState[index].title,
					isCompleted: !prevState[index].isCompleted,
					desc: prevState[index].desc,
					// completed: event.target.checked,
				},

				...prevState.slice(index + 1),
			];
		});
	}

	return (
		<>
			<Router>
				<Header
					title="My Todo List"
					// searchBar={window.confirm("Need SearchBar ?")}
					searchBar={false}
				/>
				<Routes>
					<Route
						path="/"
						element={
							<>
								<AddTodo addTodo={addTodo} />
								<Todos
									todos={todos}
									onDelete={onDelete}
									changeCompleted={changeCompleted}
								/>
							</>
						}
					></Route>
					<Route path="/about" element={<About />}></Route>
				</Routes>

				<Footer />
			</Router>
		</>
	);
}

export default App;
