<template>
  <section id="car-footer">
    <footer class="car-footer">
      <!-- TOP FOOTER -->
      <section>
        <div class="container">
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
            <CarFooterDetail
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
                  <span>
                    <a href="tel:01234567890">01234 567890</a>
                  </span>
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
                  <span
                    ><a href="mailto:someone@example.com"
                      >enquiries@cardealer.uk</a
                    ></span
                  >
                </div>
              </div>
            </CarFooterDetail>

            <!-- Popular brands -->
            <CarFooterDetail
              title="Popular brands"
              :isOpen="false"
              class="col-span-2"
            >
              <div class="popular-brands">
                <div style="display: flex; flex-direction: column">
                  <span><NuxtLink to="" title="Audi">Audi</NuxtLink></span>
                  <span><NuxtLink to="" title="BMW">BMW</NuxtLink></span>
                  <span><NuxtLink to="" title="Fiat">Fiat</NuxtLink></span>
                  <span
                    ><NuxtLink to="" title="Land Rover"
                      >Land Rover</NuxtLink
                    ></span
                  >
                  <span
                    ><NuxtLink to="" title="Mercedes-Benz"
                      >Mercedes-Benz</NuxtLink
                    ></span
                  >
                </div>
                <div style="display: flex; flex-direction: column">
                  <span><NuxtLink to="" title="Mini">Mini</NuxtLink></span>
                  <span
                    ><NuxtLink to="" title="Peugeot">Peugeot</NuxtLink></span
                  >
                  <span><NuxtLink to="" title="SEAT">SEAT</NuxtLink></span>
                  <span
                    ><NuxtLink to="" title="Vauxhall">Vauxhall</NuxtLink></span
                  >
                  <span
                    ><NuxtLink to="" title="Volkswagen"
                      >Volkswagen</NuxtLink
                    ></span
                  >
                </div>
              </div>
            </CarFooterDetail>

            <!-- Site map -->
            <CarFooterDetail title="Site map" :isOpen="false" class="site-map">
              <div class="site-map">
                <CarNavLinks />
              </div>
            </CarFooterDetail>
          </div>
        </div>
      </section>

      <!-- BOTTOM FOOTER -->
      <section id="bottom-footer">
        <div class="container">
          <div class="xl:grid xl:cols-7 bottom-footer">
            <!-- Company info -->
            <CarFooterDetail
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
            </CarFooterDetail>

            <!-- Financial disclosure -->
            <CarFooterDetail
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
            </CarFooterDetail>

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
                >Powered by&nbsp;
                <NuxtLink to="" title="Powered by Nexus Point Apex"
                  >Nexus Point Apex</NuxtLink
                >
              </span>
            </div>
          </div>
        </div>
        <!-- END BOTTOM FOOTER -->
      </section>
    </footer>
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
        .car-button {
          border: 0;
          border-radius: 1rem;
          padding: 0.3rem 1rem;
          margin: 0rem 0.25rem;
        }
        @media (min-width: 1200px) {
          display: none;
        }
      }
    }
    details {
      @media (min-width: 768px) {
        width: 740px;
        margin: 0 auto;
      }
      @media (min-width: 1024px) {
        width: 960px;
      }
      @media (min-width: 1200px) {
        width: 100%;
      }
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
          text-align: justify;
          margin-top: 1rem;
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
        top: 8px;
        right: 10px;
        @media (min-width: 1200px) {
          display: none;
        }
      }
      .content {
        // background-color: lightblue;
        padding: 0 0.5rem 1rem;
        margin-bottom: 0.5rem;
        border-bottom: 1px solid #3f3a50;
        @media (min-width: 1200px) {
          border-bottom: 0px;
        }
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
          @media (min-width: 768px) {
            width: 50%;
          }
          @media (min-width: 1200px) {
            width: 40%;
          }
          a {
            color: #7572ff;
            text-decoration: underline;
            &:hover {
              color: white;
            }
          }
        }
        &.popular-brands {
          // background-color: grey;
          display: flex;
          flex-direction: row;
          width: 100%;
          margin-top: 1rem;
          > div {
            width: 50%;
          }
        }
        &.site-map {
          // background-color: yellow;
          width: 100%;
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
        }
      }
      a {
        // background-color: red;
        display: inline-block;
        width: 100%;
        padding: 0.55rem 0;
        text-decoration: none;
        color: #a2a9af;
        cursor: pointer;
        &:hover {
          color: white;
        }
        &.router-link-active {
          color: white;
        }
      }
      &.site-map {
        .content {
          border-bottom: 0;
        }
      }
    }
    section#bottom-footer {
      background-color: #3f3a50;
      margin-top: 1rem;
      padding-top: 1rem;
    }
    .footer-links {
      // background-color: darkred;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      @media (min-width: 768px) {
        flex-wrap: nowrap;
        width: 740px;
        margin: 0 auto;
      }
      @media (min-width: 1024px) {
        flex-direction: row-reverse;
        width: 960px;
      }
      @media (min-width: 1200px) {
        width: 100%;
      }
      padding: 0.6rem 0.5rem;
      font-size: 0.75rem;
      span {
        display: flex;
        justify-content: flex-start;
        width: 50%;
        padding: 0.5rem 0;
        @media (min-width: 768px) {
          padding: 0.5rem 1rem 0.5rem 0;
          width: auto;
        }
      }
      a {
        cursor: pointer;
        text-decoration: underline;
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
          justify-content: flex-end;
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
          justify-content: flex-end;
        }
        @media (min-width: 1024px) {
          width: 55%;
          justify-content: flex-start;
        }
      }
    }
  }
}
</style>
