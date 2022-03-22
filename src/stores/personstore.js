import { writable } from 'svelte/store';

export let personData = writable([
	{
		urn: 'PER00000001',
		profilePicture: 'https://randomuser.me/api/portraits/men/52.jpg',
		firstName: 'John',
		lastName: 'Doe',
		address: '12 Front Street, Durham, Durham',
		postCode: 'DH1 1AA',
		dob: '24/08/1986'
	},
	{
		urn: 'PER00000002',
		profilePicture: 'https://randomuser.me/api/portraits/women/76.jpg',
		firstName: 'Deborah',
		lastName: 'Jones',
		address: '21 Hope Close, Pittington, Durham',
		postCode: 'DH4 1KT',
		dob: '27/08/1996'
	},
	{
		urn: 'PER00000003',
		profilePicture: 'https://randomuser.me/api/portraits/women/30.jpg',
		firstName: 'Sarah',
		lastName: 'Atkins',
		address: '64 Third Street, Peterlee, Durham',
		postCode: 'SR8 2YA',
		dob: '04/02/1966'
	},
	{
		urn: 'PER00000004',
		profilePicture: 'https://randomuser.me/api/portraits/men/76.jpg',
		firstName: 'Neil',
		lastName: 'Parkin',
		address: '31 Weldon Avenue, Easington, Durham',
		postCode: 'SR8 2YJ',
		dob: '24/08/1986'
	},
	{
		urn: 'PER00000005',
		profilePicture: 'https://randomuser.me/api/portraits/women/26.jpg',
		firstName: 'Natelie',
		lastName: 'Tinkler',
		address: '8 Rose Close, Consett, Durham',
		postCode: 'DH8 1TF',
		dob: '13/09/1982'
	},
	{
		urn: 'PER00000006',
		profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg',
		firstName: 'George',
		lastName: 'Harrison',
		address: '64 Third Street, Peterlee, Durham',
		postCode: 'SR8 2YA',
		dob: '24/08/1986'
	},
	{
		urn: 'PER00000007',
		profilePicture: 'https://randomuser.me/api/portraits/women/46.jpg',
		firstName: 'Ellen',
		lastName: 'Holmes',
		address: '21 Hope Close, Pittington, Durham',
		postCode: 'DH4 1KT',
		dob: '24/08/1986'
	},
	{
		urn: 'PER00000008',
		profilePicture: 'https://randomuser.me/api/portraits/men/24.jpg',
		firstName: 'Paul',
		lastName: 'Craggs',
		address: '31 Weldon Avenue, Easington, Durham',
		postCode: 'SR8 2YJ',
		dob: '24/08/1986'
	},
	{
		urn: 'PER00000009',
		profilePicture: 'https://randomuser.me/api/portraits/men/65.jpg',
		firstName: 'John',
		lastName: 'Jones',
		address: '8 Rose Close, Consett, Durham',
		postCode: 'DH8 1TF',
		dob: '24/08/1986'
	},
	{
		urn: 'PER00000010',
		profilePicture: 'https://randomuser.me/api/portraits/men/35.jpg',
		firstName: 'Oscar',
		lastName: 'Williams',
		address: '64 Third Street, Peterlee, Durham',
		postCode: 'SR8 2YA',
		dob: '24/08/1986'
	}
]);
