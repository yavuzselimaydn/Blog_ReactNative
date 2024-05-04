import { FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'        //useContext importu unutma
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
    
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);  //blog context.provedir da olan veriye eristim

    useEffect( () => {
        getBlogPosts();          //uygulama acıldıggında veriler use effect ile cekilir bir kere

        const listener = navigation.addListener('focus', () => {
            getBlogPosts();      //sayfaya tekrar donuldugunde yine veriler alınır.
        })

        return () => {           //sayfa kapandımı listener temizlenir performans icin
            listener.remove();
        }
    }, [])

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={ () => 
                            navigation.navigate('Show', { id: item.id })
                        }>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    }
})