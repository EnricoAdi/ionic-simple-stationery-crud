import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons'
import { ReactNode } from 'react'
 

const Header = ({title, contextButtons}:{title:string, contextButtons:ReactNode}) => {
  return (
  <IonHeader>
    <IonToolbar color="tertiary">
      <IonTitle>{title}</IonTitle>
      {contextButtons}
    </IonToolbar>
  </IonHeader>
  )
}

export default Header