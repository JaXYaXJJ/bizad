import { useState } from "react";
import "./BizPage.css";
import Card from "./Card";
import SearchBar from "./SearchBar";

function BizPage(props) {

  const [filterCards, setFilterCards] = useState("All");

  var bizType = "All";
  function handleClick(setBizType) {
    bizType = setBizType;
    setFilterCards(bizType);
  }

  const [searchCards, setSearchCards] = useState(props.cards);

  function searchBiz(value) {
    let result = [...props.cards];
    const strValue = value + "";
    if (strValue.length > 0) {
      result = props.cards.filter(card => 
        card.category.toLowerCase().includes(strValue.toLowerCase())
        || card.name.toLowerCase().includes(strValue.toLowerCase())) 
    }
    setSearchCards(result);
  }

  const [display, setDispley] = useState("grid");

  return (
    <>
      <div className="topContainer p-5">
        <h1 className="d-flex justify-content-center">BizAd</h1>
        <h3 className="d-flex justify-content-center">
          Advertising your buisness
        </h3>
      </div>

      <div className="topFilter container d-flex justify-content-between mt-4">
      <div className="topInput d-flex justify-content-between">
        <form>
          <select className="rounded">
            <option value="" hidden>Category</option>
            <option onClick={() => handleClick("All")}>All</option>
            <option onClick={() => handleClick("Curses")}>Curses</option>
            <option onClick={() => handleClick("Events")}>Events</option>
            <option onClick={() => handleClick("Food")}>Food</option>
            <option onClick={() => handleClick("Rent")}>Rent</option>
            <option onClick={() => handleClick("Travel")}>Travel</option>
            <option onClick={() => handleClick("Shop")}>Shop</option>
          </select>
        </form>
        <SearchBar search={searchBiz} />
      </div>
      <div className="topBtns">
        <button onClick={(e) => setDispley("list")}
        className="styleBtn rounded mx-2">
          <i class="bi bi-text-center"></i></button>
        <button onClick={(e) => setDispley("grid")}
        className="styleBtn rounded">
          <i class="bi bi-grid-3x3"></i></button>
      </div>
      </div>

      <div className="container" id="page">
        <div className={display}>
        {searchCards
        .filter((card) => card.category === filterCards || filterCards === "All")
        .map((card) => (
          <Card
            key={card.id}
            bizCategory={card.category}
            imgTxtDown={card.imgTxt}
            bizImg={card.img}
            bizName={card.name}
            description={card.description}
            adress={card.adress}
            phone={card.phone}
            stars={card.stars}
          />
        ))}
        </div>
      </div>
    </>
  );
}

export default BizPage;
