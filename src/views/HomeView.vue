<template>
    <div class="home-page">
        <div class="home-page__wrapper">
            <div class="home-page__block">
                <company-filters />
            </div>
            <div class="home-page__block">
                <company-list />
            </div>
        </div>
    </div>
</template>

<script>
import CompanyFilters from '../components/CompanyFilters.vue'
import CompanyList from '../components/companyList/index.vue'
// @ is an alias to /src

export default {
    name: 'HomeView',
    components: {
        CompanyFilters,
        CompanyList,
    },
}
</script>
