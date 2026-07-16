<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { profile, links } from '@/data/links'
import profilePhoto from '@/assets/photos/amanda_spence.png'

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <main class="links-page">
    <section class="card">
      <button
        class="theme-toggle"
        type="button"
        :aria-label="theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
      >
        {{ theme === 'dark' ? '☀️' : '🌙' }}
      </button>

      <div class="avatar">
        <img class="avatar-img" :src="profilePhoto" :alt="profile.photoAlt" />
      </div>

      <h1 class="name">{{ profile.name }}</h1>
      <p class="tagline">{{ profile.tagline }}</p>

      <nav class="links">
        <a
          v-for="link in links"
          :key="link.label"
          class="link-button"
          :href="link.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span class="link-icon" aria-hidden="true">{{ link.icon }}</span>
          <span>{{ link.label }}</span>
        </a>
      </nav>
    </section>
  </main>
</template>

<style src="@/assets/links.css" scoped></style>
