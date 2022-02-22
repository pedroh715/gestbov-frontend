import React, { useState } from 'react'
import { useToast, Stack, Button } from '@chakra-ui/react'
import './styles.css'
import { useAuth } from '../../contexts/AuthContext'


const LoginPage = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ isSubmitting, setIsSubmitting ] = useState(false)
  const toast = useToast()
    
  const { login } = useAuth()

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
              <input value={email} 
              onChange={e => setEmail(e.target.value)}  type="email" placeholder="Insira seu email" required/>
              <i className="uil uil-envelope icon"></i>
            </div>

            <div className="input-field">
              <input type="password" placeholder="Insira sua senha" required/>            
              <i className="uil uil-lock icon"></i>
              <i className="uil uil-eye-slash showHidePw"></i>
            </div>    

            <div className="toLogin">
              <div className="content">
                <input value={password} 
                onChange={e => setPassword(e.target.value)}
                type="checkbox" 
                id="logCheck"/>
                <label htmlFor="logCheck" className="text">Lembrar de mim</label>
              </div>
              <label htmlFor="" className="forgot text">Esqueceu sua senha?</label>
            </div>  

            {/* <div className="input-field button">
              <input type="button" value="Login"/>
              </div> */}

            <Stack alignn='center' marginTop='34'>
              <Button type="submit" 
              isLoading={isSubmitting}
              bg='#72C14D'
              color='white'
              _hover={{ bg: '#5da73b' }}
              size="lg" 
              fontSize='md'>Login</Button>"
            </Stack>

          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage