import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePostById } from '../features/post/post.slice'

const PostItem = ({post}) => {

    const dispatch = useDispatch()

    const removePostHandler = (id)=>{
        dispatch(deletePostById(id))
    }

    return (
     
          <div className='flex justify-between w-full bg-indigo-500 hover:bg-indigo-300 transition-all py-1 px-2 text-white rounded-sm cursor-pointer mt-4'>
            {post.title}
            <div className='text-sm h-fit px-4 py-2 flex  bg-red-400 hover:bg-red-500 transition-all text-white cursor-pointer'
                onClick={()=>removePostHandler(post.id)}
            >

                Delete
            </div>
            
        </div>
        
      
        
    )
}

export default PostItem

function removePostFromState(id: any): any {
    throw new Error('Function not implemented.')
}
