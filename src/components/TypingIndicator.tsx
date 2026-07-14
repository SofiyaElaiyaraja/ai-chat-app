import React from 'react';
import {View,ActivityIndicator,Text} from 'react-native';

const TypingIndicator=()=>{

return(

<View
style={{
flexDirection:'row',
alignItems:'center',
padding:10
}}>

<ActivityIndicator/>

<Text
style={{
marginLeft:8
}}>
AI is typing...
</Text>

</View>

);

};

export default TypingIndicator;