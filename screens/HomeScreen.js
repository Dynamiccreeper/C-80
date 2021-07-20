import React from 'react'
import { Text, View,StyleSheet, SafeAreaView, Platform,
StatusBar,TouchableOpacity, ImageBackground, Image } from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>
                <ImageBackground style={styles.backgroundImage}
                    source={require("../assets/stars.gif")}>
                        
                        <View style= {styles.titleBar}>
                            <Text style = {styles.titleText}>Stellar App</Text>
                            
                        </View>     
                        
                        <TouchableOpacity style={styles.routeCard}
                            onPress={()=>{
                                this.props.navigation.navigate('StarMap')
                            }}>
                            <Text style={styles.routeText}> StarMap </Text>
                            <Text style={styles.knowMore}> Know More---</Text>
                            <Text style={styles.bgDigit}>1</Text>
                            <Image source={require("../assets/star_map.png")} 
                                style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard} 
                             onPress={()=>{
                                this.props.navigation.navigate('SpaceCraft')
                            }}>                    
                            <Text style={styles.routeText}> SpaceCraft </Text>
                            <Text style={styles.knowMore}> Know More---</Text>
                            <Text style={styles.bgDigit}>2</Text>
                            <Image source={require("../assets/space_crafts.png")} 
                                style={styles.iconImage}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.routeCard} 
                             onPress={()=>{
                                this.props.navigation.navigate('DailyPic')
                            }}>                    
                            <Text style={styles.routeText}> DailyPic </Text>
                            <Text style={styles.knowMore}> Know More---</Text>
                            <Text style={styles.bgDigit}>3</Text>
                            <Image source={require("../assets/daily_pictures.png")} 
                                style={styles.iconImage}/>
                        </TouchableOpacity>

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
    backgroundImage:{
        flex: 1,
    resizeMode:'cover'
    },
    titleBar:{
        flex: 0.15
    },
    titleText:{
        fontSize: 40, 
        color:'white',
        alignSelf:'center'
    },
    routeCard:{
        flex: 0.35,
        marginLeft:50,
        marginRight: 50, 
        marginTop:50,
        borderRadius: 30,
        backgroundColor: 'white',
        borderWidth: 2
    },
    routeText:{
        fontWeight: 'bold',
        color: 'magenta',
        marginTop: 75,
        paddingTop: 30,
        fontSize: 35
    },
    knowMore:{
        paddingLeft:30,
        color:'red',
        fontSize:15
    },
    bgDigit:{
        position: 'absolute',
        color: 'rgba(183,183,183,0.5)',
        fontSize: 150,
        right:20,
        bottom:-15,
        zIndex: -1
    },
    iconImage:{
        position: 'absolute',
        height:200,
        width:200,
        right:20,
        top: -80,
        resizeMode: 'contain'
    }



})