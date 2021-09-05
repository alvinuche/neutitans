import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Main from "../components/main/Main";
import Modal from "../components/modal/Modal";
import Nav from "../components/nav/Nav";
import Users from "../components/users/Users";

import "../index.css";

function Home({ show }) {
	const [showModal, setShowModal] = useState(false);

	const handleClick = () => {
		setShowModal(!showModal);
	};

	return (
		<div className="container">
			<div className="box-container">
				<Nav />

				<div className="header-main">
					<Header handleClick={handleClick} />
					<Main handleClick={handleClick} />
					<Users />
					<Footer />
				</div>
			</div>
			<Modal showModal={showModal} handleClick={handleClick} show={show} />
		</div>
	);
}

export default Home;
