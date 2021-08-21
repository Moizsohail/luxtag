<template>
  <div>
    <div class="mockup large">
      <img src="@/assets/imgs/pngegg.png" class="bg" />
      <div class="screen">
        <mockup-content :mockupData="mockupData" />
      </div>
    </div>
    <mockup-content class="small" :mockupData="mockupData" />
  </div>
</template>
<script>
import MockupContent from "./MockupContent.vue";
export default {
  props: {
    mockupData: { type: Object, required: true },
  },
  components: {
    MockupContent,
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.mockup {
  position: fixed;
  $height: 600px;
  .bg {
    height: $height;
    z-index: 1;
    pointer-events: none;
    position: relative;
  }
  .screen {
    width: #{$height * 364/727};
    height: $height; //image is 364x727
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 0;
    padding: 17px 16px;
  }
}
.small {
  display: none;
}
@media (max-width: $mobile) {
  .large,
  .editor {
    display: none;
  }
  .small {
    display: block;
  }
}
</style>
