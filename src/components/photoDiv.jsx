import React from 'react';
import styles from '../App.module.css'

export default function PhotoDiv() {
  return (
    <>
    <h1>A Complete
Admission Guidance</h1>
<h5 >Your journey from complete form fill-up to confirm admission</h5>
    <div className={styles.photoInnerDiv}>
        <img src="https://educationsplanet.com/delhi/images/1633f0ba6275acUntitleddesign(47).jpg" alt="" className={styles.photo}/>
        <p>VIT</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://educationsplanet.com/delhi/images/1633f0bfa9269fUntitleddesign(48).jpg" alt="" className={styles.photo}/>
        <p>Bits Pilani</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://educationsplanet.com/delhi/images/1633f0c7486825Untitleddesign(49).jpg" alt="" className={styles.photo}/>
        <p>MIT</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://educationsplanet.com/delhi/images/1633f0cb2ae718Untitleddesign(50).jpg" alt="" className={styles.photo}/>
        <p>SRM</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://yt3.googleusercontent.com/ytc/AIf8zZRa__kPRCD7iNiBCVcI5NHVD8CGGvhNz13GGDqbRA=s900-c-k-c0x00ffffff-no-rj" alt="" className={styles.photo}/>
        <p>Amrita Vishwa Vidyapeetham</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJaT_Yyqe9ICaiegv2UUExDPt5iGCOqmaglEoSygE5dAxS7Kgk3_tK3hCshUQslzHielQ&usqp=CAU" alt="" className={styles.photo}/>
        <p>KIIT University</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://educationsplanet.com/delhi/images/1633fc08ee25efUntitleddesign(54).jpg" alt="" className={styles.photo}/>
        <p>RV</p>
    </div>
    <div className={styles.photoInnerDiv}>
        <img src="https://pbs.twimg.com/profile_images/1742862741369753600/8vMHa4pt_400x400.jpg" alt="" className={styles.photo}/>
        <p>MIT-WPU</p>
    </div>
    </>
  )
}
