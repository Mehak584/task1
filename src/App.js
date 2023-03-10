import React, { useState } from "react";
import UserTable from "./tabless/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import "./App.css";
import ProductListing from "./ProductListing";

const App = () => {
  const [users, setUsers] = useState('');

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
          <ProductListing />
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div style={{textAlign:"center", marginTop:"35px"}}>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven_columns">
          <h2>Review and Submit Order</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
  
    </div>
  );
};

export default App;



// import "./App.css";
// import ArrayFields from "./Components/AddMultiFieds";
// // import ArrayMethods from "./Components/ArrayMethods";
// // import CalendarTimeSlot from "./Components/calendarTimeSlot";
// import ImageUploader from "./Components/ImageUploader";
// import Home from "./Pages/Home";
// import DisplayFormDataInTable from "./Pages/DisplayFormDataInTable";

// function App() {
//   return (
//     <div className="App">
//           <DisplayFormDataInTable />
//       <Home />
//       {/* <ImageUploader/> */}
//       {/* <CalendarTimeSlot /> */}
//       {/* <ArrayMethods /> */}
//       {/* <ArrayFields /> */}
//     </div>
//   );
// }

// export default App;
