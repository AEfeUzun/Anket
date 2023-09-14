import React from 'react'
import CustomLabel from '../CustomLabel';
import CustomLabel2 from '../CustomLabel2';
import CustomLabel3 from '../CustomLabel3';
import CustomLabel4 from '../CustomLabel4';
const kayit = () => {
  return (<div style={{zIndex:'1',position:'absolute',width:'100%',height:'100%',backgroundColor:'white'}}>
    <div style={{textAlign:'center', marginTop:'10%'}}>
    
     <CustomLabel></CustomLabel>
     <CustomLabel3></CustomLabel3>
     <CustomLabel2></CustomLabel2>
     <CustomLabel4></CustomLabel4>
      <button style={{borderRadius:'15%'}}>Kayıt Ol</button>

    </div>




  </div>
    
  )
}

export default kayit;