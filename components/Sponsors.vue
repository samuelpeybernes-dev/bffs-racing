<template>
    <Carousel :autoplay="autoplayDuration" v-bind="settings" :wrap-around="wrapAroundEnabled"
        :breakpoints="autoplaySwitch()" class="container mx-auto ">
        <Slide v-for="slide in companys" :key="slide">
            <div class="px-6">
                <img alt="..." :src="slide.logo" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                <div class="pt-6 text-center">
                    <h5 class="text-xl font-bold">{{ slide.name }}</h5>
                    <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        {{ slide.activity }}
                    </p>
                    <div class="mt-6">
                        <button
                            class="bg-lightBlue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button">
                            <font-awesome-icon icon="fab fa-chrome" />
                        </button>
                        <button
                            class="bg-lightBlue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button">
                            <font-awesome-icon icon="fab fa-facebook" />
                        </button>
                        <button
                            class="bg-blue-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                            type="button">
                            <font-awesome-icon icon="fab fa-linkedin" />
                        </button>
                    </div>
                </div>
            </div>
        </Slide>
    </Carousel>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import team1 from "@/assets/img/team-1-800x800.jpg";
import 'vue3-carousel/dist/carousel.css'
export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        autoplayDuration: 0,
        wrapAroundEnabled: true,
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        companys: [
            {
                name: 'Entreprise',
                logo: team1,
                activity: 'Garage',
                website: 'https://www.google.com',
                facebook: 'https://www.facebook.com',
                linkedin: 'https://www.linkedin.com',
            },
            {
                name: 'Entreprise2',
                logo: team1,
                activity: 'Garage',
                website: 'https://www.google.com',
                facebook: 'https://www.facebook.com',
                linkedin: 'https://www.linkedin.com',
            },
            {
                name: 'Entreprise3',
                logo: team1,
                activity: 'Garage',
                website: 'https://www.google.com',
                facebook: 'https://www.facebook.com',
                linkedin: 'https://www.linkedin.com',
            },
            {
                name: 'Entreprise4',
                logo: team1,
                activity: 'Garage',
                website: 'https://www.google.com',
                facebook: 'https://www.facebook.com',
                linkedin: 'https://www.linkedin.com',
            },
            {
                name: 'Entreprise5',
                logo: team1,
                activity: 'Garage',
                website: 'https://www.google.com',
                facebook: 'https://www.facebook.com',
                linkedin: 'https://www.linkedin.com',
            }
        ]
    }),
    methods: {
        autoplaySwitch() {
            const breakpoints = {
                700: {
                    itemsToShow: 3.5,
                    snapAlign: 'center',
                },
                1024: {
                    itemsToShow: this.companys.length <= 4 ? this.companys.length : 4,
                    snapAlign: 'start',
                },
            };

            this.autoplayDuration = this.companys.length <= 4 ? 0 : 2000;
            this.wrapAroundEnabled = this.companys.length <= 4 ? false : true;

            return breakpoints;
        }
    },
    created() {
        this.autoplaySwitch();
    },
})
</script>
  