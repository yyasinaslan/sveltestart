<script lang="ts">
	import Nav from '$lib/components/nav.svelte';
	import User from '$lib/components/user.svelte';
	import '../lib/assets/bootstrap.scss';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Nav
	items={[
		{ route: '/', label: 'Home' },
		{ route: '/auth', label: 'Auth' },
		{ route: '/user', label: 'User' }
	]}
/>

<User username="yasin" />

<slot />
