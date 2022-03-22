<script>
	// TODO bring in from other component
	const user = 'John Smith';
</script>

<nav>
	<div class="sidebar-top">
		<span class="shrink-btn">
			<i class="bx bx-chevron-left" />
		</span>
		<img src="/img/logo.png" class="logo" alt="Nova Logo" />
		<h3 class="hide logo-text">Nova</h3>
	</div>

	<div class="search">
		<i class="bx bx-search" />
		<input type="text" class="hide" placeholder="Quick Search ..." />
	</div>

	<div class="sidebar-links">
		<ul>
			<div class="active-tab" />
			<li class="tooltip-element" data-tooltip="0">
				<a href="/" class="active" data-active="0">
					<div class="icon">
						<i class="bx bx-tachometer" />
						<i class="bx bxs-tachometer" />
					</div>
					<span class="link hide">Dashboard</span>
				</a>
			</li>
			<li class="tooltip-element" data-tooltip="1">
				<a href="premises" data-active="1">
					<div class="icon">
						<i class="bx bx-buildings" />
						<i class="bx bxs-buildings" />
					</div>
					<span class="link hide">Premises</span>
				</a>
			</li>
			<li class="tooltip-element" data-tooltip="2">
				<a href="person" data-active="2">
					<div class="icon">
						<i class="bx bx-face" />
						<i class="bx bxs-face" />
					</div>
					<span class="link hide">Person</span>
				</a>
			</li>
			<li class="tooltip-element" data-tooltip="3">
				<a href="reports" data-active="3">
					<div class="icon">
						<i class="bx bx-bar-chart-square" />
						<i class="bx bxs-bar-chart-square" />
					</div>
					<span class="link hide">Reports</span>
				</a>
			</li>
			<div class="tooltip">
				<span class="show">Dashboard</span>
				<span>Premises</span>
				<span>Person</span>
				<span>Reports</span>
			</div>
		</ul>

		<h4 class="hide">Shortcuts</h4>

		<ul>
			<li class="tooltip-element" data-tooltip="0">
				<a href="tasks" data-active="4">
					<div class="icon">
						<i class="bx bx-notepad" />
						<i class="bx bxs-notepad" />
					</div>
					<span class="link hide">Tasks</span>
				</a>
			</li>
			<li class="tooltip-element" data-tooltip="1">
				<a href="help" data-active="5">
					<div class="icon">
						<i class="bx bx-help-circle" />
						<i class="bx bxs-help-circle" />
					</div>
					<span class="link hide">Help</span>
				</a>
			</li>
			<li class="tooltip-element" data-tooltip="2">
				<a href="settings" data-active="6">
					<div class="icon">
						<i class="bx bx-cog" />
						<i class="bx bxs-cog" />
					</div>
					<span class="link hide">Settings</span>
				</a>
			</li>
			<div class="tooltip">
				<span class="show">Tasks</span>
				<span>Help</span>
				<span>Settings</span>
			</div>
		</ul>
	</div>

	<div class="sidebar-footer">
		<a href="/" class="account tooltip-element" data-tooltip="0">
			<i class="bx bx-user" />
		</a>
		<div class="admin-user tooltip-element" data-tooltip="1">
			<div class="admin-profile hide">
				<img src="./img/face-1.png" alt="User Profile" />
				<div class="admin-info">
					<h3>{user}</h3>
					<h5>0247</h5>
				</div>
			</div>
			<a href="/" class="log-out">
				<i class="bx bx-log-out" />
			</a>
		</div>
		<div class="tooltip">
			<span class="show">{user}</span>
			<span>Logout</span>
		</div>
	</div>
</nav>
