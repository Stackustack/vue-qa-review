<template>
	<div id="app" class="container">
		<h1>Hello World</h1>
		<p>
			<el-button @click.native="startHacking">Notification test</el-button>
		</p>
	</div>
</template>

<script>
	export default {
		methods: {
			startHacking () {
				this.$notify({
				title: 'It Works',
				message: 'Ok! Element-UI works fine, now I can move on to different shit :)',
				duration: 6000
				})
			}
		}
	}
</script>

<style>
body {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
  	color: #42b983;
}
</style>
