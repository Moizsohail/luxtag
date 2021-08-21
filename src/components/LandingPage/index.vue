<template>
  <v-container>
    <v-row>
      <v-col class="editor">
        <v-file-input label="Load Custom Image" v-model="mockup.image" />

        <v-text-field label="Title" v-model="mockup.title" />

        <vue-editor v-model="mockup.content" />
      </v-col>
      <v-col>
        <mockup :mockupData="mockup" />
        <!-- {{ mockup.content }} -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { VueEditor } from "vue2-editor";
import Mockup from "./Mockup.vue";
import dummy from "@/assets/dummy.js";
//didnt use vuex store in this content. As it was just unnecessary coding in this case.
export default {
  name: "LandingPage",
  components: {
    VueEditor,
    Mockup,
  },

  data() {
    return {
      mockup: {
        title: "Manipulate Time With These Powerful Time Management Tips",
        image: null,
        color: "#9AD6D8",
        content: dummy.content,
        select: ["strapi"],
        items: ["React", "NodeJs", "Strapi"],
      },
    };
  },
};
</script>
<style lang="scss">
.v-application--wrap {
  background-color: rgb(233, 233, 233) !important;
}
</style>
<style lang="scss" scoped>
@media (max-width: $mobile) {
  .editor {
    display: none;
  }
}
</style>
