<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>学院</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="2">
                    <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
                </el-col>
            </el-row>
            <el-dialog title="添加" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="学院名称">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="add">确 定</el-button>
                </div>
            </el-dialog>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
            >
                <el-table-column prop="id" label="序号" width="180" align="center" sortable></el-table-column>
                <el-table-column prop="name" label="学院" align="center"></el-table-column>
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
        </el-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: "1",
                    name: "工程学院",
                },
                {
                    id: "2",
                    name: "数信学院",
                },
                {
                    id: "3",
                    name: "工程学院",
                },
                {
                    id: "4",
                    name: "数信学院",
                },
            ],
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
                type: "error",
                message: "已删除",
            });
        },
    },
};
</script>

<style scoped>
</style>