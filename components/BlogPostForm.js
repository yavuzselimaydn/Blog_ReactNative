import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function BlogPostForm({onSubmit,initialValues,butonName}) {  //onsubmit callback fonk
    const [title, setTitle] = useState(initialValues ? initialValues.title : '');
    const [content, setContent] = useState(initialValues ? initialValues.content : '')

    return (
        <View style={styles.main}>
            <Text style= {styles.label}>Basligi giriniz:</Text>
            <TextInput
                style={styles.input}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text style= {styles.label} >İcerigi giriniz:</Text>
            <TextInput
                style={styles.input}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <TouchableOpacity style={styles.buttonMain} onPress={ () => 
                onSubmit(title,content) //text inputlardan alınan verileri bu fonksiyon ile create screen e yolladım
            }>
                    <View style={styles.buttonView}>
                        <Text style={styles.buttonText}>{butonName}</Text>
                    </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        marginTop:10
    },
    label:{
        fontSize:18,
        marginLeft:10
    },
    input:{
        borderWidth:1,
        margin:10,
        borderRadius:18,
        padding:10,
        fontSize:18,
        marginBottom:15,
    },
    buttonMain:{
        padding:30
    },
    buttonView:{
        backgroundColor:'green',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:18
    },
    buttonText:{
        color:'white',
        fontSize:18
    }
})