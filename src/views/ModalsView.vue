<template>
    <div class="modals">
        <h2>Modals</h2>
        <div>
            <label>Show dark modals?</label>
            <input v-model="showDarkModals" type="checkbox"/>
        </div>
        <button @click="showModal = true">Show Modal</button>
        <component :userData="userData"
            :is="showDarkModals ? ModalDark : Modal" 
            v-model="showModal"
            title="My modal title (via prop)">
            
            <p>Arliquip sit ea excepteur ex incididunt. Esse sunt aliquip dolor minim do id tempor velit. Nulla nostrud sit qui proident magna labore sunt dolor magna reprehenderit nostrud do. Laboris do nostrud anim nulla Lorem amet elit laborum laboris. Anim sit nisi sint qui sint. Ullamco id veniam do ea quis deserunt. Labore irure quis nulla occaecat excepteur sit.
            </p>
        </component>
    </div>
</template>

<script setup>
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
import {ref} from 'vue'

const props = defineProps({
    userData: {type: Object}
})

const showDarkModals = ref(false)

const showModal = ref(false)

</script>
