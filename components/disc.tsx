import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/disc.jpg')} style={styles.image}/>
      <Text style={styles.name}>Innova Champion Valkyrie</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '250px',
    height: '250px'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
      fontSize: 12,
  },
});
