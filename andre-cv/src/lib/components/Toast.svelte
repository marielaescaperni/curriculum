<script lang="ts">
	import { onMount } from 'svelte';

	type Props = {
		kind: 'success' | 'error';
		message: string;
		onDismiss: () => void;
	};

	let { kind, message, onDismiss }: Props = $props();

	onMount(() => {
		if (kind !== 'success') return;
		const timeout = window.setTimeout(onDismiss, 6500);
		return () => window.clearTimeout(timeout);
	});
</script>

<div
	role={kind === 'error' ? 'alert' : 'status'}
	aria-live={kind === 'error' ? 'assertive' : 'polite'}
	class="pointer-events-auto flex w-full items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 text-[#111111] shadow-[0_16px_60px_rgba(17,17,17,0.18)] sm:min-w-80"
>
	<span aria-hidden="true" class={`material-symbols-rounded mt-0.5 text-2xl ${kind === 'success' ? 'text-[#22734B]' : 'text-[#B02C30]'}`}>
		{kind === 'success' ? 'check_circle' : 'error'}
	</span>
	<div class="min-w-0 flex-1">
		<p class="text-sm font-bold">{kind === 'success' ? 'Message sent!' : 'Message not sent'}</p>
		<p class="mt-1 text-sm leading-relaxed text-[#494641]">{message}</p>
	</div>
	<button
		type="button"
		onclick={onDismiss}
		aria-label="Dismiss notification"
		class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#111111] transition-colors hover:bg-[#F3F1EC] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111111]"
	>
		<span class="material-symbols-rounded" aria-hidden="true">close</span>
	</button>
</div>
