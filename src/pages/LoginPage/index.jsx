import React, { useState, useRef, useEffect } from 'react'
import { useToast, Stack, Button, Divider, effect } from '@chakra-ui/react'
import './styles.css'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { BsGoogle } from 'react-icons/bs'
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import useMounted  from '../../hooks/useMounted'


const LoginPage = () => {
  const navigate = useNavigate()
  
  const [ showPassword, setShowPassword ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const toast = useToast()
  const { login, signInWithGoogle } = useAuth()
  const mounted = useMounted()


  return (
    <div className="body">
      <div className="forms">
        <div className="form login">
          <span className="title">Login</span>
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
          login(email, password)
          .then(response => {
            console.log(response)
            navigate('/dashboard')
          })
          .catch(error => {
              console.log(error.message)
              toast({
                  description: error.message,
                  status: 'error',
                  duration: 5000,
                  isClosable: true,
              })
            })
          .finally(() => mounted.current && setIsSubmitting(false))

          }}>

            <div className="input-field">
              <input 
              value={email} 
              onChange={e => setEmail(e.target.value)}  
              type="email" 
              placeholder="Insira seu email" 
               required/>
              <i className="uil uil-envelope icon"></i>
            </div>

            <div className="input-field">
              <input 
              type={showPassword ? 'text' : 'password'}
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="Insira sua senha" required/>            
              <i className="uil uil-lock icon"></i>

              <button type='button' onClick={() => setShowPassword(prevState => !prevState)}>
                {showPassword ? <AiOutlineEye className="showHidePw eye"/> :
                <AiOutlineEyeInvisible className="showHidePw eye"/> }
              </button>
            </div>    

            <div className="toLogin">
              <div className="content">
                <input 
                type="checkbox" 
                id="logCheck"/>
                <label htmlFor="logCheck" className="text">Lembrar de mim</label>
              </div>
              <Link to={'/esqueci-minha-senha'}>
              <label htmlFor="" className="forgot text">Esqueceu sua senha?</label>
              </Link>
            </div>

            <div className="notAccount">
              <label className="not">Ainda não possui uma conta? </label>
              <Link to={'/criar-conta'}><label className="not create">Crie sua conta</label></Link>
            </div>
            


            {/* <div className="input-field button">
              <input type="button" value="Login"/>
              </div> */}

            <Stack marginTop='5'>
              <Button type="submit" 
              isLoading={isSubmitting}
              isFullWidth
              bg='#72C14D'
              color='white'
              _hover={{ bg: '#5da73b' }}
              size="lg" 
              fontSize='md'>Login</Button>"
            </Stack>
          </form>

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
            onClick={() => signInWithGoogle().then(user => {
              console.log(user)
              navigate('/dashboard')
            }).catch(error => console.log(error))}
          >
            Fazer Login com o Google
            </Button>
          </Stack>

        </div>
      </div>
    </div>
  )
}

export default LoginPage