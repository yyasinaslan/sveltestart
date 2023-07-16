<script lang="ts">
	import '../lib/assets/bootstrap.scss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<nav>
	<a href="/">Home</a>
	<a href="/auth">Auth</a>
	<a href="/user">User</a>
</nav>

<slot />
