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
          :key="connect.urlImg"
        >
          <v-card flat class="text-xs-center ma-12">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2 px-2 mx-lg-16">
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
      <div class="getJob">
        <h2 class="getJobTitle py-10">Looking to get a job done?</h2>
        <p>
          Are you looking for a skilled professional to work with on your
          project?Are you looking to pay less to get your job done?Look no
          further, You can post your job, browse through our list of
          freelancers, and connect with one whose skills matches your
          requirement after checking their profile and portfolio.
        </p>

        <div class="cardsContainer1 mx-16 px-16">
          <v-btn
            class="ma-2 my-10 mx-10"
            outlined
            color="red"
            dark
            border-2
            depressed
            large
            >Find Freelancers
          </v-btn>
        </div>
      </div>
      <div class="cardContainer">
        <v-layout row wrap>
          <v-flex
            xs12
            sm6
            md4
            lg3
            v-for="freeLancer in topFL"
            :key="freeLancer.FL"
          >
            <v-card class="text-xs-center my-12 ma-8" max-width="350">
              <v-responsive class="pt-4">
                <v-avatar size="120" class="grey lighten-2 mx-16">
                  <img :src="freeLancer.avImg" />
                </v-avatar>
              </v-responsive>
              <v-card-title class="mx-10">Michael Larbo</v-card-title>

              <v-card-text>
                <div class="my-2 subtitle-1 black--text mx-10">
                  Software Developer
                </div>

                <div class="location black--text mx-10">
                  <v-icon color="red darken-4 ">mdi-map-marker</v-icon>
                  Takoradi, Ghana
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-row align="center" class="mx-2 my-2 mx-11">
                <div class="grey--text ml-4">
                  <v-btn
                    class="aspBtn mx-3"
                    depressed
                    color="red darken-4"
                    dark
                    x-small
                  >
                    4.0
                  </v-btn>
                </div>
                <v-rating
                  :value="4.0"
                  color="red darken-4"
                  dense
                  half-increments
                  readonly
                  size="20"
                ></v-rating>
              </v-row>
              <div class="stackBtn px-3 my-0">
                <v-btn
                  class="aspBtn mx-3"
                  depressed
                  color="grey darken-2"
                  dark
                  x-small
                >
                  ASP.Net
                </v-btn>
                <v-btn depressed color="grey darken-2" dark x-small>
                  Java
                </v-btn>
                <v-btn
                  class="nodeBtn mx-3"
                  depressed
                  color="grey darken-2"
                  dark
                  x-small
                >
                  Node
                </v-btn>
                <v-btn depressed color="grey darken-2" dark x-small>
                  HTML
                </v-btn>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="browseJob my-6" primary--text dark>
        <div>
          <h1 class=" mx-13 my-10">Need to make extra cash freelancing?</h1>
          <h3 class="mx-13">
            Are you a skilled personnel looking to make extra cash working on
            projects for clients? Register on Adwumafie to join the exclusive
            freelancer community. Once the account is created, you will gain
            access to view or apply to various projects.Are you ready to provide
            services to clients? Click on the link button below.
          </h3>
        </div>
        <v-btn
          class="ma-2 my-10 mx-16"
          outlined
          color="red"
          dark
          border-2
          depressed
          large
          >Browse Jobs
        </v-btn>
      </div>
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
          msg: "Find exciting jobs from clients all over the world",
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
      topFL: [
        {
          FL: "Larbo",
          urlImg:
            "data:image/jpeg;base64,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"
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
.cardContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding-top: 10px;
  margin-left: 100px;
}
.getJob {
  padding-left: 850px;
  margin-right: 500px;
  display: inline-block;
}
.topFl {
  text-align: center;
}
.browseJob {
  position: relative;
  background-image: url("https://www.thebalancecareers.com/thmb/VQ0aQbzEPffFGsKzuYgcuCMwKiM=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/concentrated-african-american-woman-brainstorming-while-coding-data-on-desktop-pc--956379138-4a01208ffe554f70911e1364b192db5c.jpg");
  padding-right: 800px;
  margin-left: 30px;
  display: inline-block;
  color: white;
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
