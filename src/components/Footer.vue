<template>
    <footer id="footer" class="bg-grey">
        <b-container>
        <b-row>
            <b-col class="col-12 col-md-6 section-heading">
            <h2>
                <span class="initial">
                {{$t('contact.title')[0]}}</span>{{ $t('contact.title').substr(1)}}
            </h2>
            </b-col>
        </b-row>
        <b-row class="contact-body mb-5">
            <b-col class="col-12 col-lg-6">
            <div class="address">
                <p>Bachillerato Popular Trans Mocha Celis</p>
                <p>Av. Federico Lacroze 4181, 5to piso.</p>
                <p>Buenos Aires, Bs. As.</p>
                <p>C1427EDG ARGENTINA</p>
                <p>Tel: +54 (011) 4554-9048</p>
            </div>
            <div class="email-list">
                <p>{{ $t("contact.inquiries")}}</p>
                <a class="long-mail" href="mailto: info@bachilleratomochacelis.edu.ar">info@bachilleratomochacelis.edu.ar</a>
                <p>{{ $t("contact.support")}}</p>
                <a class="long-mail" href="mailto: cooperadora@bachilleratomochacelis.edu.ar">cooperadora@bachilleratomochacelis.edu.ar</a>
                <p>{{ $t("contact.students")}}</p>
                <a class="long-mail" href="mailto: preceptoria@bachilleratomochacelis.edu.ar">preceptoria@bachilleratomochacelis.edu.ar</a>
            </div>
            <ul class="social-links">
                <li>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/mochacelis/"
                        title="Facebook"
                    >
                        <font-awesome-icon :icon="['fab', 'facebook-square']" />
                        <span class="sr-only">Facebook</span>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://www.instagram.com/mochacelis/"
                        title="Instagram"
                    >
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                        <span class="sr-only">Instagram</span>
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://twitter.com/BachiTransMocha"
                        title="Twitter"
                    >
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                        <span class="sr-only">Twitter</span>
                    </a>
                </li>
                <li class="mt-1 mb-1">
                    <a  target="_blank"
                        href="mailto: info@bachilleratomochacelis.edu.ar"
                        title="Mail"
                    >
                        <font-awesome-icon :icon="['fas','envelope']" />
                        <span class="sr-only">Mail</span>
                    </a>
                </li>
            </ul>
            </b-col>
            <b-col class="col-12 col-lg-6 map">
            <iframe 
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6569.3518211253695!2d-58.458708037097146!3d-34.58706615504157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd437cf863662c1c2!2sBachillerato%20Popular%20Mocha%20Celis!5e0!3m2!1ses-419!2sar!4v1590551191925!5m2!1ses-419!2sar" 
                frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </b-col>
        </b-row>
        </b-container>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
    @import 'assets/scss/variables';

    .social-links {
        margin: auto;
        text-align: left;
        li {
            display: inline-block;
            margin: 20px 40px;
            font-size: 1.25em;
            a {
                color: $color-dark;
                &:hover {
                    color: $color-purple;
                }
            }
        }
    }

    #footer {
        .section-heading {
            margin-top:0;
            h2 {
                position: relative;
                margin-bottom: 0;
                .initial{

                    background-color: $color-purple;
                    width: 1em;
                    height: 1em;
                    padding: 0 .2em;
                }
            }
        }
        padding-top: 65px;
        padding-bottom: 35px;
        
        .contact-body {
            justify-content: space-around;
        }
        .address {
            text-align: left;
            padding: 15px 0px;
            p {
                margin-bottom: 2px;
            }
        }

        .email-list {
            text-align: left;
            padding: 15px 0px;
            p {
                margin-bottom: 2px;
                font-weight: bold;
            }
            a {
                display: block;
                margin-bottom: 10px;
            }
        }

        #map {
            margin: auto;
            min-height: 300px;
            width: 100%;
        }
        .social-links { 
            margin-bottom: 25px;
        }
        .social-links li {
            margin: 0px 30px 0 0!important;
        }
    }

    @media all and (max-width:768px) {
        footer {
            nav {
                ul.navbar-nav {
                    flex-direction: column;
                    li {
                        margin: 10px 15px;
                    }
                }
            }
        }
    }

    @media all and (max-width: 450px) {
        .long-mail {
            max-width: 90%;
            font-size: 0.75em;
        }
    }
</style>