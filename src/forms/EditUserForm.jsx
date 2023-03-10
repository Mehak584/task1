import React, { useState, useEffect } from 'react';
import { Input, Label, NavItem } from "reactstrap";

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username && user.email) props.updateUser(user);
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
                    <input type="text" value={user.username} name="username" onChange={handleChange} />
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
            <div style={{ display: "flex" }}>
                <button type="submit" className='submitBtn' onClick={handleSubmit} >Edit user</button>
                <button type="submit" className='submitBtn' onClick={() => props.setEditing(false)} >Cancel</button>
            </div>
        </form>
    )
}

export default EditUserForm;