Ext.define('ExtjsSampleApp.view.ContactUs.ContactUs',{
	xtype: 'ContactUs',
	cls: 'ContactUs',
	controller: {type: 'ContactUsViewController'},
	viewModel: {type: 'ContactUsViewModel'},
	requires: [],
	extend: 'Ext.Container',
  scrollable: true,
  html: `<div style="user-select: text !important;">
<br><br>
 Contact Ramkiran @ contactramkiran@gmail.com
</div>`
});