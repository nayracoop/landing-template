<template>
    <aside class="social-links-fixed position-fixed">
        <ul class="d-flex flex-column">
            <li class="mt-1 mb-1">
                <a
                target="_blank"
                href="https://www.facebook.com/mochacelis/"
                title="Facebook"
                ><font-awesome-icon :icon="['fab', 'facebook-square']" :style="{ color: 'white' }"/><span class="sr-only">Facebook</span></a>
            </li>
            <li class="mt-1 mb-1">
                <a
                target="_blank"
                href="https://www.instagram.com/mochacelis/"
                title="Instagram"
                ><font-awesome-icon :icon="['fab', 'instagram']" :style="{ color: 'white' }"/><span class="sr-only">Instagram</span></a>
            </li>
            <li class="mt-1 mb-1">
                <a
                target="_blank"
                href="https://twitter.com/BachiTransMocha"
                title="Twitter"
                ><font-awesome-icon :icon="['fab', 'twitter']" :style="{ color: 'white' }"/><span class="sr-only">Twitter</span></a>
            </li>
            <li class="mt-1 mb-1">
                <a
                target="_blank"
                href="mailto: info@bachilleratomochacelis.edu.ar"
                title="Mail"
                ><font-awesome-icon :icon="['fas','envelope']" :style="{ color: 'white' }"/><span class="sr-only">Mail</span></a>
            </li>
        </ul>
    </aside>
</template>

<style lang="scss">
    @import 'assets/scss/variables';

    .social-links-fixed {
        bottom: 5%;
        right: 0;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        box-shadow: 1px 1px 5px 1px rgba(0, 15, 27, 0.07);
        padding: 10px;
        background: #FFF;
        ul {
            margin-bottom: 0;
            li {
                font-size: 1.25em;
                a:hover {
                    color: $color-purple;
                }
            }
        }
    }
</style>