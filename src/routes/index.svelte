<script>
	export let user = 'John Smith';
</script>

<svelte:head>
	<title>Nova - Dashboard</title>
</svelte:head>

<section>
	<p class="welcome-message">Good morning {user}</p>
	<h1>Welcome Back</h1>
	<div class="dashboard-grid">
		<div class="dahsboard-col">
			<h3>Premise Licence Breakdown</h3>
			<div class="dashboard-grid-premises">
				<a href="/">
					<div class="card">
						<i class="bx bx-file-blank blue-icon" />
						<div class="card-text">
							<h3>Total Licences</h3>
							<p><span>204</span></p>
						</div>
					</div>
				</a>

				<a href="/">
					<div class="card">
						<i class="bx bx-check green-icon" />
						<div class="card-text">
							<h3>Licence Reviewed</h3>
							<p><span>141</span></p>
						</div>
					</div>
				</a>

				<a href="/">
					<div class="card">
						<i class="bx bx-time red-icon" />
						<div class="card-text">
							<h3>Review Needed</h3>
							<p><span>63</span></p>
						</div>
					</div>
				</a>
			</div>
			<h3>Key locations</h3>
			<div class="dashboard-grid-location">
				<a href="/">
					<div class="card key-location">
						<div class="icon-wrap">
							<i class="bx bx-buildings" />
						</div>
						<div class="card-text">
							<h3>Total Licences</h3>
							<p><span>204</span></p>
						</div>
					</div>
				</a>
				<a href="/">
					<div class="card key-location">
						<div class="icon-wrap">
							<i class="bx bx-buildings" />
						</div>
						<div class="card-text">
							<h3>Total Licences</h3>
							<p><span>204</span></p>
						</div>
					</div>
				</a>
				<a href="/">
					<div class="card key-location">
						<div class="icon-wrap">
							<i class="bx bx-buildings" />
						</div>
						<div class="card-text">
							<h3>Total Licences</h3>
							<p><span>204</span></p>
						</div>
					</div>
				</a>
			</div>

			<h3>Team Tasks</h3>
			<a href="/">
				<div class="card">
					<h2>Card</h2>
				</div>
			</a>
		</div>

		<div class="dashboard-col">
			<h3>Team Tasks</h3>
			<a href="/">
				<div class="card full-height">
					<div class="pie animate" style="--p:70;--c:lightgreen">70%</div>
					<div class="card-text">
						<h2>Completed</h2>
						<p>23</p>
					</div>
					<div class="card-text">
						<h2>Overdue</h2>
						<p>8</p>
					</div>
				</div>
			</a>
		</div>
	</div>
</section>

<style>
	.welcome-message {
		font-size: var(--baseFontSize);
		margin-bottom: 0.2rem;
	}
	.dashboard-grid {
		display: grid;
		grid-template-columns: 1fr 0.5fr;
		grid-gap: 1rem;
		height: 100%;
		margin: 2rem 0;
	}

	.dashboard-grid-premises {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin: 1rem 0;
	}

	.dashboard-grid-location {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin: 1rem 0;
	}

	.card {
		background: #fff;
		color: var(textColor);
		border-radius: var(--borderRadius);
		padding: 20px;
		margin: 20px;
		box-shadow: var(--shadow-2);
		display: flex;
		align-items: flex-start;
		width: 15rem;
	}

	.pie-charts {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px;
		margin: 20px;
	}

	.key-location {
		background: #fff;
		color: var(textColor);
		border-radius: var(--borderRadius);
		padding: 20px;
		margin: 20px;
		box-shadow: var(--shadow-2);
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		width: 15rem;
		height: 10rem;
		position: relative;
	}

	.icon-wrap {
		position: absolute;
		top: -1.5rem;
		left: 5rem;
		width: 5rem;
		height: 5rem;
		background-color: var(--blue);
		border-radius: var(--borderRadius);
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-wrap i {
		font-size: 1.5rem;
		color: #fff;
	}

	.card:hover {
		box-shadow: var(--shadow-3);
	}

	.bx {
		font-size: 1.5rem;
	}

	.card-text {
		margin-left: 20px;
	}

	.card-text h3 {
		font-size: 0.9rem;
		font-weight: 500;
		margin: 0;
	}

	.card-text p span {
		font-size: 1.5rem;
		font-weight: 800;
		margin: 0;
	}

	.red-icon {
		background-color: rgba(255, 84, 112, 0.2);
		color: var(--red);
		padding: 0.8rem;
		border-radius: 50%;
		box-shadow: var(--shadow-2);
	}

	.green-icon {
		background-color: rgba(0, 235, 200, 0.2);
		color: var(--green);
		padding: 0.8rem;
		border-radius: 50%;
		box-shadow: var(--shadow-2);
	}

	.blue-icon {
		background-color: rgba(61, 91, 241, 0.2);
		color: var(--blue);
		padding: 0.8rem;
		border-radius: 50%;
		box-shadow: var(--shadow-2);
	}

	.full-height {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	@property --p {
		syntax: '<number>';
		inherits: true;
		initial-value: 1;
	}

	.pie {
		--p: 20;
		--b: 22px;
		--c: darkred;
		--w: 150px;

		width: var(--w);
		aspect-ratio: 1;
		position: relative;
		display: inline-grid;
		margin: 5px;
		place-content: center;
		font-size: 25px;
		font-weight: bold;
		font-family: sans-serif;
	}
	.pie:before,
	.pie:after {
		content: '';
		position: absolute;
		border-radius: 50%;
	}
	.pie:before {
		inset: 0;
		background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b) var(--b) no-repeat,
			conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
		-webkit-mask: radial-gradient(
			farthest-side,
			#0000 calc(99% - var(--b)),
			#000 calc(100% - var(--b))
		);
		mask: radial-gradient(farthest-side, #0000 calc(99% - var(--b)), #000 calc(100% - var(--b)));
	}
	.pie:after {
		inset: calc(50% - var(--b) / 2);
		background: var(--c);
		transform: rotate(calc(var(--p) * 3.6deg)) translateY(calc(50% - var(--w) / 2));
	}
	.animate {
		animation: p 1s 0.5s both;
	}

	@keyframes p {
		from {
			--p: 0;
		}
	}
</style>
