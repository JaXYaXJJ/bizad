import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import BizPage from "./components/BizPage";
import ServicesTable from "./components/ServicesTable";
import About from "./components/About";

function App() {

  const cards = [
    {
      id: 1,
      category: "Food",
      imgTxt: "Food truck",
      img: "https://images.pexels.com/photos/4609248/pexels-photo-4609248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "CHURROS",
      description: "Magic churros for bro",
      adress: "Somewhere on the way",
      phone: "+1 808-326-2695",
      stars: 5,
    },
    {
      id: 2,
      category: "Rent",
      imgTxt: "Apartments",
      img: "https://images.pexels.com/photos/4608703/pexels-photo-4608703.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "HONOLULU RENTALS",
      description: "Magic apartments for bro",
      adress: "Somewhere on the beach",
      phone: "+1 808-311-9332",
      stars: 5,
    },
    {
      id: 3,
      category: "Food",
      imgTxt: "Street food",
      img: "https://images.pexels.com/photos/4609255/pexels-photo-4609255.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "SEA TACOS",
      description: "Magic taco for bro",
      adress: "Somewhere on the hills",
      phone: "+1 808-555-7388",
      stars: 4,
    },
    {
      id: 4,
      category: "Shop",
      imgTxt: "Skate shop",
      img: "https://images.pexels.com/photos/6390342/pexels-photo-6390342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "BORN TO SK8",
      description: "Magic bord for bro",
      adress: "Somewhere in the town",
      phone: "+1 808-126-6323",
      stars: 5,
    },
    {
      id: 5,
      category: "Curses",
      imgTxt: "Surf school",
      img: "https://images.pexels.com/photos/9269284/pexels-photo-9269284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "SURFOLULU",
      description: "Magic surf for bro",
      adress: "Somewhere on the beach",
      phone: "+1 808-493-2202",
      stars: 5,
    },
    {
      id: 6,
      category: "Curses",
      imgTxt: "Yoga",
      img: "https://images.pexels.com/photos/7510374/pexels-photo-7510374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "YOGOLULU",
      description: "Magic yoga for bro",
      adress: "Somewhere near a beach",
      phone: "+1 808-112-2431",
      stars: 4,
    },
    {
      id: 7,
      category: "Travel",
      imgTxt: "Oahu",
      img: "https://images.pexels.com/photos/9259705/pexels-photo-9259705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "THE ISLANDS",
      description: "Magic trip for bro",
      adress: "Somewhere in the ocean",
      phone: "+1 808-767-2632",
      stars: 5,
    },
    {
      id: 8,
      category: "Events",
      imgTxt: "Fest",
      img: "https://images.pexels.com/photos/6390705/pexels-photo-6390705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "ALOHA  FEST",
      description: "Magic fest for bro",
      adress: "Somewhere in the town",
      phone: "+1 808-433-3588",
      stars: 5,
    },
    {
      id: 9,
      category: "Food",
      imgTxt: "Street food",
      img: "https://images.pexels.com/photos/4609209/pexels-photo-4609209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "CORN",
      description: "Magic bbq for bro",
      adress: "Somewhere in the town",
      phone: "+1 808-388-2218",
      stars: 4,
    },
    {
      id: 10,
      category: "Rent",
      imgTxt: "Rent equipment",
      img: "https://images.pexels.com/photos/5008606/pexels-photo-5008606.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "RENT&SURF",
      description: "Magic equipment for bro",
      adress: "Somewhere on the beach",
      phone: "+1 808-111-5644",
      stars: 4,
    },
    {
      id: 11,
      category: "Events",
      imgTxt: "Tournament",
      img: "https://images.pexels.com/photos/6390421/pexels-photo-6390421.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
      name: "CHILL ON BOARD",
      description: "Magic competition for bro",
      adress: "Somewhere in the town",
      phone: "+1 808-003-3277",
      stars: 5,
    },
    {
      id: 12,
      category: "Rent",
      imgTxt: "Bike",
      img: "https://images.pexels.com/photos/5008225/pexels-photo-5008225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      name: "ISLAND BIKE",
      description: "Magic bike for bro",
      adress: "Somewhere on the island",
      phone: "+1 808-433-2454",
      stars: 4,
    },
  ];

  return (
    <>
      <Header name="BizAd" />

      <Routes>
        <Route path="/" element={<BizPage cards={cards}/>} />
        <Route path="/services" element={<ServicesTable />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
