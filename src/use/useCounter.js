import { reactive, computed, watch, onMounted, nextTick} from 'vue'

// Moved this outside the function to make it global to all code
const counterData = reactive({
    count: 0,
    title: 'My Counter'
  })

export function useCounter() {
// counterData was in here originally..

watch(() => counterData.count, (newCount, oldCount) => {
  if (newCount === 20) {
    alert('Way to go, you made it to 20')
  }
})

const oddOrEven = computed(() => {
  return counterData.count % 2 ? 'odd' : 'even'
})

const increaseCounter = (amount) => {
  counterData.count += amount
  nextTick(() => {
    console.log('do something now')
  })
}

const decreaseCounter = (amount) => {
  counterData.count-=amount
}

return { counterData, oddOrEven, increaseCounter, decreaseCounter }

}