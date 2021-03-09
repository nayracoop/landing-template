<template>
    <div id="bottom">
        <hr>
        <b-container>
        <b-row>
            <b-col class="col-12">
            <div class="real-footer text-center">
                <small class="made-with mt-3"><a target="_blank" href="https://nayra.coop" v-html="$t('footer.signature')"></a></small>
                <div class="licence-cont mt-2">
                <small class="licence">{{ $t('footer.licence') }} <a target="_blank" href="http://creativecommons.org/licenses/by-sa/4.0/">{{ $t('footer.licenceLinkTitle') }}.</a></small>
                <a target="_blank" rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                    <img class="mt-3" alt="Licencia Creative Commons" src="static/img/licence.png">
                </a>
                </div>
            </div>
            </b-col>
        </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss">
    @import 'assets/scss/variables';

    #bottom {
        hr {
            display:block;
            border:none;
            height:10px;
            background-repeat: repeat-x;
            background-size:contain;
            margin: 0px;        
        }
        .real-footer {
            padding: 20px 0;
        } 
        .licence-cont {
            img {
                width: 58px;
            }
            small {
                font-size: .7rem;
            }
            a { 
                display: block;
            }
        }
        small {
            &.made-with {
                span:first-of-type {
                    color: $color-dark;
                }
                span:last-of-type {
                    color: #ee6161;
                }
                &:hover {
                    span:first-of-type {
                        color: #961888;
                    }
                }
            }
        }
    }

</style>