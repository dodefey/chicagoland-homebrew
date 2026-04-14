<template>
  <div class="min-h-screen bg-stone-50 text-slate-900">
    <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <header
        class="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between"
      >
        <div class="space-y-1">
          <NuxtLink
            to="/"
            class="text-2xl font-bold tracking-tight text-slate-900 hover:text-emerald-800"
          >
            Chicagoland Homebrew
          </NuxtLink>
          <p class="text-sm text-slate-600">
            Clubs, events, and community across Chicagoland
          </p>
        </div>

        <nav class="flex flex-wrap gap-4 text-sm font-medium text-slate-700">
          <NuxtLink class="hover:text-emerald-800 hover:underline" to="/">
            Home
          </NuxtLink>
          <NuxtLink class="hover:text-emerald-800 hover:underline" to="/clubs">
            Clubs
          </NuxtLink>
          <NuxtLink class="hover:text-emerald-800 hover:underline" to="/events">
            Events
          </NuxtLink>
        </nav>
      </header>

      <NuxtPage />
    </div>
  </div>
</template>
