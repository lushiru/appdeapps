import { ENV } from "../utils/constants";

async function register(name,email,password,password_confirmation) {

  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.REGISTER}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        password_confirmation
      }),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
             
}


async function login(email, password) {
  
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.LOGIN}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) throw response;
    return  await response.json();
  } catch (error) {
    throw error;
  }

}

async function forgot(email) {
  
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.FORGOT}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    };

    const response = await fetch(url, params);

    if (response.status !== 200) throw response;
    return await response.json();
  } catch (error) {
    throw error;
  }

}


export const authCtrl = {
  register,
  login,
  forgot,
};
