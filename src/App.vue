<template>
  <div class="container mt-3">
    <h1>Vue simple markdown example</h1>
    <md-editor ref="editor" v-model="value" :custombuttons="customButtons"></md-editor>
    <h4 class="mt-4">Output from editor</h4>
    <div class="text-muted">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      value: "",
      customButtons: [
        {
          label: "Insert a cat",
          key: "cat",
          icon: "fas fa-cat",
          group: "advanced"
        }
      ]
    };
  },
  mounted() {
    this.$refs.editor.$on("insert:cat", editor => {
      editor.insertImage("Cat image", "http://placekitten.com/100/100");
    });
  }
};
</script>
