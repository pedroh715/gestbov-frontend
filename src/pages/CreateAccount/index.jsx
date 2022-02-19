import React from 'react'
import './styles.css'

const CreateAccount = () => {
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
                    />
                </div>
                <div className="field">
                    <input 
                    type="password" 
                    name='confirmPassword' 
                    id='confirmPassword' 
                    placeholder='Confirme sua senha' 
                    />
                </div>
                <label className="haveAcc">Já possuo uma conta</label>

                <div className="actions">
                    <button type='submit'>Começar agora!</button>
                </div>
            </form>
            
        </div>
        
    )
}

export default CreateAccount