import SocialIcon from './components/SocialIcon.vue'
import SocialShare from './components/SocialShare.vue'

export { SocialIcon, SocialShare }

export default {
  install(app, options = {}) {
    // provide package-level defaults (e.g., platforms)
    app.provide('socialIconsConfig', options || {})

    app.component('SocialIcon', SocialIcon)
    app.component('SocialShare', SocialShare)
  }
}
