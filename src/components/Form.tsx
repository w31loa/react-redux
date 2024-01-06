import React from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { addTodo } from '../features/todo/todo.slice'


const Form = () => {
    const dispatch = useDispatch()

    const [todoValue , setTodoValue] = React.useState('')

    const addTodoHandler = ()=>{
        const todo = {
            id: uuidv4(),
            text: todoValue,
            complited : false
        }
        dispatch(addTodo(todo))
    }
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                onChange={e=>{
                    setTodoValue(e.target.value)
                }}
                placeholder='Type something...'
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={(addTodoHandler)}
            >
                Submit
            </button>
        </form>
    )
}

export default Form