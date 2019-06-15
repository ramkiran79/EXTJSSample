Ext.define('ExtjsSampleApp.view.home.HomeView',{
	xtype: 'homeview',
	cls: 'homeview',
	controller: {type: 'homeviewcontroller'},
	viewModel: {type: 'homeviewmodel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">Welcome Ramkiran.
<br><br>
 This is the Demo by Ramkiran using ExtJS.
</div>`
});