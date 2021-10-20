<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />

    <div class="playground-controls">
      <button class="button" @click="reset">
        Reset playground
      </button>
      <button class="button" @click="modelValue = multiple ? [] : null">
        Reset model
      </button>
      <button class="button" @click="modelValue = multiple ? [2] : 2">
        Set ModelValue (uid === 2)
      </button>
      <button class="button" @click="mandatory = !mandatory">
        toggle mandatory
      </button>
      <button class="button" @click="multiple = !multiple">
        toggle multiple
      </button>
      <button class="button" @click="watchMultiple = !watchMultiple">
        toggle multiple watch
      </button>
      <button class="button" @click="watchMandatory = !watchMandatory">
        toggle mandatory watch
      </button>
      <button class="button" @click="hideEye = !hideEye">
        toggle hideEY
      </button>

      <pre><code>{{ $data }} </code></pre>
    </div>

    <div class="wrapper">
      <section>
        <h2>Independent e eye</h2>
        <v-eye #default="{ isActive, toggle }">
          <div class="v-eye">
            <div class="v-eye-header" @click="toggle">
              <span>Free eye</span>
              <span>{{ isActive ? "👁" : "🕶" }}</span>
            </div>
            <div class="v-eye-content" v-show="isActive">Boo</div>
          </div>
        </v-eye>

        <v-eye as="div" class="v-eye">
          <v-eye-switch class="v-eye-header">
            Toggle me
          </v-eye-switch>
          <v-eye-content class="v-eye-content">
            wq
          </v-eye-content>
        </v-eye>

        <h2>state-driven initialValue</h2>
        <v-eye :active="true" v-slot:default="{ isActive, toggle }">
          <div class="v-eye">
            <div class="v-eye-header" @click="toggle">
              <span>Free eye</span>
              <span>{{ isActive ? "👁" : "🕶" }}</span>
            </div>
            <div class="v-eye-content" v-show="isActive">Boo</div>
          </div>
        </v-eye>

        <h2>state-driven (v-model) eye</h2>
        <v-eye v-model="modelValueSingleStateDrivenEye">
          <div class="v-eye">
            <div
              class="v-eye-header"
              @click="
                modelValueSingleStateDrivenEye = !modelValueSingleStateDrivenEye
              "
            >
              <span>Free eye {{ modelValueSingleStateDrivenEye }}</span>
              <span>{{ modelValueSingleStateDrivenEye ? "👁" : "🕶" }}</span>
            </div>
            <div class="v-eye-content" v-show="modelValueSingleStateDrivenEye">
              Boo
            </div>
          </div>
        </v-eye>
      </section>

      <section>
        <h2>Managed eyes<code>&lt;eye-manager&gt;</code></h2>
        {{ modelValue }}
        <v-eye-manager
          v-model="modelValue"
          :multiple="multiple"
          :mandatory="mandatory"
          :watch-multiple="watchMultiple"
          :watch-mandatory="watchMandatory"
        >
          <div id="group-1">
            <v-eye :uid="1" v-slot:default="{ isActive, toggle }">
              <mock-eye-slot-component
                title="1"
                :isActive="isActive"
                @header-click="toggle"
              >
                <!-- nested with only internal state, no v-model -->
                <v-eye-manager :multiple="multiple" :mandatory="mandatory">
                  <section id="group-2">
                    <v-eye v-slot:default="{ isActive, toggle }">
                      <mock-eye-slot-component
                        title="nested 1.1"
                        :isActive="isActive"
                        @header-click="toggle"
                      />
                    </v-eye>

                    <v-eye v-slot:default="{ isActive, toggle }">
                      <mock-eye-slot-component
                        title="nested 1.2"
                        :isActive="isActive"
                        @header-click="toggle"
                      />
                    </v-eye>
                  </section>
                </v-eye-manager>
              </mock-eye-slot-component>
            </v-eye>
            <v-eye :uid="2" v-slot:default="{ isActive, toggle }">
              <mock-eye-slot-component
                title="2"
                :isActive="isActive"
                @header-click="toggle"
              />
            </v-eye>
            <v-eye
              uid="john"
              v-if="hideEye"
              v-slot:default="{ isActive, toggle }"
            >
              <mock-eye-slot-component
                title="john"
                :isActive="isActive"
                @header-click="toggle"
              />
            </v-eye>
          </div>
        </v-eye-manager>
      </section>
    </div>
  </div>
</template>

<script>
import MockEyeSlotComponent from "./components/MockEyeSlotComponent.vue";
import { VEyeManager, VEye, VEyeSwitch, VEyeContent } from "v-eye";

const defaultProps = VEyeManager.props;

const DEFAULT_STATE = () => ({
  modelValueSingleStateDrivenEye: false,
  modelValue: [2],
  hideEye: false,
  mandatory: defaultProps.mandatory.default,
  multiple: defaultProps.multiple.default,
  watchMultiple: defaultProps.watchMultiple.default,
  watchMandatory: defaultProps.watchMandatory.default
});

export default {
  name: "App",
  components: {
    VEyeManager,
    VEye,
    VEyeSwitch,
    VEyeContent,
    MockEyeSlotComponent
  },

  data: DEFAULT_STATE,

  methods: {
    reset() {
      Object.assign(this.$data, DEFAULT_STATE());
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}

.playground-controls {
  position: fixed;
  text-align: left;
  padding: 10px;
  font-family: monospace;
  font-size: 12px;
  top: 0;
  right: 0;
  background-color: rgba(#2c3e50, 0.95);
  color: white;
  z-index: 100;
  width: 280px;
}

.wrapper {
  text-align: left;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
