<template>
    <header class="fixed-top">
        <b-container>
            <b-row>
                <b-col>
                    <b-navbar
                        toggleable="lg"
                        type="light"
                    >
                        <b-navbar-brand href="#cover">
                            <h1>
                                <img
                                src="static/img/logo-header.png"
                                alt="Mocha Celis logo"
                                class="header-logo"
                                >
                                <b class="sr-only"><abbr title="Bachillerato Popular Trans Mocha Celis">La Mocha Celis</abbr></b>
                            </h1>
                        </b-navbar-brand>

                        <b-navbar-toggle
                        id="navbar-toggle"
                        target="nav-collapse"
                        />
                        <label
                        class="sr-only"
                        for="navbar-toggle"
                        >{{ $t('Open') }}</label>

                        <b-collapse
                        id="nav-collapse"
                        is-nav
                        >
                            <b-navbar-nav class="ml-auto">
                                <b-nav-item
                                href="#cover"
                                :class="{ active: highlight === 'cover' }"
                                >
                                {{ $t('Home') }}
                                </b-nav-item>

                                <b-nav-item
                                href="#faq"
                                :class="{ active: highlight === 'faq' }"
                                >
                                {{ $t('faq.title') }}
                                </b-nav-item>
                            
                                <b-nav-item
                                href="#donations"
                                :class="{ active: highlight === 'donations' }"
                                >
                                {{ $t('donations.title') }}
                                </b-nav-item>
                                <b-nav-item
                                href="#contact"
                                :class="{ active: highlight === 'contact'}"
                                >
                                {{ $t('contact.title') }}
                                </b-nav-item>

                                <b-nav-item-dropdown class="lang-selector" :text="$i18n.locale" right>
                                    <b-dropdown-item
                                        v-for="(lang, i) in langs"
                                        :to="'/' + ((lang === 'es') ? '' : lang)"
                                        :key="`Lang${i}`"
                                        :class="{ 'sr-only': (lang === $i18n.locale) }"
                                        :value="lang"
                                    >
                                        {{ lang }}
                                    </b-dropdown-item>
                                </b-nav-item-dropdown>
                                <social-media />
                            </b-navbar-nav>
                        </b-collapse>
                    </b-navbar>
                </b-col>
            </b-row>
        </b-container>
    </header>
</template>

<script>

import SocialMedia from 'components/snippets/SocialMedia.vue'

export default {
  components: {
    SocialMedia
  },
  props: {
    highlight: {
      type: String,
      default: ''
    }
  },
  data () {
    return { langs: ['es', 'en'] }
  }
}
</script>

<style lang="scss">
    @import 'assets/scss/variables';


    header {
        transition: background-color .3s ease-in-out;
        background: $color-dark;
        text-transform: uppercase;
        font-weight: bold;
        .social-links-fixed {
            right: -40px;
            transition: right .3s ease-in-out;
            background-color: $color-dark;
            @media all and (max-width: 991px) {
                position: static!important;
                display: block;
                box-shadow: none;
                margin: 0 auto;
                right: unset!important;
                left: unset;
                width: 50%;
                max-width: 180px;
                ul {
                    flex-direction: row!important;
                    margin: 0 auto;
                    width: 100%;
                    justify-content: space-between;
                }
            }
        }
        &.scrolled {
            background: $color-dark;
            box-shadow: 1px 1px 3px 1px rgba(128, 128, 128, 0.1);
            .navbar-nav {
                li.nav-item {
                    .cta-item {
                        a.nav-link {
                            border: 1px solid $color-dark;
                            background: transparent;
                            &:hover {
                                background: $color-yellow;
                                color: #fff;
                            }
                        }
                    }
                }
            }
            .social-links-fixed {
                right: 0;
            }
        }
        nav {
            padding: .2rem 0!important;
            .navbar-brand {
                h1 {
                    font-size: 12px;
                    margin-bottom: 0;
                }
            }
        }
        .navbar-nav {
            padding: 0;
            li.nav-item {
                margin: 0 30px;
                font-size: .7em;
                &.cta-item {
                    color: white;
                    &.active {
                        .nav-link {
                            background: $color-dark!important;
                            color: #FFF!important;
                            border: 1px solid #FFF;
                        }
                    }
                    a.nav-link {
                        border: 1px solid white;
                        background: transparent;
                        margin-top: .2rem;
                        padding: .2rem 1rem;
                        transition: all .15s ease-in-out;
                        &:hover {
                            background: white;
                            color: $color-yellow;
                        }
                    }
                }
                a.nav-link {
                    color: white;
                    padding: 0.5rem 0;
                    &:hover,
                    &:focus {
                        color: $color-yellow;
                    }
                }
                &.active {
                    .nav-link {
                        border-bottom: 1px solid #fff;
                    }
                }
            }
            li.lang-selector {
                text-transform: uppercase;
                a {
                    &.dropdown-toggle {
                        color: #FFF!important;
                        &:hover,
                        &:active {
                            color: $color-yellow!important;
                        }
                    }
                    border-color: #FFF!important;
                    @media all and (max-width: 991px) {
                        border: 0!important;
                        a:hover {
                            border: 0!important;
                        }
                    }
                }
                ul.dropdown-menu {
                    min-width: unset;
                    max-width: 60px;
                    li {
                        text-align: center;
                        a {
                            padding: 3px 15px;
                            font-size: .7rem;
                            &:active {
                                background: unset;
                                color: unset;
                            }
                        }
                    }
                }
                @media all and (max-width: 991px) {
                    a {
                        padding: 0 12px 0 0;
                        font-size: 1.25rem;
                    }
                    margin-bottom: 60px;
                    border: 0!important;
                    a:hover {
                        border: 0!important;
                    }
                }
            }
        }
        .header-logo {
            height: 40px;
        }
    }

        @media all and (max-width:991px) {
        header {
            background: $color-dark;
            nav {
                #nav-collapse {
                    height: 100vh;
                    transition: none;
                    ul.navbar-nav {
                        height: 70vh;
                        margin-top: 10vh;
                        justify-content: space-around;
                        align-items: center;
                        li.nav-item {
                            margin: 0;
                            a.nav-link {
                                color: white;
                                font-size: 1.25rem;
                                border-bottom: 1px solid transparent;
                                &:hover {
                                    color: white;
                                }
                            }
                            &.cta-item {
                                border: none;
                                color: white;
                                a.nav-link {
                                    background: transparent;
                                    padding: .5rem 1rem;
                                    border: 1px solid $color-dark;
                                }
                            }
                            &.lang-selector {
                                display: flex;
                                .dropdown-toggle::after {
                                    transform: rotate(-90deg)
                                }
                                ul {
                                    border: 0;
                                    padding: .5rem;
                                    margin: 0;
                                    margin-left: 15px;
                                    li {
                                        margin: 0;
                                        a {
                                            margin-top: 0px;
                                            color: black;
                                            padding: 0;
                                            font-size: 1.25rem;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                #navbar-toggle[aria-expanded="false"] {
                    .navbar-toggler-icon {
                        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' fill='white' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 15' style='enable-background:new 0 0 15 15;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Crect y='4' width='15' height='1.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='5' y='9.1' width='10' height='1.9'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")!important;
                        /*background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(0, 0, 0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E")!important;*/
                    }
                }
                #navbar-toggle[aria-expanded="true"] {
                    .navbar-toggler-icon {
                        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' fill='white' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 15' style='enable-background:new 0 0 15 15;' xml:space='preserve'%3E%3Cg%3E%3Crect x='6.6' y='0' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -3.1066 7.5)' width='1.9' height='15'/%3E%3C/g%3E%3Cg%3E%3Crect x='0' y='6.6' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -3.1066 7.5)' width='15' height='1.9'/%3E%3C/g%3E%3C/svg%3E%0A")!important;
                    }
                }
            }
        }
    }

    @media all and (max-height: 500px) and (max-width: 991px),
    all and (orientation: landscape) and (max-height: 500px) and (max-width: 991px) {
        header nav {
            #nav-collapse {
                ul.navbar-nav {
                    height: 85vh;
                    overflow: scroll;
                    margin-top: 0!important;
                    padding-top: 130px!important;
                    padding-bottom: 10px;
                    justify-content: center;
                    li.nav-item {
                        margin: 5px 0!important;
                        a.nav-link {
                            font-size: 1rem;
                        }
                        &.nav-item:last-of-type {
                            min-height: unset;
                            margin-bottom: 5px!important;
                        }
                    }
                    .social-links-fixed {
                        padding-bottom: 20px;
                    }
                }
            }
        }
    }

    @media all and (max-width: 450px) {
        .nav-item {
            margin-bottom: 10px!important;
        }
    }

</style>
