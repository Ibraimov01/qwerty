import React from "react";
import s from './Dialogs.module.css'; 
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs= (props) => {
  
  let dialogs = [
  {id: 1, name: 'Dimych'}, 
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Victor'},
  {id: 6, name: 'Valera'}
]
let messages = [
  {id: 1, message: 'HI'}, 
  {id: 2, message: 'How is your it-kamasutra'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
]

let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />);

let messageElemnts = messages.map (m => <Message message={m.message}/>);
return (
<div className={s.dialogs}>
  <div className={s.dialogsItems}>
  { dialogsElements }
  </div>
  
  <div className={s.messages}>
    {messageElemnts}
    
  </div>
</div>
)
}
export default Dialogs; 