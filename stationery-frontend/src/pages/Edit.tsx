import { IonBackButton, IonButton, IonButtons, IonContent, IonIcon, IonInput, IonItem, IonRadio, IonRadioGroup, useIonRouter, useIonToast } from "@ionic/react"
import Header from "../components/Header"
import { useEffect, useState } from "react"; 
import client from "../client";
import { useParams } from "react-router";

const Edit = () => {
  const {id} = useParams<{id:string}>()
  
  const [name, setName] = useState<string>("");
  const [qty, setQty] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [type, setType] = useState<string>("pencil");
  const [present] = useIonToast()

  const presentToast = (message:string, color:string) => {
    present({
      message,
      duration: 1500,
      position: "bottom",
      color
    });
  };
  const router = useIonRouter()
  const addAction = async()=>{
    if(name == "" || qty == 0 || price == 0){
      presentToast("Please fill all fields", "danger")
      return
    }
    try{
      await client.put(`stationeries/${id}`,{
        name, qty, price, type
      })
      presentToast("Stationery updated", "success")
      router.push("/")
    }catch(e:any){
      presentToast(`Failed add stationery, ${e.response.data}`, "danger")
    }

  }
   useEffect(()=>{
    (async()=>{ 
      try {
        const result = await client.get(`stationeries/${id}`)
        const data = result.data
        setName(data.name)
        setQty(data.qty)
        setPrice(data.price)
        setType(data.type)
      } catch (e:any) {
        presentToast(`Failed to get stationery data, ${e.response.data}`, "danger")
      }
    })() 
   },[])
  return (
    <>
      <Header title="Edit Stationery" contextButtons={
      <IonButtons slot='start'>
        <IonBackButton defaultHref="/"></IonBackButton>
      </IonButtons>}></Header>
      
      <IonContent className='ion-padding'>
      <IonItem> 
          <IonInput label="Name" label-placement="floating" type="text" value={name}
          onIonInput={(e)=>{
            const value = e.target.value; 
            if(value != null && value != undefined) setName(value.toString())
          }}></IonInput>
        </IonItem>
        <IonItem> 
          <IonInput label="Quantity" label-placement="floating" type="number" value={qty}
          onIonInput={(e)=>{
            const value = e.target.value; 
            if(value != null && value != undefined) setQty(parseInt(value.toString()))
          }}></IonInput>
        </IonItem>
        <IonItem> 
          <IonInput label="Price" label-placement="floating" type="number" value={price}
          onIonInput={(e)=>{
            const value = e.target.value; 
            if(value != null && value != undefined) setPrice(parseInt(value.toString()))
          }}></IonInput>
        </IonItem>
        <IonItem>
          <IonRadioGroup value={type} onIonChange={(e)=>setType(e.target.value)}>
            <IonItem>
              <IonRadio name="type" value="pencil" labelPlacement="end">Pencil</IonRadio>
              <IonRadio style={{marginLeft:"10px"}} name="type" value="book" labelPlacement="end">Book</IonRadio>
            </IonItem>
          </IonRadioGroup>
        </IonItem>
 
          <IonButton color="tertiary" style={{
            width: '100%',
            marginTop: '1rem'
          }} onClick={addAction}>Edit</IonButton> <br />
         
          <IonButton style={{
            width: '100%',
            marginTop: '1rem'
          }}color="danger" routerLink="/">Cancel</IonButton>
        
      </IonContent>
    </>
  )
}

export default Edit