const state = {
    user: null,
    isLogin: false
}

const actions = {
    LOGIN: ({
                commit,
                state
            }, queryData) => {
        console.log('I have state', state.user)
        console.log('Hello login', queryData)

        commit('saveUser', queryData)
    }
}

const mutations = {
    saveUser (state, myPayLoad) {
        console.log('testlog')
        state.user = myPayLoad
    }
}

const getters = {
    getName: state => {
        return state.user.name
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
