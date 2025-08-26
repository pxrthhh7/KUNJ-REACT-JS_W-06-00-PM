import React, { useEffect, useState } from 'react';
import { push, ref, set, onValue } from "firebase/database";
import { dbase } from './firebase';

const App = () => {
  const [users, setUsers] = useState([]);

  // Add new user
  const handleAdd = async () => {
    try {
      let newRef = push(ref(dbase, "users"));
      await set(newRef, { name: "kunj" });
      alert("User added successfully ✅");
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  // Fetch users (Realtime listener)
  useEffect(() => {
    const usersRef = ref(dbase, "users");
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert object -> array with id
        const userList = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  return (
    <div className="p-4">
      <button
        onClick={handleAdd}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4"
      >
        Add
      </button>

      <h2 className="text-xl font-bold mb-2">Users List</h2>
      <ul className="list-disc pl-6">
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
