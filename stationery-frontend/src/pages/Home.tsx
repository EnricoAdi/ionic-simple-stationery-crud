import { IonButton, IonButtons, IonContent, IonIcon, IonList, useIonRouter, useIonToast } from '@ionic/react';  

import { add } from 'ionicons/icons'
;
import ItemList from '../components/ItemList';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import client from '../client';
 
const Home = () => {
  const [present] = useIonToast()

  const presentToast = (message:string, color:string) => {
    present({
      message,
      duration: 1500,
      position: "bottom",
      color
    });
  };
  const [items, setItems] = useState<Stationery[]>([])

  useEffect(()=>{
    (async()=>{
      try{
        const response = await client.get('stationeries')
        const data = response.data
        setItems(data)
      }catch(e:any){
        console.log(e)
      }
    })()
  },[])
  const deleteAction = async (id:string)=>{
    try{
      await client.delete(`stationeries/${id}`)
      setItems(items.filter(item=>item._id != id))
      presentToast("Stationery deleted", "success")
    }catch(e:any){
      presentToast(`Failed delete stationery, ${e.response.data}`, "danger")
    }
  }
  const router = useIonRouter()
  return (
    <>
    <Header title="My Stationery" contextButtons={
      <IonButtons slot='end'>
        <IonButton routerLink='/add'><IonIcon slot="icon-only" icon={add}></IonIcon></IonButton> 
      </IonButtons>
    }/>
    <IonContent className='ion-padding'>  
    {items.length>0 && <>
      <IonList>
        {items.map((item, index) => (
          <ItemList key={index+item._id} item={item} onEdit={()=>{
            router.push(`edit/${item._id}`)
          }} onDelete={()=>{deleteAction(item._id)}}/>
        ))}
      </IonList>
    </>}
    </IonContent>
    </>
  )
}

export default Home