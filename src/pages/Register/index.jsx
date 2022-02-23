import React, { useState, useRef } from 'react'
import './styles.css'
import { Button, useToast, Stack, Divider } from '@chakra-ui/react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { BsGoogle } from 'react-icons/bs'
import useMounted  from '../../hooks/useMounted'

const Register = () => {
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [ isError, setIsError ] = useState('')

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ isSubmitting, setIsSubmitting ] = useState(false)
    const toast = useToast()
    
    const { register } = useAuth()

    const mounted = useMounted()

    
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

                        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
                            toast({
                                description: 'As senhas não coincidem',
                                status: 'error',
                                duration: 3000,
                                isClosable: true,
                            })
                            return (
                                setIsError('As senhas não coincidem')
                            )
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
                        .finally(() => mounted.current && setIsSubmitting(false))

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
                            ref={passwordRef}
                            type="password" 
                            placeholder="Insira sua senha" 
                            required/>
                            <i className="uil uil-lock icon"></i>
                            <i className="uil uil-eye-slash showHidePw"></i>
                        </div>    

                        <div className="input-field">
                            <input value={confirmPassword} 
                            ref={confirmPasswordRef}
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            type="password"  
                            placeholder="Confirme sua senha" required/>
                            <i className="uil uil-lock icon"></i>
                            <i className="uil uil-eye-slash showHidePw"></i>
                        </div>
                        

                        <div className="toLogin">
                            <label className="login">Já possui uma conta? <Link to={'/login'}> <label className="login loginText">Log In</label></Link></label>
                        </div>

                        <Stack alignn='center' marginTop='5'>
                            <Button type="submit" 
                            isLoading={isSubmitting} 
                            bg='#72C14D'
                            color='white'
                            _hover={{ bg: '#5da73b'}}
                            size="lg" 
                            fontSize='md'
                            
                            >Criar Conta</Button>
                        </Stack>
                    </form>

            {/* BOTAO LOGAR COM GOOGLE
            <div className="divider">
                <Divider width={210}/>     
                <h4>OU</h4> 
                <Divider width={210}/>
            </div>
          
            <Stack>
            <Button
                size="lg"
                fontSize='md'
                isFullWidth
                leftIcon={<BsGoogle/>}
                colorScheme='red'
                onClick={() => signInWithGoogle().then(user => console.log(user)).catch(error => console.log(error))}
            >
                Fazer Login com o Google
                </Button>
            </Stack>
            */}
                    </div>
                </div>
            </div>
  )
}


export default Register