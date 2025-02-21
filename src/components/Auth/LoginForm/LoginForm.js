import { View, Text,ToastAndroid } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { authCtrl } from "../../../api/auth";
import { form } from "../../../styles/form";
//import { storageCrtl } from "../../../api/storage";
import { styles } from "./LoginForm.styles";
import { useState } from "react";

export function LoginForm(props) {
  const { showRegister, showForgot, changeUser } = props;
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true)
    const isCheckEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
    if(!email.trim()){
      ToastAndroid.show( "ingresa tu Email" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(!isCheckEmail.test(email)){
      ToastAndroid.show( "ingresa un Email Valido" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(!password.trim()){
      ToastAndroid.show( "ingresa tu Password" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }

    try {

      const response = await authCtrl.login(email, password);
      if(response.message == "Unauthorized"){
        ToastAndroid.show( "Email o contraseña error" , ToastAndroid.SHORT);
      }
      if(response.message == "no ha verificado email"){
        ToastAndroid.show( "Debe verificar su email ..." , ToastAndroid.SHORT);
      }
      if(response.message == "se ha identificado correctamente"){
        ToastAndroid.show( "Se ha logeado correctamente" , ToastAndroid.SHORT);
          //await storageCrtl.setToken(response.token);
          changeUser(true);
      }

    } catch (error) {
      console.log(error);
      ToastAndroid.show( "error" , ToastAndroid.SHORT);
      setIsLoading(false)
    }

  }

  return (
    <View>
      <Text style={styles.title}>Formulario de Acceso</Text>
      <TextInput
        label="email"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}        
      />
      <TextInput
        label="contraseña"
        style={form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        mode="contained"
        style={form.btnSubmit}
        onPress={handleSubmit}
        loading={isLoading}
      >
        Entrar
      </Button>
      <Button
        mode="text"
        style={form.btnText}
        labelStyle={form.btnTextLabel}
        onPress={showRegister}
      >
        Registrarse
      </Button>
      <Button
        mode="text"
        style={form.btnText}
        labelStyle={form.btnTextLabel}
        onPress={showForgot}
      >
        Olvido contraseña ? 
      </Button>
    </View>
  );
}
