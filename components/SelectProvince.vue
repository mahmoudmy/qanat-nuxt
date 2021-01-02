<template>
  <v-select
    class="mt-5"
    solo
    dense
    :label="$t('PROVINCE')"
    :items="provinceList"
    item-value="id"
    v-model="provinceId"
    @change="onChange"
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
      provinceList: [],
      provinceId: null,
    };
  },
  async fetch() {
    const { list } = await this.$axios.$get("province/getList");
    this.provinceList = list;
  },
  methods: {
    onChange() {
      this.$store.commit('setProvinceId', this.provinceId);
      this.$store.dispatch('getCountyList');
      this.$emit('update:provinceId', this.provinceId);
    },
  },
};
</script>