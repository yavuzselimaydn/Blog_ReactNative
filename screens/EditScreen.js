import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

export default function EditScreen({ route ,navigation}) {
  const { state ,editBlogPost} = useContext(Context);

  const id = route.params.id;

  const blogPost = state.find((blogPost) => blogPost.id === route.params.id); //guncellenecek postu aldım sadece
  return (
    <BlogPostForm
      butonName='Güncelle'
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () =>
          navigation.pop() //bir onceki sayfaya doner.
        )
      }}
    />
  );
}

const styles = StyleSheet.create({});
