import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';

export default function ShowScreen({ route }) {  //navigation isleminde gelen veriyi almak icin lazım

  const { state } = useContext(Context);         //context e eriserek  veriler alındı
  console.log(route.params.id);

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id); //gelen veriden id si eslesen cekildi
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container0}>

        <Text style={styles.content}>{blogPost.title}</Text>
      </View>
      <View style={styles.container1}>
        <Text style={styles.content}>{blogPost.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    marginTop: 10,
    flex:1
  },
  container0: {
    borderWidth: 1.5,
    marginTop:20,
    marginBottom: 25,
    paddingVertical:12,
    paddingHorizontal:12,
    borderRadius: 30,
    alignItems: 'center',
  },
  container1: {
    borderWidth: 1.5,
    padding:15,
    marginBottom: 25,
    borderRadius: 30,
    alignItems: 'center',
    width: '90%',
    flex:1
  },
  label: {
    fontSize: 30,
  },
  content: {
    fontSize: 18,
  },
});
