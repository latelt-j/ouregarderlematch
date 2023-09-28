<template>
  <div class="root">
    <Calendar />
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
export default {
  name: 'App',
  components: { Calendar }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
