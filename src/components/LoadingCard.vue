<template>
  <div class="loading-card">
    <div class="loading-card__image shimmer"></div>
    <div class="loading-card__info">
      <div class="loading-card__text shimmer"></div>
      <div class="loading-card__text shimmer"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

.loading-card {
  position: relative;
  height: 300px;
  background-color: var(--color-slate);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: var(--shadow-sm);

  &__image {
    width: 100%;
    height: 100%;
  }

  &__info {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    z-index: 1;
  }

  &__text {
    height: 20px;
    width: 60%;
    margin: 8px auto;
    border-radius: 4px;
  }
}

.shimmer {
  background: #f6f7f8;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
  background-repeat: no-repeat;
  background-size: 800px 100%;
  animation: shimmer 1s linear infinite;
}
</style>
