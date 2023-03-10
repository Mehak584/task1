import React, { useState } from 'react';
import { Input, Label, NavItem } from "reactstrap";

const AddUserForm = (props) => {

    const initUser = { id: null, name: '', username: '' };

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email) {
            handleChange(e, props.addUser(user));
        }
    }

    return (
        <form className="formWrapper">
            <div className="wraps">
                <div style={{ display: "flex" }}>
                    <label style={{ alignSelf: "center" }}>Name:</label>
                    <input type="text" value={user.name} name="name" onChange={handleChange} />
                </div>
                <div className='wraps'>
                    <label>Username:</label>
                    <input type="text"  value={user.username} name="username" onChange={handleChange} />
                </div>
                <div className="wraps">
                    <Label>Email:</Label>
                    <Input
                        type="email"
                        name="email"
                        className="input"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <button className='submitBtn' type="submit" onClick={handleSubmit} >Add user</button>
            </div>
        </form>
    )
}

export default AddUserForm;