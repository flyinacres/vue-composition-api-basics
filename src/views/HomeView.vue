

<template>
<div class="home">
<h2>{{ appTitle }}</h2>
  <h3> {{ counterData.title }}:</h3>
  <div>
  <button class="btn" @click="decreaseCounter(1)">-</button>
  <button class="btn" @click="decreaseCounter(2)">--</button>
  <span class="counter">{{ counterData.count }}</span>
  <button class="btn" @click="increaseCounter(1, $event)">+</button>
  <button class="btn" @click="increaseCounter(2, $event)">++</button>
  </div>

  <div class="edit">
    <h4>Edit counter title:</h4>
    <input v-model="counterData.title" type="text">
  </div>
</div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const appTitle = 'My Amazing Counter App'

const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

const increaseCounter = (amount, e) => {
  console.log(e)
  counterData.count += amount
}

const decreaseCounter = (amount) => {
  counterData.count-=amount
}
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
