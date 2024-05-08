// import React, { useState } from 'react'
// import axios from 'axios'
// import './NewBlog.css'
// // import './NewBlog.css'


// const NewBlog = () => {
// const [image,setImage]=useState('')
// const[title,setTitle]=useState('')
// const [subtitle,setSubTitle]=useState('')
// const[desc,setDesc]=useState('')

// const handleImageChange=(e)=>{
//     setImage(e.target.files[0])
    
// }
// const handleSubmit=async(e)=>{
//     e.preventDefault();
//     const formData = new FormData();
    
//     formData.append('image',image)
//     formData.append('title',title)
//     formData.append('subtitle',subtitle)
//     formData.append('desc',desc)
// console.log(formData);

//     try {
//     const response = await axios.post("http://localhost:3000/post",
//     formData,{
// headers:{
//     'Content-Type':'multipart/form-data'
// }
//     })
//     console.log(response.data);

//     } catch (error) {
//        console.log(error); 
//     }
// }
//   return (
//     <div className='blog-container'>
// <form className='form' onSubmit={handleSubmit}>
// <div className='subtitle'>creat new post</div>



// <div>
// <label htmlFor="">blog image</label>
// <input type="file"
// id='image'
// name= 'image'
// onChange={handleImageChange}
// required />


// </div>

// <div>
// <label htmlFor="">blog title</label>
// <input type="text"
// id='title'
// name= 'title'
// value={title}
// onChange={(e)=>setTitle(e.target.value)}
// required />


// </div>
// <div>
// <label htmlFor="">blog subtitle</label>
// <input type="text"
// id='subtitle'
// name= 'subtitle'
// value={subtitle}
// onChange={(e)=>setSubTitle(e.target.value)}
// required />


// </div>

// <div>
// <label htmlFor="">blog decription</label>
// <input type="text"
// id='desc'
// name= 'desc'
// value={desc}
// onChange={(e)=>setDesc(e.target.value)}
// required />


// </div>
// <button type='submit'>create</button>
// </form>





//     </div>
//   )
// }

// export default NewBlog
import React,{useState} from 'react'
import axios from 'axios'
import './NewBlog.css'
import { useNavigate } from 'react-router-dom'

const NewBlog = () => {

    const [image,setImage] =useState(null)
    const [title,setTitle] = useState('')
    const [subtitle,setSubTitle] = useState('')
    const [desc,setDesc] = useState('')
    const navigate = useNavigate()

    const handleImageChange = (e)=>{
        setImage(e.target.files[0]);
       
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image)
        formData.append('title',title)
        formData.append('subtitle',subtitle)
        formData.append('desc',desc)
  
        try {
            const token = sessionStorage.getItem('userToken')
            if(token){
                const response= await axios.post("https://entry-news-server.onrender.com/posts",
                formData,{
                    headers:{
                        'Content-Type':'multipart/form-data',
                        'Authorization':`Bearer ${token}`
                    }
                }
            )
            console.log(response.data)
            }
            else{
                navigate('/login')
            }
            
        } catch (error) {
            console.log(error)
        }


    }
  return (
    <div className='blog-container'>
        <form className='form' onSubmit={handleSubmit}>
        <div className="subtitle">Create a New Post </div>
        <div>
            <label htmlFor="">Blog Image:</label>
            <input
             type="file" 
             id="image"
             name="image"
             onChange={handleImageChange}
             required
             />

        </div>
        <div>
            <label htmlFor="">Title:</label>
            <input
             type="text" 
             id="title"
             name="title"
             value={title}
             onChange={(e)=>setTitle(e.target.value)}
             required
             />

        </div>
        <div>
            <label htmlFor="">SubTitle:</label>
            <input
             type="text" 
             id="subtitle"
             name="subtitle"
             value={subtitle}
             onChange={(e)=>setSubTitle(e.target.value)}
             required
             />

        </div>
        <div>
            <label htmlFor="">Description:</label>
            <input
             type="text" 
             id="desc"
             name="desc"
             value={desc}
             onChange={(e)=>setDesc(e.target.value)}
             required
             />

        </div>
        <button type="submit">Create a new Post</button>

        </form>
      
    </div>
  )
}

export default NewBlog