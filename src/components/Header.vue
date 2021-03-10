<template>
    <header class="fixed-top">
        <b-container>
            <b-row>
                <b-col>
                    <b-navbar toggleable="lg" type="light" class="header-wrapper">
                        <b-navbar-brand class="logo-container" href="#cover">
                            <h1>
                                <img
                                src="static/img/logo-header.png"
                                :alt="$t('logo-alt')"
                                class="logo"
                                >
                                <b class="sr-only"><abbr :title="$t('title.full')">{{$t('title.abbr')}}</abbr></b>
                            </h1>
                        </b-navbar-brand>

                        <b-navbar-toggle id="navbar-toggle" target="nav-collapse" />
                        <label class="sr-only" for="navbar-toggle">{{ $t('Open') }}</label>

                        <b-collapse id="nav-collapse" is-nav>
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

<style lang="scss" scoped>
    @import 'assets/scss/variables';

    header {
        transition: background-color .3s ease-in-out;
        background: $color-dark;
        text-transform: uppercase;
        font-weight: bold;

        &.scrolled {
            box-shadow: 1px 1px 3px 1px rgba(128, 128, 128, 0.1);

            .social-links-fixed {
                right: 0;
            }
        }

        .header-wrapper {
            padding: .2rem 0!important;

            .logo-container {
                h1 {
                    font-size: 12px;
                    margin-bottom: 0;
                }

                .logo {
                    height: 40px;
                }
            }

            .navbar-nav {
                padding: 0;

                .nav-item {
                    margin: 0 30px;
                    font-size: .7em;

                    &.active {
                        .nav-link {
                            border-bottom: 1px solid #fff;
                        }
                    }


                    @media all and (max-width: 450px) {
                        margin-bottom: 10px!important;
                    }


                    .nav-link {
                        color: white;
                        padding: 0.5rem 0;
                        font-weight: 600;

                        &:hover,
                        &:focus {
                            color: $color-yellow;
                        }
                    } 
                    
                }

                .lang-selector {
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

                    .dropdown-menu {
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

            @media all and (max-width:991px) {
                #nav-collapse {
                    height: 100vh;
                    transition: none;
                    .navbar-nav {
                        height: 70vh;
                        margin-top: 10vh;
                        justify-content: space-around;
                        align-items: center;

                        .nav-item {
                            margin: 0;
                            
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


                            .nav-link {
                                color: white;
                                font-size: 1.25rem;
                                border-bottom: 1px solid transparent;
                                &:hover {
                                    color: white;
                                }
                            }
                        }
                    }
                }

                #navbar-toggle[aria-expanded="false"] {
                    .navbar-toggler-icon {
                        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' fill='white' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 15' style='enable-background:new 0 0 15 15;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Crect y='4' width='15' height='1.9'/%3E%3C/g%3E%3Cg%3E%3Crect x='5' y='9.1' width='10' height='1.9'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")!important;
                    }
                }
                #navbar-toggle[aria-expanded="true"] {
                    .navbar-toggler-icon {
                        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 22.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' fill='white' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 15 15' style='enable-background:new 0 0 15 15;' xml:space='preserve'%3E%3Cg%3E%3Crect x='6.6' y='0' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -3.1066 7.5)' width='1.9' height='15'/%3E%3C/g%3E%3Cg%3E%3Crect x='0' y='6.6' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -3.1066 7.5)' width='15' height='1.9'/%3E%3C/g%3E%3C/svg%3E%0A")!important;
                    }
                }
            }

            @media all and (max-height: 500px) and (max-width: 991px),
                all and (orientation: landscape) and (max-height: 500px) and (max-width: 991px) {
                #nav-collapse {
                    .navbar-nav {
                        height: 85vh;
                        overflow: scroll;
                        margin-top: 0!important;
                        padding-top: 130px!important;
                        padding-bottom: 10px;
                        justify-content: center;

                        .nav-item {
                            margin: 5px 0!important;

                            &:last-of-type {
                                min-height: unset;
                                margin-bottom: 5px!important;
                            }

                            a.nav-link {
                                font-size: 1rem;
                                font-weight:bold;
                            }
                        }

                        .social-links-fixed {
                            padding-bottom: 20px;
                        }
                    }
                }
            }
        }
    }

</style>
