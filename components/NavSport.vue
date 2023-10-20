<template>
  <div class="nav-sport">
    <div class="nav-container" :class="{ 'is-select': index === 0 }" v-for="(sport, index) in sports">
      <div class="nav-icon">{{ sport.icon }}</div>
      <div class="cat-1">{{ sport.name }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "NavSport",
  data() {
    return {
      sports: [
        {
          icon: '⚽',
          name: 'foot',
          route: 'soccer',
          subcompetition: [
            { icon: '🇫🇷', name: 'ligue 1', route: 'ligue1'},
            { icon: '🏴󠁧󠁢󠁥󠁮󠁧󠁿󠁧󠁢󠁥󠁮󠁧', name: 'premier league', route: 'premierleague'},
            { icon: '🇪🇸', name: 'la liga', route: 'liga'},
            { icon: '🇮🇹', name: 'serie a', route: 'seriea'}
          ]
        },
        {
          icon: '🏉',
          name: 'rugby',
          route: 'rugby',
          subcompetition: [
            { name: '🏆 coupe du monde', route: 'coupedumonde'},
            { name: '🇫🇷 top 14', route: 'top14'}
          ]
        },
        { icon: '🏅', name: 'JO', route: 'jo' },
      ]
    }
  },
})
</script>
<style lang="scss">
.nav-sport {
  position: fixed;
  left: 0;
  top: 50px;
  width: 80px;
  height: 100%;
  background-color: #FFFFFF;
  @media screen and (min-width: 1512px) {
    width: 224px;
  }
  @media screen and (max-width: 850px) {
    top: initial;
    bottom: 0;
    height: 57px;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
}
.nav-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 82px;
  @media screen and (min-width: 1512px) {
    flex-direction: row;
    justify-content: left;
    align-items: center;
    gap: 10px;
    height: 48px;
    padding-left: 29px;
  }
  @media screen and (max-width: 850px) {
    width: 100%;
    height: 56px;
  }
}
.nav-icon {
  font-size: 30px;
  @media screen and (max-width: 850px) {
    font-size: 20px;
  }
}
.cat-1 {
  color: #363062;
  font-size: 20px;
  margin-bottom: 5px;
  @media screen and (max-width: 850px) {
    font-size: 18px;
  }
}
.is-select {
  background-color: rgba(249, 148, 23, 0.18);
  border-bottom: 3px solid #F99417;
}
</style>