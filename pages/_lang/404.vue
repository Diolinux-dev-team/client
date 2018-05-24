<template>
  <div class="Content">
    <div class="container">
      <h1 class="Content__Title">{{ $t('notfound.title') }}</h1>
      <p>{{ $t('notfound.text') }}</p>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return { title: this.$t('notfound.title') }
  }
}
</script>