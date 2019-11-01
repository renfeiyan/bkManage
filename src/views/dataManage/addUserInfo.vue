<!-- 添加用户列表页面 -->
<template>
    <el-dialog title="收货地址" :visible="FormVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-row>
                <el-col :span="12">
                    <el-form-item label="编号" prop="_id" required>
                        <el-input v-model="ruleForm._id"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="姓名" prop="name" required>
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="时间" required>
                        <el-col>
                            <el-form-item prop="date">
                                <el-date-picker type="date" placeholder="日期"
                                                v-model="ruleForm.date"
                                                style="width: 100%;"
                                ></el-date-picker>
                            </el-form-item>
                        </el-col>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="性别" prop="sex">
                        <el-select v-model="ruleForm.sex" placeholder="性别">
                            <el-option label="男" value="男"></el-option>
                            <el-option label="女" value="女"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-form-item label="地址" prop="address" required>
                <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="close">取 消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    import {mapState} from 'vuex';
    // import {validInput} from '../../utils/validate';
    export default {
        name: 'addUserInfo',
        data() {
            return {
                ruleForm: {
                    _id: '',
                    date: '',
                    name: '',
                    sex: '',
                    address: ''
                },
                rules: {
                    _id: [
                        {required: true, message: '编号不能为空', trigger: 'blur'},
                        {min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'}
                    ],
                    name: [
                        {required: true, message: '姓名不能为空', trigger: 'change'}
                    ],
                    date: [
                        {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
                    ],
                    address: [
                        {required: true, message: '地址不能为空', trigger: 'blur'}
                    ],
                    sex: [
                        {required: true, message: '请选择性别', trigger: 'change'}
                    ]
                }
            };
        },
        computed: {
            ...mapState({
                FormVisible: state => state.userList.FormVisible
            })
        },
        methods: {
            close() {
                this.$store.commit('CHANGE_VISIBLE');
            },
            submitForm(ruleForm) {
                this.$refs[ruleForm].validate((valid) => {
                    if (valid) {
                        this.$store.commit('CHANGE_VISIBLE');
                        this.$store.dispatch('addUserList', this.ruleForm).then(() => {
                            this.$message({
                                type: 'success',
                                message: '添加数据成功'
                            })
                        }).catch(e => {
                            console.log('失败', e)
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            message: '添加数据失败'
                        })
                        return false;
                    }
                });
            },
            resetForm(ruleForm) {
                this.$refs[ruleForm].resetFields();
            }
        }
    }
</script>

<style scoped>

</style>