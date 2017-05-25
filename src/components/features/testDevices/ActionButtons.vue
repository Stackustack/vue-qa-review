<template>
	<div>
		<el-row :gutter="20" id="buttonsContainer">
  			<el-col 
			  :span="6"
			  :offset="7">
			  	<el-button size="large" type="primary">Reserve Selected Devices</el-button>
			</el-col>

			<el-col
				:span="3">
				<el-button size="large">Resync</el-button>
			</el-col>
		</el-row>
	</div>
</template>

<style>
	#buttonsContainer {
		margin-top: 20px;
	}
</style>
