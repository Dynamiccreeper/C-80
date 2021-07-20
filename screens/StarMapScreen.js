import React from 'react'
import { Text,View, WebView,TextInput} from 'react-native'

export default class StarMapScreen extends React.Component {
constructor(){
super();

this.state={
 text:"",
 latitude:"",
 longitude:"",
 text2:""
}

}


render(){
    const {longitude,latitude}=this.state
    const path="https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latiude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true"
        return(
         

            <View>
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}
                <Text>Space Craft Screen</Text>


                <WebView>
                    scalesPageToFit={true}
                    source={{uri: path}}
                    style={{marginTop:20,marginBottom:20}}
                </WebView>

                <TextInput
                style={{height:40,borderColor:'gray',borderWidth:1}}
                placeholder="Enter your latitude"
                placeholderTextColor='#ffff#000000'
                onchangeText={(text)=>{
                    this.setState({
                        latitude:text
                    })
                    
                }}
                />     
                <TextInput
                style={{height:40,borderColor:'gray',borderWidth:1}}
                placeholder="Enter your latitude"
                placeholderTextColor='#ffff#000000'
                onchangeText={(text2)=>{
                    this.setState({
                        longitude:text2
                    })
                    
                }}
                /> 
            

                </View>


            )
        }   
}