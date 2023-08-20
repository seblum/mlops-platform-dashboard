<template>
  <div class="content">
    <div class="iframe-container">
      <iframe :src=domain_route >
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  </div>
</template>



<script>
export default {
  name: 'App',
  data: () => ({
    domain_route: "http://"+process.env.VUE_APP_ML_PLATFORM_DOMAIN+"/jupyterhub"
  })
}
</script>
