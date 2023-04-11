import React from "react";

export const About = () => {
	return (
		<>
			<div className="container">
				<h2>About Page</h2>
				<p>This react app is about Todo List</p>
				<p>It creates a Todo list</p>
				<p>We can add todo Item and their description in this app</p>
				<p>And also delete them</p>
				<p>In this app addes todo items are also stored in Localstorage </p>
				<p>In this app, React Router is also used</p>
				<p>React Router enables "client side routing".</p>
				<h3>Client Side Routing</h3>
				<p>
					In traditional websites, the browser requests a document from a web
					server, downloads and evaluates CSS and JavaScript assets, and renders
					the HTML sent from the server. When the user clicks a link, it starts
					the process all over again for a new page.
				</p>
				<p>
					Client side routing allows your app to update the URL from a link
					click without making another request for another document from the
					server. Instead, your app can immediately render some new UI and make
					data requests with fetch to update the page with new information.
				</p>
				<p>
					This enables faster user experiences because the browser doesn't need
					to request an entirely new document or re-evaluate CSS and JavaScript
					assets for the next page. It also enables more dynamic user
					experiences with things like animation.
				</p>
				<p>
					Client side routing is enabled by creating a 'Router' and
					linking/submitting to pages with 'Link' and 'Form'
				</p>
			</div>
			;
		</>
	);
};
