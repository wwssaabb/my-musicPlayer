<template>
  <page :current="obj.page"
        :total="total"
        :page-size="22"
        :show-total="true"
        :show-elevator="true"
        @on-change="changePage"
  >
  </page>
</template>

<script>
  export default {
    name: "resultPage",
    props: {
      obj: {
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
        let obj = {}
        obj.keywords = this.obj.keywords
        obj.type = this.obj.type
        obj.page = page
        this.$emit("changeShowList", obj)

      },
    }
  }
</script>

<style scoped>

</style>