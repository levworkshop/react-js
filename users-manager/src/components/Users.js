import { useState } from "react";
import Header from "./Header";
import Message from "./Message";
import UsersTable from "./UsersTable";

function Users() {
    // state hook
    const [usersData, setUsersData] = useState([]);

    // lifting state up
    function addUser(newUser) {
        newUser.id = Math.random() + '';
        const updated = [...usersData, newUser];
        setUsersData(updated);
    }

    function deleteUser(user) {
        const updated = usersData.filter(userItem => userItem.id !== user.id);
        setUsersData(updated);
    }

    return (
        <>
            <Header addUser={addUser} />
            {/* conditional rendering */}
            {
                usersData.length === 0 &&
                <Message />
            }
            <UsersTable users={usersData} deleteUser={deleteUser} />
        </>
    );
}

export default Users;