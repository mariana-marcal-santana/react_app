import React from 'react'
import './Footer.css'
import './Button.css'
import { Button } from './Button'

function Footer() {
  return (
    <div className='footer-container'>
      <img className='footer-img' src='images/logo.png' alt='logo' />
      <div className='address'>
        <h3>Endereço</h3>
        <br />
        <p>Rua do Endereço, 123</p>
        <p>1234-567 Cidade</p>
      </div>
      <div className='contacts-social-media'>
        <h3>Contactos e Redes Sociais</h3>
        <br />
        <p>Email: ateliermillet@etcmail.com</p>
        <p>Telefone: 123 456 789</p>
        <p>instagram, facebook etc...</p>
      </div>
      <div className='contact-email'>
        <h4>Contacte-nos!</h4>
        <form>
          <input type='text' placeholder='Nome' className='input-name' />
          <input type='email' placeholder='Email' className='input-email' />
          <Button buttonStyle='btn--outline' buttonSize='btn--medium'>Enviar</Button>
        </form>
      </div>
    </div>
  )
}

export default Footer
