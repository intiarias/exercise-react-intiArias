import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./nabvar";
import Card from "./Card";
import Jumbotron from "./jumbotron";
import Footer from "./footer"

//create your first component
const Home = () => {
	return (
		<>
		<Navbar/>
		<Jumbotron/>
		<Card/>
		<Footer/>
		</>
	
	);
};

export default Home;
