<template>
<div class="post-detail">
    <h1>This is a post page</h1>
    <p>Display the contect of post with ID of  {{ $route.params.id }} here!</p>
    <div>
        <button @click="showPostId">Show Post ID</button>
    </div>
    <div>
        <button @click="goHomeIn3Seconds">Go Home in 3 seconds</button>
    </div>
    <div>
        <button @click="goToFirstPost">Go to first post</button>
    </div>
    <p><RouterLink to="/Post">&lt; Back</RouterLink></p>
</div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

/* Best practice to assign this to a const named route */
const route = useRoute()
const router = useRouter()

const showPostId = () => {
    // Note the back-ticks to have the variable interpreted
    alert(`The ID of this post is: ${ route.params.id }`)
}

const goHomeIn3Seconds = () => {
    setTimeout(() => {
        // the same as below router.push('/')
        router.push({ name: 'home' })
    }, 3000)
}

const goToFirstPost = () => {
    router.push({
        name: 'postDetail',
        params: {
            id: 'id1'
        }
    })
}
</script>

