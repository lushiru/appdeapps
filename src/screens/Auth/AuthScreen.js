import { View, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { LoginForm } from "../../components/Auth/LoginForm/LoginForm";
import { RegisterForm } from "../../components/Auth/RegisterForm/RegisterForm";
import { ForgotForm } from "../../components/Auth/ForgotForm/ForgotForm";
import { styles } from "./AuthScreen.styles";

export function AuthScreen(props) {

  const { changeUser } = props;  

  const [showLogin, setShowLogin] = useState(true);
  const [showLoginForgot, setShowLoginForgot] = useState(true);

  const onShowLoginRegister = () => setShowLogin((prevState) => !prevState);
  const onShowLoginForgot = () => setShowLoginForgot((prevState) => !prevState);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {showLogin ? (
          showLoginForgot ? ( <LoginForm showRegister={onShowLoginRegister} showForgot={onShowLoginForgot} changeUser={changeUser} /> ) : <ForgotForm showForgot={onShowLoginForgot} />
        ) : (
          <RegisterForm showLogin={onShowLoginRegister} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
}