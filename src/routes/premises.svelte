<script>
	import { premiseData } from '../stores/premisestore';
</script>

<svelte:head>
	<title>Nova - Premises</title>
</svelte:head>

<section>
	<h1>Premises</h1>

	<div class="dashboard-grid">
		<div class="grid-item-full">
			<div class="selection-row-titles">
				<div class="row">URN</div>
				<div class="row">Premise Type</div>
				<div class="row">Address</div>
				<div class="row">Postcode</div>
				<div class="row">Date Created</div>
				<div class="row">Officer</div>
			</div>
		</div>
	</div>

	{#each $premiseData as premiseDatas}
		<a href="#" class="card selection-row">
			<div class="row">{premiseDatas.urn}</div>
			<div class="row">{premiseDatas.premiseType}</div>
			<div class="row">{premiseDatas.address}</div>
			<div class="row">{premiseDatas.postCode}</div>
			<div class="row">{premiseDatas.dateCreated}</div>
			<div class="row">{premiseDatas.officer}</div>
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
	}

	.grid-item-full {
		grid-column: 1 / 5;
	}

	.selection-row {
		display: grid;
		grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr;
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
		grid-template-columns: 1fr 1fr 3fr 1fr 1fr 1fr;
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
