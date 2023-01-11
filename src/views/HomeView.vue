

<template>
<div class="home">
<h2 ref="appTitleRef">{{ appTitle }}</h2>
  <h3> {{ counterData.title }}:</h3>
  <div>
  <button class="btn" @click="decreaseCounter(1)">-</button>
  <button class="btn" @click="decreaseCounter(2)">--</button>
  <span class="counter">{{ counterData.count }}</span>
  <button class="btn" @click="increaseCounter(1)">+</button>
  <button class="btn" @click="increaseCounter(2)">++</button>
  </div>

  <p>This counter is: {{ oddOrEven }}</p>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input v-autofocus v-model="counterData.title" type="text">
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'

const appTitle = 'My Amazing Counter App'
const {counterData, oddOrEven, increaseCounter, decreaseCounter} = useCounter()

/* seems strange, but this is how to get access to the ref...
    make sure that the name is identical */
const appTitleRef = ref(null)


onMounted(() => {
  console.log(appTitleRef.value.offsetWidth)
})

</script>

<style>
.home {
  text-align: center;
  padding: 20px;
}
.btn, .counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 60px
}
</style>
