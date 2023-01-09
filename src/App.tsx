import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/Home';
import Login from './pages/login/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Setting from './pages/setting/Setting';
import Router from './router/Router';

setupIonicReact();

const App: React.FC = () =>{ 
  const data = localStorage.getItem("userData") || ""
  console.log(data);
  
let url
  try{
    const user = JSON.parse(data)
 url = "/loggedin"
}catch(e)
{
   url = "/login"
}
  console.log(url);
  
  return(
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* <Route exact path="/home" component={Home}/> */}
        {/* <Redirect exact from='/' to="/home" /> */}
        <Route exact path="/login" component={Login}/>
        <Redirect exact from='/' to={url} />
        <Route exact path="/loggedin" component={Router}/>
      
        {/* <Route exact path="/setting" component={Setting}/> */}
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)}

export default App;
