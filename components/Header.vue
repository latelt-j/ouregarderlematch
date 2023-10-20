<template>
  <header class="header">
    <div class="title">Ou Regarder Le Match</div>
  </header>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Header.vue"
})
</script>
<style lang="scss">
.header {
  height: 48px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  color: #F99417;
  font-weight: bold;
  font-size: 30px;
}
</style>