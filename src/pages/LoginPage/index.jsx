import React, { useState, useRef, useEffect } from 'react'
import { useToast, Stack, Button, Divider, effect } from '@chakra-ui/react'
import './styles.css'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import { BsGoogle } from 'react-icons/bs'
import useMounted  from '../../hooks/useMounted'
import { useCookies } from 'react-cookie'


const LoginPage = () => {
  const navigate = useNavigate()
  const [cookies, setCookie] = useCookies(['user'])
  const [checked, setChecked] = useState(false)

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const toast = useToast()
    
  const { login, signInWithGoogle } = useAuth()

  const mounted = useMounted()

  const remember = () => {
    setChecked(!checked)
    
    if (checked) {
      setCookie('Name', email, { path: '/dashboard' })
      setCookie('Password', password, { path: '/dashboard' })
    }
  }

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
              type="password"
              value={password} 
              onChange={e => setPassword(e.target.value)}
              placeholder="Insira sua senha" required/>            
              <i className="uil uil-lock icon"></i>
              <i className="uil uil-eye-slash showHidePw"></i>
            </div>    

            <div className="toLogin">
              <div className="content">
                <input 
                type="checkbox" 
                id="logCheck"/>
                <label htmlFor="logCheck" className="text" onClick={remember} checked={checked}>Lembrar de mim</label>
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