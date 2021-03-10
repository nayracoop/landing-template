<template>
    <section-wrapper class="bg-grey faq">
        <section-heading>
            {{$t('faq.title')}}
        </section-heading>
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
}
</script>

<style lang="scss" scoped>
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