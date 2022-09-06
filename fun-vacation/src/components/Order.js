import Title from "./Title";

function Order() {
    return (
        <>
            <Title
                mainTxt="Order Now">
                <p>Quickly order a new vacation.</p>
            </Title>

            <main className="p-5">
                <h4 className="mb-3">Billing address</h4>
                <form className="needs-validation">
                    <div className="row g-3">
                        <div className="col-12">
                            <label className="form-label">
                                Vacation Package
                            </label>
                            <select className="form-select">
                                <option>Choose...</option>
                                <option>Special holiday package</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid package.
                            </div>
                        </div>

                        <div className="col-12">
                            <label htmlFor="firstName" className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName" placeholder=""
                            />
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="form-label">
                                Email
                                <span className="text-muted">(Optional)</span>
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="you@example.com"
                            />
                            <div className="invalid-feedback">
                                Please enter a valid email address for shipping updates.
                            </div>
                        </div>

                    </div>

                    <div className="form-check mt-4">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="save-info"
                        />
                        <label className="form-check-label">
                            I agree to terms...
                        </label>
                    </div>

                    <button
                        className="w-100 btn btn-primary btn-lg mt-4" type="submit"
                    >
                        Continue to checkout
                    </button>
                </form>
            </main>


        </>
    );
}

export default Order;