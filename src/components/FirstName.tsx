import {useSelector} from 'react-redux'


const FirstName = () => {
    const name = useSelector((state)=>{
        return state.user.firstName
    })
    return <div className='font-bold'>{name}</div>
}

export default FirstName