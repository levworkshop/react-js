import { useState } from "react";

function FilterBar(props) {

    const [search, setSearch] = useState('');

    function handleInputChange(e) {
        const value = e.target.value;
        setSearch(value);
        props.search(value);
    }

    return (
        <div className="d-flex px-4 w-50 my-5 bg-light">
            <input
                value={search}
                onChange={handleInputChange}
                type="text"
                placeholder="Search"
                className="form-control me-4"
            />
        </div>
    );
}

export default FilterBar;