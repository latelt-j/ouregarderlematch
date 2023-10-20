<template>
  <div class="calendar">
    <h1 class="mb-2 sub-title">Matchs de foot</h1>
    <div class="mb-3">
      <CardMatch
        v-for="iMatch in importantMatches"
        :match="iMatch"
      />
    </div>
    <CardMatch
      v-for="iMatch in normalMatches"
      :match="iMatch"
    />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import CardMatch from "@/components/CardMatch.vue";
import Matches from "@/assets/json/matches.json";
import {Match} from "@/components/Matches";

export default defineComponent({
  name: "Calendar.vue",
  components: { CardMatch },
  data() {
    return {
      matches: JSON.parse(JSON.stringify(Matches))
    }
  },
  computed: {
    importantMatches() {
      return this.matches.filter((match: Match)  => match.important);
    },
    normalMatches() {
      return this.matches.filter((match: Match) => !match.important);
    }
  }
})
</script>
<style lang="scss" scoped>
  .calendar {
    margin-top: 48px;
    color: #FFFFFF;
    padding: 20px;
    max-height: 100%;
    max-width: 1008px;
    width: 100%;
  }
</style>