<template>
  <v-layout row wrap>
    <v-flex>
      <v-carousel
        class="carousel-items"
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        ><div class="title">
          <v-carousel-item v-for="item in items" :src="item.src" :key="item.id">
            <div class="title my-10 mx-10 px-lg-15">
              <h1>{{ item.title }}</h1>
            </div>
            <div class="my-10 mx-10">
              <h2>{{ item.msg }}</h2>
            </div>
            <div>
              <v-btn
                class="ma-2 my-10 mx-10"
                outlined
                color="red"
                dark
                border-2
                depressed
                large
                >{{ item.btn }}
              </v-btn>
            </div>
          </v-carousel-item>
        </div>
      </v-carousel>
      <h1 class="cardTitle my-7" red--text>Browse Categories</h1>

      <div class="cardsContainer">
        <div id="inspire" class="v-app-wrap">
          <v-card :loading="loading" class="mx-auto my-7 " max-width="250">
            <v-img
              height="250"
              src="https://media.istockphoto.com/photos/graphic-designer-drawing-sketches-logo-design-picture-id1191609321?b=1&k=6&m=1191609321&s=170667a&w=0&h=mRMdYSZgLKi7BR51IiQClkswoFcrwX4wQWn0qohEbnQ="
            ></v-img>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <v-card-title class="cardLabel mx-2">Graphic Design</v-card-title>
              <div class="my-4 subtitle-1"></div>
            </v-card-text>
          </v-card>
          <v-card :loading="loading" class="mx-auto my-7" max-width="300">
            <v-img
              height="250"
              src="https://media.istockphoto.com/photos/developing-programming-working-in-a-software-engineers-code-tech-on-picture-id1128132157?b=1&k=6&m=1128132157&s=170667a&w=0&h=afUW9_OVl740JwkMWYeDeXCLGyJWLroHdHMB8r8XD4o="
            ></v-img>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <v-card-title class="cardLabel mx-0">
                <p>Programming and</p>
                <p>Technology</p>
              </v-card-title>
            </v-card-text>
          </v-card>
          <v-card :loading="loading" class="mx-auto my-7" max-width="320">
            <v-img
              height="250"
              src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg"
            ></v-img>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <v-card-title class="cardLabel mx-0"
                >Digital Marketing and Sales
              </v-card-title>
              <div class="my-4 subtitle-1"></div>
            </v-card-text>
          </v-card>
          <v-card :loading="loading" class="mx-auto my-7" max-width="300">
            <v-img
              height="250"
              src="https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696234__340.jpg"
            ></v-img>

            <v-card-text>
              <v-row align="center" class="mx-0"> </v-row>
              <v-card-title class="cardLabel mx-10">Business</v-card-title>
              <div class="my-4 subtitle-1"></div>
            </v-card-text>
          </v-card>
        </div>
      </div>
      <div>
        <p class="all-categ py-10 pa-10">
          Not finding what you want? See all categories
        </p>
      </div>
      <div class="connect-title py-10 ">
        <h1 class="h1-tag px-0 ">How</h1>
        <h1 class="h2-tag px-5">Connect</h1>
        <h1>Works</h1>
      </div>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          lg3
          v-for="connect in Connection"
          :key="connect.title"
        >
          <v-card flat class="text-xs-center ma-12">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2 px-2">
                <img :src="connect.avImg" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div>
                <h2 class="heading py-3">{{ connect.avTitle }}</h2>
              </div>
              <div class="subheading">{{ connect.avMsg }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    }
  },
  data() {
    return {
      loading: false,
      selection: 1,
      items: [
        {
          src:
            "https://cdn.pixabay.com/photo/2020/04/03/21/52/home-office-5000280__340.jpg",
          title: "Get your job done by Expert Freelancers",
          msg: "Get your job done by Expert Freelancers",
          btn: "Connect now"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090__340.jpg",
          id: "02",
          title: "Find exciting jobs fromclients all over the world",
          msg: "Find exciting jobs fromclients all over the world",
          btn: "Connect now"
        },
        {
          src:
            "https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg",
          id: "05",
          title: "Simple, secure, collaborative work space",
          msg:
            "Enjoy our secure, easy to use workspace created for client-freelancer collaboration",
          btn: "Connect now"
        }
      ],

      Connection: [
        {
          avTitle: "Sign Up",
          avMsg:
            "Create an account on our platform, verify your account and login",
          avMg: "/macbook.jpeg"
        },
        {
          avTitle: "Connect with Freelancers",
          avMsg:
            "Search freelancers, view freelancer profiles and accept job applications from freelancers",
          avMg: "../assets/images/laptophand.jpeg"
        },
        {
          avTitle: "Collaborate on project",
          avMsg:
            "Award jobs to preferred freelancers and work together on your project in our secure, easy-to-use workspace",
          avMg: "/macbook.jpeg"
        },
        {
          avTitle: "Rate Freelancer",
          avMsg:
            "Complete jobs, make payment and rate freelancers after the project is done",
          avMg: "/macbook.jpeg"
        }
      ],

      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>
<style scoped>
.title {
  position: initial;
  bottom: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 20em;
  font: roboto;
  padding: 20px;
}
.carousel-items {
  background-color: rgba(0, 0, 0, 0.5);
}
.cardTitle,
.all-categ {
  text-align: center;
  color: brown;
}
.connect-title {
  text-align: center;
  display: inline-flex;
  padding-left: 560px;
  color: rgb(16, 67, 116);
}
.h2-tag {
  color: brown;
}
.cardsContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding-top: 10px;
}

.v-app-wrap {
  height: 100%;
  width: 100%;
  display: flex;
}
.btn {
  border: 20px;
  border-color: red;
  margin: 2px;
}
</style>
