import React from 'react'
import { getDatabase, ref, child, get } from "firebase/database";

const Output = () => {


    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${userId}`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });


    return (
        <div>

        </div>
    )
}

export default Output
