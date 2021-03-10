<template>
    <section class="bg-grey section faq">
        <b-container>
            <b-row>
                <b-col class="col-12 col-lg-6 mb-5 section-heading">
                    <h2 class="pb-2">
                        {{$t('faq.title')}}
                    </h2>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[0].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[0].text') }}</p>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[1].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[1].text') }}</p>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[2].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[2].text') }}</p>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[3].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[3].text') }}</p>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[4].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[4].text') }}</p>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[5].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[5].text') }}</p>
                </b-col>
            </b-row>
            <b-row class="subtitle">
                <b-col class="col-12 mb-1">
                    <h4 class="pb-2">
                        {{ $t('faq.content[6].subtitle') }}
                    </h4>
                    <p>{{ $t('faq.content[6].text') }}</p>
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">
    @import 'assets/scss/variables';

    .faq {
        .subtitle {
            margin-bottom: 22px;

            p {
                text-align: left;
            }
        }
    }

</style>