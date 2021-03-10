<template>
    <section-wrapper class="donations">
        <section-heading>
            {{$t('donations.title')}}
        </section-heading>
        <b-row>
            <b-col class="col-12 col-md-4">
                <div class="donation-group mb-5" v-if="useMercadopago">
                    <h4>{{$t('donations.donation-type-1')}}</h4>
                    <p><em>via MercadoPago</em></p>
                    <div v-for="(donation, index) in donationButtons">
                        <Button  
                                :class="donation.class"
                                mp-mode="dftl" 
                                :href="donation.link" name="MP-payButton"
                                :key="index"
                        >
                            {{ $t('donations.donateButton') }} {{donation.amount}}
                        </Button>
                    </div>
                </div>
                <div class="donation-group" v-if="usePaypal">
                    <h4>{{$t('donations.donation-type-2')}}</h4>
                    <p><em>via PayPal</em></p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_donations" />
                        <input type="hidden" name="business" :value="paypalMail" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <Button 
                            type="submit" 
                            name="submit" 
                            alt="Donate with PayPal button">
                            {{ $t('donations.donateButton') }}
                        </Button>
                    </form>
                </div>
            </b-col>   
            <b-col class="col-12 col-md-8">
                <p>{{ $t('donations.content[0]') }}</p>
                <p>{{ $t('donations.content[1]') }}</p>
                <p>{{ $t('donations.content[2]') }}</p>
            </b-col>
        </b-row>
    </section-wrapper>
</template>

<script>
    // (function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
    import locale from '../translations/locale.json';
    import SectionHeading from 'components/snippets/SectionHeading.vue'
    import SectionWrapper from 'components/snippets/SectionWrapper.vue'
    import Button from 'components/snippets/Button.vue'

    export default {
        components: {
            SectionHeading,
            SectionWrapper,
            Button
        },
        props: {
            usePaypal: {
                type: Boolean,
                default: true
            },
            useMercadopago: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                paypalMail: 'mochadocumental@gmail.com',
                donationButtons: [
                    {
                        amount:  '$300',
                        link: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-d89cc553-92c5-4e1a-bffe-bae83a888f17',
                        class: 'b-green'
                    },
                    {
                        amount:  '$500',
                        link: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-d89cc553-92c5-4e1a-bffe-bae83a888f17',
                        class: 'b-blue'
                    },
                    {
                        amount:  '$1000',
                        link: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-d89cc553-92c5-4e1a-bffe-bae83a888f17',
                        class: 'b-purple'
                    },
                    {
                        amount:  '$2500',
                        link: 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-d89cc553-92c5-4e1a-bffe-bae83a888f17',
                        class: 'b-red'
                    },
                ],
                contentArray: locale.en.donations.content
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'assets/scss/variables';

    .donations {
        p {
            text-align: left;
        }

        .donation-group {
            padding-bottom: 10px;

            em {
                font-style: italic;
            }
        }
    }

</style>