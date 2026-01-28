<template>
  <font-awesome-icon
    v-if="icon"
    class="icon"
    :icon="icon"
    :size="size"
    :title="ariaLabel"
    :aria-label="ariaLabel"
  />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: { type: String, required: true },
  size: { type: String, default: null },
  ariaLabel: { type: String, default: '' }
})

const brandMap = {
  facebook: 'facebook-f',
  twitter: 'twitter',
  instagram: 'instagram',
  linkedin: 'linkedin-in',
  youtube: 'youtube',
  github: 'github',
  tiktok: 'tiktok',
  pinterest: 'pinterest',
  reddit: 'reddit-alien',
  snapchat: 'snapchat-ghost',
  whatsapp: 'whatsapp',
  telegram: 'telegram',
  discord: 'discord',
  medium: 'medium',
  steam: 'steam',
  twitch: 'twitch',
  dribbble: 'dribbble',
  behance: 'behance'
}

const icon = computed(() => {
  if (!props.type) return null
  const raw = props.type.trim().toLowerCase()

  // allow explicit prefix like "fab:facebook" or "fas:envelope"
  if (raw.includes(':')) {
    const [prefix, name] = raw.split(':')
    return [prefix, name]
  }

  // brand mapping for common social names
  if (brandMap[raw]) return ['fab', brandMap[raw]]

  // default to brand prefix with normalized name
  const normalized = raw.replace(/\s+/g, '-').replace(/^@/, '')
  return ['fab', normalized]
})
</script>
