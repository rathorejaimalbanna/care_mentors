import { doc, setDoc } from "firebase/firestore"; 
import React, { useState } from 'react';
import styles from '../App.module.css';
import { useRef } from 'react';
import { db } from "../firebaseInit";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormData() {
  const [manag,setManag] = useState(false)
  const [merit,setMerit] = useState(false)
  const name = useRef();
  const phone = useRef();
  const email = useRef();
  const preferedCollege = useRef();


  function checkManag()
  {
    setManag(true)
  };
  function checkMerit()
  {
    setMerit(true)
  }

  function handleSubmit(e)
  { toast.success("Thanks! our experts will get in touch soon.")
    e.preventDefault()

    if(email.current.value === '')
    {
      email.current.value = name.current.value + String(Math.random())
    };
    if(preferedCollege.current.value === "")
    {
      preferedCollege.current.value = 'None'
    }

    async function addData()
    { 
      await setDoc(doc(db, "Students", email.current.value), {
        name: name.current.value,
        email:email.current.value,
        phone : phone.current.value,
        College : preferedCollege.current.value,
        management_quota : manag,
        merit_quota : merit
      });
    };
    addData();
    name.current.value = '';
    email.current.value = '';
    phone.current.value = '';
    preferedCollege.current.value = '';
  }
  return (
        <>
        <h3 style={{textAlign:'center',fontWeight:'600'}}>#Request a call back</h3>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' ref={name} className={styles.formInput} required/>
            <input type="text" placeholder='Phone' ref={phone} className={styles.formInput} minlength="10" required/>
            <input type="email" placeholder='Email' ref={email} className={styles.formInput} />
            <input type="text" placeholder='Preffered college' ref={preferedCollege} className={styles.formInput} required/>
            <p style={{fontWeight:'700',marginBottom:'0px',textAlign:'center'}}>Preffered Quota</p>
            <input type="checkbox" id="merit" name="Merit Quota" value="merit" className={styles.check} onChange={checkMerit}/>
            <label for="vehicle1"> Merit Quota</label>
            <input type="checkbox" id="managment" name="Management Quota" value="manag" style={{marginLeft:'15px'}} onChange={checkManag}/>
            <label for="vehicle1"> Management Quota</label>
            <button type='submit' className={styles.submitButton}>Request a callback</button>
        </form>
        </>
  )
}

