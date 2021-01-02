<template>
  <v-select
    class="mt-5"
    solo
    dense
    :label="$t('RURAL_DISTRICT')"
    :items="items"
    item-value="id"
    v-model="ruralId"
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
      ruralId: null,
    };
  },
  computed: {
    items() { return this.$store.state.ruralList },
  },
  methods: {
    onChange() {
      this.$store.commit('setRuralId', this.ruralId);
    },
  },
};
</script>