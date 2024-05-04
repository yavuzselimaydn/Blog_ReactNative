import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';

export default function CreateScreen({ navigation }) {
  const { addBlogPost } = useContext(Context); //contexte eristim fonk icin
  
  return (
    <BlogPostForm
      butonName='Kaydet'
      onSubmit={(title, content) => {  //callback oldugu icin fonksiyonun icini burada tanımlayacam
        addBlogPost(title, content, () => navigation.navigate('Home'));//gelen veriyi yolladım ve sonra ana sayfaya dondum
      }}
    />
  );
}

const styles = StyleSheet.create({});
