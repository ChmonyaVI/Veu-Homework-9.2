<template>
    <div class="items-list__wrapper">
        <div class="items-list__block">
            <div class="item__name">{{ company.title }}</div>
            <div class="item__rate">{{ company.rate }}</div>
            <div class="item__rate">{{ company.year }}</div>
            <div class="item__rate">{{ company.owner }}</div>
        </div>
        <button class="delete" @click="deleteCompany(company.id)">Delete</button>
        <button class="edit" @click="onEditCompany(company.id)">Edit</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'CompanyItem',
    props: {
        company: {
            type: Object,
            default: () => ({}),
        },
    },

    methods: {
        ...mapActions(['deleteCompany']),
        deleteCompanyByID(id) {
            this.deleteCompany(id)
        },
        onEditCompany(id) {
            this.$router.push({
                name: 'company',
                params: {
                    companyID: id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.delete {
    background-color: white;
    transition: all 0.3s ease 0s;
    border: none;
    color: black;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: 1px solid black;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #f44336;
        color: white;
        cursor: pointer;
    }
}
.edit {
    background-color: white;
    border: none;
    color: black;
    padding: 8px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border: 1px solid black;
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: #e7e7e7;
        cursor: pointer;
    }
}
.items-list {
    gap: 15px;
    // .items-list__wrapper

    &__wrapper {
        display: flex;
        align-items: center;
        gap: 20px;
        max-width: 600px;
    }

    // .items-list__block

    &__block {
        display: flex;
        gap: 20px;
        align-items: center;
    }
}
.item {
    margin-bottom: 20px;
    // .item__name

    &__name {
    }

    // .item__rate

    &__rate {
    }

    // .item__buttons

    &__buttons {
        display: flex;
        gap: 10px;
    }
}
</style>
