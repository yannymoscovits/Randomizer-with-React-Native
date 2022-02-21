import React from "react";
import {TextInput, StyleSheet} from "react-native"


export default props => {

    return (
        <>
        <TextInput style={styles.borda} onChangeText={props.min} keyboardType='numeric' value={props.min}>{props.min}</TextInput>
        <TextInput style={styles.borda} onChangeText={props.max} keyboardType='numeric'value={props.max}>{props.max}</TextInput>
        

        </>
    )
}

const styles = StyleSheet.create({
    borda: {
    fontSize: 35,
    height: 70,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    }
})