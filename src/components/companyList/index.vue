<template>
    <div class="companies__container-list list-container">
        <div class="list-container__block">
            <h2 class="list-container__title">Companies List</h2>
            <div class="list-container__list-items items-list">
                <company-item
                    v-for="item in getCompaniesList"
                    :key="item.id"
                    :company="item"
                    class="items-list__item item"
                />
            </div>
            <div v-if="messageError" class="company__error-message">{{ messageError }}</div>
        </div>
        <button class="companies__create" @click="createCompany()">Create Company</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyItem from './CompanyItem.vue'

export default {
    name: 'CompaniesList',
    components: { CompanyItem },

    computed: {
        ...mapGetters(['getCompaniesList', 'messageError']),
    },

    methods: {
        createCompany() {
            this.$router.push({
                name: 'company',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.companies {
    // .companies__container-list

    &__container-list {
    }

    // .companies__create

    &__create {
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
.list-container {
    // .list-container__block

    &__block {
    }

    // .list-container__title

    &__title {
    }

    // .list-container__list-items

    &__list-items {
    }
}
.items-list {
    // .items-list__item

    &__item {
    }
}
.item {
}
.company {
    // .company__error-message

    &__error-message {
    }
}
</style>
