<template>
  <section id="car-footer">
    <div class="container">
      <footer class="car-footer">
        <div class="xl:grid xl:cols-7">
          <!-- Col One -->
          <div class="col-one">
            <img
              src="/img/cardealer/cardealer-logo-light.png"
              alt="CarDealer"
              class="car-logo"
            />
            <div>
              <CarButton text="Contact" class="car-button contact" />
              <CarButton text="Email" class="car-button email" />
            </div>
          </div>

          <!-- Branch details -->
          <CarDisclosure
            title="Branch details"
            :isOpen="false"
            class="col-span-3"
          >
            <h4>Address</h4>
            <span>101 Business Street</span>
            <span>Business Town</span>
            <span>Business County</span>
            <span>BU51 N55</span>
            <h4>Telephone</h4>
            <span>01234 567890</span>
            <h4>Opening Times</h4>
            <span>Weekdays</span>
            <span>Saturday</span>
            <span>Sunday</span>
            <span>09:00 - 18:00</span>
            <span>10:00 - 17:00</span>
            <span>10:00 - 16:00</span>
          </CarDisclosure>

          <!-- Popular brands -->
          <CarDisclosure
            title="Popular brands"
            :isOpen="false"
            class="col-span-2"
          >
            <span>Audi</span>
            <span>BMW</span>
            <span>Fiat</span>
            <span>Land Rover</span>
            <span>Mercedes-Benz</span>
            <span>Mini</span>
            <span>Peugeot</span>
            <span>SEAT</span>
            <span>Vauxhall</span>
            <span>Volkswagen</span>
          </CarDisclosure>

          <!-- Site map -->
          <CarDisclosure title="Site map" :isOpen="false">
            <CarNavLinks />
          </CarDisclosure>
        </div>
        <div class="xl:grid xl:cols-7">
          <!-- Company info -->
          <CarDisclosure
            title="Company info"
            :isOpen="false"
            class="col-span-3"
          >
            <span>Registered in England and Wales.</span>
            <span>Registered No: 00000000 | VAT No: 000 0000 00</span>
            <span
              >Registered Office: 101 Business Street, Business Town, Business
              County BU51 N55.</span
            >
          </CarDisclosure>

          <!-- Financial disclosure -->
          <CarDisclosure
            title="Financial disclosure"
            :isOpen="false"
            class="col-span-4"
          >
            <span
              >CarDealerUK Limited act as a credit broker and not a lender.
              Finance is Subject to status. We are authorised and regulated by
              the Financial Conduct Authority under firm reference number
              000000. We work with a number of carefully selected credit
              providers who may be able to offer you finance for your purchase.
              We may receive a commission payment from the finance provider if
              you decide to enter into an agreement with them. If you would like
              to know how we handle complaints, please ask for a copy of our
              complaints procedure. You can also find information about
              referring a complaint to the Financial Ombudsman Service
              (FOS).</span
            >
          </CarDisclosure>
        </div>

        <!-- Footer links -->
        <div class="footer-links">
          <div class="site-links">
            <span>
              <NuxtLink to="" title="Terms and condition">
                Terms and conditions
              </NuxtLink>
            </span>

            <span>
              <NuxtLink to="" title="Privicy policy">Privicy policy</NuxtLink>
            </span>

            <span><NuxtLink to="" title="Site map">Site map</NuxtLink></span>

            <span>
              <NuxtLink to="" title="Cookies policy">Cookies policy</NuxtLink>
            </span>
          </div>

          <span
            >Powered by
            <NuxtLink to="" title="About us"> &nbsp;Nexus Point Apex</NuxtLink>
          </span>
        </div>
      </footer>
    </div>
  </section>
</template>

<style lang="scss">
section#car-footer {
  background-color: #282338;
  color: white;
  margin: 0;
  border-top-right-radius: 3rem;
  footer.car-footer {
    display: flex;
    flex-direction: column;
    @media (min-width: 1200px) {
      display: grid;
    }
    padding: 1.5rem 0;
    width: 100%;
    .col-one {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 100%;
      margin-bottom: 1rem;
      img {
        width: 142px;
        margin-bottom: 1.5rem;
      }
    }
    details {
      summary {
        font-size: 1.125rem;
        font-weight: normal;
        border-bottom: 0;
        padding: 0.6rem 0.5rem;
      }
      summary::after {
        top: 11px;
        right: 10px;
      }
      .content {
        background-color: lightcoral;
        padding: 0 0.5rem;
        flex-direction: column;
      }
      h4 {
        font-weight: normal;
      }
      div {
        font-size: 1.125rem;
        color: green;
      }
    }
    .footer-links {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      @media (min-width: 768px) {
        flex-wrap: nowrap;
      }
      @media (min-width: 1024px) {
        flex-direction: row-reverse;
      }
      padding: 0.6rem 0.5rem;
      font-size: 0.75rem;
      background-color: darkred;
      span {
        display: flex;
        width: 50%;
        padding: 0.5rem 0;
      }
      .site-links {
        background-color: lightseagreen;
        display: flex;
        flex-direction: row;
        width: 100%;
        flex-wrap: wrap;
        @media (min-width: 768px) {
          flex-wrap: nowrap;
          width: 70%;
        }
        @media (min-width: 1024px) {
          width: 45%;
        }
        span {
          @media (min-width: 1024px) {
            background-color: orangered;
            justify-content: flex-end;
          }
        }
      }
      > :last-child {
        background-color: lightcoral;
        width: 100%;
        @media (min-width: 768px) {
          width: 30%;
        }
        @media (min-width: 1024px) {
          width: 55%;
        }
      }
    }
  }
}
</style>
