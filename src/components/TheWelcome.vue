<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading><a target="_blank" href="https://www.youtube.com/playlist?list=OLAK5uy_lCSqZ13TOBmfWbBCvdvzSXaozLNqstubM">Youtube</a></template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading><a target="_blank" href="https://www.deezer.com/fr/album/314730517?utm_campaign=clipboard-generic&utm_source=user_sharing&utm_medium=mobile&utm_content=album-314730517&deferredFl=1">Deezer</a></template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading><a target="_blank" href="https://open.spotify.com/album/4pQ0RxxGJIxdShPYV21mjr">Spotify</a></template>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading><a target="_blank" href="https://music.apple.com/fr/album/0307/1621634952?fbclid=IwAR3jE7rNM-IoJxwakw2s03zBUrzZrKbhggHj88XCzUGiO8dVlre4N1IkTFw">Apple</a></template>
  </WelcomeItem>

</template>
