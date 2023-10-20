<template>
  <div class="calendar">
    <div class="day" :class="{'is-bold': index === 7}" v-for="(date, index) in dates">{{ formatDate(date) }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import calendarService from './calendarService'

export default defineComponent({
  name: "Calendar",
  computed: {
    dates() {
      return calendarService.createDateArray();
    }
  },
  methods: {
    formatDate(date: Date) {
      return calendarService.formatDate(date);
    }
  }
})
</script>
<style lang="scss">
.calendar {
  padding: 0 20px;
  position: fixed;
  top: 48px;
  border-top: #F5F5F5 solid 2px;
  height: 44px;
  width: 100%;
  left: 80px;
  display: flex;
  flex-direction: row;
  color: #4D4C7D;
  border-bottom: solid 1px rgba(77, 76, 125, 0.26);
  background-color: #FFFFFF;
  overflow: scroll;
  @media screen and (max-width: 850px) {
    left: 0;
  }
}
.calendar::-webkit-scrollbar {
  display: none;
}
.day {
  width: 32px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.is-bold {
  font-weight: bold;
  border-bottom: solid 3px #363062;
}
</style>