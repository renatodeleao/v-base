<template>
  <section class="playground-demo-section">
    <h1 class="playground-demo-section__title">Disclosure</h1>

    <section class="mb-8">
      <h2 class="playground-demo-section__heading">Controlled</h2>
      <playground-codebox class="mb-2"> open: {{ model }} </playground-codebox>
      <button class="button text-white" @click="model = !model">
        External toggle
      </button>
      <v-disclosure v-model="model">
        <v-disclosure-summary>
          Show more
        </v-disclosure-summary>
        <v-disclosure-content>
          {{ loremIpsum }}
        </v-disclosure-content>
      </v-disclosure>
    </section>

    <section class="mb-8">
      <h2 class="playground-demo-section__heading">UnControlled</h2>
      <v-disclosure :open="true">
        <v-disclosure-summary>
          Show more
        </v-disclosure-summary>
        <v-disclosure-content>
          {{ loremIpsum }}
        </v-disclosure-content>
      </v-disclosure>
    </section>

    <section class="mb-8">
      <h2 class="playground-demo-section__title">
        DisclosureGroup (accordion)
      </h2>
      <playground-codebox class="mb-2">
        v-model: {{ groupModel || "null" }}<br />
        props: {{ groupProps }}
      </playground-codebox>

      <div class="flex flex-wrap gap-1 mb-3">
        <button
          v-for="control in groupControls"
          :key="control.label"
          class="button text-white"
          @click="control.action"
        >
          {{ control.label }}
        </button>
      </div>

      <v-disclosure-group v-model="groupModel" v-bind="groupProps" @change="handle">
        <v-disclosure
          v-for="panel in visibleGroupPanels"
          :key="panel"
          :uid="panel"
        >
          <v-disclosure-summary>Show more {{ panel }}</v-disclosure-summary>
          <v-disclosure-content>
            {{ loremIpsum }}

            <v-disclosure-group v-bind="groupProps">
              <v-disclosure
                v-for="panel in visibleGroupPanels"
                :key="'nested-' + panel"
                :uid="'nested-' + panel"
              >
                <v-disclosure-summary
                  >Show nested uncontrolled {{ panel }}</v-disclosure-summary
                >
                <v-disclosure-content>
                  {{ loremIpsum }}
                </v-disclosure-content>
              </v-disclosure>
            </v-disclosure-group>
          </v-disclosure-content>
        </v-disclosure>
      </v-disclosure-group>
    </section>
  </section>
</template>

<script>
import { VEyeManager, VEye } from "v-eye";
import {
  VDisclosure,
  VDisclosureSummary,
  VDisclosureContent,
  VDisclosureGroup
} from "@/components";
import PlaygroundCodebox from "@/PlaygroundCodebox";

export default {
  name: "DisclosureDemo",
  components: {
    PlaygroundCodebox,
    VEyeManager,
    VEye,
    VDisclosure,
    VDisclosureSummary,
    VDisclosureContent,
    VDisclosureGroup
  },
  data: () => ({
    model: true,
    groupModel: 2,
    groupPanels: [1, 2, 3],
    groupProps: {
      multiple: false,
      mandatory: false,
      watchPropsWithModelSideEffects: true
    },
    showGroupPanel3: true,
    loremIpsum: `
      Now that we know who you are, I know who I am. I'm not a mistake!
      It all makes sense! In a comic, you know how you can tell who the
      arch-villain's going to be? He's the exact opposite of the hero.
      And most times they're friends, like you and me! I should've known
      way back when... You know why, David? Because of the kids. They
      called me Mr Glass.
    `
  }),
  computed: {
    groupControls() {
      return [
        ...Object.keys(this.groupProps).map(prop => ({
          label: `toggle ${prop}`,
          action: () => {
            this.groupProps[prop] = !this.groupProps[prop];
          }
        })),
        {
          label: "Conditional render 3",
          action: () => {
            this.showGroupPanel3 = !this.showGroupPanel3;
          }
        }
      ];
    },
    visibleGroupPanels() {
      return this.showGroupPanel3
        ? this.groupPanels
        : this.groupPanels.filter(p => p !== 3);
    }
  },
  methods: {
    handle(...args) {
      console.log('VDisclosure', ...args)
    }
  }
};
</script>
