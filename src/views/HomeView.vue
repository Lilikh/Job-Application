<script setup>
import Hero from '@/components/Hero.vue'
import Homecards from '@/components/HomeCards.vue'
import JobListings from '@/components/JobsListings.vue'

</script>

<template>
  <Hero />
  <Homecards />
  <JobListings  :limit="3" :showButton="true" />
</template>
