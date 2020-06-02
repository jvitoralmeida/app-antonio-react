import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, Image } from 'react-native';

const verificaImagem = (hora) => {
  const t = hora.substring(0, 2);
  const h = parseInt(t);
  if (h < 12) {
    return <Image source={require('../../../assets/manha.png')} style={styles.icon} />;
  } else if (h < 17) {
    return <Image source={require('../../../assets/sol.png')} style={styles.icon} />;
  } else if (h < 20) {
    return <Image source={require('../../../assets/noitefull.png')} style={styles.icon} />;
  } else {
    return <Image source={require('../../../assets/noite.png')} style={styles.icon} />;
  }
};

export default function Card(props) {
  return (
    <View style={styles.viewcontainer}>
      {verificaImagem(props.titulo)}
      <Text style={styles.text}>{props.titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    margin: 10,
    minWidth: '95%',
    minHeight: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 20,
    width: 50,
    height: 50,
  },
  text: {
    marginLeft: 94,
    fontWeight: 'bold',
    fontSize: 25,
  },
});
