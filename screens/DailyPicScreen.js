import axios from 'axios'
import React from 'react'
import { SafeAreaView, Text,View,StyleSheet,StatusBar,Platform, ImageBackground, TouchableOpacity, Linking, Image } from 'react-native'

export default class DailyPicScreen extends React.Component {
constructor(){
    super();
    this.state={
            apod:''

    }
}



    getAPOD = ()=>{
                axios
                    .get("https://api.nasa.gov/planetary/apod?api_key=YnedxN6yFZTTdfupk6v9rhCBF90INrWApgb8rJKB")
                    .then(response=>{

                        this.setState({apod:response.data})
                    })




    }
    render(){

        return(
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea}>
                <ImageBackground source={require('../assets/stars.gif')}
                style={styles.backgroundImage}>
                    <Text style={styles.routeText}>Astronomy picture of the day</Text>
                    <Text style={styles.titleText}>{this.state.apod.title}</Text>
                    <TouchableOpacity style={styles.listContainer} 
                    onPress={()=> Linking.openURL(this.state.apod.uri).catch(err => console.error("couldn't load page",err))}>
                            <View style={styles.iconContainer}>
                                <Image> source={require("../assets/space.gif")} style={{ width:50,height:50}}</Image>

                            </View>
                    </TouchableOpacity>
<Text style={styles.explanationText}>{this.state.apod.explanation}</Text>
                </ImageBackground>
            </SafeAreaView>

            </View>
            )
        }   
}

const styles=StyleSheet.create({
    container:{
        flex: 1
    },
    droidSafeArea:{
        marginTop: Platform.OS==='android' ? StatusBar.currentHeight :0
    },
    routeText:{
        fontWeight: 'bold',
        color: 'black',
        marginTop: 75,
        paddingTop: 30,
        fontSize: 35
    },backgroundImage:{
        flex: 1,
        resizeMode:'cover'
    },
    titleText:{
        fontSize: 30, 
        color:'white',
        alignSelf:'center'
    },
})