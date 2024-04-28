<script>
import Markdown from "@/components/modules/blog/Markdown.vue";
import FileManager  from "@/tools/FileManager";
export default {
  mounted() {
    FileManager.getPostsConotents(this.topic, this.items[this.currentIndex].title)
        .then((res) => {
          this.content = res.data
        })
  },
  data() {
    return {
      currentIndex: 0,
      content: ""
    }
  },
  props: ["items", "topic"],
  components: {
    Markdown: Markdown
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index
    }
  },
  watch: {
    currentIndex: function (val) {
      FileManager.getPostsConotents(this.topic, this.items[val].title).then((res) => {
        this.content = res.data
      })
    }
  }
}
</script>

<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #f1f1f1">
      <div></div>
      <el-menu
        mode="vertical"
        background-color="#f1f1f1"
        text-color="#777777"
        active-text-color="#000000"
        :default-active="0"
        @select="selectItem"
      >
        <el-menu-item
          v-for="item in items"
          :index="item.index"
          :key="item.index"
        >
          <div id="text">{{ item.title }}</div>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <Markdown :content="content"></Markdown>
    </el-main>
  </el-container>
</template>

<style scoped>
.el-menu-item.is-active {
  background-color: #ffffff !important;
}
</style>