import { createPinia } from "pinia";

export default defineNuxtPlugin(({ vueApp }) => {
  console.log("🧩 Plugin Name: 🍍 Pinia");
  const pinia = createPinia();
  vueApp.use(pinia)
})

// import { useMainStore } from '~/stores'

// export default defineNuxtPlugin(({ $pinia }) => {
//   // const pinia = createPinia() app.use(pinia)
//   return {
//     provide: {
//       store: useMainStore($pinia)
//     }
//   }
// })
