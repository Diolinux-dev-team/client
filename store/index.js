export const state = () => ({
    locales: ['br', 'en'],
    locale: 'br'
})

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
}