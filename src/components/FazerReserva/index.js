import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function FazerReserva({ hora, date }) {
  const [cpf, setCpf] = useState();
  const [cell, setCell] = useState();

  return (
    <View style={styles.viewcontainer}>
      <Text style={styles.title}>Confirmação de Reserva</Text>
      <KeyboardAwareScrollView style={{ marginTop: 30, marginRight: 10, display: 'flex' }}>
        <View style={styles.viewInput}>
          <Image source={require('../../../assets/calendar.png')} style={styles.icon} />
          <TextInput style={styles.input} value={date} editable={false} />
        </View>
        <View style={styles.viewInput}>
          <Image source={require('../../../assets/clock.png')} style={styles.icon} />
          <TextInput style={styles.input} value={hora} editable={false} />
        </View>
        <View style={styles.viewInput}>
          <Image source={require('../../../assets/jogador.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#6d6d6d"
          />
        </View>
        <View style={styles.viewInput}>
          <Image source={require('../../../assets/cpf.png')} style={styles.icon} />
          <TextInputMask
            type={'cpf'}
            value={cpf}
            style={styles.input}
            placeholder="Digite seu CPF"
            placeholderTextColor="#6d6d6d"
            onChangeText={(text) => {
              setCpf(text);
            }}
          />
        </View>
        <View style={styles.viewInput}>
          <Image source={require('../../../assets/arroba.png')} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
            placeholderTextColor="#6d6d6d"
          />
        </View>
        <View style={styles.viewInput}>
          <Image source={require('../../../assets/cell.png')} style={styles.icon} />
          <TextInputMask
            type={'cel-phone'}
            value={cell}
            style={styles.input}
            placeholder="Digite seu celular"
            placeholderTextColor="#6d6d6d"
            onChangeText={(text) => {
              setCell(text);
            }}
          />
        </View>
        <View style={{ display: 'flex', alignItems: 'center', marginLeft: 10 }}>
          <TouchableOpacity onPress={console.log('Button was pressed')} style={styles.btn}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', color: '#6d6d6d', alignSelf: 'center' }}
            >
              Confirmar Reserva
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    flex: 1,
    width: '100%',
    marginTop: 130,
    alignItems: 'center',
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 30,
    marginLeft: 10,
    fontWeight: 'bold',
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
  btn: {
    marginTop: 45,
    height: 70,
    width: '90%',
    backgroundColor: '#e8e8e8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  input: {
    borderWidth: 2,
    borderStyle: 'solid',
    width: '80%',
    backgroundColor: '#e8e8e8',
    height: 50,
    borderBottomColor: '#b8b8b8',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    marginLeft: 15,
    fontSize: 20,
    color: '#696969',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  viewInput: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  icon: {
    width: 45,
    height: 45,
  },
});
