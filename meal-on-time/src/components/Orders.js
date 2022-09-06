import { useState } from "react";
import Joi from "joi";

function Orders() {
    const [orders, setOrders] = useState([]);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [addErr, setAddErr] = useState('');

    function addOrder(e) {
        // data validation
        const schema = Joi.object({
            price: Joi.number().required().min(1),
            name: Joi.string().required().min(2),
            phone: Joi.string().required(),
            email: Joi.string().required().email({ tlds: { allow: false } })
        });

        const order = {
            price: price,
            name: name,
            phone: phone,
            email: email,
        };

        const { error } = schema.validate(order);

        if (error) {
            setAddErr(error.details[0].message);
            console.log(error);
            return;
        }

        order.id = Math.random() + '';
        order.date = new Date().toLocaleString();

        const updated = [...orders, order];
        setOrders(updated);
    }

    return (
        <>
            <h2 className="text-center mt-3">Orders</h2>

            <div className="d-flex p-4 border">
                <input value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="form-control me-2" type="number"
                    placeholder="Price" />

                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control me-2" type="text"
                    placeholder="Name" />

                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control me-2" type="text"
                    placeholder="Phone" />

                <input value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control me-2"
                    type="text" placeholder="Email" />

                <button onClick={addOrder}
                    className="btn btn-primary">Add</button>
            </div>
            <div className="text-danger">{addErr}</div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order.id}>
                                <td>{order.date}</td>
                                <td>{order.price}</td>
                                <td>{order.name}</td>
                                <td>{order.phone}</td>
                                <td>{order.email}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default Orders;