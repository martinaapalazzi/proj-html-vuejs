<script>
export default {
  data() {
    return {};
  },
  props: {
    path: String,
  },
};
</script>

<template>
  <div class="col-3">
    <img :src="path" alt="" />
  </div>
</template>

<style lang="scss" scoped></style>
