import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { allrestaurants } from '../data/allrestaurants'

import { RestaurantCard, LikedRestaurantCard } from '../components'

const LikedRestaurantsScreen = () => {
  return (
    <SafeAreaProvider>
        <View style={{width:"100%", height:"100%", backgroundColor:"#1c1c27", paddingHorizontal:15, paddingVertical:15}}>
            <Searchbar />

            <ScrollView>
                {/* <Text>LikedRestaurantsScreen</Text> */}
                {
                    allrestaurants.map((item, index) => {
                        return(
                            <LikedRestaurantCard item={item} key={index}/>
                        )
                    })
                }

            </ScrollView>
        </View>
    </SafeAreaProvider>
  )
}

export default LikedRestaurantsScreen

const styles = StyleSheet.create({})