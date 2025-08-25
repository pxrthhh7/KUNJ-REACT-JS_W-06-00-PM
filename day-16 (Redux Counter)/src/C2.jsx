import React from 'react'
import { useSelector } from 'react-redux'

const C2 = () => {

    const count = useSelector((state) => state.count)

    return (
        <>
            <span class="text-4xl font-bold text-gray-800">{count}</span>
        </>
    )
}

export default C2
