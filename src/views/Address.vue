<template>
  <div>
    <section class="delivery container">
      <h1 class="main-h">Driving licenses and Travel Documents Delivery</h1>
      <div class="dot-nav">
        <a href="#" class="active"> Delivery Order </a>
        <a href="#"> Address & Contact </a>
        <a href="#"> Confirmation </a>
        <a href="#"> Receipt </a>
        <span></span>
      </div>

      <div class="delivery-content">
        <form action="">
          <div class="delivery-content-one">
            <div class="delivery-one-info row">
              <div class="col-12 col-md-4">
                <p>Name</p>
                <input type="number" />
              </div>

              <div class="col-12 col-md-4">
                <p>Delivery Period</p>
                <div class="dropdown" id="dropdown-2">
                  <button
                    type="button"
                    class="btn dropdown-toggle btn2"
                    data-toggle="dropdown"
                  ></button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"> lorem ipsum </a>
                    <a class="dropdown-item" href="#"> lorem ipsum</a>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <p>Phone Number</p>
                <input type="number" />
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-4">
                <p>Email Adderss</p>
                <input type="email" name="" id="" />
              </div>

              <div class="col-12 col-md-4 col-lg-3">
                <p>Preffered Language</p>
                <div class="dropdown" id="dropdown-3">
                  <button
                    type="button"
                    class="btn dropdown-toggle btn3"
                    data-toggle="dropdown"
                  ></button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"> lorem ipsum </a>
                    <a class="dropdown-item" href="#"> lorem ipsum</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="delivery-content-tow">
            <ul class="list-tabs list-unstyled">
              <li class="nav-item" data-tabs="#tabs-1">
                <input type="radio" name="size" id="one" checked />
                <label class="io1" for="one"
                  >Use Civil ID Address
                  <span class="sp-radio-one"></span>
                </label>
              </li>
              <li class="nav-item" data-tabs="#tabs-2">
                <input type="radio" name="size" id="two" />
                <label class="io2" for="two"
                  >Other PACI Number
                  <span class="sp-radio-two"></span>
                </label>
              </li>
              <li class="nav-item" data-tabs="#tabs-3">
                <input type="radio" name="size" id="three" />
                <label class="io3" for="three"
                  >Add Address
                  <span class="sp-radio-three"></span>
                </label>
              </li>
            </ul>
            <!-- Tab panes -->

            <div class="tab-content">
              <div id="tabs-1">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <p>PACI Number</p>
                    <input type="number" name="" id="" />
                  </div>
                  <div class="col-12 col-md-8">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>

              <div id="tabs-2">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <p>PACI Number</p>
                    <input type="number" name="" id="" />
                  </div>
                  <div class="col-12 col-md-8">
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>

              <div id="tabs-3">
                <div class="row">
                  <div class="col-12 col-md-3">
                    <p>Gevernorate</p>
                    <div class="dropdown" id="dropdown-4">
                      <button
                        type="button"
                        class="btn dropdown-toggle btn4"
                        data-toggle="dropdown"
                      ></button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"> lorem ipsum </a>
                        <a class="dropdown-item" href="#"> lorem ipsum</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <p>Area</p>
                    <div class="dropdown" id="dropdown-5">
                      <button
                        type="button"
                        class="btn dropdown-toggle btn5"
                        data-toggle="dropdown"
                      ></button>
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="#"> lorem ipsum </a>
                        <a class="dropdown-item" href="#"> lorem ipsum</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-3">
                    <p>Pacell</p>
                    <input type="text" name="" id="" />
                  </div>
                  <div class="col-12 col-md-3">
                    <p>Street</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-3 col-md-3">
                    <p>Avenue</p>
                    <input type="text" />
                  </div>
                  <div class="col-md-3 col-md-3">
                    <p>Building</p>
                    <input type="text" />
                  </div>
                  <div class="col-md-3 col-md-3">
                    <p>Unit Number</p>
                    <input type="number" name="" id="" />
                  </div>
                  <div class="col-md-3 col-md-3">
                    <p>Floor</p>
                    <input type="text" name="" id="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <router-link tag="span" to="/confirme" class="document-next"
          >NEXT</router-link
        >
        <router-link tag="span" to="/" class="document-prev"
          >Previous</router-link
        >
      </div>

      <p class="paraFooter">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate
        alias ipsum voluptatibus perspiciatis minus dignissimos.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: "Address",
};
</script>
<style lang="" scoped></style>
