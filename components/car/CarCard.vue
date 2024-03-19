<template>
  <article v-for="item in carsData.data" :key="item.id" class="car-card">
    <a href="#">
      <!-- Listings -->
      <div class="listing-tag">
        <span>{{ item.advert_classification }}</span>
      </div>

      <!-- Images -->
      <div class="image-container">
        <img :src="item.media_urls[0].thumb" alt="Car Image" />
        <img :src="item.media_urls[1].thumb" alt="Car Image" />
        <img :src="item.media_urls[2].thumb" alt="Car Image" />
        <img src="@/assets/img/placeholder.jpg" alt="Car Image" />
        <img src="@/assets/img/placeholder.jpg" alt="Car Image" />
        <img src="@/assets/img/placeholder.jpg" alt="Car Image" />
        <img src="@/assets/img/placeholder.jpg" alt="Car Image" />
      </div>

      <!-- Car Details -->
      <div class="car-details">
        <!-- Car Name -->
        <p class="car-name">{{ item.name }}</p>

        <CarFavouriteStar class="favorite" />

        <p class="short-spec">{{ item.derivative }}</p>

        <div class="spec-tags">
          <span>{{ item.odometer_value }} miles</span>
          <span>{{ item.fuel_type }}</span>
          <span>{{ item.transmission }}</span>
          <span>{{ item.body_type }}</span>
        </div>

        <div class="pricing">
          <p class="ppm">
            <span>£{{ item.monthly_price }}</span> /mo(PC)
          </p>
          <p class="total-price">
            £{{ item.price }}
            <button @click.stop.prevent="calculateFinance">
              Calculate finance
            </button>
          </p>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
import carsData from "~/assets/data/mock-vehicle-search-response.json";

export default {
  data () {
    return {
      carsData,
    };
  },
  methods: {
    calculateFinance () {
      console.log("Finance button clicked");
      // e.preventDefault();
    },
    loadAlternateImage (e) {
      // e.target.src = '~/assets/img/alternate-image.jpg';
      console.log("Component added");
      return;
    },
  },
};
</script>

<style lang="scss" scoped>
.car-card {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 320px;
  margin-bottom: 0.5rem;
  border-radius: 0rem;
  overflow: hidden;
  background-color: #ffffff;
  line-height: 1rem;
  @media only screen and (min-width: 768px) {
    .car-card {
      max-width: 48%;
      border-radius: 1rem;
      margin: 0% 1% 2% 1%;
      min-width: inherit;
      box-shadow: 0px 6px 20px #00000040;
    }
  }
  a {
    text-decoration: none;
    color: initial;
  }
  .listing-tag {
    position: absolute;
    top: 90px;
    right: 35px;
    span {
      background-color: #3f3a50;
      line-height: 27px;
      padding: 3px 10px;
      margin: 0 5px 0 5px;
      border: 1px solid rgb(255, 255, 255, 0.25);
      color: #ffffff;
      border-radius: 0.6rem;
      text-transform: lowercase;
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }
  .image-container {
    position: relative;
    width: -moz-max-content;
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
    margin-left: 0.25rem;
    img {
      width: 108px;
      border-radius: 1rem;
      margin-right: 0.5rem;
    }
  }
  .car-details {
    position: relative;
    padding: 0.75rem 0.5rem 0.5rem 0.5rem;
    p {
      margin: 0;
      font-size: 0.75rem;
      line-height: 1.45;
      &.car-name {
        width: 70%;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.875rem;
        line-height: 1.25;
        font-weight: 500;
      }
    }
    .favorite {
      position: absolute;
      top: 13px;
      right: 10px;
      height: 20px;
      width: 20px;
    }
    span {
      font-size: 1rem;
      font-weight: 600;
    }
    .spec-tags {
      margin-top: 1rem;
      width: 50%;
      float: left;
      span {
        display: inline-block;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 13px;
        padding: 0px 3px 0px 0px;
        margin: 0 3px 0px 0px;
        color: #55595d;
        border-radius: 0px;
        border-right: 1px solid rgb(85, 89, 93, 0.25);
        &:last-child {
          border: 0;
        }
      }
    }
    .pricing {
      margin-top: 1rem;
      width: 50%;
      float: right;
      text-align: right;
      .total-price button {
        background-color: transparent;
        border: none;
        font-size: 0.75rem;
        color: #7572ff;
        padding: 0;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
@media only screen and (min-width: 768px) {
  .car-card {
    max-width: 48%;
    border-radius: 1rem;
    margin: 0% 1% 2% 1%;
    min-width: inherit;
    box-shadow: 0px 6px 20px #00000040;
    .listing-tag {
      position: absolute;
      top: 5px;
      left: 5px;
      z-index: 1;
    }
    .image-container {
      position: relative;
      width: max-content;
      width: 100%;
      margin-left: 0rem;
      img {
        width: 100%;
        border-radius: 0;
      }
    }
    .car-details {
      .spec-tags {
        position: absolute;
        top: -36px;
        left: 0;
        width: 100%;
        margin: 0;
        display: flex;
        flex-direction: row;
        span {
          display: flex;
          background-color: #3f3a50;
          font-size: 0.7rem;
          font-weight: 300;
          padding: 2px 10px;
          margin: 0 0 0 7px;
          border: 1px solid rgb(255, 255, 255, 0.25);
          color: #ffffff;
          border-radius: 6px;
          &:last-child {
            border: 1px solid #ffffff40;
          }
        }
      }
      p {
        &.car-name {
          font-size: 1rem;
        }
      }
      .pricing {
        width: 60%;
        float: left;
        text-align: left;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        .total-price a {
          color: #7572ff;
          margin-left: 5px;
        }
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .car-card {
    .image-container {
      img {
        width: 100%;
      }
    }
  }
}
@media only screen and (min-width: 1290px) {
  .car-card {
    max-width: 31.33333%;
    margin: 0 1% 2% 1%;
  }
}
</style>
