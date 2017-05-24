<template>
    <div class="grid-content">
        <el-row>
            <el-col :span="20">
                <el-form :inline="true" :model="formInline" label-width="150px">
                    <el-form-item>
                        <el-input v-model="formInline.user" placeholder="Provide your full name here"></el-input>
                    </el-form-item>

                    <el-date-picker 
                        v-model="value1" 
                        type="date" 
                        placeholder="Pick a day"
                        :pickerOptions="pickerOptions">
                    </el-date-picker>
                </el-form>
            </el-col>
            <el-col :span="4">
                <el-button id="go-to-next-step-btn">Go to the next Step</el-button> 
            </el-col>
        </el-row>               
    </div>
</template>


<script>
	export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                pickerOptions: {
                    firstDayOfWeek: 1
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

    .el-button {
        margin: auto;
        display: block;
    }
</style>