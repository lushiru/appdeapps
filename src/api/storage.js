import AsyncStorage from '@react-native-async-storage/async-storage';
import { ENV } from "../utils/constants";

const setToken = async (token) => {
  try {
    await AsyncStorage.setItem(ENV.STORAGE.TOKEN, token); 
  } catch (error) {
    console.log("error set")
  }
}

const getToken = async () => {
  
  try { 
    return await AsyncStorage.getItem(ENV.STORAGE.TOKEN)
  } catch (error) {
    console.log("error get")
  }
}

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem(ENV.STORAGE.TOKEN); 
  } catch (error) {
    console.log("error remove")
  }  
}

export const storageCrtl = {
  setToken,
  getToken,
  removeToken,
};
