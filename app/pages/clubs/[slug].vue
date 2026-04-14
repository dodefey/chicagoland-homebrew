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
  <main v-if="club">
    <nav aria-label="Breadcrumb">
      <NuxtLink to="/">Home</NuxtLink>
      <span> / </span>
      <NuxtLink to="/clubs">Clubs</NuxtLink>
      <span> / </span>
      <span>{{ club.name }}</span>
    </nav>

    <section>
      <p>
        <NuxtLink to="/clubs">← Back to all clubs</NuxtLink>
      </p>

      <h1>{{ club.name }}</h1>

      <p v-if="club.description">
        {{ club.description }}
      </p>
    </section>

    <section>
      <h2>Details</h2>

      <p v-if="club.meetingTime">
        <strong>Meeting time:</strong> {{ club.meetingTime }}
      </p>

      <p v-if="club.meetingPlace">
        <strong>Meeting place:</strong> {{ club.meetingPlace }}
      </p>

      <p v-if="club.contactEmail">
        <strong>Contact:</strong> {{ club.contactEmail }}
      </p>

      <p v-if="club.contactNote">
        <strong>Contact note:</strong> {{ club.contactNote }}
      </p>
    </section>

    <section v-if="club.firstTimeVisitorInfo">
      <h2>First-time visitors</h2>
      <p>{{ club.firstTimeVisitorInfo }}</p>
    </section>

    <section v-if="club.socialLinks">
      <h2>Links</h2>
      <ul>
        <li v-if="club.socialLinks.website">
          <a :href="club.socialLinks.website" target="_blank">Website</a>
        </li>
        <li v-if="club.socialLinks.instagram">
          <a :href="club.socialLinks.instagram" target="_blank">Instagram</a>
        </li>
        <li v-if="club.socialLinks.facebook">
          <a :href="club.socialLinks.facebook" target="_blank">Facebook</a>
        </li>
        <li v-if="club.socialLinks.other">
          <a :href="club.socialLinks.other" target="_blank">More info</a>
        </li>
      </ul>
    </section>
  </main>
</template>
