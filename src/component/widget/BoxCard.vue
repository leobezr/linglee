<template>
  <div id="boxCard" :class="direction" @click="action">
    <v-list>
      <v-list-item-group>
        <v-list-item>
          <div class="wrap">
            <slot name="card">
              <div class="boxIcon">
                <div class="theIcon mb-3">
                  <v-icon :size="50" color="primary">{{ icon }}</v-icon>
                </div>
              </div>
              <div class="boxContentContainer">
                <div class="boxTitle">
                  <slot name="title">
                    <h3 class="primary--text mb-3">{{ title }}</h3>
                  </slot>
                </div>
                <div class="boxContent">
                  <slot name="content">{{ content }}</slot>
                </div>
              </div>
            </slot>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
// Style
import "@/style/widgets/_boxCard.scss";

export default {
  name: "BoxCard",
  computed: {
    direction() {
      const baseClass = " boxContainer";
      let orientation = "boxAlignment";

      switch (this.orientation) {
        case "vertical":
          orientation = "verticalAlignment";
          break;
        case "box":
          orientation = "boxAlignment";
          break;
        case "horizontal":
          orientation = "horizontalAlignment";
          break;
      }
      return orientation + baseClass;
    }
  },
  props: {
    action: { type: Function },
    orientation: String,
    content: String,
    icon: String,
    title: String
  }
};
</script>