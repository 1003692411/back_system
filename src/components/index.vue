<template>
    <!-- <div>
        <el-button type="info" @click="back">退出</el-button>
    </div>-->
    <el-container style="height:100%;">
        <el-header>
            <div class="logo">后台管理</div>
            <div class="back">
                <el-button type="text" @click="back" style="color:#fff;">退出</el-button>
            </div>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <el-menu
                    style="width:100%;"
                    :default-active="activePath"
                    class="el-menu-vertical-demo"
                    background-color="#393d49"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                    router
                >
                    <el-menu-item index="/college" @click="saveNav('/college')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;院</span>
                    </el-menu-item>
                    <el-menu-item index="/major" @click="saveNav('/major')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">专&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;业</span>
                    </el-menu-item>
                    <el-menu-item index="/part" @click="saveNav('/part')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">十大部门</span>
                    </el-menu-item>
                    <el-menu-item index="/form" @click="saveNav('/form')">
                        <i class="el-icon-menu"></i>
                        <span slot="title">报&nbsp;&nbsp;名&nbsp;&nbsp;表</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view></router-view>
                </el-main>
                <el-footer>© 华农勤工网络部</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            activePath: "/welcome",
        };
    },
    methods: {
        back() {
            window.sessionStorage.clear();
            this.$message.warning("已退出");
            this.$router.push("/login");
        },
        saveNav(e) {
            window.sessionStorage.setItem("activePath", e);
            this.activePath = e;
        },
    },
    created() {
        this.activePath = window.sessionStorage.getItem("activePath");
    },
};
</script>

<style scoped>
.el-header,
.el-footer {
    line-height: 60px;
    padding: 0;
}
.el-header,
.el-aside {
    background-color: #23262e;
    text-align: center;
    color: #fff;
}
.el-aside {
    background-color: #393d49;
    padding: 10px 0;
}
.el-footer {
    background-color: #b3c0d1;
    padding: 0 20px;
}
body > .el-container {
    margin-bottom: 40px;
}

.logo {
    width: 200px;
    float: left;
}
.back {
    width: 100px;
    float: right;
}
.el-menu {
    border: 0;
}
</style>