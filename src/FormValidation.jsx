import React, { useState } from 'react';

const FormValidation = () => {
    const[formValue, setFormValue]=useState({userName:'',password:''})
    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log("form values",formValue);
        axios.post('url',{
            body:{
                username:formValue.userName,
                password:formValue.password
            }
        })
    }
    const handleChange =(e) =>{
const{name,value}=e.target
setFormValue({...formValue,[name]:value})
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                <input type='text' name='userName'placeholder='enter user name' value={formValue.userName} onChange={handleChange}/>
                <input type='text' name='password'placeholder='enter password' value={formValue.password} onChange={handleChange}/>
                <button type='text'>Login</button>
            </form>
        </div>
    );
};

export default FormValidation;