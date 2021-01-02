export const state = () => ({
    countyList: [],
    sectionList: [],
    ruralList: [],
    provinceId: null,
    countyId: null,
    sectionId: null,
    ruralId: null
});

export const mutations = {
    setProvinceId(state, id) {
        state.provinceId = id;
        state.countyId = state.sectionId = state.ruralId = null;
        state.countyList = state.sectionList = state.ruralList = [];
    },
    setCountyId(state, id) {
        state.countyId = id;
        state.sectionId = state.ruralId = null;
        state.sectionList = state.ruralList = [];    
    },
    setSectionId(state, id) {
        state.sectionId = id;
        state.ruralId = null;
        state.ruralList = []; 
    },
    setRuralId(state, id) {
        state.ruralId = id;
    },
    setCountyList(state, list) {
        state.countyList = list;
    },
    setSectionList(state, list) {
        state.sectionList = list;
    },
    setRuralList(state, list) {
        state.ruralList = list;
    },
};

export const actions = {
    async getCountyList({ commit, state }) {
        console.log(state.provinceId)
        const { list } = await this.$axios.$get(`county/getByProvinceId/${state.provinceId}`);
        commit('setCountyList', list);
    },
    async getSectionList({ commit, state }) {
        const { list } = await this.$axios.$get(`section/getByCountyId/${state.countyId}`);
        commit('setSectionList', list);
    },
    async getRuralList({ commit, state }) {
        const { list } = await this.$axios.$get(`ruralDistrict/getBySectionId/${state.sectionId}`);
        commit('setRuralList', list);
    },
};