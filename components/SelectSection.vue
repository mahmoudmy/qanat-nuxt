<template>
  <v-select
    class="mt-5"
    solo
    dense
    :label="$t('SECTION')"
    :items="items"
    item-value="id"
    v-model="sectionId"
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
      sectionId: null,
    };
  },
  computed: {
    items() { return this.$store.state.sectionList },
  },
  methods: {
    async onChange() {
      this.$store.commit("setSectionId", this.sectionId);
      if (this.sectionId) this.$store.dispatch("getRuralList");
      else this.$store.commit('setRuralList', []);
    },
  },
};
</script>