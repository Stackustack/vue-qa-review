<template>
	<div>
		<el-row :gutter="20" id="buttonsContainer">
  			<el-col 
			  :span="6"
			  :offset="7">
			  	<el-button 
				  size="large" 
				  type="primary"
				  @click="reserveDevices">Reserve Selected Devices</el-button>
			</el-col>

			<el-col
				:span="3">
				<el-button 
					size="large"
					@click="resyncDevicesList">Resync</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		props: [
			'devicesSelected'
		],
		methods: {
			reserveDevices() {
				// TODO
				console.log(this.devicesSelected)
			},
			resyncDevicesList() {
				// TODO
				console.log('function call: resyncDevices')
			}
		}
	}
</script>

<style>
	#buttonsContainer {
		margin-top: 20px;
	}
</style>
