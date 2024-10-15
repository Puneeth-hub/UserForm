import React, {useState} from 'react'; 
import axios from 'axios'; 
import './formData.css'

const Form = () =>{
    const [formData, setFormData] = useState({
        name : '',
        email: '', 
        phone: '', 
        description: ''
    })
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async(e) =>{
        e.preventDefault(); 
    
    try{
     await axios.post('http://localhost:5000/api/items', formData)
     alert('Data submitted successfully!')
    }catch(error){
        console.error('Error submitting data:', error);
    }
    setFormData({ name: '', email: '', phone: '', description: '' });
    }




    return(
        <div className='container'>
          <div className='form-section'>
          <form onSubmit={handleSubmit}>
            <h1>User Form Details </h1>
            <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required/>
            <input type='text' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required/>
            <input type='text' name='phone' placeholder='Phone' value={formData.phone} onChange={handleChange} required/>
            <textarea type='text' name='description' placeholder='Description' value={formData.description} onChange={handleChange} required ></textarea>
            <button type="submit">Submit</button>
          </form>
          </div>
        </div>
    )
}
export default Form;