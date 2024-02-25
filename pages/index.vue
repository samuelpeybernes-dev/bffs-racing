<template>
  <div>
    <navbar />
    <main>
      <div class="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" :style="{
          backgroundImage: 'url(' + backgroundHeader + ')'
        }
          ">
          <span id="blackOverlay" class="w-full h-full absolute  bg-black" style="opacity: 0.35;"></span>
        </div>
        <div class="container relative mx-auto">
          <div class="items-center flex flex-wrap">
            <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <img class="mx-auto" width="300" :src="quatrelLogo" alt="logo du 4L trophy">
                <h1 class="text-white font-semibold text-5xl">
                  Projet 4L trophy 2025
                </h1>

              </div>
            </div>
          </div>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-[-1px] overflow-hidden" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
      </div>

      <section class="pb-20 bg-blueGray-200 -mt-24">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap">
            <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i class="fas fa-award"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Awarded Agency</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>

            <div class="w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                    <i class="fas fa-retweet"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Free Revisions</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 w-full md:w-4/12 px-4 text-center">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div class="px-4 py-5 flex-auto">
                  <div
                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i class="fas fa-fingerprint"></i>
                  </div>
                  <h6 class="text-xl font-semibold">Verified Company</h6>
                  <p class="mt-2 mb-4 text-blueGray-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-32">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i class="fas fa-user-friends text-xl"></i>
              </div>
              <h3 class="text-3xl mb-2 font-semibold leading-normal">
                Working with us is a pleasure
              </h3>
              <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Don't let your uses guess by attaching tooltips and popoves to
                any element. Just make sure you enable them first via
                JavaScript.
              </p>
              <p class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                The kit comes with three pre-built pages to help you get started
                faster. You can change the text and images and you're good to
                go. Just make sure you enable them first via JavaScript.
              </p>
              <router-link to="/" class="font-bold text-blueGray-700 mt-8">
                Check Vue Notus!
              </router-link>
            </div>

            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500">
                <img alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  class="w-full align-middle rounded-t-lg" />
                <blockquote class="relative p-8 mb-4">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px">
                    <polygon points="-30,95 583,95 583,65" class="text-emerald-500 fill-current"></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-20">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-white fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto px-4">
          <div class="items-center flex flex-wrap">
            <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img alt="..." class="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
            </div>
            <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div class="md:pr-12">
                <div
                  class="text-emerald-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-emerald-300">
                  <i class="fas fa-rocket text-xl"></i>
                </div>
                <h3 class="text-3xl font-semibold">A growing company</h3>
                <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                  The extension comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go.
                </p>
                <ul class="list-none mt-6">
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                          <i class="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Carefully crafted components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                          <i class="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">
                          Amazing page examples
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li class="py-2">
                    <div class="flex items-center">
                      <div>
                        <span
                          class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600 bg-emerald-200 mr-3">
                          <i class="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 class="text-blueGray-500">Dynamic components</h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class="pt-20 pb-48">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center text-center mb-24">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold">Ils nous soutiennent deja </h2>
              <p class="text-lg leading-relaxed m-4 text-blueGray-500">
                Un grand merci à ces entreprises qui nous soutiennent déjà dans notre projet.
              </p>
            </div>
          </div>
          <Sponsors />
        </div>
      </section>

      <section class="lg:pb-16 pb-32 relative block bg-blueGray-800">
        <div class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-[-1px] overflow-hidden" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-800 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>

        <div class="container mx-auto pt-16 px-4 lg:pt-24 lg:pb-64">
          <div class="flex flex-wrap text-center justify-center">
            <div class="w-full lg:w-6/12 px-4">
              <h2 class="text-4xl font-semibold text-white">
                Vous cherchez à nous contacter ?
              </h2>
              <p class="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Vous pouvez nous contacter via le formulaire ci-dessous, par telephone ou meme via nos réseaux sociaux.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap mt-12 justify-center gap-5 lg:gap-0">

            <div class="w-full lg:w-3/12 px-4 text-center">
              <a href="tel:0678492118">
                <div
                  class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <font-awesome-icon icon="fas fa-phone " class="text-xl" />
                </div>
                <h6 class="text-xl mt-5 font-semibold text-white">
                  06 78 49 21 18
                </h6>
              </a>
            </div>

            <div class="w-full lg:w-3/12 px-4 text-center">
              <a href="https://www.instagram.com/">
                <div
                  class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <font-awesome-icon icon="fab fa-instagram " class="text-xl" />

                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Instagram
                </h5>
              </a>
            </div>

            <div class="w-full lg:w-3/12 px-4 text-center">
              <a href="https://www.facebook.com/">
                <div
                  class="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <font-awesome-icon icon="fab fa-facebook" class="text-xl" />
                </div>
                <h5 class="text-xl mt-5 font-semibold text-white">
                  Facebook
                </h5>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section class="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <form ref="form" @submit.prevent="submitForm" class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl font-semibold">
                    Vous souhaitez soutenir notre projet ?
                  </h4>
                  <p class="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Completez ce formulaire et nous vous recontacterons dans les plus brefs délais.
                  </p>
                  <div class="relative w-full mb-3 mt-8">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="full-name">
                      Prénom et Nom
                    </label>
                    <input @change="v$.name.$touch" v-model="formData.name" type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Prénom et Nom" />
                    <span class="text-xs text-red-500" v-if="v$.name.$error">{{
                      v$.name.$errors[0].$message
                    }}</span>
                  </div>

                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input @change="v$.email.$touch" v-model="formData.email" type="text"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email" />
                    <span class="text-xs text-red-500" v-if="v$.email.$error">{{
                      v$.email.$errors[0].$message
                    }}</span>
                  </div>

                  <div class="relative w-full mb-3">
                    <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea @change="v$.message.$touch" v-model="formData.message" rows="4" cols="80"
                      class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Ecrivez votre message..." />
                    <span class="text-xs text-red-500" v-if="v$.message.$error">{{
                      v$.message.$errors[0].$message
                    }}</span>

                  </div>
                  <div class="text-center mt-6">
                    <button type="submit"
                      class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                      Envoyer ➡️
                    </button>


                  </div>
                </form>
              </div>
              <v-alert v-show="isSent" type="success" title="Message envoyé"></v-alert>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-component />
  </div>
</template>
<script >
import Navbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/FooterSmall.vue";
import Sponsors from "@/components/Sponsors.vue";
import team1 from "@/assets/img/team-1-800x800.jpg";
import team2 from "@/assets/img/team-2-800x800.jpg";
import team3 from "@/assets/img/team-3-800x800.jpg";
import team4 from "@/assets/img/team-4-470x470.png";
import backgroundHeader from "@/assets/img/4LTrophy928.jpg";
import quatrelLogo from "@/assets/img/4L-trophy-logo.png";
import { required, email, helpers } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

const formData = reactive({
  name: '',
  email: '',
  message: '',
});

const rules = computed(() => {
  return {
    email: {
      required: helpers.withMessage("L'email est requis", required),
      email: helpers.withMessage('Le format de mail est incorrect', email),
    },
    name: {
      required: helpers.withMessage('Le nom et prénom est requis', required),
    },
    message: {
      required: helpers.withMessage('Un message est requis', required),
    },
  };
});

const v$ = useVuelidate(rules, formData);

export default {
  data() {

    return {
      team1,
      team2,
      team3,
      team4,
      backgroundHeader,
      quatrelLogo,
      formData,
      v$,
      isSent: false,
    };
  },
  components: {
    Navbar,
    FooterComponent,
  },
  methods: {
    async submitForm() {
      v$.value.$validate();
      if (!v$.value.$error) {
        this.$mail.send({
          config: "samuel",
          from: this.formData.name,
          subject: 'Demande de contact 4L trophy',
          html: "Prénom et Nom : " + this.formData.name + "<br>" +
            "Email :" + this.formData.email + "<br>" +
            "Message :" + this.formData.message,
        })
        this.$mail.send({
          config: "lucas",
          from: this.formData.name,
          subject: 'Demande de contact 4L trophy',
          html: "Prénom et Nom : " + this.formData.name + "<br>" +
            "Email :" + this.formData.email + "<br>" +
            "Message :" + this.formData.message,
        })
        this.isSent = true;
        this.resetForm();
      }
    },
    resetForm() {
      v$.value.$reset()
      this.formData.name = '';
      this.formData.email = '';
      this.formData.message = '';
    }

  }
};
</script>
