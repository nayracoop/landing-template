<template>
    <section class="section donations">
        <b-container>
        <b-row>
            <b-col class="col-12 col-md-6 section-heading">
                <h2 class="pb-2">
                    {{$t('donations.title')}}</span>
                </h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="col-12 col-md-4">
                <div class="donation-group mb-5">
                    <h4>{{$t('donations.donation-type-1')}}</h4>
                    <p><em>via MercadoPago</em></p>
                    <div v-for="(donation, index) in donationButtons">
                        <b-button  
                                :class="'donate-button ' + donation.class"
                                mp-mode="dftl" 
                                :href="donation.link" name="MP-payButton"
                                :key="index"
                        >
                            {{ $t('donations.donateButton') }} {{donation.amount}}
                        </b-button>
                    </div>
                </div>
                <div class="donation-group">
                    <h4>{{$t('donations.donation-type-2')}}</h4>
                    <p><em>via PayPal</em></p>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_donations" />
                        <input type="hidden" name="business" :value="paypalMail" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <b-button 
                            type="submit" 
                            class="donate-button" 
                            name="submit" 
                            alt="Donate with PayPal button">
                            {{ $t('donations.donateButton') }}
                        </b-button>
                    </form>
                </div>
            </b-col>   
            <b-col class="col-12 col-md-8">
                <p>{{ $t('donations.content[0]') }}</p>
                <p>{{ $t('donations.content[1]') }}</p>
                <p>{{ $t('donations.content[2]') }}</p>
            </b-col>
        </b-row>
        </b-container>
    </section>
</template>

<script>
    // (function(){function $MPC_load(){window.$MPC_loaded !== true && (function(){var s = document.createElement("script");s.type = "text/javascript";s.async = true;s.src = document.location.protocol+"//secure.mlstatic.com/mptools/render.js";var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);window.$MPC_loaded = true;})();}window.$MPC_loaded !== true ? (window.attachEvent ?window.attachEvent('onload', $MPC_load) : window.addEventListener('load', $MPC_load, false)) : null;})();
    export default {
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
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import 'assets/scss/variables';

    .donations {
        p {
            text-align: left;
        }

        .donation-group {
            padding-bottom: 10px;

            .donate-button {
                font-size: 1em;
                width: 90%;
                margin: 10px auto;
                border: none;

                &:hover {
                    opacity: 85%;
                }
            }

            em {
                font-style: italic;
            }
        }
    }

</style>