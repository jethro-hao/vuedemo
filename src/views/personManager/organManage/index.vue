<template>
  <div class="wrap">
    <el-container>
      <el-aside width="200px">
        <p class="organ_p">组织机构</p>
        <el-tree
          :data="treeData"
          :props="defaultProps"
          node-key="id"
          default-expand-all
          :expand-on-click-node="false"
          :render-content="renderContent"
        ></el-tree>
      </el-aside>
      <el-main>
        <avue-crud :data="tableData" :option="tableOption" v-model="obj"></avue-crud>
      </el-main>
    </el-container>
  </div>
</template>
<script>
let id = 1000;
import {
  treeData,
  treeOption,
  tableOption,
  tableData,
} from "@/const/views/personManager/organManage/index";
export default {
  name: "organManage",
  data() {
    return {
      treeData,
      treeOption,
      tableOption,
      tableData,
      tableObj: {},
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    append(data) {
      const newChild = { id: id++, label: "testtest", children: [] };
      if (!data.children) {
        this.$set(data, "children", []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },

    renderContent(h, { node, data }) {
      return (
        <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
            <span>{node.label}</span>
          </span>
          <span>{{ data }}</span>
        </span>
      );
    },
  },
  computed: {},
  mounted() {},
};
</script>
<style lang="scss">
@import "@/style/views/personManager/organManage/organManage.scss";
</style>