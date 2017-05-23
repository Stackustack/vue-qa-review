<template>
	<div id="app">
		<app-header></app-header>
		<el-row>
			<app-steps-list></app-steps-list>
			<app-core></app-core>
		</el-row>
	</div>
</template>

<script>
	import appHeader from './components/Header.vue'
	import appCore from './components/Core.vue'
	import appStepsList from './components/StepsList.vue'

	export default {
		components: {
			appHeader,
			appCore,
			appStepsList
		}
	}
</script>

<style>
 {
	border: red solid 1px;
}

body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
