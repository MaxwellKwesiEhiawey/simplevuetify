<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="item in items" :src="item.src" :key="item.id">
          <div class="title">
            {{ item.title }}
          </div>
        </v-carousel-item>
      </v-carousel>
      <h2 class="cardTitle">Browse Categories</h2>
      
    <div class="cardsContainer">
  <v-app id="inspire">
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849821_960_720.jpg"
      ></v-img>
  
      <v-card-title>Tech Content</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 subtitle-1">
          Also Available
        </div>
   <div>Design Job</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Today's availability</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>{{new Date().toLocaleTimeString()}}</v-chip>
  
          <v-chip>{{new Date().toLocaleDateString()}}</v-chip>
  
         
  
         
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
     <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://cdn.pixabay.com/photo/2014/05/02/21/49/blogging-336375_960_720.jpg"
      ></v-img>
  
      <v-card-title>Tech Content</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 subtitle-1">
          Also Available
        </div>
   <div>Design Job</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Today's availability</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>{{new Date().toLocaleTimeString()}}</v-chip>
  
          <v-chip>{{new Date().toLocaleDateString()}}</v-chip>
  
         
  
         
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>
  
      <v-img
        height="250"
        src="https://media.istockphoto.com/photos/man-applying-for-a-job-on-the-internet-picture-id475352876?b=1&k=6&m=475352876&s=170667a&w=0&h=0Zz6J73ebpRlUIg-Ilrx-FG5nPXPss8YHbiaY10_L8Y="
      ></v-img>
  
      <v-card-title>Tech Content</v-card-title>
  
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>
  
          <div class="grey--text ml-4">
            4.5 (413)
          </div>
        </v-row>
  
        <div class="my-4 subtitle-1">
          Also Available
        </div>
   <div>Design Job</div>
      </v-card-text>
  
      <v-divider class="mx-4"></v-divider>
  
      <v-card-title>Today's availability</v-card-title>
  
      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>{{new Date().toLocaleTimeString()}}</v-chip>
  
          <v-chip>{{new Date().toLocaleDateString()}}</v-chip>
  
         
  
         
        </v-chip-group>
      </v-card-text>
  
      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</div>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
    data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "01",
          title: "Just Trying"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
            id: "02",
          title: "Getting In shape"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "03",
          title: "Error Caught"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "02",
          title: "Editor, Stop Complaining"
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>
<style scoped>
.title {
  position: absolute;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  padding: 20px;
}
.cardTitle{
  text-align: center
}
.cardsContainer{
  display: flex;
}
</style>
