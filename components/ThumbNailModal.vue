<template>
  <section>
    <div class="container grid md:grid md:cols-1">
      <div class="md:col-span-1">
        <!-- Social badges -->
        <SocialBadges />
        <!-- Headline -->
        <h1 class="site-headline">
          <span>Front-End Developer</span>
        </h1>

        <!-- Tech logos -->
        <TechBadges />
      </div>
    </div>
    <!--  -->
    <div class="container grid md:grid md:cols-1">
      <div class="thumbnails">
        <div
          v-for="thumbnail in homepageData.thumbnails"
          :key="thumbnail.id"
          class="homepage-thumb"
        >
          <NuxtLink
            :href="thumbnail.href"
            class="thumb-link"
            :title="thumbnail.title"
            @click.stop
          >
            <div class="mask" @click.stop="doThis">
              <!-- TITLE -->
              <h3>{{ thumbnail.title }}</h3>
              <!-- TITLE -->

              <!-- DESCRIPTION -->
              <p
                v-if="thumbnail.description"
                v-html="thumbnail.description"
              ></p>
              <!-- DESCRIPTION -->

              <!-- URI -->
              <span v-if="thumbnail.buttontext">
                <AppButtonLink
                  :text="thumbnail.buttontext"
                  :url="thumbnail.href"
              /></span>
              <!-- URI -->

              <!-- VIDEO MODAL BUTTON -->
              <ModalButton
                buttontext="<< Watch the video >>"
                @click="openModal(thumbnail.videolink)"
                v-if="thumbnail.videolink"
              >
                {{ thumbnail.buttontext }}
              </ModalButton>
              <!-- VIDEO MODAL BUTTON -->
            </div>
            <MoreInfo />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>

  <div v-if="isModalOpen" class="modal">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <video v-if="currentVideo" controls>
        <source :src="currentVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup>
// GET THUMBNAIL DATA FROM A COMPOSABLE
const { homepageData } = useThumbNailData();
// GET THUMBNAIL DATA FROM A COMPOSABLE

// JSON data
const thumbnails = ref([
  {
    id: "1",
    href: "/blog/dashboard-rebuild/",
    title: "Current Project",
    description: "Nuxt, Figma, Chartjs, Primevue, JSON data",
    buttontext: "Read More",
  },
  {
    id: "2",
    href: "/blog/car-dealer-template/",
    title: "CarDealer",
    description: "Nuxt, Figma, JSON data",
    buttontext: "Read More",
  },
  {
    id: "3",
    href: "/blog/portfolio-2024/",
    title: "Portfolio 2024",
    description: "Current Tech Breakdown",
    buttontext: "Read More",
  },
  {
    id: "4",
    href: "https://mhox-good-things.netlify.app/",
    title: "Get Online Week",
    description: "Nuxt, Microsite Template",
    buttontext: "Visit the website",
  },
  {
    id: "5",
    href: "/blog/graphics/",
    title: "Graphics",
    description: "From the Archive",
    buttontext: "Read More",
  },
  {
    id: "6",
    href: "/blog/emails/",
    title: "Email Templates",
    description: "From the Archive",
    buttontext: "Read More",
  },
  {
    id: "7",
    href: "",
    title: "Drone Footage",
    description: "",
    buttontext: "",
    videolink: "/img/homepage/mgwb_480.mp4",
  },
  {
    id: "8",
    href: "",
    title: "Animation",
    description: "",
    buttontext: "",
    videolink: "/img/homepage/ed209-video.mp4",
  },
]);

// Modal states
const isModalOpen = ref(false);
const currentVideo = ref(null);

// Open modal function
const openModal = videoLink => {
  currentVideo.value = videoLink;
  isModalOpen.value = true;
};

// Close modal function
const closeModal = () => {
  currentVideo.value = null;
  isModalOpen.value = false;
};
</script>

<style lang="scss">
@import "@/assets/scss/partials/colours";
.thumbnail {
  margin-bottom: 20px;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 600px;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.homepage-thumb {
  position: relative;
  width: calc(80% - 1rem);
  aspect-ratio: 4 / 2.6;
  margin: 0.5rem auto;
  background-color: #d5d5d5;
  border-radius: 0.2rem;
  transition: 1s;
  overflow: hidden;
  background-position: center;
  background-size: 101%;
  transition: 0.25s;
  @media (min-width: 400px) {
    width: calc(50% - 1rem);
    margin: 0.5rem auto 0.5rem 0.5rem;
  }
  @media (min-width: 768px) {
    width: calc(33.33% - 1rem);
    margin: 0.5rem 0.5rem;
  }
  &:hover {
    background-size: 110%;
  }
  &:nth-of-type(1) {
    background-image: url("/img/homepage/thumbnails/dashboard-light.png");
  }
  &:nth-of-type(2) {
    background-image: url("/img/homepage/thumbnails/cardealer.png");
  }
  &:nth-of-type(3) {
    background-image: url("/img/homepage/thumbnails/portfolio2024.png");
  }
  &:nth-of-type(4) {
    background-image: url("/img/homepage/thumbnails/good-things-thumb.png");
  }
  &:nth-of-type(5) {
    background-image: url("/img/homepage/thumbnails/portfolio-old.png");
  }
  &:nth-of-type(6) {
    background-image: url("/img/homepage/thumbnails/emails-thumb.png");
  }
  &:nth-of-type(7) {
    background-image: url("/img/homepage/thumbnails/drone-thumb.png");
  }
  > a {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    text-decoration: none;
    .mask {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -100%;
      width: 100%;
      height: 100%;
      color: $light-grey;
      transition: 0.15s;

      h3 {
        display: none;
        background-color: #000000;
        padding: 0.5rem;
        text-align: center;
        margin: 0 0 0.5rem 0;
        font-weight: bold;
        border-radius: 0.25rem;
        @media (min-width: 640px) {
          display: block;
        }
      }

      p {
        display: none;
        text-align: center;
        background-color: #000000;
        padding: 0.5rem;
        margin-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.2;
        border-radius: 0.25rem;
        @media (min-width: 640px) {
          display: block;
        }
      }
      .app-button {
        border-radius: 0.25rem;
      }
    }
    &:hover .mask {
      top: 0%;
      background-color: #ffffff95;
      backdrop-filter: blur(1px);
    }
  }
}
</style>
