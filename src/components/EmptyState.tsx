import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const EmptyState=()=>{

return(

<View style={styles.container}>
<Text style={styles.title}>
👋 Welcome
</Text>

<Text style={styles.subtitle}>
Start chatting with your AI Assistant
</Text>

</View>

);

};

export default EmptyState;

const styles=StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
alignItems:'center'
},

title:{
fontSize:22,
fontWeight:'700'
},

subtitle:{
marginTop:8,
color:'gray'
}

});