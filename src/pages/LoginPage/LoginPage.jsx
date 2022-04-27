import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { JwtContext } from '../../shared/contexts/JwtContext';
import { API } from "../../shared/services/api";
import "./LoginPage.scss"

export default function LoginPage () {
    const { register, handleSubmit } = useForm();
    const { setJwt } = useContext(JwtContext);

    const onSubmit = formData => {
        API.post('login', formData).then(res => {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            setJwt(true);
        })
    }

    return (
        
        <form className="b-form" onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <label className='b-form__label' htmlFor="email">{/* Email */}</label>
            <input className='b-form__input' placeholder='Email' id="email" defaultValue="contacto@abelcabezaroman.com"
                   {...register("email",{ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}/>
            {/* include validation with required or other standard HTML validation rules */}
            <label className='b-form__label' htmlFor="password">{/* Password */}</label>
            <input className='b-form__input' placeholder='Password' id="password" type="password" defaultValue={'ABCedf123'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
                   })}/> {/* errors will return when field validation fails  */}
            {/*{errors.exampleRequired && <span>This field is required</span>}*/}

            <input className='b-form__logininput'type=" submit" value="Login"/>
        </form>
        
       
        
    )
}
