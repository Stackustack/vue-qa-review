<template>
	<div class="sidebar">
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
					<router-link
						to="/testing_devices/poznan"
						tag="li">
						<el-menu-item index="2-1">Poznan</el-menu-item>
					</router-link>
					<el-menu-item index="2-2">More to come :)</el-menu-item>
				</el-menu-item-group>
			</el-submenu>

			<el-menu-item index="3">
				<router-link 
					to="/contact-me/why-the-heck-would-u-like-to-contact-me-anyways/you-creep/xDDDDD" 
					tag="li">
						<i class="el-icon-information"></i>Contact me
				</router-link>
			</el-menu-item>

			<el-menu-item index="4">
				<router-link 
					to="/funny-dogs" 
					tag="li">
						<i class="el-icon-more"></i>Funny dogs xD
				</router-link>
			</el-menu-item>
		</el-menu>	
	</div>
</template>

<script>
	export default {
		methods: {
			handleOpen() {
				// TODO
			},
			handleClose() {
				// TODO
			}
		}
	}
</script>


<style>
	.sidebar {
		border-radius: 2px;
		background-color: #EFF2F7;
	}
</style>



