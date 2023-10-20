<template>
  <div class="root">
    <div class="layout">
      <Header />
      <NavSport />
      <Calendar />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavSport from "@/components/NavSport.vue";
import Calendar from "@/components/Calendar.vue";
export default {
  name: 'App',
  components: { Header, Calendar, NavSport }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.root {
  background-color: #F5F5F5;
  font-family: 'DM Sans', serif;
}

.layout {
  margin-left: 82px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 850px) {
    margin-left: initial;
  }
}

.sub-title {
  color: #363062;
  font-weight: bold;
}

h1 {
  font-weight: normal;
  font-size: 24px;
}

.mt-1 {
  margin-top: 10px;
}

.mb-1 {
  margin-bottom: 10px;
}

.mb-2 {
  margin-bottom: 20px;
}

.mb-3 {
  margin-bottom: 30px;
}

.ml-1 {
  margin-left: 10px;
}

.mr-1 {
  margin-right: 10px;
}

.w-100 {
  width: 100%;
}

</style>
