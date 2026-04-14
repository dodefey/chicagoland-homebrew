<template>
  <main class="space-y-12">
    <nav aria-label="Breadcrumb" class="text-sm text-slate-600">
      <NuxtLink class="hover:text-emerald-800 hover:underline" to="/"
        >Home</NuxtLink
      >
    </nav>

    <section
      class="space-y-5 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <div class="max-w-3xl space-y-4">
        <h1 class="text-4xl font-bold tracking-tight text-slate-900">
          Find homebrew clubs and events across Chicagoland
        </h1>
        <p class="text-lg leading-8 text-slate-700">
          Explore local clubs, upcoming meetings, and ways to get involved in
          the Chicago homebrew community.
        </p>
      </div>

      <nav aria-label="Primary" class="flex flex-wrap gap-3">
        <NuxtLink
          class="inline-flex items-center rounded-md bg-emerald-800 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-900"
          to="/clubs"
        >
          Browse clubs
        </NuxtLink>
        <NuxtLink
          class="inline-flex items-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
          to="/events"
        >
          View events
        </NuxtLink>
      </nav>
    </section>

    <section class="max-w-3xl space-y-3">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
        About Chicagoland Homebrew
      </h2>
      <p class="leading-8 text-slate-700">
        Chicagoland Homebrew is a simple guide to local homebrew clubs and
        events across Chicago and the surrounding suburbs. Whether you’re
        looking for your first meeting or trying to get in touch with a club,
        this is a place to start.
      </p>
    </section>

    <section
      class="space-y-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
        Upcoming events
      </h2>
      <p class="leading-8 text-slate-700">Event calendar coming soon.</p>
    </section>

    <section
      class="space-y-3 rounded-2xl border border-amber-200 bg-amber-50 p-6"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
        New to homebrew clubs?
      </h2>
      <p class="leading-8 text-slate-700">
        Most clubs welcome first-time visitors, including newer brewers. Visit a
        club page to find contact information, meeting details, and notes for
        first-time attendees.
      </p>
    </section>
  </main>
</template>
