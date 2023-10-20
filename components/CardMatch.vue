<template>
  <div class="card mb-1" :class="{ 'important': match.important }">
    <div class="preview-image" />
    <div class="card-info ml-1">
      <div class="card-info-spec w-100">
        <div>{{ match.type }}</div>
        <div>{{ match.title }}</div>
        <div>{{ match.broadcaster }}</div>
      </div>
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
  background-color: #4D4C7D;
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
.card-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.preview-image {
  border-radius: 10px;
  width: 85px;
  height: 75px;
  background-color: #F5F5F5;
  margin-left: 10px;
}
</style>