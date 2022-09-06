import { useState } from "react";

function Header(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('active');

    function handleBtnClick(e) {
        e.preventDefault();

        // simple validation
        if (!name || name.length === 0 || !email || email.length === 0) {
            return;
        }

        props.addUser({
            name: name,
            email: email,
            status: status
        });
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <div className="d-flex">
                    <a className="navbar-brand" href="/">Users</a>
                    <div className="collapse navbar-collapse">
                        <form className="d-flex">
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control me-2"
                                type="text"
                                placeholder="Name"
                                aria-label="Name"
                            />
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} className="form-control me-2"
                                type="text"
                                placeholder="Email" aria-label="Email"
                            />

                            <select
                                value={status}
                                onChange={(e) => setStatus(e.target.value)} className="form-select me-2"
                            >
                                <option>active</option>
                                <option>expired</option>
                                <option>banned</option>
                            </select>

                            <button
                                onClick={(e) => handleBtnClick(e)} className="btn btn-outline-success" type="submit"
                            >
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;