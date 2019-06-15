Ext.define('ExtjsSampleApp.view.aboutus.AboutUs',{
	xtype: 'AboutUs',
	cls: 'AboutUs',
	controller: {type: 'AboutUsViewController'},
	viewModel: {type: 'AboutUsViewModel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">
<br><br>
 About ExtJs Framework
</div>`
});