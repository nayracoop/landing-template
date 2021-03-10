import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {es, en} from '../translations/locale.json'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'es',
  silentTranslationWarn: true,
  fallbackLocale: 'en',
  messages: {
    es,
    en
  }
})
