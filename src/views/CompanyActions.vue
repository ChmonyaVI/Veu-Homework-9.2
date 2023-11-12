<template>
    <div class="company__container">
        <h2 class="company__title">Crate Company</h2>
        <div class="company__items">
            <div class="company__item">
                <label class="company__label">Title:<input v-model="company.title" type="text" /></label>
            </div>
            <div class="company__item">
                <label class="company__label">Rate:<input v-model="company.rate" type="number" /></label>
            </div>
            <div class="company__item">
                <label class="company__label">Year:<input v-model="company.year" type="number" /></label>
            </div>
            <div class="company__item">
                <label class="company__label">Owner:<input v-model="company.owner" type="text" /></label>
            </div>
        </div>
        <div class="company-btn-block">
            <div v-if="getCompany" class="company__btn" @click="editCompany(company)">Edit</div>
            <div v-else class="company__btn" @click="createCompany(company)">Create</div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CompanyActions',

    data() {
        return {
            company: {},
        }
    },

    computed: {
        ...mapGetters(['getCompanyByID']),

        getCompany() {
            return this.$route.params.companyID
        },
    },

    created() {
        if (this.getCompany) {
            this.company = this.getCompanyByID(this.getCompany)
        }
    },

    methods: {
        ...mapActions(['getEditCompany', 'createNewCompany']),

        editCompany(company) {
            this.$router.push({
                name: 'home',
            })
            this.getEditCompany(company)
        },
        createCompany(company) {
            this.$router.push({
                name: 'home',
            })
            this.createNewCompany(company)
        },
    },
}
</script>

<style lang="scss" scoped>
.company {
    // .company__container

    &__container {
    }

    // .company__title

    &__title {
    }

    // .company__items

    &__items {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    // .company__item

    &__item {
    }

    // .company__label

    &__label {
    }

    // .company__btn

    &__btn {
        margin-top: 10px;
        background-color: white;
        border: none;
        color: black;
        border: 1px solid black;
        padding: 10px 28px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        transition: all 0.3s ease 0s;
        &:hover {
            transition: all 0.3s ease 0s;
            background-color: #42b983;
            cursor: pointer;
            color: white;
        }
    }
}
.company-btn-block {
}
</style>
