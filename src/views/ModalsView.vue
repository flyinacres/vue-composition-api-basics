<template>
    <div class="modals">
        <h2>Modals</h2>
        <button @click="showModal = true">Show Modal</button>
        <Modal v-model="showModal"
            title="My modal title (via prop)">
            
            <p>Arliquip sit ea excepteur ex incididunt. Esse sunt aliquip dolor minim do id tempor velit. Nulla nostrud sit qui proident magna labore sunt dolor magna reprehenderit nostrud do. Laboris do nostrud anim nulla Lorem amet elit laborum laboris. Anim sit nisi sint qui sint. Ullamco id veniam do ea quis deserunt. Labore irure quis nulla occaecat excepteur sit.
            </p>
        </Modal>
    </div>
</template>

<script setup>
import Modal from '@/components/Modal.vue'
import {ref} from 'vue'

const showModal = ref(false)

</script>
