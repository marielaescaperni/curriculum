<script lang="ts">
type Variant = 'primary' | 'secondary' | 'terciary';

	type Props = {
		href: string;
		label: string;
		variant?: Variant;
		target?: '_blank' | '_self';
		rel?: string;
		onclick?: () => void;
	};

	let { href, label, variant = 'primary', target = '_self', rel, onclick }: Props = $props();
</script>

<a class={`button button-${variant}`} {href} {target} {rel} {onclick}>
	{label}
</a>

<style>
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-width: 180px;
		border-radius: 999px;
		padding: 1rem 2rem;
		font-size: 1rem;
		font-weight: 800;
		line-height: 1;
		transition:
			transform 240ms var(--ease-out-soft),
			background-color 240ms var(--ease-out-soft),
			color 240ms var(--ease-out-soft),
			box-shadow 240ms var(--ease-out-soft);
	}

	.button:hover {
		transform: translateY(-2px);
	}

	.button-primary {
		background: #111111;
		color: #ffffff;
	}

	.button-primary:hover {
		background: #a7e4ff;
		color: #147ca6;
		box-shadow: 0 18px 40px rgba(100, 199, 238, 0.28);
	}

	.button-secondary {
		background: #ffffff;
		color: #4abf9d;
	}

	.button-secondary:hover {
		background: #4abf9d;
		color: #ffffff;
		box-shadow: 0 18px 40px rgba(74, 191, 157, 0.26);
	}

	.button-terciary {
		background: transparent;
		color: #111111;
		border: 2px solid #111111;
	}

	.button-terciary:hover {
		background: transparent;
		color: #ffffff;
		border: 2px solid #ffffff;
		box-shadow: 0 18px 40px rgba(74, 191, 157, 0.26);
	}

	.button:focus-visible {
		outline: 3px solid rgba(100, 199, 238, 0.45);
		outline-offset: 4px;
	}

	@media (max-width: 480px) {
		.button {
			width: 100%;
		}
	}
</style>