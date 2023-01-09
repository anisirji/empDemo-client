import {
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonButton,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { moon } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";

const Setting = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle("dark");
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader className="ion-border" translucent={true}>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <br />
      <br />

      <IonContent fullscreen class="ion-align-items-center">
        <IonList>
          <IonItem lines="none">
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        <IonButton
          onClick={() => {
            localStorage.removeItem("userData");
            history.push("/login");
          }}
          color={"danger"}
          expand={"full"}
        >
          Log Out
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Setting;
