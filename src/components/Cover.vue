<template>
    <div id="cover" class>
        <b-container class="cover-info">
            <b-row>
                <b-col class="col-12">
                <h1 class="sr-only">{{ $t('cover.title') }}</h1>
                </b-col>
            </b-row>
            <b-row>
                <b-row class="cover-image">
                    <img
                        src="static/img/cover-image-3.png"
                        alt="Bachillerato Popular Travesti-Trans Mocha Celis"
                    />
                </b-row>
                <b-row class="cover-buttons">
                    <b-col class="col-12 col-md-6">
                        <b-button
                        class="cover-button b-purple"
                        href="mailto: preceptoria@bachilleratomochacelis.edu.ar"
                        >{{ $t('cover.btn-text-1') }}</b-button>
                    </b-col>
                    <b-col class="col-12 col-md-6">
                        <b-button class="cover-button b-orange" href="#donations">{{ $t('cover.btn-text-2') }}</b-button>
                    </b-col>
                </b-row>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
    @import 'assets/scss/variables';

    #cover {
        color: $color-dark;
        position: relative;
        margin-top: 100px;
        padding-bottom: 90px;
        .cover-info {
            position: relative;
            margin: auto;

            h1 {
                font-size: 1.7rem;
                width: 90%;
                margin: -10px auto 30px;
            }
            p {
                font-size: 1.125rem;
            }
        }
        .cover-image {
            position: relative;
            margin: auto;
            display: block;
            width: 90%;

            img{
                width:100%;
            }
        }

        .cover-buttons{
            width: 93%;
            margin: 0 auto;
            margin-top: 30px;

            .cover-button {
                display: block;
                margin-top: 20px;
                font-size: 1.25em;
                font-weight: 600;
                width: 100%;
                border: none;
                &:hover {
                    opacity: 85%;
                }
            }
        }
    }

    @media all and (max-width: 450px) {
        #cover {

            .cover-info {
                h1{
                    font-size: 1.3rem;
                    margin: 20px auto 40px;
                }
                h2 {
                    //padding-top: 60px;
                    font-size: 1.85rem;
                }
                p {
                    font-size: .925rem;
                }
                .btn {
                    font-size: 1rem;
                    padding: .5rem 2.75rem;
                }
                .cover-buttons{
                    width: 100%;
                    margin-top: 40px;
                }
            }
        }
    }

</style>
