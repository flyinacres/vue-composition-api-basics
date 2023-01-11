

<template>
<div class="home">
<h2 ref="appTitleRef">{{ appTitle }}</h2>
  <h3> {{counter.title}} </h3>
  <div>
  <button class="btn" @click="counter.increment(-1)">-</button>
  <button class="btn" @click="counter.increment(-2)">--</button>
  <span class="counter">{{ counter.count }}</span>
  <button class="btn" @click="counter.increment(1)">+</button>
  <button class="btn" @click="counter.increment(2)" >++</button>
  </div>

  <p>This counter is: {{ counter.oddOrEven }}</p>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input 
      v-autofocus 
      v-model="counter.title"
      type="text">
  </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounterStore } from '@/stores/counter'

const appTitle = 'My Amazing Counter App'

/* seems strange, but this is how to get access to the ref...
    make sure that the name is identical */
const appTitleRef = ref(null)

const counter = useCounterStore()


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
