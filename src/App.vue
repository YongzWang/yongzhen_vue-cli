<template>
  <div id="app">
    <page-body/>
  </div>
</template>
<script>
  import PageBody from "./components/pageBody";
  export default {
    components: {PageBody}
  }
</script>
<style lang="scss">
#app {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
