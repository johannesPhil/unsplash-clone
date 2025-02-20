<template>
  <GalleryLayout>
    <div class="page">
      <form class="search-bar" @submit.prevent="handleSearch" v-if="!showQuery">
        <span class="material-symbols-rounded">search</span>
        <input type="text" placeholder="Search for photo" v-model="searchQuery" />
      </form>

      <div class="search-header" v-if="showQuery">
        <h2>
          Search Results for <span class="search-header__query">"{{ searchQuery }}"</span>
        </h2>
        <button @click="clearSearch" class="clear-btn">
          <span class="material-symbols-rounded">close</span>
        </button>
      </div>

      <div class="loading-grid" v-if="isLoading && !photos.length">
        <LoadingCard v-for="n in 12" :key="n" :style="{ animationDelay: `${n * 0.05}s` }" />
      </div>

      <div class="photo-grid" v-else>
        <PhotoCard
          v-for="photo in photos"
          :key="photo.id"
          :photo="photo"
          @click="openModal(photo)"
        />
      </div>

      <div class="pagination" v-if="!isLoading && photos.length">
        <buttton class="pagination__prev" @click="prevPage" v-if="page > 1">Prev</buttton>
        <button class="pagination__next" @click="nextPage" v-if="page <= total">Next</button>
      </div>
    </div>
    <PhotoModal :photo="selectedPhoto" @close="selectedPhoto = undefined" :show="!!selectedPhoto" />
  </GalleryLayout>
</template>

<script setup lang="ts">
import LoadingCard from '@/components/LoadingCard.vue'
import PhotoCard from '@/components/PhotoCard.vue'
import PhotoModal from '@/components/PhotoModal.vue'
import GalleryLayout from '@/layout/GalleryLayout.vue'
import { useGlobalStore } from '@/stores/global'
import { usePhotoStore } from '@/stores/photos'
import type { IPhoto } from '@/types'

import { storeToRefs } from 'pinia'
import { onMounted, watch, ref, watchEffect } from 'vue'

//State
const searchQuery = ref('')
const page = ref(1)
const showQuery = ref<boolean>(false)
const selectedPhoto = ref()

//Store
const { photos, query, total } = storeToRefs(usePhotoStore())
const { isLoading } = storeToRefs(useGlobalStore())
const { fetchPhotos } = usePhotoStore()

//Methods
function handleSearch() {
  if (!searchQuery.value.trim()) return
  page.value = 1
  photos.value = []
  showQuery.value = true
  fetchPhotos(searchQuery.value, page.value)
}

function clearSearch() {
  searchQuery.value = ''
  page.value = 1
  photos.value = []
  showQuery.value = false
  fetchPhotos(query.value, page.value)
}

function prevPage() {
  if (page.value > 1) {
    page.value--
  }
}

function nextPage() {
  page.value++
}

function openModal(photo: IPhoto) {
  selectedPhoto.value = photo
}

// Lifecycle & Effects
onMounted(() => {
  fetchPhotos(query.value, page.value)
})

watchEffect(() => {
  const searchTerm = showQuery.value ? searchQuery.value : query.value
  if (searchTerm) {
    fetchPhotos(searchTerm, page.value)
  }
})
</script>

<style lang="scss" scoped>
.page {
  display: grid;
  gap: 2rem;
}
.search-bar {
  height: 5rem;
  margin: auto;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-slate);
  transition: width 300ms;

  @include breakpoint(sm) {
    width: 100%;
  }

  @include breakpoint(md) {
    width: 80%;
  }

  @include breakpoint(lg) {
    width: 60%;
  }

  input {
    height: inherit;
    flex: 1;
    color: var(--color-header-text);
    border: transparent;
    border-radius: 4px;
    font-size: 1.5rem;
    font-weight: 600;

    &::placeholder {
      color: var(--color-header-text);
    }

    &:focus {
      outline: none;
    }
  }

  button {
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
.search-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;

  h2 {
    font-size: clamp(1.5rem, 2vw, 5rem);
    color: var(--color-header-text);
    font-weight: 700;
  }

  &__query {
    color: var(--color-slate);
  }
}

.clear-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text);
  padding: 0.5rem;
  border-radius: 50%;

  &:hover {
    background: var(--color-gray-100);
  }
}

.photo-grid {
  column-gap: 5rem;
  transition: columns 300ms;

  @include breakpoint(xs) {
    columns: 1;
  }

  @include breakpoint(sm) {
    columns: 2;
  }

  @include breakpoint(lg) {
    columns: 3;
  }
}

.loading-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(300px, 1fr));
  gap: 2rem;
}

.pagination {
  width: max-content;
  display: flex;
  gap: 2rem;

  margin: auto;

  &__prev,
  &__next {
    padding: 1rem 3rem;

    display: block;
    border-radius: 1rem;
    background-color: var(--color-header);
    color: var(--color-header-text);
    border: none;
    cursor: pointer;
    transition: background-color 300ms;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: var(--color-black-soft);
      color: var(--color-white-soft);
    }
  }
}
</style>
