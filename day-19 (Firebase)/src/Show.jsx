import React, { useEffect , useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase'; // Ensure this is correctly set up

const Show = () => {

    const [user , setUser] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "newUser"));
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} =>, doc.data()`);

                    setUser(...user,doc.name)
                    console.log(user)
                });
            } catch (error) {
                console.error("Error fetching documents: ", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Check console for user data</h1>
        </div>
    );
};

export default Show;