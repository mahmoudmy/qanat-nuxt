<template>
  <v-select
    class="mt-5"
    solo
    dense
    :label="$t('COUNTY')"
    :items="items"
    item-value="id"
    v-model="countyId"
    @change="onChange"
    clearable
  >
    <template v-slot:item="{ item }">
      <span> {{ $t(item.name) }} </span>
    </template>
    <template v-slot:selection="{ item }">
      <span> {{ $t(item.name) }} </span>
    </template>
  </v-select>
</template>

<script>
export default {
  data() {
    return {
      countyId: null,
    };
  },
  computed: {
    items() { return this.$store.state.countyList },
  },  
  methods: {
    async onChange() {
      this.$store.commit('setCountyId', this.countyId);
      if(this.countyId) this.$store.dispatch('getSectionList');
      else  this.$store.commit('setSectionList', []);
    },
  },
};
</script>