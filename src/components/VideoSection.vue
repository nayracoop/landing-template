<template>
    <SectionWrapper>
        <b-row>
            <iframe id="video" src="https://www.youtube-nocookie.com/embed/iTtBlvYhMGE?controls=0" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
        </b-row>
    </SectionWrapper>
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

    #video {
        margin: auto;
        width: 90%;
        height: 70vh;
    }
</style>