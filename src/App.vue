<template>
  <div class="container mt-3">
    <h1>Vue simple markdown example</h1>
    <md-editor v-model="value"></md-editor>
    <h4 class="mt-4">Output from editor</h4>
    <div class="text-muted">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: ""
    };
  }
};
</script>
