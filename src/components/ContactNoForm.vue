<template>
    <section-wrapper class="bg-grey contact">
        <section-heading>
            {{$t('contact.title')}}
        </section-heading>
        <b-row class="contact-body mb-5">
            <b-col class="col-12 col-lg-5">
                <div class="address">
                    <p v-for="(line, index) in address" :key="index">{{line}}</p>
                </div>
                <div class="email-list">
                    <p>{{ $t("contact.inquiries")}}</p>
                    <a class="long-mail" :href="'mailto: ' + emailList.inquiries">{{emailList.inquiries}}</a>
                    <p>{{ $t("contact.support")}}</p>
                    <a class="long-mail" :href="'mailto: ' + emailList.support">{{emailList.support}}</a>
                    <p>{{ $t("contact.students")}}</p>
                    <a class="long-mail" :href="'mailto: ' + emailList.students">{{emailList.students}}</a>
                </div>
                <ul class="social-links">
                    <li>
                        <a
                            target="_blank"
                            :href="links.facebook"
                            title="Facebook"
                        >
                            <font-awesome-icon :icon="['fab', 'facebook-square']" />
                            <span class="sr-only">Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            :href="links.instagram"
                            title="Instagram"
                        >
                            <font-awesome-icon :icon="['fab', 'instagram']" />
                            <span class="sr-only">Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            :href="links.twitter"
                            title="Twitter"
                        >
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                            <span class="sr-only">Twitter</span>
                        </a>
                    </li>
                    <li class="mt-1 mb-1">
                        <a  target="_blank"
                            :href="links.mail"
                            title="Mail"
                        >
                            <font-awesome-icon :icon="['fas','envelope']" />
                            <span class="sr-only">Mail</span>
                        </a>
                    </li>
                </ul>
            </b-col>
            <b-col class="col-12 col-lg-7 map">
                <iframe 
                    id="map"
                    :src="mapSrc" 
                    frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0">
                </iframe>
            </b-col>
        </b-row>
    </section-wrapper>
</template>

<script>
import SectionHeading from 'components/snippets/SectionHeading.vue'
import SectionWrapper from 'components/snippets/SectionWrapper.vue'


export default {
    components: {
        SectionHeading,
        SectionWrapper
    },
    data() {
        return {
            address: [
                'Bachillerato Popular Trans Mocha Celis',
                'Av. Federico Lacroze 4181, 5to piso.',
                'Buenos Aires, Bs. As.',
                'C1427EDG ARGENTINA',
                'Tel: +54 (011) 4554-9048'
            ],
            emailList: {
                inquiries: 'info@bachilleratomochacelis.edu.ar',
                support: 'cooperadora@bachilleratomochacelis.edu.ar',
                students: 'preceptoria@bachilleratomochacelis.edu.ar'

            },
            links: {
                facebook: 'https://www.facebook.com/mochacelis/',
                twitter: 'https://twitter.com/BachiTransMocha',
                instagram: 'https://www.instagram.com/mochacelis/',
                mail: 'mailto: info@bachilleratomochacelis.edu.ar'
            },
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6569.3518211253695!2d-58.458708037097146!3d-34.58706615504157!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd437cf863662c1c2!2sBachillerato%20Popular%20Mocha%20Celis!5e0!3m2!1ses-419!2sar!4v1590551191925!5m2!1ses-419!2sar'
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'assets/scss/variables';

    .contact {
        padding-top: 65px;
        padding-bottom: 35px;
        
        .contact-body {
            justify-content: space-around;

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

            .social-links { 
                text-align: left;
                margin: auto;
                margin-bottom: 25px;

                li {
                    display: inline-block;
                    font-size: 1.25em;
                    margin: 0px 30px 0 0;

                    a {
                        color: $color-dark;

                        &:hover {
                            color: $color-purple;
                        }
                    }
                }
            }

            #map {
                margin: auto;
                min-height: 300px;
                width: 100%;
                height: 100%;
            }
        }
    }

    @media all and (max-width:768px) {
        .contact {
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