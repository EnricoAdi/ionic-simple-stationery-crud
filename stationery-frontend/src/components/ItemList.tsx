import { IonButton, IonIcon } from '@ionic/react'
import { book, pencil, trash } from 'ionicons/icons' 
import StationeryType from '../types/enum'
import toRupiah from '../utils/currency'

const ItemList = ({item, onEdit, onDelete}:{
  item: Stationery,
  onEdit:()=>void,
  onDelete:()=>void
}) => {
  return (
    <div>
      <p style={{fontWeight:"bold"}}>{item.name}</p>
      <div style={{display:"flex", justifyContent:"space-between"}}>
        <div>
          <span style={{marginRight:"30px"}}>123</span>
          <span>{toRupiah(item.price)}</span>
        </div>
        {item.type==StationeryType.BOOK && <IonIcon icon={book} size='large'></IonIcon>}
        {item.type==StationeryType.PENCIL && <IonIcon icon={pencil} size='large'></IonIcon>}
      </div>
      <div> 
        <IonButton color={"tertiary"} onClick={onEdit}><IonIcon icon={pencil}></IonIcon></IonButton>
        <IonButton color={"tertiary"} onClick={onDelete}><IonIcon icon={trash}></IonIcon></IonButton>
      </div>
    </div>
  )
}

export default ItemList