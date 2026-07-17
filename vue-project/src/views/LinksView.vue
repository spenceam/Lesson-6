<script setup lang="ts">
import { useTheme } from 'vuetify'
import { profile, links } from '@/data/links'
import LinkButton from '@/components/LinkButton.vue'
import profilePhoto from '@/assets/photos/amanda_spence.png'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
  <v-app>
    <v-main>
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6" lg="4">
            <v-card class="pa-6 text-center" rounded="xl" elevation="8">
              <div class="d-flex justify-end">
                <v-btn
                  icon
                  variant="text"
                  :aria-label="
                    theme.global.current.value.dark
                      ? 'Switch to light mode'
                      : 'Switch to dark mode'
                  "
                  @click="toggleTheme"
                >
                  <v-icon>
                    {{ theme.global.current.value.dark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}
                  </v-icon>
                </v-btn>
              </div>

              <v-avatar size="120" color="primary" class="mb-4">
                <v-img :src="profilePhoto" :alt="profile.photoAlt" cover />
              </v-avatar>

              <h1 class="text-h5 font-weight-bold">{{ profile.name }}</h1>
              <p class="text-body-2 text-medium-emphasis mb-6">{{ profile.tagline }}</p>

              <div class="d-flex flex-column ga-3">
                <LinkButton
                  v-for="link in links"
                  :key="link.label"
                  :label="link.label"
                  :url="link.href"
                  :icon="link.icon"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
