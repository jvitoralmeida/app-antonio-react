import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  StyledInput,
  Container,
  ImagemLogin,
  StyledInputPass,
  BotaoLogin,
  TextoBotao,
} from './styled-component';
import { Actions } from 'react-native-router-flux';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const executaLogin = (username, password) => {
    if (username === 'admin' && password === '1234') {
      goToHorarios();
    } else Alert.alert('Erro', 'Usuario ou senha invalida');
  };

  const goToHorarios = () => {
    Actions.horarios();
  };

  return (
    <View style={styles.viewcontainer}>
      <ImageBackground
        source={require('../../../assets/society.jpg')}
        style={(styles.fixed, styles.container)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ width: '100%', flex: 1 }}
        >
          <Container>
            <ImagemLogin source={require('../../../assets/logo.png')} />
            <StyledInput
              placeholder="Username"
              placeholderTextColor="#FFF"
              onChangeText={(username) => setUsername(username)}
              defaultValue={username}
            />
            <StyledInputPass
              placeholder="   Password"
              placeholderTextColor="#FFF"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
              defaultValue={password}
            />
            <BotaoLogin onPress={() => executaLogin(username, password)}>
              <TextoBotao>Login</TextoBotao>
            </BotaoLogin>
          </Container>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    width: '100%',
  },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flex: 1,
  },
});
