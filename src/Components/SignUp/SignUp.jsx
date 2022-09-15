import React from 'react'
import './SignUp.css'
import formInput from './../../static/formData';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'

const schema = yup.object().shape(
    {
        fullname:yup.string().required().min(6),
        email:yup.string().required("please enter a valid email"),
        password:yup.string().required("please enter a password").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?%]{8,}$/,
            "Must contain 8 characters, One Uppercase, one Lowercase, One Number and one Special case character"
        )
    }
)

const SignUp = () => {

    const {register, handleSubmit, formState: { errors }} = useForm(
        {
            resolver:yupResolver(schema)
        }
    )

    const onSubmit = (data) => console.log(data)

  return (
    <div className='sign-up'>
        <h2>Don't have an account yet ?</h2>
        <h3>Sign up here</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
                {formInput.inputs.map((input,key)=>{
                    return(
                        <div key={key}>
                            <label htmlFor={input.name}>{input.label}</label>
                            <br />
                            <input type={input.type} name={input.name} {...register(input.name)} />
                            <span className='message'>{errors[input.name]?.message}</span>
                        </div>
                    )
                })}
            <label for='options'>User Type</label>
            <select id='options'>
                <option value='developer'>Developer</option>
                <option value='owner'>Owner</option>
            </select>

            <button>SIGN UP</button>
        </form>
        <p>Have an account ?<Link to='/signin'> Sign in</Link></p>
    </div>
  )
}

export default SignUp