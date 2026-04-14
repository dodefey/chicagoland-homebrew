<script setup lang="ts">
import clubs from "../../../data/clubs.json";

type Club = {
  slug: string;
  name: string;
  contactEmail?: string;
  contactNote?: string;
  socialLinks?: {
    website?: string;
    instagram?: string;
    facebook?: string;
    other?: string;
  };
  meetingTime?: string;
  meetingPlace?: string;
  firstTimeVisitorInfo?: string;
  description?: string;
};

const truncateDescription = (value?: string) => {
  if (!value) {
    return "";
  }

  return value.length > 180 ? `${value.slice(0, 177)}...` : value;
};

const clubList = (clubs as Club[]).sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <main class="space-y-10">
    <nav aria-label="Breadcrumb" class="text-sm text-slate-600">
      <NuxtLink class="hover:text-emerald-800 hover:underline" to="/"
        >Home</NuxtLink
      >
      <span class="mx-2 text-slate-400">/</span>
      <span>Clubs</span>
    </nav>

    <section class="max-w-3xl space-y-3">
      <h1 class="text-4xl font-bold tracking-tight text-slate-900">
        Homebrew clubs in Chicagoland
      </h1>
      <p class="text-lg leading-8 text-slate-700">
        Browse local homebrew clubs across Chicago and the surrounding suburbs.
        Each club page includes contact information, meeting details, and notes
        for first-time visitors.
      </p>
    </section>

    <section v-if="clubList.length">
      <ul class="grid gap-5">
        <li v-for="club in clubList" :key="club.slug">
          <article
            class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div class="space-y-2">
              <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
                <NuxtLink
                  :to="`/clubs/${club.slug}`"
                  class="transition hover:text-emerald-800 hover:underline"
                >
                  {{ club.name }}
                </NuxtLink>
              </h2>

              <p v-if="club.description" class="leading-7 text-slate-700">
                {{ truncateDescription(club.description) }}
              </p>
            </div>

            <dl class="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <div v-if="club.meetingTime">
                <dt class="font-semibold text-slate-900">Meeting time</dt>
                <dd>{{ club.meetingTime }}</dd>
              </div>

              <div v-if="club.meetingPlace">
                <dt class="font-semibold text-slate-900">Meeting place</dt>
                <dd>{{ club.meetingPlace }}</dd>
              </div>

              <div v-if="club.contactEmail" class="sm:col-span-2">
                <dt class="font-semibold text-slate-900">Contact</dt>
                <dd>{{ club.contactEmail }}</dd>
              </div>
            </dl>
          </article>
        </li>
      </ul>
    </section>

    <section
      v-else
      class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <p class="leading-7 text-slate-700">
        No club listings are available yet.
      </p>
    </section>
  </main>
</template>
