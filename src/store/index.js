import { createStore } from 'vuex'

export default createStore({
    state: {
        companiesList: [
            { id: 1, title: 'Lenovo', rate: 80, year: 1995, owner: 'William J. Amelio' },
            { id: 2, title: 'Asus', rate: 70, year: 1993, owner: 'Nicolas Cage' },
            { id: 3, title: 'Apple', rate: 99, year: 1977, owner: 'Gay Cook' },
        ],
        titleCompanyVal: null,
        rateCompanyVal: null,
        yearCompanyVal: null,
        ownerCompanyVal: null,
        messageError: null,
    },
    getters: {
        companiesList: ({ companiesList }) => companiesList,
        messageError: ({ messageError }) => messageError,

        getTitleCompanyVal: ({ titleCompanyVal }) => titleCompanyVal,
        getRateCompanyVal: ({ rateCompanyVal }) => rateCompanyVal,
        getYearCompanyVal: ({ yearCompanyVal }) => yearCompanyVal,
        getOwnerCompanyVal: ({ ownerCompanyVal }) => ownerCompanyVal,

        getCompaniesList(state) {
            if (state.titleCompanyVal) {
                return state.companiesList.filter((company) =>
                    company.title.toLowerCase().includes(state.titleCompanyVal.toLowerCase())
                )
            }
            if (state.rateCompanyVal) {
                return state.companiesList.filter((company) =>
                    company.rate.toString().includes(state.rateCompanyVal.toString())
                )
            }
            if (state.yearCompanyVal) {
                return state.companiesList.filter((company) =>
                    company.year.toString().includes(state.yearCompanyVal.toString())
                )
            }
            if (state.ownerCompanyVal) {
                return state.companiesList.filter((company) =>
                    company.owner.toLowerCase().includes(state.ownerCompanyVal.toLowerCase())
                )
            }
            if (state.companiesList.length === 0) {
                state.messageError = 'Список компаний пуст!'
            } else {
                state.messageError = null
            }

            return state.companiesList
        },
        getCompanyByID: (state) => (id) => {
            return { ...state.companiesList.find((company) => company.id == id) }
        },
    },
    mutations: {
        setTitleCompanyVal(state, title) {
            state.titleCompanyVal = title
        },
        setRateCompanyVal(state, rate) {
            state.rateCompanyVal = rate
        },
        setYearCompanyVal(state, year) {
            state.yearCompanyVal = year
        },
        setOwnerCompanyVal(state, owner) {
            state.ownerCompanyVal = owner
        },
        deleteCompany(state, id) {
            state.companiesList = state.companiesList.filter((company) => company.id !== id)
        },
        editCompany(state, companyData) {
            const dataIndex = state.companiesList.findIndex((company) => company.id === companyData.id)
            state.companiesList[dataIndex] = { ...companyData }
        },
        createNewCompany(state, companyData) {
            state.companiesList.push({ ...companyData })
        },
        setErrorMessage(state, message) {
            state.messageError = message
        },
    },
    actions: {
        updateTitleCompanyVal({ commit }, title) {
            commit('setTitleCompanyVal', title)
        },
        updateRateCompanyVal({ commit }, rate) {
            commit('setRateCompanyVal', rate)
        },
        updateYearCompanyVal({ commit }, year) {
            commit('setYearCompanyVal', year)
        },
        updateOwnerCompanyVal({ commit }, owner) {
            commit('setOwnerCompanyVal', owner)
        },
        deleteCompany({ commit }, id) {
            commit('deleteCompany', id)
        },
        getEditCompany({ commit }, companyData) {
            commit('editCompany', companyData)
        },
        createNewCompany({ commit }, companyData) {
            commit('createNewCompany', companyData)
        },
        updateErrorMessage({ commit }, message) {
            commit('setErrorMessage', message)
        },
    },
    modules: {},
})
