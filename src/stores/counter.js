import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // These refs are equivalent to state in the options API
  const count = ref(0)
  const title = ref('My Counter Title')
  // This computed is equivalent to a getter in the options API
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even'
    return 'odd'
  }
  )
  // This function is equivalent to actions in the options API
  function increment(inc) {
    count.value += inc
  }

  return { count, title, oddOrEven, increment }
})
