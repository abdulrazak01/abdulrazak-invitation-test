import React, { useState, useEffect } from 'react'
const Users = () => {

    const [users, setUsers] = useState([]);
    const [nullData, setNullData] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const [selectFilter, setSelectFilter] = useState("");
    const getDataUsers = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                setUsers(json);
            })
            setNullData(false);
    }

    const searchUsers = (e) => {

        e.preventDefault();
        var lengthData = '';
        if (textSearch !== "") {
            if(selectFilter === "")
            {

                var searchByNameDefault = users.filter(text => text.name.toLowerCase().indexOf(textSearch) >= 0);
                setUsers(searchByNameDefault);
                lengthData = searchByNameDefault;
            }
            if (selectFilter === "Name") {
                var searchByName = users.filter(text => text.name.toLowerCase().indexOf(textSearch) >= 0);
                setUsers(searchByName);
                lengthData = searchByName;
            }
            if (selectFilter === "UserName") {

                var searchByUsername = users.filter(text => text.username.toLowerCase().indexOf(textSearch) >= 0);
                setUsers(searchByUsername);
                lengthData = searchByUsername;
            }
            if (selectFilter === "Email") {

                var searchByEmail = users.filter(text => text.email.toLowerCase().indexOf(textSearch) >= 0);
                setUsers(searchByEmail);
                lengthData = searchByEmail;
            }
            if (selectFilter === "Phone") {

                var searchByPhone = users.filter(text => text.phone.toLowerCase().indexOf(textSearch) >= 0);
                setUsers(searchByPhone);
                lengthData = searchByPhone;
            }
            if (selectFilter === "Website") {

                var searchByWebsite = users.filter(text => text.website.toLowerCase().indexOf(textSearch) >= 0);
                setUsers(searchByWebsite);
                lengthData = searchByWebsite;
            }

            lengthData.length === 0 ? setNullData(true) : setNullData(false);

        }
        else {
            
            getDataUsers();
            
        }


    }
    useEffect(() => {
        getDataUsers();
    }, []);

    return (
        <div className="body">
            <div className="table_header">
                <h1>List Data Users</h1>
                <form onSubmit={searchUsers}>
                    <div>
                        <input className="input" type="text" required onChange={(e) => setTextSearch(e.target.value)} placeholder="Search in Here ....."></input>
                        <select className="input" required value={selectFilter} onChange={(e) => setSelectFilter(e.target.value)}>
                            <option>Search By?</option>
                            <option>Name</option>
                            <option>UserName</option>
                            <option>Email</option>
                            <option>Phone</option>
                            <option>Website</option>
                        </select>
                        <button className="btn_search" >Search</button>
                        
                    </div>
                </form>
            </div>

            <div className="table_section">
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>

                        </tr>
                    </thead>
                    {nullData ? <tfoot>
                        <tr>
                            <th colSpan="6">Data Not Found Plaase Search Other Data</th>
                        </tr>
                    </tfoot> : ""}
                    <tbody>
                        {

                            users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                                    <td><a href={`tel:+62-${user.phone}`}>{user.phone}</a></td>
                                    <td><a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users