<template>

      <input type="text" v-model="search">
      <!-- <div v-for="post in filteredPosts" :key="post.id">
        <post :post="post"></post>
      </div> -->
      <ul>
        <li v-for="post in filteredPosts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{post.body}}</p>
        </li>
      </ul>
      <SortedList />
  
  </template>

<script>
    // import Post from "./components/Post";
    // import {
    //     ref,
    //     reactive
    // } from 'vue';
    export default {
        name: "App",
        // components: {
        //     SortedList
        // },

        // setup() {
        //     const search = ref('');
        //     const posts = reactive([{
        //         id: 1,
        //         title: "Post 1",
        //         body: "Vue.js is cool"
        //     }, {
        //         id: 2,
        //         title: "Post 2",
        //         body: "Javascript is cool"
        //     }]);

        //     const filteredPosts = computed(function() {
        //         return posts.value.filter(post => post.body.toLowerCase().includes(search.value.toLowerCase()), );
        //     })



        //     return {
        //         search,
        //         posts,
        //         filteredPosts
        //     }
        // }



        data() {
            return {
                search: "",
                posts: [{
                    id: 1,
                    title: "Post 1",
                    body: "Vue.js is cool"
                }, {
                    id: 2,
                    title: "Post 2",
                    body: "Javascript is cool"
                }]
            };
        },
        computed: {
            filteredPosts() {
                // filter is a built in method
                // Includes is a built in method
                return this.posts.filter(post => post.body.toLowerCase().includes(this.search.toLowerCase()));
            }
        }
    };
</script>

<style>
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>