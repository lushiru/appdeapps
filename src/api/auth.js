import { ENV } from "../utils/constants";
import axios from "axios";

async function register(name,email,password,password_confirmation) {

  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;

  try {
    const res = await axios.post(url, {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
    },{
      headers: {
        "Content-Type": "application/json",
      }
    });

    
      if (res.status !== 200) throw res;
      
      return res;
  }
  catch(error){
    console.error(error);
  }  
             
}


async function login(email, password) {
  
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
  try {

      const res = await axios.post(url, {
        email: email,
        password: password,
      },{
        headers: {
         "Content-Type": "application/json",
        }
      })
      
      return res.data

    }catch(error){
      console.error(error);
    } 

}

async function forgot(email) {
  
  const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FORGOT}`;
  try{

      const res = await axios.post(url, {
        email: email,
      },{
        headers: {
          "Content-Type": "application/json",
        }
      })
      
      return res.data

    }catch(error){
      console.error(error);
    } 

}


export const authCtrl = {
  register,
  login,
  forgot,
};
