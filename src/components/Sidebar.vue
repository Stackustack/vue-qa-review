<template>
	<div class="grid-content">
		<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-document"></i>QA Review
				</template>
				<el-menu-item-group title="Basic Info">
					<el-menu-item index="1-1">Starter</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Stuff on Google Drive">
					<el-menu-item index="1-2">Project Documentation</el-menu-item>
					<el-menu-item index="1-3">QA Checklist</el-menu-item>
					<el-menu-item index="1-4">Functional Notes</el-menu-item>
					<el-menu-item index="1-5">Bugbash</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Other">
					<el-menu-item index="1-6">Pivotal / JIRA</el-menu-item>
					<el-menu-item index="1-7">QA Test Automation</el-menu-item>
					<el-menu-item index="1-8">1Password</el-menu-item>
					<el-menu-item index="1-9">Speed</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="Let's finish it!'">
					<el-menu-item index="1-10">Summary</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title"><i class="el-icon-menu"></i>Testing Devices</template>
				<el-menu-item-group title="List of devices in...">
					<el-menu-item index="1-1">Poznan</el-menu-item>
					<el-menu-item index="1-1">Warsaw</el-menu-item>
					<el-menu-item index="1-1">Gdansk</el-menu-item>
					<el-menu-item index="1-1">Krakow</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-menu-item index="3"><i class="el-icon-information"></i>Contact me</el-menu-item>
			<el-menu-item index="4"><i class="el-icon-more"></i>Funny dogs xD</el-menu-item>
		</el-menu>	
	</div>
</template>
