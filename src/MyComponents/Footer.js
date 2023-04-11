import React from "react";

export const Footer = () => {
	let footerStyle = {
		position: "absolute",
		// top: "100vh",
		width: "100%",
		border: "2px solid red",
	};
	return (
		<footer className="bg-dark text-light pt-2" style={footerStyle}>
			<p className="text-center p-2">Copyright &copy; MyTodoList.com</p>
		</footer>
	);
};
