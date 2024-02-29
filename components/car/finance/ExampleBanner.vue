<template>
  <section>
    <div class="finance-example">
      <div class="finance-example-banner">
        <p>
          <strong>Representative example:</strong>
          Borrowing £11,790.00 over 4 years with a representative APR of 7.9 %,
          an annual interest rate of 4.08 % (Fixed) and a deposit of £500.00,
          the amount payable would be £273.59 per month, with a total cost of
          credit of £1,843.32 and a total amount payable of £13,633.32.
        </p>
        <CarDisclosure
          title="Show Breakdown"
          class="finance-breakdown"
          :isOpen="true"
        >
          <CarTabs
            title1="Contract Purchase"
            title2="Hire Purchase"
            title3="Three"
          >
            <!-- Tab 1 -->
            <template #tab-one> 1 </template>
            <!-- Tab 2 -->
            <template #tab-two> 2 </template>
          </CarTabs>
        </CarDisclosure>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.finance-example {
  margin: 0.5rem;
  .finance-example-banner {
    background-color: #f6f7fb;
    border: 1px solid #d1d6e0;
    border-radius: 1rem;
    padding: 1rem;
    p {
      font-size: 0.75rem;
      font-family: roboto;
      margin: 0;
    }
    details {
      background: white;
      margin: 1rem 0 0 0;
      border-radius: 0.5rem;
      summary {
        position: relative;
        overflow: hidden;
        display: block;
        list-style: none;
        padding: 0.75rem 0.5rem;
        font-weight: bold;
        color: #55595d;
        font-family: "Roboto";
        border-bottom: 1px solid #f4f4f4;
        cursor: pointer;
      }
      /* Create a new custom triangle on the right side */
      summary::after {
        position: absolute;
        top: 8px;
        right: 10px;
        width: 24px;
        height: 24px;
        content: "";
        background: url("/assets/img/select-chevron.png");
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.5;
        transition: 0.5s;
      }
      .content {
        display: flex;
        flex-wrap: wrap;
      }
    }
    details[open] > summary::after {
      background: url("/assets/img/remove-collapse.png");
      transition: 0.5s;
    }
  }
}
</style>
