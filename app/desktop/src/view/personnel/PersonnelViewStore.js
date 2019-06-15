Ext.define('ExtjsSampleApp.view.personnel.PersonnelViewStore', {
	extend: 'Ext.data.Store',
	alias: 'store.personnelviewstore',
	fields: [
		'name', 'email', 'phone'
	],
	data: { items: [
		{ name: 'ramkiran',   email: "ramki@gmail.com", phone: "555-111-1111" },
		{ name: 'kiran', email: "kiran@gmail.com",  phone: "555-222-2222" },
		{ name: 'shreya',     email: "shreya@gmail.com",    phone: "555-333-3333" },
		{ name: 'trisha',       email: "trisha@gmail.com",        phone: "555-444-4444" } 
	]},
	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
