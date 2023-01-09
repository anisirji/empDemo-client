import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const [start, setStart] = useState("Offline");
  const [color, setColor] = useState("");
  const userData = localStorage.getItem("userData");
  const user = JSON.parse(userData);
  const TIME_INTERVAL = 1000 * 60 * 1;
  //1 sec *

  async function sendData() {
    const location = await navigator.geolocation.getCurrentPosition(
      async (p) => {
        const send = await axios.post("http://localhost:3002/createStamp", {
          employee_id: user.data[0].id,
          latitude: p.coords.latitude,
          longitude: p.coords.longitude,
        });
        console.log(send.data);
      }
    );
  }
  let gap;
  function sendOnInterval() {
    gap = setInterval(sendData, 1000 * 60 * 1);
  }

  async function handlePunchIn() {
    setColor("success");
    setStart("Online....");
    sendOnInterval();
  }

  function handlePunchOut() {
    setColor("");
    setStart("Offline");
    history.push("/loggedIn");
    // window.location.reload();
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>EmpDemo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardContent>
            <IonButton
              color={"primary"}
              size={"default"}
              onClick={handlePunchIn}
            >
              Punch In
            </IonButton>
            <IonButton
              color={"medium"}
              size={"default"}
              onClick={handlePunchOut}
            >
              Punch Out
            </IonButton>
            <IonTitle color={color}>{start}</IonTitle>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
// 45678-Rohi
