<template>
  <div class="content">
    <div class="header-image">
      <img :src="src" />
    </div>
    <div class="inner-content">
      <div class="first-row">
        <h3 class="title">{{ mockupData.title }}</h3>
      </div>
      <div class="profile">
        <div class="profile-info">
          <v-avatar color="primary" size="30">
            <img src="/moiz.jpg" alt="John" />
          </v-avatar>

          <p class="name">By Moiz Sohail</p>
        </div>
        <v-btn color="#60D2D6" class="btn" rounded depressed>Follow</v-btn>
      </div>
      <div class="ql-snow">
        <div v-html="mockupData.content" class="ql-editor"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mockupData: { type: Object, required: true },
  },
  computed: {
    src() {
      console.log(process.env.NODE_ENV);
      if (this.publicPath)
        console.log(URL.createObjectURL(this.mockupData.image));
      return this.mockupData.image
        ? URL.createObjectURL(this.mockupData.image)
        : `/time-management-multitasking.jpg`;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  overflow-y: scroll;
  height: 100%;
  background: #fefefe;
  .header-image {
    height: 150px;
    width: 100%;
    transition: 1s ease;
    overflow: hidden;
    & > img {
      width: 100%;
    }
  }
}
.content > .inner-content {
  padding: 5px 15px;
  .first-row {
    display: flex;
    justify-content: space-between;
    align-content: center;
    .title {
      margin-top: 15px;
    }
  }
  .profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 9px;
    padding-bottom: 9px;
    .profile-info {
      display: flex;
      align-content: center;
      align-items: center;
    }
    .name {
      font-size: 10px;
      margin: 0px;
      padding: 0px 6px;
      opacity: 0.5;
    }
    .btn {
      color: white;
      padding: 10px;
      font-size: 10px;
      height: 29px;
    }
  }

  .ql-editor {
    padding: 0px;
  }
}
@media (max-width: $mobile) {
  .header-image {
    height: 343px !important;
  }
}
@media (max-width: 450px) {
  .header-image {
    height: 150px !important;
  }
}
</style>
<style lang="scss">
.ql-snow .ql-editor {
  img {
    border-radius: 20px;
    width: 100%;
    height: auto;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: tabular-numbers, Georgia, "Droid Serif", Times New Roman, Times,
      serif;
  }
  p,
  ul {
    color: #333;
    font: normal normal 1rem/1.63 tabular-numbers, Georgia, "Droid Serif",
      Times New Roman, Times, serif;
    font-size: 0.8em;
    font-stretch: normal;
  }
}
</style>
