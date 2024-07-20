<template>
  <section>
    <div class="container grid md:grid md:cols-1">
      <div class="thumbnails">
        <div
          v-for="thumbnail in homepageData.thumbnails"
          :key="thumbnail.id"
          class="homepage-thumb"
          :style="thumbnail.style ? thumbnail.style : ''"
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

  <!-- THE VIDEO MODAL -->

  <div v-if="isModalOpen" class="modal" @click="closeModal()">
    <div class="modal-content">
      <button class="close-modal">
        <nuxt-icon
          name="modal/close_modal"
          filled
          @click.stop.prevent="closeModal()"
        />
      </button>
      <!-- VIDEO -->
      <video v-if="currentVideo" controls ref="videoPlayer" @click.stop.prevent>
        <source :src="currentVideo" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <!-- PLAY VIDEO BUTTON -->
      <button @click.stop.prevent="toggleVideo" class="video-button">
        <span v-if="!isPlaying">
          <!-- PLAY -->
          <svg
            width="30"
            height="30"
            fill="#b6b600"
            version="1.1"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 25c0-13.808 11.192-25 25-25s25 11.192 25 25-11.192 25-25 25-25-11.192-25-25zm35.959-2.5205a2.8846 2.8846 0 0 1 0 5.041l-14.367 7.9821a2.8846 2.8846 0 0 1-4.2846-2.5205v-15.964c0-2.1974 2.3615-3.5897 4.2846-2.5205z"
              clip-rule="evenodd"
              fill-rule="evenodd"
              stroke-width="2.5641"
            />
          </svg>

          <!-- PLAY -->
        </span>
        <span v-if="isPlaying">
          <!-- PAUSE -->
          <svg
            width="30"
            height="30"
            fill="#b6b600"
            version="1.1"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(-73.009 -106.87)">
              <path
                d="m73.009 131.87c0-13.808 11.192-25 25-25 13.808 0 25 11.192 25 25 0 13.808-11.192 25-25 25-13.808 0-25-11.192-25-25zm17.308-9.6154a1.9231 1.9231 0 0 0-1.9231 1.9231v15.385c0 1.0615 0.86154 1.923 1.9231 1.923h1.9231a1.9231 1.9231 0 0 0 1.9231-1.923v-15.385a1.9231 1.9231 0 0 0-1.9231-1.9231zm13.462 0a1.9231 1.9231 0 0 0-1.923 1.9231v15.385c0 1.0615 0.86154 1.923 1.923 1.923h1.9231a1.9231 1.9231 0 0 0 1.9231-1.923v-15.385a1.9231 1.9231 0 0 0-1.9231-1.9231z"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-width="2.5641"
              />
            </g>
          </svg>
          <!-- PAUSE -->
        </span>
        <!-- {{ isPlaying.value ? "Pause" : "Play" }} -->
      </button>
      <!-- PLAY VIDEO BUTTON -->
      <!-- VIDEO -->
    </div>
  </div>
  <!-- THE VIDEO MODAL -->
</template>

<script setup>
// GET THUMBNAIL DATA FROM A COMPOSABLE
const { homepageData } = useThumbNailData();
// GET THUMBNAIL DATA FROM A COMPOSABLE

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
const handleKeyDown = event => {
  if (event.key === "Escape" && isModalOpen.value) {
    closeModal();
  }
};
onMounted(() => {
  document.addEventListener("keydown", handleKeyDown);
});
onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyDown);
});
// Close modal function

const isPlaying = ref(false);
const videoPlayer = ref(null);

const toggleVideo = () => {
  const video = videoPlayer.value;

  if (isPlaying.value) {
    video.pause();
  } else {
    video.play();
  }

  isPlaying.value = !isPlaying.value;
};
</script>

<style lang="scss">
@import "@/assets/scss/partials/colours";
.thumbnail {
  margin-bottom: 20px;
}

.nuxt-icon svg {
  margin-bottom: 0;
  width: 30px;
  height: 30px;
  background-color: transparent;
}

.thumbnails {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

button.video-button {
  position: absolute;
  z-index: 100;
  right: 1rem;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #000;
  cursor: pointer;
  span {
    display: block;
  }
  &:hover {
    background-color: #fff;
  }
}

.modal {
  /* modal styles */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  background-color: #000000ab;
  backdrop-filter: blur(2px);
  .modal-content {
    position: absolute;
    z-index: 2001;
    max-width: 738px;
    width: calc(90% - 1rem);
    aspect-ratio: 16 / 8;
    padding: 0rem;
    background-color: transparent;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    transition-duration: 1000ms;
    border-radius: 0rem;
    button.close-modal {
      position: absolute;
      z-index: 2001;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      padding: 0;
      background-color: transparent;
      float: right;
      cursor: pointer;
    }
  }
}
</style>
