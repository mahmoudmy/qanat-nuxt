<template>
  <v-app-bar>
    <v-row dense>
      <v-col md="2">
        <v-text-field :label="$t('SEARCH')" dense class="mt-5" solo></v-text-field>
      </v-col>
      <v-col md="2">
        <v-select class="mt-5" solo dense :label="$t('PROVINCE')" :items="provinceList" item-value="id" v-model="provinceId" @change="setProvince">
          <template v-slot:item="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
          <template v-slot:selection="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
        </v-select>
      </v-col>
      <v-col md="2">
        <v-select class="mt-5" solo dense :label="$t('COUNTY')" :items="countyList" item-value="id" v-model="countyId" @change="setCounty">
          <template v-slot:item="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
          <template v-slot:selection="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
        </v-select>
      </v-col>
      <v-col md="2">
        <v-select class="mt-5" solo dense :label="$t('SECTION')" :items="sectionList" item-value="id" v-model="sectionId" @change="setSection">
          <template v-slot:item="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
          <template v-slot:selection="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
        </v-select>
      </v-col>
      <v-col md="2">
        <v-select class="mt-5" solo dense :label="$t('RURAL')" :items="ruralList" item-value="id" v-model="ruralId" @change="setRural">
          <template v-slot:item="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
          <template v-slot:selection="{ item }">
            <span> {{ $t(item.name) }} </span>
          </template>
        </v-select>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        provinceList: [],
        countyList: [],
        sectionList: [],
        ruralList: [],
        provinceId: null,
        countyId: null,
        sectionId: null,
        ruralId: null
      };
    },
    async fetch() {
      const {
        list
      } = await this.$axios.$get("province/getList");
      this.provinceList = list;
    },
    methods: {
      async setProvince() {
        const {
          list
        } = await this.$axios.$get(
          `county/getByProvinceId/${this.provinceId}`
        );
        this.countyList = list;
      },
      async setCounty() {
        const {
          list
        } = await this.$axios.$get(
          `section/getByCountyId/${this.countyId}`
        );
        this.sectionList = list;
      },
      async setSection() {
        const {
          list
        } = await this.$axios.$get(
          `ruralDistrict/getBySectionId/${this.sectionId}`
        );
        this.ruralList = list;
      },
      async setRural() {
        return
      }
    },
  };

</script>
