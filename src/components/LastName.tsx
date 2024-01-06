import {useSelector} from 'react-redux'
import React from 'react'

const LastName = () => {
    const lastName = useSelector((state)=>{
        return state.user.lastName
    })
    return <div className='font-bold'>{lastName}</div>
}

export default LastName