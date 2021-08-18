<template>
    <div class="login_container">
        <div class="login_box">
            <div class="login_title">i华农勤工后台管理</div>
            <!-- 登录主功能 -->
            <el-form class="login_form" :model="form" :rules="rules" ref="loginRef">
                <!-- 账号 -->
                <el-form-item prop="username">
                    <el-input
                        prefix-icon="el-icon-user"
                        placeholder="请输入账号"
                        v-model="form.username"
                    ></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input
                        show-password
                        prefix-icon="el-icon-lock"
                        placeholder="请输入密码"
                        v-model="form.password"
                    ></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="login_btn">
                    <el-button type="primary" @click="login" native-type="“submit">登录</el-button>
                    <el-button type="info" @click="resetLogin">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 表单的数据
            form: {
                username: "111",
                password: "123",
            },
            // 表单验证
            rules: {
                // 用户名
                username: [
                    {
                        required: true,
                        message: "请输入账号",
                        trigger: "blur",
                    },
                ],
                password: [
                    {
                        required: true,
                        message: "请输入密码",
                        trigger: "blur",
                    },
                ],
            },
        };
    },
    methods: {
        // 登录
        login() {
            this.$refs.loginRef.validate(async (valid) => {
                if (!valid) {
                    return;
                }
                // 没有数据库支持，前端验证，后期必须改成下面的数据库验证，要用await必须在上面(valid)前加async
                if (this.form.username !== "111") {
                    return this.$message.error("账号错误");
                }
                if (this.form.password !== "123") {
                    return this.$message.error("密码错误");
                }
                this.$message.success("登录成功");
                window.sessionStorage.setItem("cookie", this.form.username);
                this.$router.push("/index");
                // 和数据库交互，第一个是默认地址后+的分地址，第二个是传递的参数，post方法，res接收返回的data信息，data才是服务器返回的数据，可以直接打印出来看看
                // const { data: res } = await this.$http.post("login", this.form);
                // if (res.meta.status !== 200) {
                //     return this.$message.error("错了哦，这是一条错误消息");
                // }
                // console.log("登陆成功");
                // 保存token作为服务器登录成功的凭证
                // window.sessionStorage.setItem("token", res.data.token);
                // 跳转
                // this.$router.push("/home");
            });
        },
        // 重置
        resetLogin() {
            this.$refs.loginRef.resetFields();
        },
    },
};
</script>

<style scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}
.login_box {
    height: 300px;
    width: 450px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.login_title {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
}
.login_btn {
    float: right;
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
}
</style>
