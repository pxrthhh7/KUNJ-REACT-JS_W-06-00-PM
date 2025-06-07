import React from 'react'

const App = () => {
    // Spreading & merging

        // let box1 = ["std1", "std2", "std3", "std4", "std5"]
        // let box2 = ["std6", "std7", "std8", "std9", "std10"]

        // let box3 = [...box1,...box2]
    
        // console.log(box3)

    // filter 

        // let numbers = [1,2,3,4,5,6,7,8,9,10]
        // let evenNumbers = numbers.filter(num => num % 2 == 0)
        // console.log(evenNumbers)

    // Reduce

        const students = [
            { name: 'Alice', marks: 45 },
            { name: 'Bob', marks: 70 },
            { name: 'Charlie', marks: 60 },
            { name: 'David', marks: 30 }
        ];

        let total = students.reduce((sum, student) => 
            {sum + student.marks},0)


    return (
        <div>
            <h1>Total Marks : {total}</h1>

            {/* {
                evenNumbers.map((num, index) => (
                    <p key={index}>{num}</p>
                ))
            } */}
        </div>
    )
}

export default App