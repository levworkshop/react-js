function Card(props) {

    function handleClick(dishName) {
        console.log(`You selected: ${dishName}`);
    }

    const data = props.data;

    return (
        <div className="card border-0 m-4 shadow">
            <img src={data.imageUrl} alt={data.name} className="card-img-top" />
            <div className="text-capitalize">{data.category}</div>
            <div className="card-body">
                <div className="card-title">
                    {data.name}
                </div>
                <div className="card-text">
                    {data.description}
                </div>
                <div>{data.price}</div>
                <div>
                    Rating: {data.rating}
                    <i className="bi-star"></i>
                </div>

                <button onClick={() => handleClick(data.name)} className="btn btn-primary">Order Now</button>
            </div>
        </div>
    );
}

export default Card;