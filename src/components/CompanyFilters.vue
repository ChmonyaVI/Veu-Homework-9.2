<template>
    <div class="companies__container">
        <h1 class="companies__title">Filter</h1>
        <div class="companies__block-items">
            <div class="companies__block-item">
                <label class="companies__label"
                    >Title <input v-model="titleCompanyVal" type="text" class="companies__input" @input="onTitleChange"
                /></label>
            </div>
            <div class="companies__block-item">
                <label class="companies__label"
                    >Rate <input v-model="rateCompanyVal" type="number" class="companies__input" @input="onRateChange"
                /></label>
            </div>
            <div class="companies__block-item">
                <label class="companies__label"
                    >Year <input v-model="yearCompanyVal" type="number" class="companies__input" @input="onYearChange"
                /></label>
            </div>
            <div class="companies__block-item">
                <label class="companies__label"
                    >Owner <input v-model="ownerCompanyVal" type="text" class="companies__input" @input="onOwnerChange"
                /></label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

mapActions
export default {
    name: 'CompanyFilters',

    computed: {
        ...mapGetters(['getTitleCompanyVal', 'getRateCompanyVal', 'getYearCompanyVal', 'getOwnerCompanyVal']),
        titleCompanyVal: {
            get() {
                return this.getTitleCompanyVal
            },
            set(newVal) {
                return this.updateTitleCompanyVal(newVal)
            },
        },
        rateCompanyVal: {
            get() {
                return this.getRateCompanyVal
            },
            set(newVal) {
                return this.updateRateCompanyVal(newVal)
            },
        },
        yearCompanyVal: {
            get() {
                return this.getYearCompanyVal
            },
            set(newVal) {
                return this.updateYearCompanyVal(newVal)
            },
        },
        ownerCompanyVal: {
            get() {
                return this.getOwnerCompanyVal
            },
            set(newVal) {
                return this.updateOwnerCompanyVal(newVal)
            },
        },
    },
    methods: {
        ...mapActions([
            'updateTitleCompanyVal',
            'updateRateCompanyVal',
            'updateYearCompanyVal',
            'updateOwnerCompanyVal',
        ]),
    },
}
</script>

<style lang="scss" scoped>
.companies {
    // .companies__container

    &__container {
    }

    // .companies__title

    &__title {
    }

    // .companies__block-items

    &__block-items {
        display: flex;
        gap: 15px;
    }

    // .companies__block-item

    &__block-item {
    }

    // .companies__label

    &__label {
    }

    // .companies__input

    &__input {
    }
}
</style>
