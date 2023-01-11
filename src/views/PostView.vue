<template>
<div class="post">
    <h1>Posts</h1>

    <ul>
        <li v-for="post in posts" :key="post.id">
            <RouterLink :to="`/postDetail/${post.id}`">Post {{post.title}}</RouterLink>
        </li>

    </ul>

    <textarea v-autofocus>should get focus</textarea>
    <div>
        <button @click="increaseCounter(1)"
            :class="{'yellow' : oddOrEven === 'odd'}"
            class="counter-button">
        {{ counterData.count }}
        </button>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import {vAutofocus} from '@/directives/vAutofocus'
import {useCounter} from '@/use/useCounter'

const posts = ref([
    {
        id: 'id1',
        title: 'Post 1'
    },
    {
        id: 'id2',
        title: 'Post 2'
    },
    {
        id: 'id3',
        title: 'Post 3'
    },
    {
        id: 'id4',
        title: 'Post 4'
    },
])

const { counterData, increaseCounter, oddOrEven } = useCounter()

</script>

<style scoped>
ul {
    margin-bottom: 30px
}

.counter-button {
    font-size: 60x;
    width: 100%;
    background-color: pink;
}

.counter-button.yellow {
    background-color: yellow;
}
</style>

