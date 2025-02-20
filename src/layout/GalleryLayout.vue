<template>
  <div class="layout">
    <header class="layout__header"></header>

    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '../assets/base.css';

.layout {
  &__header {
    background-color: var(--color-header);
    padding: 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
  }

  &__content {
    width: 70%;
    margin: auto;
    justify-content: center;
    transform: translateY(-13rem);

    @include breakpoint(xs) {
      width: 90%;
    }
    @include breakpoint(md) {
      width: 70%;
    }
  }
}
</style>
