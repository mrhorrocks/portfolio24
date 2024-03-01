<template>
  <section id="car-footer">
    <div class="container">
      <footer class="car-footer">
        <div class="col-one">
          <img
            src="/img/cardealer/cardealer-logo.png"
            alt="CarDealer"
            class="car-logo"
          />
          <div>
            <CarButton text="Contact" class="car-button contact" />
            <CarButton text="Email" class="car-button email" />
          </div>
        </div>
        <div>Branch details</div>
        <div>Popular brands</div>
        <div>Sitemap</div>
        <div>Company info</div>
        <div>Financial disclosure</div>
        <div>7</div>
        <div>8</div>
      </footer>
    </div>
  </section>
</template>

<style lang="scss">
section#car-footer {
  background-color: #282338;
  color: white;
  height: 200px;
  margin: 3rem 0 0 0;
  border-top-right-radius: 3rem;
  footer.car-footer {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: pink;
    width: 100%;
    .col-one {
      display: flex;
      align-items: center;
      flex-direction: column;
      img {
        width: 142px;
      }
    }
  }
}
</style>
