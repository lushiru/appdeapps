import { View, Text, ToastAndroid, SafeAreaView, ScrollView } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { form } from "../../../styles/form";
import { styles } from "./RegisterForm.styles";
import { authCtrl } from "../../../api/auth";
import { useState } from "react";

export function RegisterForm(props) {
  const { showLogin } = props;

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ password_confirmation, setPassword_confirmation ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async () => {

    setIsLoading(true)
    const isCheckEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

    if(!name.trim()){
      ToastAndroid.show( "ingresa tu Nombre" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(! typeof name === "string" ){
      ToastAndroid.show( "ingresa tu Nombre Valido" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
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
    if(!password_confirmation.trim()){
      ToastAndroid.show( "ingresa tu Confirmar Password" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(password != password_confirmation){
      ToastAndroid.show( "la password no se confirmo" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }


    try {
      
      await authCtrl.register(name,email, password,password_confirmation);
      ToastAndroid.show( "se ha registrado correctamente, se envio un email para confirmar registro", 
        ToastAndroid.SHORT );
      showLogin();
    } catch (error) {
      ToastAndroid.show( "error". error, 
        ToastAndroid.SHORT );
        setIsLoading(false)  
    }

  }

  return (
    <>
    <SafeAreaView />
      <ScrollView>
    <View>
      <Text style={styles.title}>Formulario de Registro</Text>
      <TextInput
        label="Nombre"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setName(text)}
        value={name}
      />      
      <TextInput
        label="Email"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        label="Contraseña"
        style={form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        label="Confirma Contraseña"
        style={form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => setPassword_confirmation(text)}
        value={password_confirmation}
      />
      <Button
        mode="contained"
        style={form.btnSubmit}
        onPress={handleSubmit}
        loading={isLoading}
      >
        Registrate
      </Button>
      <Button
        mode="text"
        style={form.btnText}
        labelStyle={form.btnTextLabel}
        onPress={showLogin}
      >
        Iniciar sesión
      </Button>
    </View>
    </ScrollView>
    </>
  );
}
