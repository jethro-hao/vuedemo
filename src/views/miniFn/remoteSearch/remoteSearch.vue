<template>
  <div class="wrap">
    <avue-form
      :option="option"
      v-model="form"
      @submit="handleSubmit"
    ></avue-form>
  </div>
</template>
<script>
var baseUrl = "https://cli.avuejs.com/api/area";
export default {
  data() {
    return {
      form: {
        province: "110000",
        province1: "110000,120000,130000,140000",
      },
      option: {
        column: [
          {
            label: "省份单选",
            prop: "province",
            type: "select",
            remote: true,
            props: {
              label: "name",
              value: "code",
            },
            dicUrl: `${baseUrl}/getProvince?id={{key}}`,
            rules: [
              {
                required: true,
                message: "请选择省份",
                trigger: "blur",
              },
            ],
          },
          {
            label: "省份多选",
            prop: "province1",
            type: "select",
            multiple: true,
            remote: true,
            props: {
              label: "name",
              value: "code",
            },
            dicUrl: `${baseUrl}/getProvince?id={{key}}`,
            rules: [
              {
                required: true,
                message: "请选择省份",
                trigger: "blur",
              },
            ],
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(form) {
      this.$message.success(JSON.stringify(this.form));
      console.log(form);
    },
  },
};
</script>