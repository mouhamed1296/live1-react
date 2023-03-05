/* Cette instruction nous permet de pouvoir importer le composant Test  */
import Test from "./components/Test";

/*
Composant App qui est le composant principale de notre apllication,
C'est a partir de composant que notre application sera rendu et affiché
 au niveau de notre navigateur
 */
function App(){

  /*
  Tout nos composants en react doit avoir au moins une instruction return
  qui retourne le contenu de notre composant (le JSX) ou null
   */
  return <div>
    <p>Hello Adefnipa</p>
    {/*
    Ici on a appelé notre composant Test dans notre composant App grace à 
    la syntaxe versatile du JSX.
     */}
    <Test />
  </div>
}

/* 
Ceci représente l'exportation de notre composant App pour qu'on puisse
y avoir accés dans nos autre fichier.
 */
export default App;