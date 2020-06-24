import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  useIonViewDidEnter,
} from "@ionic/react";
import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";

interface DetailProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const Detail: React.FC<DetailProps> = ({ match }) => {
  useIonViewDidEnter(() => {
    console.log(
      "useIonViewDidEnter with deps [match.params.id]",
      match.params.id
    ); // always the current id
  }, [match.params.id]);
  useIonViewDidEnter(() => {
    console.log("useIonViewDidEnter with deps [match.params]", match.params.id); // always the current id
  }, [match.params]);
  useIonViewDidEnter(() => {
    console.log("useIonViewDidEnter without deps", match.params.id); // always the initial id
  });

  useEffect(() => {
    console.log("useEffect", match.params.id); // always the current id
  });
  useEffect(() => {
    console.log("mounting useEffect", match.params.id); // fires on mounting
    return () =>
      console.log("unMounting component, only when backbutton is used");
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Detail</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Detail</IonTitle>
          </IonToolbar>
        </IonHeader>
        <p>match.params.id: {match.params.id}</p>
        <Link to="/home">Home again</Link>
      </IonContent>
    </IonPage>
  );
};

export default Detail;
