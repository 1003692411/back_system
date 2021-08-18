<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>专业</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="2">
                    <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
                </el-col>
            </el-row>
            <!-- 添加打开的对话框 -->
            <el-dialog title="添加" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="专业名称">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add">确 定</el-button>
                </div>
            </el-dialog>

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane
                    :label="item.name"
                    :name="item.id"
                    v-for="(item,index) in college"
                    :key="index"
                >
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%"
                        :default-sort="{prop: 'date', order: 'descending'}"
                    >
                        <el-table-column prop="id" label="序号" width="180" align="center" sortable></el-table-column>
                        <el-table-column prop="name" label="专业" align="center"></el-table-column>
                        <el-table-column fixed="right" label="操作" width="100">
                            <template slot-scope="scope">
                                <el-button
                                    @click.native.prevent="deleteRow(scope.$index, tableData)"
                                    type="text"
                                    size="small"
                                >删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: "1",
            college: [
                { id: "1", name: "工程学院" },
                { id: "2", name: "工程学院" },
                { id: "3", name: "工程学院" },
                { id: "4", name: "工程学院" },
            ],
            m1: [
                { id: "1", name: "电气工程" },
                { id: "2", name: "电气工程" },
                { id: "3", name: "电气工程" },
                { id: "4", name: "电气工程" },
            ],
            m2: [
                { id: "1", name: "农业工程" },
                { id: "2", name: "农业工程" },
                { id: "3", name: "农业工程" },
                { id: "4", name: "农业工程" },
            ],
            tableData: [],
            dialogTableVisible: false,
            dialogFormVisible: false,
            //添加的表单
            form: {
                id: "",
                name: "",
            },
        };
    },
    methods: {
        handleClick(tab) {
            console.log(tab);
            this.changeTab(tab.name);
        },
        //应该是每次改变时向数据库发送请求获取不同的数据来渲染，现在是无数据库支持的测试才用if，如果有的话就直接每次改变就发送请求并直接渲染到表格里
        changeTab(e) {
            if (e == 1) {
                return (this.tableData = this.m1);
            }
            if (e == 2) {
                return (this.tableData = this.m2);
            }
            this.tableData = [];
        },
        //添加的操作
        add() {
            this.dialogFormVisible = false;
            let len = this.tableData.length - 1;
            if (len != -1) {
                this.form.id = parseInt(this.tableData[len].id) + 1;
            } else {
                this.form.id = 1;
            }
            this.tableData.push(this.form);
            this.form = { id: "", name: "" };
            this.$message({
                type: "success",
                message: "添加成功!",
            });
        },
        deleteRow(index, rows) {
            rows.splice(index, 1);
            this.$message({
                type: "warning",
                message: "已删除",
            });
        },
    },
    created() {
        this.changeTab(1);
    },
};
</script>

<style scoped>
</style>