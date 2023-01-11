<template>
    <teleport to=".modals-container">
        <div 
            class="modal">
            <h1>{{ title }}
            </h1>
            <slot />
            <button @click="handleButtonClick">Hide modal</button>

        </div>
    </teleport>
</template>


<script setup>
    // For some reason I don't have to import this in vue.
    const props = defineProps({
    title: {
        type: String,
        default: 'No title specified'
    }
    })

    const emit = defineEmits(['hideModal'])

    const handleButtonClick = () => {
        emit('hideModal')
    }

/* If I want to access the props programmatically I would need to use props.title, not just title */
</script>

<!--
<script>
    export default {
        props: {
            title: {
                type: String,
                default: 'No title specified'
            }
        }
    }
</script>
-->

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