<template>
  <Teleport to="body">
    <div v-if="show" class="modal-overlay" @click.self="$emit('close')">
      <button class="modal__close" @click="$emit('close')">
        <span class="material-symbols-rounded">close</span>
      </button>
      <div class="modal">
        <div class="modal__image-container">
          <img :src="photo?.urls?.regular" :alt="photo?.alt_description" />
        </div>

        <div class="modal__info">
          <div class="modal__user">
            <img :src="photo?.user?.profile_image?.medium" :alt="photo?.user?.name" />
            <div>
              <h3 class="modal__user--name">{{ photo?.user?.name }}</h3>
              <p class="modal__user--location">{{ photo?.user?.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import type { IPhoto } from '@/types'
import type { PropType } from 'vue'

defineProps({
  show: Boolean,
  photo: Object as PropType<IPhoto>,
})

defineEmits<{ close: [] }>()
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: grid;
  place-items: center;
  z-index: 100;
}

.modal {
  background: var(--color-white);
  max-width: 90vw;
  max-height: 90vh;
  border-radius: 8px;
  overflow: hidden;
  position: relative;

  img {
    max-width: 100%;
    max-height: 70vh;
    object-fit: contain;
  }

  &__close {
    position: absolute;
    top: 3vw;
    right: 5vw;
    display: flex;
    align-items: center;
    background: transparent;
    border: none;
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--color-white);

    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &__info {
    padding: 1.5rem;
  }

  &__user {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--color-slate);

    &--name {
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-header-text);
    }
    &--location {
      font-size: 1.5rem;
      color: var(--color-slate);
    }

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>
