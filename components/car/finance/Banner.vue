<template>
  <!-- FINANCE BANNER-->
  <section id="finance-banner">
    <div class="container">
      <div class="finance-text">
        <h2>Finance a new or used car</h2>
        <p>
          Adjust the options to find the finance arrangement that suits you.
        </p>
      </div>
      <div class="finance-options">
        <CarFinanceSelectDepositOptions
          label="Deposit"
          id="Deposit"
          class="finance-select"
        />
        <CarFinanceSelectMilageOptions
          label="Mileage"
          id="Mileage"
          class="finance-select"
        />
        <CarFinanceSelectPeriodOptions
          label="Period"
          id="Period"
          class="finance-select"
        />
        <CarFinanceSelectBudgetOptions
          label="Budget"
          id="Budget"
          class="finance-select"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss">
section#finance-banner {
  visibility: hidden;
  height: 0;
  padding-top: 5.5rem;
  background-color: #282338;
  background-image: radial-gradient(
    circle at top left,
    #534f60 0%,
    #534f60 33%,
    #282338 33%,
    #282338 100%
  );
  @media (min-width: 768px) {
    visibility: visible;
    padding-top: 3rem;
    height: auto;
  }
  @media (min-width: 1024px) {
    visibility: visible;
    padding-top: 5.1rem;
  }
  .container {
    display: flex;
    .finance-text {
      width: 35%;
      height: 6rem;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 2.5rem;
      h2 {
        font-size: 0.85rem;
        line-height: 1;
        padding: 0;
        margin-bottom: 0.5rem;
      }
      p {
        font-size: 0.85rem;
        line-height: 1.25;
        margin: 0;
        max-width: 240px;
      }
    }
    .finance-options {
      display: flex;
      width: 65%;
      justify-content: flex-end;
      align-items: center;
      .finance-select {
        position: relative;
        width: calc(25% - 0rem);
        padding: 1rem 0rem;
        text-align: right;
        label {
          display: none;
        }
        select {
          // @media (min-width: 1024px) {
          //   appearance: none;
          // }
          width: calc(100% - 1rem);
          padding: 0.75rem 0.7rem;
          border: 0;
          border-radius: 0.76rem;
          background-color: #3f3a50;
          color: white;
          cursor: pointer;
          option {
            font-size: 0.9rem;
          }
        }
        @media (min-width: 1024px) {
          &:after {
            content: "Select";
            background: url("/assets/img/select-chevron.png");
            background-repeat: no-repeat;
            background-position-x: right;
            position: absolute;
            color: white;
            width: auto;
            height: 27px;
            right: 5px;
            top: 23px;
            padding-right: 30px;
            display: flex;
            align-items: center;
            pointer-events: none;
          }
        }
      }
    }
  }
}
</style>
