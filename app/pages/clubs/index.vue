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

const clubList = (clubs as Club[]).sort((a, b) => a.name.localeCompare(b.name));
</script>

<template>
  <main>
    <nav aria-label="Breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span> / </span>
      <span>Clubs</span>
    </nav>

    <section>
      <h1>Homebrew clubs in Chicagoland</h1>
      <p>
        Browse local homebrew clubs across Chicago and the surrounding suburbs.
        Each club page includes contact information, meeting details, and notes
        for first-time visitors.
      </p>
    </section>

    <section v-if="clubList.length">
      <ul>
        <li v-for="club in clubList" :key="club.slug">
          <article>
            <h2>
              <NuxtLink :to="`/clubs/${club.slug}`">
                {{ club.name }}
              </NuxtLink>
            </h2>

            <p v-if="club.meetingTime">
              <strong>Meeting time:</strong> {{ club.meetingTime }}
            </p>

            <p v-if="club.meetingPlace">
              <strong>Meeting place:</strong> {{ club.meetingPlace }}
            </p>

            <p v-if="club.description">
              {{ club.description.slice(0, 140) }}...
            </p>

            <p v-if="club.contactEmail">
              <strong>Contact:</strong> {{ club.contactEmail }}
            </p>
          </article>
        </li>
      </ul>
    </section>

    <section v-else>
      <p>No club listings are available yet.</p>
    </section>
  </main>
</template>
