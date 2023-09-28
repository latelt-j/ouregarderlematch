<template>
  <div class="card mb-1" :class="{ 'important': match.important }">
    <div class="preview-image"/>
    <div class="ml-1">
      <div>{{ match.type }}</div>
      <div>{{ match.title }}</div>
      <div>{{ match.broadcaster }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType } from 'vue';
import {Match} from "@/components/Matches";

export default defineComponent({
  name: "CardMatch",
  props: {
    match: {
      type: Object as PropType<Match>,
      required: true
    }
  }
})
</script>
<style lang="scss">
.card {
  background-color: #232323;
  height: 90px;
  border-radius: 15px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  &.important {
    box-shadow: 0px 0px 11px 3px rgb(209 107 44 / 70%);
    margin-bottom: 20px;
  }
}
.preview-image {
  border-radius: 10px;
  width: 75px;
  height: 75px;
  background-color: #000000;
  margin-left: 10px;
}
</style>