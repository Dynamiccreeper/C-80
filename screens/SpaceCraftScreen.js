import React from 'react'
import { Text,View,FlatList } from 'react-native'
import  axios  from 'axios'

export default class SpaceCraftScreen extends React.Component {

    constructor(props){
super(props);
this.state={
aircraft:{},


}

    }
    
    getData=()=>{
axios.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft")
 .then(responce=>{

    this.setState({aircrafts:responce.data.result})
    
 })
  .catch(error =>{
      console.log(error.message)
  })         
  
    }
    rederItem=({item})=>{
return(
    <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottom:10,elevation:10}}>
        <Image source={{uri:item.agency.image_url}} style={{width:'100%',height:200,marginTop:15,marginBottom:15,marginRight:10}}></Image>

<Text style={{fontWeight:'bold',fontSize:20}}>{item.name}</Text>
<Text style={{color:'#696969'}}>{item.agency.name}</Text>
<Text>DESCRIPTION</Text>
<Text style={{color:'#A9A9A',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>
    </View>
)

}
    render(){

        return(

            <View style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
            }}>

<View style={{flex:0.25}}><Text>Space crafts</Text></View>
<View style={{flex:0.75}}>
<FlatList 
keyExtractor ={this.keyExtractor}
data={this.state.aircrafts}
renderItem={this.renderItem}              

/>
</View>


            </View>
           


            )
        }   
}