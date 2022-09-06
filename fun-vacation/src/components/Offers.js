import { useState } from "react";
import FilterBar from "./FilterBar";
import Table from "./Table";
import Title from "./Title";

function Offers() {

    const data = [
        {
            id: 1,
            date: '22/10/2022',
            location: 'A day in Disneyland, Florida',
            price: 350
        },
        {
            id: 2,
            date: '01/10/2022',
            location: 'New York, USA',
            price: 800
        },
        {
            id: 3,
            date: '05/10/2022',
            location: 'The great park, Somewhere',
            price: 995
        },
    ];

    const [origData, setOrigData] = useState(data);
    const [offers, setOffers] = useState(data);

    function searchOffers(value) {
        let result = [...origData];
        if (value.length > 0) {
            result = origData.filter(offer =>
                offer.location.toLowerCase().includes(value.toLowerCase())
            )
        }

        setOffers(result);
    }

    return (
        <>
            <Title mainTxt="Our Offers">
                <p className="fs-5 text-danger">
                    <i className="bi-pencil"></i>
                    List of our vacation packages for this month
                </p>
            </Title>

            <FilterBar search={searchOffers} />

            <Table list={offers} />
        </>
    );
}

export default Offers;