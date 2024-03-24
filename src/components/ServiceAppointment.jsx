import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ServiceAppointment = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    
  };
  const serviceHistoryData = [
    { id: 1, client: 'John Doe', serviceType: 'Oil Change', date: '2024-03-15' },
    { id: 2, client: 'Jane Smith', serviceType: 'Brake Repair', date: '2024-03-12' },
    { id: 3, client: 'Alice Johnson', serviceType: 'Tire Rotation', date: '2024-03-10' },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Service Appointment</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Service Type"
        value={serviceType}
        onChangeText={text => setServiceType(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Appointment Date (YYYY-MM-DD)"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <Button title="Schedule Appointment" onPress={handleSubmit()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default ServiceAppointment;
