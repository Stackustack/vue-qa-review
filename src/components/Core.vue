<template>
	<el-col :span="20">
        <div class="grid-content">
            <el-form :inline="true" :model="formInline">
                <el-form-item label="Reviewer">
                    <el-input v-model="formInline.user" placeholder="Provide your name here"></el-input>
                </el-form-item>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Query</el-button>
                </el-form-item>
            </el-form>
        </div>
	</el-col>		
</template>


<script>
	export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                }
            }
        }
	}
</script>

<style scoped>
    .el-form {
        border: red solid 1px;
        padding: 20px;
    }
</style>