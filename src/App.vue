<template>
	<div id="app">
		<app-header></app-header>
		<el-row :gutter="5">
			<el-col :span="4">
				<app-sidebar></app-sidebar>
			</el-col>

			<el-col :span="20">
				<app-core></app-core>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import appHeader from './components/Header.vue'
	import appCore from './components/Core.vue'
	import appSidebar from './components/Sidebar.vue'

	export default {
		components: {
			appHeader,
			appCore,
			appSidebar
		}
	}
</script>

<style>
 {
	border: red solid 1px;
}

body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	background-color: #1F2D3D;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.grid-content {
    border-radius: 2px;
    background-color: #EFF2F7;
}
</style>
