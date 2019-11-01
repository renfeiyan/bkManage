<template>
    <div class="container">
        <div class="btn"><el-button type="danger" @click.native.prevent="loginOut" size="small">退出登录</el-button></div>
        <div class="right">
            <el-table :data="tableData" height="500" border style="width: 100%" >
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column prop="other" label="备注"></el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo",
        data() {
            return {
                tableData: []
            }
        },
        methods: {
            loginOut() {
                this.$axios.post('/login/logout').then(res => {
                    this.$router.push({ path: '/' });
                    this.$message({
                        message: '退出登陆' + res.data,
                        type: res.data
                    })
                })
            },
            getUserList(){
                this.$axios.post('/api/getInfo').then( res => {
                    console.log(res.data)
                    this.tableData = res.data.data
                })
            }
        },
        created: function(){
            this.getUserList()
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .container{
        position: fixed;
        height: 100%;
        width: 100%;

        .btn{
            position:absolute;
            right: 20px;
        }

        .left{
            width:20%;
            background-color: #545C64;
            height: 100%;
            float: left;
            box-sizing: border-box;
            .lala{

                height: 100%;
            }
        }
        .right{
            width: 80%;
            padding: 50px 30px;
            box-sizing: border-box;
            height: 100%;
            float: left;
        }
    }

</style>