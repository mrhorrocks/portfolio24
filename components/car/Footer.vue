<template>
  <section id="car-footer">
    <footer class="car-footer">
      <!-- TOP FOOTER -->
      <section>
        <div class="container-full">
          <div class="xl:grid xl:cols-7 xl:gap-3 top-footer">
            <!-- Col One -->
            <div class="col-one">
              <img
                src="/img/cardealer/cardealer-logo-light.png"
                alt="CarDealer"
                class="car-logo"
              />
              <div class="action-buttons">
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
              <div class="address">
                <div style="display: flex; flex-direction: column">
                  <h4>Address</h4>
                  <span>101 Business Street</span>
                  <span>Business Town</span>
                  <span>Business County</span>
                  <span>BU51 N55</span>
                </div>
                <div>
                  <h4>Telephone</h4>
                  <span>01234 567890</span>
                </div>
              </div>

              <div class="opening-times">
                <div>
                  <h4>Opening Times</h4>
                  <div style="display: flex; justify-content: space-between">
                    <div style="display: flex; flex-direction: column">
                      <span>Weekdays</span>
                      <span>Saturday</span>
                      <span>Sunday</span>
                    </div>
                    <div style="display: flex; flex-direction: column">
                      <span>10:00 - 16:00</span>
                      <span>09:00 - 18:00</span>
                      <span>10:00 - 17:00</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>Email</h4>
                  <span>enquiries@cardealer.uk</span>
                </div>
              </div>
            </CarDisclosure>

            <!-- Popular brands -->
            <CarDisclosure
              title="Popular brands"
              :isOpen="false"
              class="col-span-2"
            >
              <div class="popular-brands">
                <div style="display: flex; flex-direction: column">
                  <span>Audi</span>
                  <span>BMW</span>
                  <span>Fiat</span>
                  <span>Land Rover</span>
                  <span>Mercedes-Benz</span>
                </div>
                <div style="display: flex; flex-direction: column">
                  <span>Mini</span>
                  <span>Peugeot</span>
                  <span>SEAT</span>
                  <span>Vauxhall</span>
                  <span>Volkswagen</span>
                </div>
              </div>
            </CarDisclosure>

            <!-- Site map -->
            <CarDisclosure title="Site map" :isOpen="false">
              <div class="site-map">
                <CarNavLinks />
              </div>
            </CarDisclosure>
          </div>
        </div>
      </section>

      <!-- BOTTOM FOOTER -->
      <section id="bottom-footer">
        <div class="container-full">
          <div class="xl:grid xl:cols-7 bottom-footer">
            <!-- Company info -->
            <CarDisclosure
              title="Company info"
              :isOpen="false"
              class="col-span-3 company-info"
            >
              <div class="company-info">
                <span>Registered in England and Wales.</span><br />
                <span>Registered No: 00000000 | VAT No: 000 0000 00</span><br />
                <span
                  >Registered Office: 101 Business Street, Business Town,
                  Business County BU51 N55.</span
                >
              </div>
            </CarDisclosure>

            <!-- Financial disclosure -->
            <CarDisclosure
              title="Financial disclosure"
              :isOpen="false"
              class="col-span-4 financial-disclosure"
            >
              <div class="financial-disclosure">
                CarDealerUK Limited act as a credit broker and not a lender.
                Finance is Subject to status. We are authorised and regulated by
                the Financial Conduct Authority under firm reference number
                000000. We work with a number of carefully selected credit
                providers who may be able to offer you finance for your
                purchase. We may receive a commission payment from the finance
                provider if you decide to enter into an agreement with them. If
                you would like to know how we handle complaints, please ask for
                a copy of our complaints procedure. You can also find
                information about referring a complaint to the Financial
                Ombudsman Service (FOS).
              </div>
            </CarDisclosure>

            <!-- SITE LINKS -->
            <div class="footer-links col-span-7">
              <div class="site-links">
                <span>
                  <NuxtLink to="" title="Terms and condition">
                    Terms and conditions
                  </NuxtLink>
                </span>

                <span>
                  <NuxtLink to="" title="Privicy policy"
                    >Privicy policy</NuxtLink
                  >
                </span>

                <span
                  ><NuxtLink to="" title="Site map">Site map</NuxtLink></span
                >

                <span>
                  <NuxtLink to="" title="Cookies policy"
                    >Cookies policy</NuxtLink
                  >
                </span>
              </div>

              <span
                >Powered by
                <NuxtLink to="" title="About us">
                  &nbsp;Nexus Point Apex</NuxtLink
                >
              </span>
            </div>
          </div>
        </div>
        <!-- END BOTTOM FOOTER -->
      </section>
    </footer>
  </section>
  <!-- <section>
    <div class="container-full">qwerty</div>
  </section> -->
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
    padding: 1.5rem 0 0;
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
      .action-buttons {
        @media (min-width: 1200px) {
          display: none;
        }
      }
    }
    details {
      &.company-info,
      &.financial-disclosure {
        @media (min-width: 1200px) {
          summary {
            // background-color: darkolivegreen;
            font-weight: normal;
            font-size: 0.75rem;
            color: #a2a9af;
            text-transform: uppercase;
            letter-spacing: 0.1rem;
          }
        }
        .content > div {
          // background-color: lightgreen;
          font-size: 0.75rem;
          line-height: 1.5;
        }
      }
      summary {
        font-size: 1.125rem;
        font-weight: normal;
        border-bottom: 0;
        padding: 0.6rem 0.5rem;
        @media (min-width: 1200px) {
          // Disable the details toggle functionality at this screen size
          pointer-events: none;
          padding-top: 0.2rem;
        }
      }
      summary::after {
        top: 11px;
        right: 10px;
        @media (min-width: 1200px) {
          display: none;
        }
      }
      .content {
        // background-color: lightblue;
        padding: 0 0.5rem;
      }
      h4 {
        font-weight: normal;
        font-size: 0.75rem;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        color: #a2a9af;
        padding: 1.25rem 0 0.75rem;
      }
      div {
        font-size: 1rem;
        color: white;
        &.address,
        .opening-times {
          // background-color: red;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
          @media (min-width: 1200px) {
            width: 40%;
          }
        }
        &.popular-brands {
          // background-color: grey;
          width: 100%;
          display: flex;
          flex-direction: row;
          > div {
            width: 50%;
            span {
              // background-color: aqua;
              padding: 0.55rem 0;
            }
          }
        }
        &.site-map {
          // background-color: yellow;
          display: flex;
          flex-direction: column;
          a {
            padding: 0.55rem 0;
          }
        }
      }
    }
    section#bottom-footer {
      background-color: #3f3a50;
      margin-top: 2.5rem;
      padding-top: 1rem;
      .bottom-footer {
        // background-color: peru;
        @media (min-width: 1200px) {
          padding: 0rem 2rem;
        }
      }
    }
    .footer-links {
      // background-color: darkred;
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
      span {
        display: flex;
        width: 50%;
        padding: 0.5rem 0;
      }
      .site-links {
        // background-color: lightseagreen;
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
            // background-color: orangered;
            justify-content: flex-end;
          }
        }
      }
      > :last-child {
        // background-color: lightcoral;
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
