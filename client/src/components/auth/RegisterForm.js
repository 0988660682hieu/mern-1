import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import { useContext,useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'


export const RegisterForm = () => {
    //Context
        const {registerUser} = useContext(AuthContext)
        // Router
        
        // Local State
        const [registerForm,setRegisterForm] = useState({
            username:'',
            password:'',
            confirmpassword:''
        })
        const [alert,setAlert] = useState(null)
    
        const {username,password,confirmpassword} = registerForm
    
        const onChangeRegisterForm = event =>setRegisterForm({...registerForm,[event.target.name]: event.target.value}) 
    
        const register = async event => {
            event.preventDefault()
            if(password !== confirmpassword){
                setAlert({type:'danger',message:'Password and Confirm Password must be the same'})
                setTimeout(()=> setAlert(null)  ,3000)
                return
            }

            try {
                const registerData = await registerUser(registerForm)
                if(registerData.success){
                    
                }else{
                    setAlert({type:'danger',message:registerData.message})
                    setTimeout(()=>{
                        setAlert(null)
                    },5000)
                }
            } catch (error) {
                console.log(error);
            }
        }
    return (
    <>
        <Form onSubmit={register}>
            <AlertMessage info = {alert} />
            <Form.Group>
                <Form.Control  
                    type='text' 
                    placeholder ='User Name'
                    name='username' 
                    value={username}
                    onChange = {onChangeRegisterForm} required />
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    className='mt-2' 
                    type='password' 
                    placeholder ='Pass Word'
                    name='password'
                    value ={password}
                    onChange = {onChangeRegisterForm} 
                    required />
                    
            </Form.Group>
            <Form.Group>
                <Form.Control 
                    className='mt-2' 
                    type='password' 
                    placeholder ='confirm pass word' 
                    name='confirmpassword'
                    value={confirmpassword} 
                    onChange={onChangeRegisterForm}
                    required 
                    />
            </Form.Group>

            <Button className = 'mt-2' variant='success' type ='submit'>
                Register
            </Button>
        </Form>
        <p className= 'mt-4'> Have accout
            <Link to='login'  className = 'mr-2 '>
                <Button variant ='info' size ='sm' className ='ml-2 ma-2' > Login </Button>
            </Link>
        </p>
    </>
    )
}

export default RegisterForm