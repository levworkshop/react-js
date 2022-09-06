function Table(props) {

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th className="w-25">Date</th>
                    <th className="w-25">Location</th>
                    <th className="w-50">Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.list.map(offer =>
                        <tr key={offer.id} className="bg-light">
                            <td>{offer.date}</td>
                            <td>{offer.location}</td>
                            <td>{offer.price}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}

export default Table;