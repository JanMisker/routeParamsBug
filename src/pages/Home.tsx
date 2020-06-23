import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const [newId, setNewId] = useState("10");
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonInput
          value={newId}
          onIonChange={(e) => setNewId(e.detail.value!)}
        ></IonInput>
        <IonButton
          size="large"
          onClick={() => history.push(`/detail/${newId}`)}
        >
          Push {newId}
        </IonButton>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
