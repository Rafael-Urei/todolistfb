import { useForm, SubmitHandler } from 'react-hook-form';
import { BsGoogle, BsFacebook, BsMenuButton } from 'react-icons/bs';
import { FaArrowCircleRight as Arrow } from 'react-icons/fa'
import '../Login.css'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [loginOrRegister, setLoginOrRegister] = useState(false);
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password).then(userCredential => {
            const user = userCredential;
            console.log(user);
            navigate('/');
        }).catch(error => console.log(error));
    };

    const onRegister: SubmitHandler<FormData> = (data) => {
        createUserWithEmailAndPassword(auth, data.email, data.password).then(userCredential => {
            const user = userCredential.user
            console.log(user);
            setLoginOrRegister(false);
        })
    }

    type FormData = {
        email: string,
        password: string,
        name: string,
        phone: string,
    }

    return (
        <div className='container'>
            { !loginOrRegister ? 
                <>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>E-mail</label>
                        <input type="email" className={ errors.email && 'error'} {...register('email', {required: true})}/>
                        { errors.email ? <span className='error_message'>E-mail cannot be empty</span> : null }
                        <label>Password</label>
                        <input type="password" className={ errors.password && 'error'} {...register('password', {required: true})}/>
                        { errors.password ? <span className='error_message'>Password cannot be empty</span> : null }
                        <button type='submit'>Sign-In</button>
                    </form>
                    <p>Or would you like to login with: </p>
                    <div className="other_login">
                        <button><BsGoogle/> Login with Google <Arrow/></button>
                        <button><BsFacebook/> Login with Facebook <Arrow/></button>
                    </div>
                    <p>Don't have an account? <span onClick={() => setLoginOrRegister(true)}>Sign Up</span></p>
                </>
            : 
            <>
                <h1>Register</h1>
                <form onSubmit={handleSubmit(onRegister)}>
                    <label>E-mail</label>
                    <input type="email" className={ errors.email && 'error'} {...register('email', {required: true})}/>
                    { errors.email ? <span className='error_message'>E-mail cannot be empty</span> : null }
                    <label>Password</label>
                    <input type="password" className={ errors.password && 'error'} {...register('password', {required: true})}/>
                    { errors.password ? <span className='error_message'>Password cannot be empty</span> : null }
                    <label>Name</label>
                    <input type="text" className={ errors.name && 'error'} {...register('name', {required: true})}/>
                    { errors.name ? <span className='error_message'>Name cannot be empty</span> : null }
                    <label>Phone</label>
                    <input type="text" className={ errors.phone && 'error'} {...register('phone', {required: true})}/>
                    { errors.phone ? <span className='error_message'>Password cannot be empty</span> : null }
                    <button type='submit'>Sign-Up</button>
                </form>
                <p>Don't have an account? <span onClick={() => setLoginOrRegister(false)}>Sign Up</span></p>
            </>}
            
        </div>
    )
};