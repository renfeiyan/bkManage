<!--用户列表-->
<template>
    <div>
        <el-row>
            <el-button size="small" type="primary" plain @click="dialogFormVisible">增加</el-button>
            <el-button size="small" type="warning" plain>修改</el-button>
        </el-row>
        <el-table :data="userListData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                  border style="width: 100%" min-height="340px">
            <el-table-column prop="_id" label="id" width="180"></el-table-column>
            <el-table-column prop="date" label="注册日期" width="180"></el-table-column>
            <el-table-column prop="name" label="用户姓名" width="180"></el-table-column>
            <el-table-column prop="sex" label="性别" width="180"></el-table-column>
            <el-table-column prop="address" label="注册地址"></el-table-column>
            <el-table-column prop="operation" label="操作">
                <template slot-scope="scope">
                    <el-button @click="detailShow(scope.row)" type="success" size="small">查看</el-button>
                    <el-button type="warning">删除</el-button>
                  </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <el-pagination @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage"
                    :page-sizes="[5, 10]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="userListData.length">
            </el-pagination>
        </div>
        <!-- 查看 -->
        <detail-diog :openDetail.sync="openDetail" :detailData="detailData"></detail-diog>
        <!--新增-->
        <add-user-info @updateData="getClose" />
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import addUserInfo from './addUserInfo'
    import detailDiog from './../components/detailDlog'
    export default {
        name: 'userList',
        data() {
            return {
                pageSize: 6,
                currentPage: 1, // 初始页
                // FormVisible:false
                openDetail: false, // 是否打开查看详情页面
                detailData: {}
            }
        },
        components: {
            addUserInfo,
            detailDiog
        },
        methods: {
            detailShow(row) {
                this.detailData = row;
                this.openDetail = true;
            },
            dialogFormVisible: function () {
                this.$store.commit('CHANGE_VISIBLE');
                console.log(this.FormVisible +'1')
            },
            getClose() {
                this.$store.commit('CHANGE_VISIBLE');
            },
            handleSizeChange: function (size) {
                this.pageSize = size; // 每页下拉显示数据
            },
            handleCurrentChange: function(currentPage) {
                this.currentPage = currentPage; // 点击第几页
            }
        },
        created() {
            this.$store.dispatch('getList');
        },
        computed: {
            ...mapState({
                userListData: state => state.userList.userListData, /* 从vuex中获取到数据 */
                FormVisible: state => state.userList.FormVisible
           })
        }
    }
</script>

<style scoped>
.el-row{
    margin:20px auto;
}
    .block{
        margin-top:30px;
    }
</style>