import React, {useState} from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Botao from "./src/Botao";
import Display from "./src/Display";
import Resultado from "./src/Resultado";



export default () => {
 
  const numeroRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [numero,setNumero] = useState(0)

  const novoValor = () => {
    setNumero(numeroRandom(min,max))
  }
 
  return (
    <View style={styles.view}>
      <Display min={(min) => setMin(min)} max={(max) => setMax(max)}> </Display>
       <Button title="Random" onPress={novoValor}></Button>
       <Text style={styles.txtG}>{numero}</Text>
     </View>
   
  )
}
  


const styles = StyleSheet.create ({
  view: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center',  
      
  },
  txtG: {
    fontSize: 35,
  }
})