/* Importation du hook useState qui nous permet de créer des variables d'état */
import { useState } from 'react'
/* Importation du CSS */
import './Form.css'

/*
Ce composant nous permet de créer un formulaire contenant
 deux champ avec les contrôle de saisie et qui accepte de prendre des props(proprietés)
*/
const Form = (props: any) => {
    /* 
    Déclaration des variables d'état qui nous permettent de contrôler
    l'etat des input email et password et de leus messages d'erreurs
    */
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState<string | null>(null)
    const [errorPassword, setErrorPassword] = useState<string | null>(null)
    
    /*
    Fonctions permettant de faire le contrôle de saisie des champs 
    email et mot de passe
     */
    const checkEmail = (email: string) => {
        setEmail(email)
        if (!email.includes('@gmail.com')) {
            setErrorEmail('Email incorrect')
        } else {
            setErrorEmail(null);
        }
    }
    const checkPassword = (password: string) => {
        setPassword(password)
        if (password === '') {
            setErrorPassword('Ce champ est requis')
        } else {
            setErrorPassword(null);
        }
    }

    /* rendu du formulaire */
  return (
    <div className='container'>
        <h2>{props.titre}</h2>
        <form id='form1'>
            <input type="email" 
                onChange={(e) => checkEmail(e.target.value)} 
                value={email}
                id="email" 
                placeholder='email' 
            />
            <span className='error'>{errorEmail}</span>
            <input
                onChange={(e) => checkPassword(e.target.value)}
                value={password}
                type="password" 
                id='password' 
                placeholder='mot de passe' 
            />
            <span className='error'>{errorPassword}</span>
            <button>Se connecter</button>
        </form>
    </div>
  )
}

export default Form