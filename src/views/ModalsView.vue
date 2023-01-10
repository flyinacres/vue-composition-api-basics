<template>
    <div class="modals">
        <h2>Modals</h2>
        <button @click="showModal = true">Show Modal</button>
        <teleport to=".modals-container">
            <div v-if="showModal"
                class="modal">
                <h1>This is a modal</h1>
                <p>Magna reprehenderit dolore officia velit. Quis cupidatat reprehenderit sint consequat reprehenderit ut sint anim excepteur. Lorem do minim id cupidatat elit nisi reprehenderit reprehenderit. Culpa dolor velit officia velit reprehenderit nulla ex consequat duis cupidatat magna. Irure officia ex eu Lorem ea ipsum ex ea nulla ad labore mollit anim cillum. Ex consequat consectetur ipsum adipisicing cupidatat consectetur eu mollit nisi labore eu deserunt. Amet elit id adipisicing commodo eiusmod quis amet ad.
                </p>
                <button @click="showModal = false">Hide modal</button>

            </div>
        </teleport>
    </div>
</template>

<script setup>
import {ref} from 'vue'

const showModal = ref(false)

</script>

<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>