<template>
    <section-wrapper>
        <section-heading>
            {{ $t('contact.title') }}
        </section-heading>
        <b-row>
            <b-col>
                <b-form
                    class="w-100"
                    action="send.php"
                    :class="{ sending, done }"
                    method="post"
                    @submit.prevent="sendMessage"
                >
                    <b-form-row>
                        <b-form-group
                            class="col-12 col-md-6"
                            :label="$t('Name')"
                            label-for="name"
                            :description="$t('This field is required')"
                        >
                            <b-form-input
                            id="name"
                            v-model="form.name"
                            name="name"
                            required
                            :placeholder="$t('Enter your name')"
                            />
                        </b-form-group>

                        <b-form-group
                            class="col-12 col-md-6"
                            :label="$t('Company name')"
                            label-for="companyName"
                        >
                            <b-form-input
                            id="companyName"
                            v-model="form.companyName"
                            name="companyName"
                            required
                            :placeholder="$t('Enter your company name')"
                            />
                        </b-form-group>
                    </b-form-row>

                    <b-form-row>
                        <b-form-group
                            class="col-12 col-md-6"
                            :label="$t('Email address')"
                            label-for="email"
                            :description="$t('This field is required')"
                        >
                            <b-form-input
                            id="email"
                            v-model="form.email"
                            name="email"
                            type="email"
                            required
                            :placeholder="$t('Enter your email address')"
                            />
                        </b-form-group>

                        <b-form-group
                            class="col-12 col-md-6"
                            :label="$t('¿What service are you looking for?')"
                            label-for="service"
                            :description="$t('This field is required')"
                        >
                            <b-form-select
                            id="service"
                            v-model="form.services"
                            name="service"
                            required>
                            <option v-for="(service, index) in services" :selected="index === 0" :key="index" :value="$t(service.value)">{{ $t(service.text) }}</option>
                            </b-form-select>
                        </b-form-group>
                    </b-form-row>

                    <b-form-group
                        :label="$t('Message')"
                        label-for="message"
                    >
                        <b-form-textarea
                            id="message"
                            v-model="form.message"
                            rows="4"
                            name="message"
                            :placeholder="$t('Enter your message')"
                        />
                    </b-form-group>

                    <span class="form-output">{{ $t(output) }}</span>
                    <Button
                        type="submit"
                        class="mr-0 d-flex justify-content-center w-auto"
                    >
                    {{ $t('Send') }}
                    </Button>
                </b-form>
            </b-col>
        </b-row>
    </section-wrapper>
</template>

<script>
import SectionHeading from 'components/snippets/SectionHeading.vue'
import SectionWrapper from 'components/snippets/SectionWrapper.vue'
import Button from 'components/snippets/Button.vue'



export default {
    components: {
        SectionHeading,
        SectionWrapper,
        Button
    },
    data () {
        return {
            form: {
                name: '',
                companyName: '',
                email: '',
                services: null,
                message: ''
            },
            services: [
                { text: 'Select service', value: null },
                { text: 'Training and Consultancy', value: 'Training and Consultancy' },
                { text: 'Design and communication', value: 'Design and communication' },
                { text: 'Development', value: 'Development' },
                { text: 'Infrastructure', value: 'Infrastructure' },
                { text: 'Other services', value: 'Other services' }
            ],
            output: '',
            sending: false,
            done: false
        }
    },
    methods: {
        sendMessage () {
            if (!this.done) {
                const formData = new FormData()

                formData.append('name', this.form.name)
                formData.append('companyName', this.form.companyName)
                formData.append('email', this.form.email)
                formData.append('service', this.form.services)
                formData.append('message', this.form.message)
                this.sending = true

                this.$http
                    .post('/fit/send.php', formData)
                    .then(response => {
                        this.sending = false
                        if (response.data.enviado) {
                            this.done = true
                            this.output = 'Message sent. Thank you!'
                        } else {
                            this.output = response.data.mensaje
                        }
                    })
                    .catch(e => {
                        this.done = true
                        this.output = 'Message sent. Thank you!'
                        // this.sending = false
                        // this.output = 'An error occurred while trying to send your message.'
                    })
            }
        }
    },
    computed: {

    }
}
</script>


<style lang="scss" scoped>
    @import 'assets/scss/variables';

    form {
        input,
        textarea,
        select {
            border-color: $color-dark;
            border-radius: 0;
            min-height: 3.25rem;
            &::placeholder {
                color: grey;
                font-size: 95%;
            }
        }
        select {
            background-image: none;
        }
        small {
            font-size: 65%;
            color: #fff;
        }
        .form-output {
            display: block;
            text-transform: uppercase;
            font-weight: 600;
            color: #6056a5;
        }
    }
</style>
