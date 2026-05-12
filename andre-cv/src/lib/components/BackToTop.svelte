<script lang="ts">
  let isVisible = $state(false);

  function handleScroll() {
    isVisible = window.scrollY > 500;
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  $effect(() => {
    if (typeof window === 'undefined') return;

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

{#if isVisible}
  <button
    type="button"
    class="back-to-top text-dark"
    aria-label="Go to top"
    onclick={scrollToTop}
  >
    <span class="material-symbols-rounded text-[24px]" aria-hidden="true">
      keyboard_arrow_up
    </span>
  </button>
{/if}

<style>
  .back-to-top {
    position: fixed;
    right: 1.5rem;
    bottom: 1.5rem;
    z-index: 40;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 9999px;
    background-image: linear-gradient(135deg, var(--gradient-green) 0%, var(--gradient-purple) 100%);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.24);
    transition:
      transform 180ms ease,
      box-shadow 180ms ease,
      opacity 180ms ease;
    cursor: pointer;
  }

  .back-to-top:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 34px rgba(0, 0, 0, 0.3);
  }

  .back-to-top:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.3);
    outline-offset: 4px;
  }
</style>