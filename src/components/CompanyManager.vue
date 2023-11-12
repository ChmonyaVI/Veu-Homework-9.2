<template>
    <company-filters />
    <company-list :company-list="companiesList" />
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyFilters from '../components/CompanyFilters.vue'
import CompanyList from '../components/CompanyList.vue'

export default {
    name: 'CompanyManager',
    components: {
        CompanyList,
        CompanyFilters,
    },
    computed: {
        ...mapGetters(['companiesList']),
    },
}
</script>

<style lang="scss" scoped></style>
