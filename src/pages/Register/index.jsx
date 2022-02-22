 /* import React,  { useState, useRef } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'

const CreateAccount = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    return (
        <div id="create-acc">
            <h1 className="title">Criar Conta</h1>
            <form className="form">
                <div className="field">
                    <input
                    type="text"
                    name='name-user'
                    id='name-user'
                    placeholder='Insira seu nome completo' 
                   
                    />
                </div>
                <div className="field">
                    <input
                    type="email"
                    name='email'
                    id='email-user'
                    placeholder='Insira seu email' 
                    ref={emailRef}
                    />
                </div>
                <div className="field">
                    <input 
                    type="date"
                    name='date-of-birth-user'
                    id='dateOfBirth'
                    placeholder='Insira sua data de nascimento (apenas números)' 
                    
                    />
                </div>
                <div className="field">
                    <input 
                    type="password" 
                    name='password' 
                    id='password' 
                    placeholder='Insira sua senha' 
                    ref={passwordRef}
                    />
                </div>
                <div className="field">
                    <input 
                    type="password" 
                    name='confirmPassword' 
                    id='confirmPassword' 
                    placeholder='Confirme sua senha' 
                    ref={passwordConfirmRef}
                    />
                </div>

                <label htmlFor="">Já possui uma conta? </label>
                <Link to="/login" className="haveAccount">Log In</Link>
                

                <div className="actions">
                    <button>Começar agora!</button>
                </div>
            </form>
        </div>      
    )
}

export default CreateAccount */

/* import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles.css'

export default function CreateAccount() {
  return (
    <>
                <h2 className="text-center mb-4">Crie sua conta</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" id="email-input"  required placeholder="Insira seu email" />
                    </Form.Group>

                    <Form.Group id="password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" id="password-input"  required placeholder="Insira sua senha" />
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Confirmar senha</Form.Label>
                        <Form.Control type="password" id="passwordConfirm-input" required placeholder="Confirme sua senha" />
                    </Form.Group>
                    <Button className="w-100" id="btn-start" type="submit">Começar Agora</Button>
                </Form>
           
        <div className="w-100 text-center mt-2">
            Jà possui uma conta? <b> Log In</b>
        </div>
    </>
  )
}

*/

import React, { useState } from 'react'
import './styles.css'
import { Button, useToast, Stack } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'

const Register = () => {
    

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const toast = useToast()
    
    const { register } = useAuth()

  return (
        <div className="body">
            <div className="forms">
                <div className="form login">
                    <span className="title">Crie sua conta</span>
                    <form action="#" onSubmit={async e => {
                        e.preventDefault()
                        
                         if (!password || !email) {
                            toast({
                                description: 'Credenciais Inválidas',
                                status: 'error',
                                duration: 5000,
                                isClosable: true,
                            })
                        }
                        setIsSubmitting(true)
                        register(email, password)
                        .then(response => console.log(response))
                        .catch(error => {
                            console.log(error.message)
                            toast({
                                description: error.message,
                                status: 'error',
                                duration: 5000,
                                isClosable: true,
                            })})
                        .finally(() => setIsSubmitting(false))

                        }}>
                        <div className="input-field">
                            <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Insira seu nome completo" required/>
                            <i className="uil uil-user icon"></i>
                        </div>

                        <div className="input-field">
                            <input value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            type="email" placeholder="Insira seu email" 
                            autoComplete='email' 
                            required/>
                            <i className="uil uil-envelope icon"></i>
                        </div>

                        <div className="input-field">
                            <input value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            type="password" 
                            placeholder="Insira sua senha" 
                            required/>
                            <i className="uil uil-lock icon"></i>
                            <i className="uil uil-eye-slash showHidePw"></i>
                        </div>    

                        <div className="input-field">
                            <input value={confirmPassword} 
                            onChange={e => setConfirmPassword(e.target.value)} 
                            type="password"  
                            placeholder="Confirme sua senha" required/>
                            <i className="uil uil-lock icon"></i>
                            <i className="uil uil-eye-slash showHidePw"></i>
                        </div>  

                        <div className="toLogin">
                            <label htmlFor="">Já possui uma conta? <span>Log In</span></label>
                        </div>  

                        <Stack alignn='center' marginTop='34'>
                            <Button type="submit" 
                            isLoading={isSubmitting} 
                            bg='#72C14D'
                            color='white'
                            _hover={{ bg: '#5da73b'}}
                            size="lg" 
                            fontSize='md'>Criar Conta</Button>
                        </Stack>
                    </form>
                </div>
            </div>
        </div>
  )
}


export default Register