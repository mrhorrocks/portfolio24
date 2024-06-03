<script setup>
import { ref } from "vue";

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

defineProps({
  width: {
    type: String,
    default: "100px",
  },
  height: {
    type: String,
    default: "100px",
  },
  src: {
    String,
    default: "/",
  },
  type: {
    String,
    default: "video/mp4",
  },
});
</script>

<template>
  <div>
    <!-- <video ref="videoPlayer" :width="width" :height="height" muted loop> -->
    <video ref="videoPlayer" controls :width="width" :height="height">
      <source :src="src" :type="type" />
      Your browser does not support the video tag.
    </video>
    <button @click="toggleVideo" class="video-button">
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
  </div>
</template>

<style lang="scss">
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
</style>
