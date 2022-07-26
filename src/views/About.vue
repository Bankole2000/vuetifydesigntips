<template>
  <div class="about">
    <PageTitle title="About" />
    <v-container>
      <v-row>
        <v-col cols="10" offset="1">
          <p class="text-h5 font-weight-light">
            This project was built as a demo for
            <a href="https://youtu.be/nIbqVp8DCEQ?t=187" target="_blank"
              >this talk on youtube</a
            >, and used to demonstrate how
            <a href="https://vuetifyjs.com" target="_blank">Vuetify</a> helps
            Front End developers deal with common design challenges including:
          </p>
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="(item, i) in items" :key="i">
              <v-expansion-panel-header>
                <p class="text-h5 font-weight-light mb-0">{{ item.title }}</p>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="my-4 font-weight-light caption">
                  {{ item.description }}
                </p>
                <p
                  class="mb-0 font-weight-light"
                  v-for="(point, j) in item.points"
                  :key="j"
                >
                  - &nbsp; &nbsp; &nbsp;{{ point }}
                </p>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10" offset="1">
          <div class="d-flex align-center">
            <v-btn
              class="text-capitalize"
              outlined
              href="https://github.com/Bankole2000/vuetifydesigntips"
              target="_blank"
              ><v-icon left>mdi-github</v-icon> View the code</v-btn
            >
            <v-btn
              class="text-capitalize mx-4 primary"
              href="https://twitter.com/CodingInNeon"
              target="_blank"
              outlined
              ><v-icon left>mdi-twitter</v-icon> Follow me on Twitter</v-btn
            >
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PageTitle from "../components/common/PageTitle";
export default {
  components: {
    PageTitle,
  },
  data() {
    return {
      items: [
        {
          title: "Responsiveness",
          description:
            "How does vuetify help front end developers with responsiveness?",
          points: [
            "Ships with accessible classes and customizable breakpoint detection",
            "Helps with automated view port detection and layout control",
            "Context aware components with multiple, dynamic props and slots",
            "Dynamic, template accessible breakpoints style/class binding",
          ],
        },
        {
          title: "Theming",
          description: "How does vuetify help with application theming?",
          points: [
            "Theming is based on the tested and tried material design system.",
            "Theming statys consistent application wide, and can be configured from the onset, or dynamically at any point during runtime.",
            "Ships with a dynamic color range - with a wide spectrum readily accessible via javascript or style/class bindings",
            "Light and dark mode are literally 1 line of code away, with built in contrast to boot.",
          ],
        },
        {
          title: "Interactivity",
          description: "How does vuetify help with application interactivity?",
          points: [
            "Ships with dozens of interactive and highly customizable components for visual communication right out of the box",
            "Specialized components for interactive state management can be supercharged by vue-slots, event-bindings, and vuex state",
            "Ships with a large collection of readily available components. Alerts, snackbars, badges, icons, loaders, progress bars, range sliders, etc - All leveraging Vue JS capabilities",
          ],
        },
        {
          title: "Animation",
          description: "How does vuetify help with animations?",
          points: [
            "Components can be animated using CSS and/or any 3rd party CSS or JS libraries.",
            "Ship with natively animated components",
            "Provides lightweight, easily deployed animation containers to make any component(s) animatable",
            "Overall effect is a harmony of motion",
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>

