<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>报名表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card class="box-card">
            <el-row :gutter="20">
                <el-col :span="9">
                    <el-input placeholder="请输入学号查找报名表" v-model="searchNum">
                        <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="2">
                    <el-button type="danger" @click="del">清空报名表</el-button>
                </el-col>
            </el-row>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}"
                height="480"
            >
                <el-table-column prop="id" label="序号" align="center" sortable></el-table-column>
                <el-table-column prop="sname" label="姓名" align="center"></el-table-column>
                <el-table-column prop="sex" label="性别" align="center"></el-table-column>
                <el-table-column prop="grade" label="年级" align="center"></el-table-column>
                <el-table-column prop="snumber" label="学号" align="center" width="120"></el-table-column>
                <el-table-column prop="phone" label="手机号码" align="center" width="120"></el-table-column>
                <el-table-column prop="first_offer" label="第一志愿" align="center"></el-table-column>
                <el-table-column prop="second_offer" label="第二志愿" align="center"></el-table-column>
                <el-table-column prop="is_adjust" label="是否服从分配" align="center"></el-table-column>
                <el-table-column prop="birth" label="出生年月" align="center"></el-table-column>
                <el-table-column prop="college" label="学院" align="center"></el-table-column>
                <el-table-column prop="major" label="专业" align="center"></el-table-column>
                <el-table-column prop="domitory" label="宿舍" align="center"></el-table-column>
                <el-table-column prop="hometown" label="籍贯" align="center"></el-table-column>
                <el-table-column prop="job" label="曾任/现任" align="center"></el-table-column>
                <el-table-column prop="politics" label="政治面貌" align="center"></el-table-column>
                <el-table-column prop="cognition" label="对校勤工的认识" align="center"></el-table-column>
                <el-table-column prop="self_intro" label="个人简介" align="center"></el-table-column>
                <el-table-column prop="gain" label="收获" align="center"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "111",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "2",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "3",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "4",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "5",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "6",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "7",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "8",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
                {
                    id: "9",
                    sname: "aaa",
                    sex: "男",
                    grade: "2020",
                    snumber: "201821030317",
                    phone: "11111111",
                    first_offer: "aaaa",
                    second_offer: "bbbbbb",
                    is_adjust: "是",
                    birth: "2020/01",
                    college: "工程学院",
                    major: "自动化",
                    domitory: "泰山6",
                    hometown: "广东",
                    job: "无",
                    politics: "共青团员",
                    cognition: "111111",
                    self_intro: "222222",
                    gain: "3333333333",
                },
            ],
            searchNum: "",
        };
    },
    methods: {
        //打开页面时自动向数据库请求数据
        async getForm() {
            const res = await this.$http.post("printabmb");
            console.log(res);
        },
        //查找根据学号向数据库发送请求并渲染到tableData里，即基础地址+学号查找
        search() {
            let res = [];
            for (let i = 0; i < this.tableData.length; i++) {
                if (this.tableData[i].snumber == this.searchNum) {
                    res.push(this.tableData[i]);
                }
            }
            this.tableData = res;
        },
        //查看
        handleClick(row) {
            this.$alert(
                "<div>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：" +
                    row.sname +
                    "</div>" +
                    "<div>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：" +
                    row.sex +
                    "</div>" +
                    "<div>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号：" +
                    row.snumber +
                    "</div>" +
                    "<div>出生年月：" +
                    row.birth +
                    "</div>" +
                    "<div>手机号码：" +
                    row.phone +
                    "</div>" +
                    "<div>学院专业：" +
                    row.grade +
                    row.college +
                    row.major +
                    "</div>" +
                    "<div>宿舍地址：" +
                    row.domitory +
                    "</div>" +
                    "<div>政治面貌：" +
                    row.politics +
                    "</div>" +
                    "<div>籍&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;贯：" +
                    row.hometown +
                    "</div>" +
                    "<div>曾任/现任：" +
                    row.job +
                    "</div>" +
                    "<div>第一志愿：" +
                    row.first_offer +
                    "</div>" +
                    "<div>第二志愿：" +
                    row.second_offer +
                    "</div>" +
                    "<div>是否服从分配：" +
                    row.is_adjust +
                    "</div>" +
                    '<div style="margin-top:5px;">对校勤工的认识：</div><div>' +
                    row.cognition +
                    "</div>" +
                    '<div style="margin-top:5px;">个人简介：</div><div>' +
                    row.self_intro +
                    "</div>" +
                    '<div style="margin-top:5px;">想从校勤工获得什么：</div><div>' +
                    row.gain +
                    "</div>" +
                    "<div>",
                "详情查看",
                {
                    confirmButtonText: "确定",
                    dangerouslyUseHTMLString: true,
                }
            );
        },
        //清空按钮的操作
        del() {
            this.$confirm(
                "此操作将永久删除所有报名表信息, 是否继续?",
                "警告！！！",
                {
                    confirmButtonText: "确定全部删除",
                    cancelButtonText: "取消",
                    type: "warning",
                }
            )
                .then(() => {
                    this.tableData = [];
                    this.$message({
                        type: "success",
                        message: "删除成功!",
                    });
                })
                .catch(() => {
                    this.$message({
                        type: "info",
                        message: "已取消删除",
                    });
                });
        },
    },
    created() {
        // this.getForm();
    },
};
</script>

<style scoped>
</style>