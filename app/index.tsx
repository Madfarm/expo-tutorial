import { useState } from 'react'
import { Link } from 'expo-router'
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";



export default function Index() {
  const [input, setInput] = useState('')
  return (
    <ScrollView style={styles.container}>
      <View
        style={[
          styles.imgContainer,
          {
            flexDirection: 'row',
          },
        ]}>
        <Link href="/profile" style={{ color: 'blue'}}>Go to Profile</Link>
        <Image
          source={
            require('./assets/images/react-logo.png')
          }
        />
        <Image
          source={
            require('./assets/images/partial-react-logo.png')
          }
          style={{ height: 100, width: 100 }}
        />
      </View>

      <View
        style={styles.txtContainer}
      >
        <Text>Check it out!</Text>
        <TextInput
          onChangeText={newText => setInput(newText)}
          placeholder='What framework is this?'
          style={styles.inputBox}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 0,
    flex: 1,
    flexDirection: 'column'
  },
  imgContainer: {
    flex: 1,
    padding: 20,
  },
  txtContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 10,
    padding: 12,
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
    borderRadius: 3,
  },
})
