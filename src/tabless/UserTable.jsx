import React from 'react';

const UserTable = (props) => {
    return(
        <table className="table">
            <thead>
            <tr>
                    <th>ID</th>
                    <th>Name</th>
                     <th>Username</th>
                     <th>email</th>
                </tr>
            </thead>
            <tbody>
                { props.users.length > 0 ? (
                    props.users.map(user => {
                         const {id, name, username, email} = user;
                         return (
                             <tr key={id}>
                                 <td>{id}</td>
                                 <td>{name}</td>
                                 <td>{username}</td>
                                 <td>{email}</td>
                             </tr>
                         )
                     })
                 ) : (
                     <tr>
                        <td colSpan={5}>No users found</td>
                     </tr>
                )   
                 }
             </tbody>
        </table>
    )
}

export default UserTable;
