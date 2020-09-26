<template>
  <page :current="label.page"
        :total="total"
        :page-size="15"
        :show-total="true"
        :show-elevator="true"
        @on-change="changePage"
  >
  </page>
</template>

<script>
  export default {
    name: "playlists-page",
    props: {
      label: {
        type: Object,
        default() {
          return {}
        }
      },
      total: {
        type: Number,
        default() {
          return 0;
        }
      }
    },
    data() {
      return {
        current: 1
      }
    },
    methods: {
      changePage(page) {
        let label = {}
        label.cat = this.label.cat
        label.page = page
        this.$emit("changeShowList", label)

      },
    }
  }
</script>

<style scoped>

</style>