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
        <CarDetail title="Show Breakdown" class="finance-breakdown">
          <CarTabs title1="Contract Purchaces" title2="Hire Purchaces">
            <template #tab1>
              <CarFinanceOptionCard
                heading="48 monthly payments"
                calculation="£157.25"
              />
              <CarFinanceOptionCard
                heading="Cash price"
                calculation="£9,998.00"
              />
              <CarFinanceOptionCard
                heading="Customer deposit"
                calculation="£250.00"
              />
              <CarFinanceOptionCard
                heading="Amount of credit"
                calculation="£11,980.75"
              />
              <CarFinanceOptionCard heading="Apr" calculation="7.9%" />
              <CarFinanceOptionCard heading="Term" calculation="48 months" />
              <CarFinanceOptionCard
                heading="Total amount payable"
                calculation="£12,163.72"
              />
              <CarFinanceOptionCard
                heading="Rate of interest (fixed)"
                calculation="4.08% PA"
              />

              <CarFinanceOptionCard
                heading="Annual milage"
                calculation="8000"
              />
              <CarFinanceOptionCard
                heading="Optional final payment"
                calculation="£3,888.04"
              />
            </template>
            <template #tab2>
              <p>More content to follow...</p>
            </template>
          </CarTabs>
        </CarDetail>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.finance-example {
  margin: 0 0.5rem;
  .finance-example-banner {
    background-color: #f6f7fb;
    border: 1px solid #d1d6e0;
    border-radius: 1rem;
    padding: 1rem;
    margin: 1rem 0;
    @media (min-width: 768px) {
      margin: 2rem 0;
    }
    p {
      font-size: 0.75rem;
      margin: 0;
    }
    details {
      background: transparent;
      margin: 1rem 0 0 0;
      summary {
        color: #55595d;
        background-color: white;
        border-radius: 0.5rem;
        border-bottom: 0px;
      }
      /* Create a new custom triangle on the right side */
      summary::after {
        right: 10px;
        background-image: url("/assets/img/select-chevron.png");
        background-size: cover;
        opacity: 0.5;
      }
      .content {
        padding: 0;
      }
    }
    details[open] > summary::after {
      background: url("/assets/img/remove-collapse.png");
      transition: 0.5s;
    }
  }
}
</style>
