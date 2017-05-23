<template>
	<div id="app">
		<app-header></app-header>
		<el-row :gutter="5">
			<app-sidebar></app-sidebar>
			<app-core></app-core>
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
