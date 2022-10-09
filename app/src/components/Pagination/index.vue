<template>
  <div class="pagination">
    <button @click="pageDec()" :disabled="pageInfo.pageNo===1">上一页</button>
    <button
      v-show="centerPage.start > 1"
      :class="{ active: pageInfo.pageNo === 1 }"
      @click="pageNum(1)"
    >
      1
    </button>
    <button v-show="centerPage.start - 1 > 1">···</button>

    <button
      v-for="(item, index) in centerPage.arr"
      :key="index"
      :class="{ active: pageInfo.pageNo === item }"
      @click="pageNum(item)"
    >
      {{ item }}
    </button>

    <button v-show="pageInfo.totalPages - centerPage.end > 1">···</button>
    <button
      @click="pageNum(pageInfo.totalPages)"
      v-show="centerPage.end < pageInfo.totalPages"
    >
      {{ pageInfo.totalPages }}
    </button>
    <button @click="pageAdd()" :disabled="pageInfo.pageNo===pageInfo.totalPages">下一页</button>

    <button style="margin-left: 30px">共 {{ pageInfo.total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageInfo"],
  data() {
    return {};
  },
  methods: {
    pageAdd() {
      this.pageInfo.pageNo++;
      this.$emit("changePageNo", this.pageInfo.pageNo);
    },
    pageDec() {
      this.pageInfo.pageNo--;
      this.$emit("changePageNo", this.pageInfo.pageNo);
    },
    pageNum(pageNo) {
      this.pageInfo.pageNo = pageNo;
      this.$emit("changePageNo", this.pageInfo.pageNo);
    },
  },
  computed: {
    centerPage() {
      let arr = new Array();
      let start = this.pageInfo.pageNo - 2;
      let end = this.pageInfo.pageNo + 2;
      start = start > 0 ? start : 1;
      start = start > this.pageInfo.totalPages-5 ? this.pageInfo.totalPages-4 : start;
      end = end > 4 ? end : 5;
      end = end > this.pageInfo.totalPages ? this.pageInfo.totalPages : end;
      for (let i = start > 0 ? start : 1; i <= end; i++) {
        arr.push(i);
      }
      return { arr, start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
