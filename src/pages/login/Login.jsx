import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonNav,
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory } from "react-router-dom";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { person } from "ionicons/icons";
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Router from "../../router/Router";
import "./Login.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader className="ion-border" translucent={true}>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <IonContent fullscreen class="ion-align-items-center">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Login</IonCardTitle>
            <IonCardSubtitle>Please Login Here</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput
                onIonChange={(e) => {
                  e.preventDefault();
                  setUserName(e.target.value);
                  console.log(e.target.value);
                }}
                color="primary"
                placeholder="Enter Your Username"
              ></IonInput>
              <ion-note slot="helper">Enter Valid UserName</ion-note>
            </IonItem>
            <br />
            <br />
            <br />

            <IonButton
              color="primary"
              onClick={async (e) => {
                console.log(userName);
                const req = await axios.post("http://localhost:3002/login", {
                  employee_id: userName,
                });
                console.log(req);
                window.localStorage.setItem(
                  "userData",
                  JSON.stringify(req.data)
                );

                if (req.data.flag) {
                  history.push("/loggedIn");
                }
              }}
            >
              Login
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Login;
// 45678-Rohi
