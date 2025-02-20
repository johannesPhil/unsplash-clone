<template>
  <div class="photo" @click="() => $emit('openModal', photo)">
    <img :src="photo?.urls?.regular" alt="Photo" />
    <div class="photo__info">
      <p>{{ photo?.user?.first_name }} {{ photo?.user?.last_name }}</p>
      <p>{{ photo?.user?.location }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  photo: Object as PropType<IPhoto>,
})

defineEmits<{ openModal: [photo: IPhoto | undefined] }>()

import type { IPhoto } from '@/types'
import type { PropType } from 'vue'
</script>

<style scoped lang="scss">
.photo {
  position: relative;
  margin-bottom: 3rem;
  background-color: var(--color-white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
  cursor: pointer;
  transition: transform 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    transition: opacity 300ms ease-in-out;
  }

  &:hover {
    transform: translateY(-0.5rem);

    &::after {
      opacity: 0.9;
    }
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__info {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    text-align: center;
    color: var(--color-white, #fff);
    z-index: 1;
  }
}
</style>
