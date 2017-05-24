<template>
	<div id="app">
		<el-row>
			<el-col :span="24">
				<app-header></app-header>
			</el-col>
		</el-row>
		<el-row :gutter="5">
			<el-col :span="4">
				<app-sidebar></app-sidebar>
			</el-col>

			<el-col :span="20">
				<router-view></router-view>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import appHeader from './components/Header.vue'
	import appSidebar from './components/Sidebar.vue'

	export default {
		components: {
			appHeader,
			appSidebar
		}
	}
</script>

<style>
body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	background-color: #1F2D3D;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.content-box {
	padding: 20px;
	text-align: center;
	border-radius: 2px;
	background-color: #EFF2F7;
}
</style>
