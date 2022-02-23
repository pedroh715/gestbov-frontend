import React, { useState, useRef} from 'react'

import { useLocation, useNavigate } from 'react-router-dom'
import { useToast, Stack, Button, Divider } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext'

function useQuery() {
    const location = useLocation()
    return new URLSearchParams(location.search)
}


const ResetPassword = () => {
    const navigate = useNavigate()
    const toast = useToast()

    const newPasswordRef = useRef()
    const newConfirmPasswordRef = useRef()
    const [isError, setIsError ] = useState('')


    const { resetPassword } = useAuth()
    const query = useQuery()
    console.log(query.get('mode'))
    console.log(query.get('oobCode'))
    console.log(query.get('continueUrl'))

    const [newPassword, setNewPassword] = useState('')
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('')

  return (
    <div className="body">
      <div className="forms">
        <div className="form login">
          <span className="title">Alterar senha</span>
          <form action="#" onSubmit={async e => {
              e.preventDefault()
            
              if (newPasswordRef.current.value !== newConfirmPasswordRef.current.value) {
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

            resetPassword(query.get('oobCode'), newPassword)
            .then(res => {
                console.log(res)
                toast({
                    description: 'Senha alterada com sucesso',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
                navigate('/login')
            })
            .catch(err => {
                console.log(err.message)
                toast({
                    description: err.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            })
             
          }}>

            <div className="input-field">
              <input  
              type="password" 
              value={newPassword}
              ref={newPasswordRef}
              onChange={e => setNewPassword(e.target.value)}
              placeholder="Insira sua nova senha" 
               required/>
              <i className="uil uil-lock icon"></i>
              <i className="uil uil-eye-slash showHidePw"></i>
            </div> 

            <div className="input-field">
              <input  
              value={newPasswordConfirm}
              ref={newConfirmPasswordRef}
              onChange={e => setNewPasswordConfirm(e.target.value)}
              type="password" 
              placeholder="Confirme a nova senha" 
               required/>
              <i className="uil uil-lock icon"></i>
              <i className="uil uil-eye-slash showHidePw"></i>
            </div> 


            {/* <div className="input-field button">
              <input type="button" value="Login"/>
              </div> */}

            <Stack marginTop='34'>
              <Button type="submit" 
              
              isFullWidth
              bg='#72C14D'
              color='white'
              _hover={{ bg: '#5da73b' }}
              size="lg" 
              fontSize='md'>Enviar</Button>"
            </Stack>
          </form>

        </div>
      </div>
    </div>
  )
}

export default ResetPassword