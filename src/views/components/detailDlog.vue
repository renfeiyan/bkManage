<!-- 详情显示页面，还不可复用· 只是可以实现 -->
<template>
    <el-dialog title="用户详情" :visible="openDetail">
        <el-form label-width="100px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="编号">
                        <el-input :placeholder="detailData._id" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="姓名">
                        <el-input :placeholder="detailData.name" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="时间">
                        <el-input :placeholder="detailData.date" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别">
                        <el-input :placeholder="detailData.sex" :disabled="true"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="地址">
                <el-input :placeholder="detailData.address" :disabled="true"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="close(false)">关 闭</el-button>
        </div>
    </el-dialog>
  </template>
  <script>
  export default {
    name: 'detailDlog',
    props: {
      openDetail: {
        type: Boolean,
        required: true
      },
      detailData: {
        type: Object,
        required: true
      }
    },
    methods: {
      close(value) {
        this.$emit('update:openDetail', value);
      }
    }
  };
  </script>

  <style scoped>
  .el-row {
    margin-bottom: 22px;
  }
  .el-row .label {
    line-height: 40px;
    padding-right: 22px;
    text-align: right;
  }
  .el-row .oneLine {
    line-height: 40px;
    min-height: 40px;
    padding: 0 15px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
  }
  .el-row .multiLine {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    padding: 5px 15px;
    min-height: 42px;
  }
  </style>