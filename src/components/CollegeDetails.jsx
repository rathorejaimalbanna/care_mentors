import React from 'react'
import styles from "../App.module.css"
import UseValue from './contextApi'

export default function CollegeDetails() {
  const {handleModal} = UseValue()
  return (
    <div className={styles.detailsOuter}>
        <h2 style={{fontWeight:'700',marginTop:"20px"}}>Most preferred Engineering Colleges in India</h2>
    <div className={styles.collegeDetails}>
      <div className={styles.collegeDetailsInnerDiv} onClick={handleModal}>
        <img src="https://educationsplanet.com/delhi/images/1633fcdc29e8e7JOINNOW(1).jpg" alt="" className={styles.detailsImage}/>
        <h5 style={{marginTop:"5px"}}>Birla Institute of Technology and Science, Pilani (BITS Pilani)</h5>
        <hr />
        <button className={styles.detailsButton}>Get Details</button>
      </div>
      <div className={styles.collegeDetailsInnerDiv} onClick={handleModal}>
        <img src="https://educationsplanet.com/delhi/images/1633fdc16d2c8bJOINNOW(2).jpg" alt="" className={styles.detailsImage}/>
        <h5 style={{marginTop:"20px"}}>Vellore Institute Of Technology</h5>
        <hr />
        <button className={styles.detailsButton}>Get Details</button>
      </div>
      <div className={styles.collegeDetailsInnerDiv} onClick={handleModal}>
        <img src="https://educationsplanet.com/delhi/images/1633fdd2815339JOINNOW(3).jpg" alt="" className={styles.detailsImage}/>
        <h5 style={{marginTop:"20px"}}>Manipal Institute Of Technology (MIT)</h5>
        <hr />
        <button className={styles.detailsButton}>Get Details</button>
      </div>
      <div className={styles.collegeDetailsInnerDiv} onClick={handleModal}>
        <img src="https://educationsplanet.com/delhi/images/1633fde7ec7aecJOINNOW(4).jpg" alt="" className={styles.detailsImage}/>
        <h5 style={{marginTop:"20px"}}>RV College Of Engineering</h5>
        <hr />
        <button className={styles.detailsButton}>Get Details</button>
      </div>
      <div className={styles.collegeDetailsInnerDiv} onClick={handleModal}>
        <img src="https://educationsplanet.com/delhi/images/1633fdfe3bda93JOINNOW(5).jpg" alt="" className={styles.detailsImage}/>
        <h5 style={{marginTop:"5px"}}>SRM Institute Of Science And Technology</h5>
        <hr />
        <button className={styles.detailsButton}>Get Details</button>
      </div>
      <div className={styles.collegeDetailsInnerDiv} onClick={handleModal}>
        <img src="https://educationdunia.com/public/storage/university/banner_mdm0xjzl.5ac345c032149.jpg" alt="" className={styles.detailsImage}/>
        <h5 style={{marginTop:"5px"}}>
Kalinga Institute of Industrial Technology</h5>
        <hr />
        <button className={styles.detailsButton}>Get Details</button>
      </div>
    </div>
    </div>
  )
}
