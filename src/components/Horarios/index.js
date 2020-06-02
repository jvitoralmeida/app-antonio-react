import React, { useState } from 'react';
import { View, StyleSheet, Text, Alert, ScrollView, Button, TouchableOpacity } from 'react-native';
import Card from './card';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Actions } from 'react-native-router-flux';

export default function Horarios(props) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const reserva = (hora, date) => {
    Actions.push('reserva', { hora, date });
  };

  const onChange = (event, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    console.log(currentDate);
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const lista = [
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  return (
    <View style={styles.viewcontainer}>
      <Button onPress={showDatepicker} title="Escolher data" />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      <ScrollView>
        {lista.map((hora) => {
          return (
            <TouchableOpacity
              key={hora}
              onPress={() =>
                reserva(hora, `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`)
              }
            >
              <Card titulo={hora} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  viewcontainer: {
    marginTop: 60,
    flex: 1,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
