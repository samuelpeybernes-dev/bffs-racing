<template>
    <v-slide-group v-model="model" class="pa-4 w-75 mx-auto" center-active show-arrows>
        <v-slide-group-item v-for="n in 6" :key="n" v-slot="{ isSelected, toggle }">
            <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4 mx-10">
                <div class="px-6">
                    <img alt="..." :src="team1" class="shadow-lg rounded-full mx-auto max-w-120-px" />
                    <div class="pt-6 text-center">
                        <h5 class="text-xl font-bold">Entreprise</h5>
                        <p class="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                            Entreprise
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
            </div>
        </v-slide-group-item>
    </v-slide-group>
</template>

<script>
import team1 from "@/assets/img/team-1-800x800.jpg";

export default {
    data: () => ({
        model: null,
        team1
    }),
}
</script>