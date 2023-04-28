<template lang="pug">
v-app()
  v-app-bar(
    app 
    color="primary"
    )
  v-main()
    v-container(
      class="fill-height"
      )
      v-sheet(
        class=" fill-height d-flex justify-center align-center flex-col flex-wrap "
        min-width="100%"
        min-height="100%"
        color="transparent"
        rounded
        border
        )
        slot()
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
</style>