<template>
    <section id="donations">
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
            <div class="donation-type mb-5">
                <h4>Dentro de Argentina</h4>
                <p><em>via MercadoPago</em></p>
                <b-button   class="donate-button b-green"
                            mp-mode="dftl" 
                            href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-d89cc553-92c5-4e1a-bffe-bae83a888f17" name="MP-payButton"
                >
                    {{ $t('donations.donateButton') }} $300
                </b-button>
                <b-button   class="donate-button b-blue"
                            mp-mode="dftl" 
                            href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-41157bc2-dd09-4afa-ae8c-9c650263634d" name="MP-payButton"
                >
                    {{ $t('donations.donateButton') }} $500
                </b-button>
                <b-button   class="donate-button b-purple"
                            mp-mode="dftl" 
                            href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-329b6b58-0399-4b2e-b52d-36fbccec9bb8" name="MP-payButton"
                >
                    {{ $t('donations.donateButton') }} $1000
                </b-button>
                <b-button  class="donate-button b-red"
                            mp-mode="dftl" 
                            href="https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=47243777-28b3a21e-3a15-44d9-aa19-6c1a96f155fd" name="MP-payButton"
                >
                    {{ $t('donations.donateButton') }} $2500
                </b-button>
            </div>
            <div class="donation-type">
                <h4>Desde el exterior</h4>
                <p><em>via PayPal</em></p>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="mochadocumental@gmail.com" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <b-button 
                        type="submit" 
                        class="donate-button b-orange" 
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

    }
</script>

<style lang="scss">
    @import 'assets/scss/variables';

    #donations {
        p {
            text-align: left;
        }
        .donation-type {
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