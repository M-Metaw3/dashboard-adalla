import * as api from "../api/api"
import React from 'react';



const loginAction = (body)=>async(dispatch)=>{

console.log(body)
await api.Loggin(body).then((element)=>element.json().then((data)=>{
  dispatch({type:'loggin',payload:data})
})).catch((er)=>console.log(er))

}





const logOut = (body)=>async(dispatch)=>{

 
    dispatch({type:'logout',payload:""})

  
  }



const registeremp =  (body)=> async(dispatch) => {
  
  try {
    
    
    await api.regapi(body).then((el)=>{el.json().then((ell)=>{
      
      
      
      dispatch({type:'registration',payload:ell})})}) 
      
      
      
      
    } catch (error) {
      alert(error)
      console.log("inodgnigsdop")
      
      
      
    }
    
  }
  

  const getAllemp =()=>async(dispatch) => {

try {
  console.log("meta")
 await api.getemp().then((el)=>el.json().then((el)=>dispatch({type:"allEmp",payload:el})))
  
} catch (error) {
  
}

    
  }
  
///////////////////////////////////////////////////////////////////////////////////////////

const apdateemploye = (id,body)=>async(dispatch)=>{
try {
  

 await api.updateEmp(id,body).then((el)=>{el.json().then((ell)=>{dispatch({type:"updatedEmp", payload:ell})})})
} catch (error) {
  
}}
//////////////////////////////////////////////////////////////////////
const deleteemploye = (id)=>async(dispatch)=>{
try {
  await api.deletedEmp(id).then((el)=>el.json().then(el=>console.log(el)))
  dispatch({type:"Deleteemp",payload:id})
} catch (error) {
  console.log("err")
}
    

  }
    
  






  const locationAction = (body)=>async (dispatch) => {


    try {
      
    
    await api.Locations(body).then((el)=>el.json().then((ell)=>console.log(ell))).catch((err)=>console.log(err))
    
    
    
    } catch (error) {
      console.log(error.message)
    }
    
      
    }







export default {registeremp,loginAction,logOut,getAllemp,apdateemploye,deleteemploye,locationAction}