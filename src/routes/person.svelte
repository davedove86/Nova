<script>
	import { personData } from '../stores/personstore';
</script>

<svelte:head>
	<title>Nova - Person</title>
</svelte:head>

<section>
	<h1>Person</h1>

	<div class="dashboard-grid">
		<div class="grid-item-full">
			<div class="selection-row-titles">
				<div class="row">Profile Image</div>
				<div class="row">URN</div>
				<div class="row">First Name</div>
				<div class="row">Last Name</div>
				<div class="row">Address</div>
				<div class="row">Postcode</div>
				<div class="row">DOB</div>
			</div>
		</div>
	</div>

	{#each $personData as personDatas}
		<a href="#" class="card selection-row">
			<img class="person-avatar" src={personDatas.profilePicture} alt="Person Icon" />
			<div class="row">{personDatas.urn}</div>
			<div class="row">{personDatas.firstName}</div>
			<div class="row">{personDatas.lastName}</div>
			<div class="row">{personDatas.address}</div>
			<div class="row">{personDatas.postCode}</div>
			<div class="row">{personDatas.dob}</div>
		</a>
	{/each}
</section>

<style>
	.dashboard-grid {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 16px;
		margin-bottom: 26px;
	}

	.card {
		box-shadow: var(--shadow-1);
		background-color: #fff;
		border-radius: 5px;
		padding: 16px;
		align-items: center;
	}

	.grid-item-full {
		grid-column: 1 / 5;
	}

	.selection-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 4fr 1fr 1fr;
		grid-gap: 1rem;
		color: var(--bodyFont);
		text-decoration: none;
		margin-bottom: 1rem;
	}

	.selection-row:hover {
		background-color: var(--blue-light);
		color: #fff;
		box-shadow: var(--shadow-2);
	}

	.selection-row-titles {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 4fr 1fr 1fr;
		grid-gap: 1rem;
		text-decoration: none;
		margin-bottom: 1rem;
		box-shadow: var(--shadow-1);
		background-color: var(--darkGrey);
		color: #fff;
		font-weight: 700;
		border-radius: 5px;
		padding: 16px;
	}

	.person-avatar {
		width: 5rem;
		border-radius: var(--borderRadius);
	}

	@media screen and (max-width: 1000px) {
		.dashboard-grid {
			display: flex;
			flex-direction: column;
			margin-bottom: 16px;
		}

		.selection-row {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
		}

		.selection-row-titles {
			display: none;
		}
	}
</style>
