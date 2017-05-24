<template>
    <div class="content-box">
		<el-table
    		:data="devices"
    		stripe
    		style="width: 100%">
    		<el-table-column
      			header-align="center"
				prop="index"
				label="Testing Device Code"
				width="200">
			</el-table-column>
			
			<el-table-column
				:filters="[{ text: 'Samsung', value: 'Samsung' }, { text: 'LG', value: 'LG' }]"
				:filter-method="filterByBrand"
				header-align="center"
				prop="brand"
				label="Brand">
			</el-table-column>

			<el-table-column
				header-align="center"
				prop="model"
				label="Model">
			</el-table-column>

			<el-table-column
				:filters="[{ text: '4.4.2', value: '4.4.2' }, { text: '5.0.0', value: '5.0.0' }]"
				:filter-method="filterByAndroidVersion"
				header-align="center"  
				prop="androidVersion"
				label="Android version">
			</el-table-column>

			<el-table-column
				header-align="center"
				prop="additionalNotes"
				label="Additional notes">
			</el-table-column>

			<el-table-column
				header-align="center"
				prop="status"
				label="Status">
				<template scope="scope">
					<el-tag
					:type="scope.row.status === 'Available' ? 'primary' : 'danger'"
					close-transition>{{scope.row.status}}</el-tag>
				</template>
			</el-table-column>
		</el-table>
    </div> 
</template>

<script>
	import importedDevices from './data.js'

    export default {
		data() {
			return {
				devices: importedDevices
			}
		},
		methods: {
			filterByAndroidVersion(value, row) {
				return row.androidVersion === value
			},
			filterByBrand(value, row) {
				return row.brand === value
			},
			startInfoMessage() {
				this.$notify.info({
					title: 'Small tip for you, my friend!',
					message: 'Click a Device to reserve it! :)'
				});
				console.log('shotsfired')
			}
		},
		created() {
			this.startInfoMessage()
		}
    }
</script>
