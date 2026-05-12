<script lang="ts">
  let { data } = $props<{
    data: {
      project: {
        slug: string;
        title: string;
        role: string;
        period: string;
        summary: string;
        description: string;
        tags: string[];
        heroMedia?: string;
        overview: string;
        contributions: string[];
      };
    };
  }>();

  let { project } = data;
</script>

<section class="bg-site text-primary min-h-screen py-16">
  <div class="mx-auto w-full max-w-6xl px-6 md:px-10 xl:px-16">
    <a href="/#projects" class="text-secondary inline-flex text-lg transition hover:text-white">
      ← Back to projects
    </a>

    <div class="mt-8 max-w-4xl">
      <p class="text-secondary text-lg">{project.role} · {project.period}</p>

      <h1 class="mt-3 text-5xl leading-[0.95] tracking-tight md:text-7xl">
        {project.title}
      </h1>

      <p class="text-secondary mt-6 text-2xl leading-[1.2] opacity-90">
        {project.summary}
      </p>
    </div>

    <div class="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4">
      <div class="flex h-[320px] items-center justify-center rounded-[1.5rem] bg-white/6 text-white/35 md:h-[440px]">
        Project media placeholder
      </div>
    </div>

    <div class="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <h2 class="text-3xl tracking-tight md:text-4xl">Overview</h2>
        <p class="text-secondary mt-5 text-lg leading-[1.4]">
          {project.overview}
        </p>

        <h2 class="mt-12 text-3xl tracking-tight md:text-4xl">Project description</h2>
        <p class="text-secondary mt-5 text-lg leading-[1.4]">
          {project.description}
        </p>
      </div>

      <aside class="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
        <h3 class="text-2xl tracking-tight">What I did</h3>

        <ul class="text-secondary mt-5 space-y-4 text-lg leading-[1.35]">
          {#each project.contributions as item}
            <li>{item}</li>
          {/each}
        </ul>

        <div class="mt-8">
          <h4 class="text-xl">Tags</h4>

          <div class="mt-4 flex flex-wrap gap-2">
            {#each project.tags as tag}
              <span class="rounded-full bg-white/6 px-3 py-1 text-sm text-white/70">
                {tag}
              </span>
            {/each}
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>