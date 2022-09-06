import { useState } from "react";
import Card from "../Card";
import "./Menu.css";
import cards from "./data";

function Menu() {

    const [display, setDisplay] = useState('grid');

    return (
        <>
            <div className="d-flex justify-content-between px-5 pt-2">
                <div>
                    <button
                        onClick={(e) => setDisplay('list')}
                        className="btn btn-default">
                        <i className="bi-list-ul"></i>
                    </button>
                    <button
                        onClick={(e) => setDisplay('grid')}
                        className="btn btn-default">
                        <i className="bi-grid-3x3-gap-fill"></i>
                    </button>
                </div>
            </div>

            <div className={display}>
                {
                    cards.map((card) =>
                        <Card
                            key={card.id}
                            data={card}
                        />
                    )
                }
            </div>
        </>
    );
}

export default Menu;