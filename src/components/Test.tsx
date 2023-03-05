/* Importation des hooks useState et useEffect qui nous permet de
pouvoir charger des données au niveau de nos composants
 */
import { useEffect, useState } from 'react'
/* Importation de notre formulaire(le composant Form qui se trouve dans forms) */
import Form from './forms/Form'

/*
Dans ce composant nous avons utiliser le hook useEffect
qui nous permet de pouvoir récupérer une liste d'utilisateur depuis mon API
 */
const Test = () => {
  const titre = 'Bienvenue dans mon formulaire'
  const [users, setUsers] = useState<any>([])
  /* 
  la fonction useEffect prend deux paramètres, la première
  est une fonction dans laquel on va mettre notre effet c'est à dire
  le code qui nous permet de pouvoir récupérer des données depuis mon API
  et la deuxième est un tableau de dépendances qui si il est vide signifie
  que notre fonction ne sera éxécuté qu'une seule fois au chargement de la page
  si elle contient une variable cela veut dire que le chargement de notre fonction
  dépend de la variable, elle est rechergé à chaque fois que la valeur de la variable
  change
   */
  useEffect(() => {
    fetch('http://localhost:3000/users', {method: 'GET'})
    .then(response => response.json())
    .then(response => setUsers(response))
  }, [])

  console.log(users);
  
  return (
    <div>
        <p>Mon premier Composant</p>
        <Form
        titre={titre}
        />
        <ol>
        {
          /* Affichage de la liste des utilisateurs */
          users.map((user:any, index: number) =>
           <li key={index + 1}>{user.nom} {user.prenom}</li>)
        }
        </ol>
        
    </div>
  )
}

export default Test