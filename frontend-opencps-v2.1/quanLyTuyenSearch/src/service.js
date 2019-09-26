import { value, onCreated, onMounted, onDestroyed, watch } from "vue-function-api";
function service(props, ctx) {
  onMounted(() => {
    init();
  })
  onDestroyed(() => {
  })

  watch(() => {
    console.log('props.database', props)
    }
  )

  const init = () => {
    console.log('props2312', props)
  }
  return {props};
}

export default service;