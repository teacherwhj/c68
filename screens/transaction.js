import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';


export default class Transaction extends React.Component {
    constructor(){
        super()
        this.state={
            hasCameraPermissions:null,
            scanned:false,
            scanneddata:"", 
            buttonState:'normal'
        }
}    
getCameraPermissions=async()=>{
    const {status}=await Permissions.askAsync(Permissions.CAMERA)
    this.setState({
        hasCameraPermissions:status==="granted",
        scanned:false,
        buttonState:'clicked',
        scanneddata:"Hello I am ready to scan"
    })
}
handleBarCodeScanner=async({type,data})=>{
    this.setState={
        scanneddata:data,
        scanned:true,
        buttonState:'normal'
    }
}
  render(){
      if(this.state.hasCameraPermissions===true)
      return(
         <BarCodeScanner
         onBarCodeScanned={this.state.scanned?"no data yet":this.handleBarCodeScanner}/>
      )
      else
  return (
    <View style={styles.container}>
      <Text>Transaction Screen QR Code Scanner</Text>
     <TouchableOpacity style={{backgroundColor:'blue',margin:50}}
     onPress={()=>this.getCameraPermissions()}>
         <Text>Scan the QR</Text>
     </TouchableOpacity>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
