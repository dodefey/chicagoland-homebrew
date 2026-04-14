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

const route = useRoute();

const club = (clubs as Club[]).find(
  (entry) => entry.slug === String(route.params.slug),
);

if (!club) {
  throw createError({
    statusCode: 404,
    statusMessage: "Club not found",
  });
}
</script>

<template>
  <main v-if="club" class="space-y-10">
    <nav aria-label="Breadcrumb" class="text-sm text-slate-600">
      <NuxtLink class="hover:text-emerald-800 hover:underline" to="/"
        >Home</NuxtLink
      >
      <span class="mx-2 text-slate-400">/</span>
      <NuxtLink class="hover:text-emerald-800 hover:underline" to="/clubs"
        >Clubs</NuxtLink
      >
      <span class="mx-2 text-slate-400">/</span>
      <span>{{ club.name }}</span>
    </nav>

    <section
      class="space-y-4 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <p>
        <NuxtLink
          class="text-sm font-medium text-emerald-800 hover:underline"
          to="/clubs"
        >
          ← Back to all clubs
        </NuxtLink>
      </p>

      <div class="max-w-3xl space-y-4">
        <h1 class="text-4xl font-bold tracking-tight text-slate-900">
          {{ club.name }}
        </h1>

        <p v-if="club.description" class="leading-8 text-slate-700">
          {{ club.description }}
        </p>
      </div>
    </section>

    <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
        Details
      </h2>

      <dl
        class="mt-4 grid gap-4 text-sm leading-7 text-slate-700 sm:grid-cols-2"
      >
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

        <div v-if="club.contactNote" class="sm:col-span-2">
          <dt class="font-semibold text-slate-900">Contact note</dt>
          <dd>{{ club.contactNote }}</dd>
        </div>
      </dl>
    </section>

    <section
      v-if="club.firstTimeVisitorInfo"
      class="rounded-2xl border border-amber-200 bg-amber-50 p-6"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
        First-time visitors
      </h2>
      <p class="mt-3 leading-8 text-slate-700">
        {{ club.firstTimeVisitorInfo }}
      </p>
    </section>

    <section
      v-if="club.socialLinks"
      class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 class="text-2xl font-semibold tracking-tight text-slate-900">
        Links
      </h2>
      <ul class="mt-4 grid gap-2 text-sm text-slate-700">
        <li v-if="club.socialLinks.website">
          <a
            :href="club.socialLinks.website"
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-800 hover:underline"
          >
            Website
          </a>
        </li>
        <li v-if="club.socialLinks.instagram">
          <a
            :href="club.socialLinks.instagram"
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-800 hover:underline"
          >
            Instagram
          </a>
        </li>
        <li v-if="club.socialLinks.facebook">
          <a
            :href="club.socialLinks.facebook"
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-800 hover:underline"
          >
            Facebook
          </a>
        </li>
        <li v-if="club.socialLinks.other">
          <a
            :href="club.socialLinks.other"
            target="_blank"
            rel="noopener noreferrer"
            class="text-emerald-800 hover:underline"
          >
            More info
          </a>
        </li>
      </ul>
    </section>
  </main>
</template>
