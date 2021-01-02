<template>
  <v-app-bar style="z-index: 401">
    <v-row dense>
      <v-col md="2">
        <v-text-field :label="$t('SEARCH')" dense class="mt-5" solo></v-text-field>
      </v-col>
      <v-col md="2">
        <select-province />
      </v-col>
      <v-col md="2">
        <select-county />
      </v-col>
      <v-col md="2">
        <select-section />
      </v-col>
      <v-col md="2">
        <select-rural />
      </v-col>
      <v-col md="2">
        <v-menu offset-y min-width="300" :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="mt-5" dense v-bind="attrs" v-on="on">{{$t('INFORMATION')}} </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="text-center">{{$t('DEBI')}} </v-list-item-title>
                <v-list-item-subtitle class="pt-10 px-5">
                  <v-range-slider thumb-label="always"  v-model="debiRange" max="200" min="0"></v-range-slider>
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>        
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import SelectProvince from '@/components/SelectProvince';
import SelectCounty from '@/components/SelectCounty';
import SelectSection from '@/components/SelectSection';
import SelectRural from '@/components/SelectRural';
  export default {
    components: { SelectProvince, SelectCounty, SelectSection, SelectRural },
    data() {
      return {
        debiRange: [0,200]
      };
    },

    methods: {

    },
  };

</script>
