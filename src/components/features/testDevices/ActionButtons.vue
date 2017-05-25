<template>
	<div>
		<el-row :gutter="20" id="buttonsContainer">
  			<el-col 
			  :span="6"
			  :offset="7">
			  	<el-button 
				  size="large" 
				  type="primary"
				  @click="reserveDevices">{{ reserveDevicesButtonText }}</el-button>
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
		data() {
			return {
				// FOR TESTING PURPOSES
			}
		},
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
			},
			countDevices() {
				return this.devicesSelected.length
			}
		},
		computed: {
			reserveDevicesButtonText() {
				if (this.devicesSelected.length == 0) {
					return "Select Devices First :)"
				} else if (this.devicesSelected.length == 1) {
					return "Reserve Selected Device"
				} else if (this.devicesSelected.length > 1) {
					const count = this.countDevices()
					return "Reserve " + count + " Selected Devices"
				}
			}
		}
	}
</script>

<style>
	#buttonsContainer {
		margin-top: 20px;
	}
</style>
