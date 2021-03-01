<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="blue-grey lighten-4">
        <v-carousel
          class="carousel-items"
          cycle
          height="500"
          hide-delimiter-background
          show-arrows-on-hover
          ><div class="title">
            <v-carousel-item
              v-for="item in items"
              :src="item.src"
              :key="item.id"
              ><div class="title">
                <div class="my-16 mx-8 px-8 mb-16 mr-16">
                  <h1>{{ item.title }}</h1>
                </div>
                <div size="12" class="my-16 mx-16 mb-16">
                  <h5>{{ item.msg }}</h5>
                </div>
                <div>
                  <v-btn
                    class="ma-16 my-16 mx-10 mb-16 "
                    outlined
                    color="red"
                    dark
                    border-2
                    depressed
                    large
                    >{{ item.btn }}
                  </v-btn>
                </div>
              </div>
            </v-carousel-item>
          </div>
        </v-carousel>
        <h1 class="cardTitle my-7" red--text>Browse Categories</h1>

        <div class="cardsContainer">
          <div v-for="picture in browseCategories" :key="picture.bp">
            <div id="inspire">
              <v-card :loading="loading" class="mx-5 my-0" max-width="250">
                <v-img :src="picture.image"> </v-img>
                <v-card-text>
                  <v-row align="center" class="mx-0">
                    <v-card-title>
                      <v-subheader class="cardLabel mr-9  black--text ">{{
                        picture.caption
                      }}</v-subheader></v-card-title
                    >
                  </v-row>
                </v-card-text>
              </v-card>
            </div>
          </div>
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
          <v-card flat class="text-xs-center ma-10">
            <v-responsive class="pt-1">
              <v-avatar size="90" class="grey lighten-2 px-0 mx-16">
                <v-img :src="connect.avImg"> </v-img>
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div>
                <h2 class="heading mx-1 py-3 black--text">
                  {{ connect.avTitle }}
                </h2>
              </div>
              <div class="subheading black--text">{{ connect.avMsg }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="downCard blue-grey lighten-4">
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

        <h1 class="topFree ma-16 px-14 mx-1">Top Rated Freelancers</h1>
        <div class="cardContainer mb-16">
          <v-layout row wrap>
            <v-flex v-for="freeLancer in topFL" :key="freeLancer.FL">
              <v-card
                class="text-xs-center my-1 ma-0"
                max-height="420"
                max-width="270"
              >
                <v-responsive class="pt-6">
                  <v-avatar size="150" class="grey lighten-2 my-0  pt-1 mx-16">
                    <v-img :src="freeLancer.urlImg"> </v-img>
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
                <v-row align="center" class="mx-2 my-2 mx-11">
                  <div class="grey--text ml-4">
                    <v-btn
                      class="aspBtn mx-1"
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
                <v-divider class="mx-4"></v-divider>

                <div class="stackBtn mx-1 my-2">
                  <v-btn
                    class="aspBtn mx-2 mb-4"
                    depressed
                    color="grey darken-2"
                    dark
                    x-small
                  >
                    ASP.Net
                  </v-btn>
                  <v-btn
                    depressed
                    color="grey darken-2"
                    class="mb-4"
                    dark
                    x-small
                  >
                    Java
                  </v-btn>
                  <v-btn
                    class="nodeBtn mx-2 mb-4"
                    depressed
                    color="grey darken-2"
                    dark
                    x-small
                  >
                    Node
                  </v-btn>
                  <v-btn
                    class="mb-4"
                    depressed
                    color="grey darken-2"
                    dark
                    x-small
                  >
                    HTML
                  </v-btn>
                </div>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
        <div class="browseJob my-16 pt-16" primary--text dark>
          <div>
            <h1 class="browseJobTitle mx-13 my-16">
              Need to make extra cash freelancing?
            </h1>
            <h3 class="mx-13 my-3">
              Are you a skilled personnel looking to make extra cash working on
              projects for clients? Register on Adwumafie to join the exclusive
              freelancer community. Once the account is created, you will gain
              access to view or apply to various projects.Are you ready to
              provide services to clients? Click on the link button below.
            </h3>
          </div>
          <v-btn
            class="ma-2 my-16 mx-16"
            outlined
            color="red"
            dark
            border-2
            depressed
            large
            >Browse Jobs
          </v-btn>
        </div>
        <v-spascer></v-spascer>

        <h1 class="recentPost mx-16 px-16">Recently Posted Jobs</h1>
        <div class="jobPostCards">
          <div class="cardSpace" v-for="job in recentJobs" :key="job.jobId">
            <div id="inspire" class="v-app-wrap">
              <v-card
                :loading="loading"
                class="mx-auto my-7"
                max-width="220"
                max-height="260"
              >
                <v-responsive class="pt-4">
                  <v-avatar size="120" class="grey lighten-2 pa-1 mx-12">
                    <v-img height="250" :src="job.urlImg"> </v-img>>
                  </v-avatar>
                </v-responsive>
                <v-card-text>
                  <v-row align="center" class="mx-0"> </v-row>
                  <v-card-title class="jobCardLabel mx-0">
                    <v-list-item>
                      <v-list-item-content>
                        <h5>Design Mobile App UI</h5>
                        <v-list-item-title id="USD"
                          >USD 300.00</v-list-item-title
                        >
                        <v-list-item-subtitle id="applicants"
                          >5 Applicants</v-list-item-subtitle
                        >
                        <div class="jobView">
                          <v-btn
                            depressed
                            color="light-blue darken-4"
                            dark
                            x-small
                          >
                            View Job
                          </v-btn>
                        </div>
                      </v-list-item-content>
                    </v-list-item>
                  </v-card-title>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
        <div class="joinConnect">
          <h2>
            Millions of small businesses use freelance work to turn their ideas
            into reality
          </h2>
          <v-btn
            class="ma-2 my-10 mx-16"
            outlined
            color="red"
            dark
            border-2
            depressed
            large
            >Join Connect Now
          </v-btn>
        </div>
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
          src: require("../assets/images/home1.jpg"),
          title: "Get your job done by Expert Freelancers",
          msg: "Get your job done by Expert Freelancers",
          btn: "Connect now"
        },
        {
          src: require("../assets/images/home-slider-3.jpg"),
          id: "02",
          title: "Find exciting jobs fromclients all over the world",
          msg: "Find exciting jobs from clients all over the world",
          btn: "Connect now"
        },
        {
          src: require("../assets/images/home-slider-2.jpg"),
          id: "05",
          title: "Simple, secure, collaborative work space",
          msg:
            "Enjoy our secure, easy to use workspace created for client-freelancer collaboration",
          btn: "Connect now"
        }
      ],
      browseCategories: [
        {
          bp: "browse",
          image: require("../assets/images/portfolio slider-2.jpg"),
          caption: "Graphic Design"
        },
        {
          bp: "browse",
          image: require("../assets/images/portfolio slider-2.jpg"),
          caption: "Programming and Technology"
        },
        {
          bp: "browse",
          image: require("../assets/images/portfolio slider-2.jpg"),
          caption: "Digital Marketing and Sales"
        },
        {
          bp: "browse",
          image: require("../assets/images/portfolio slider-2.jpg"),
          caption: "Business"
        },
        {
          bp: "browse",
          image: require("../assets/images/portfolio slider-2.jpg"),
          caption: "Writing"
        }
      ],
      topFL: [
        {
          FL: "Larbo",
          urlImg: require("../assets/images/raph-profile.png")
        },
        {
          FL: "Larbo",
          urlImg: require("../assets/images/raph-profile.png")
        },
        {
          FL: "Larbo",
          urlImg: require("../assets/images/raph-profile.png")
        },
        {
          FL: "Larbo",
          urlImg: require("../assets/images/raph-profile.png")
        },
        {
          FL: "Larbo",
          urlImg: require("../assets/images/raph-profile.png")
        }
      ],

      Connection: [
        {
          avTitle: "Sign Up",
          avMsg:
            "Create an account on our platform, verify your account and login",
          avImg: require("../assets/images/Group 1262.png")
        },
        {
          avTitle: "Connect with Freelancers",
          avMsg:
            "Search freelancers, view freelancer profiles and accept job applications from freelancers",
          avImg: require("../assets/images/Group 1254.png")
        },
        {
          avTitle: "Collaborate on project",
          avMsg:
            "Award jobs to preferred freelancers and work together on your project in our secure, easy-to-use workspace",
          avImg: require("../assets/images/Group 1258.png")
        },
        {
          avTitle: "Rate Freelancer",
          avMsg:
            "Complete jobs, make payment and rate freelancers after the project is done",
          avImg: require("../assets/images/Group 1262.png")
        }
      ],
      recentJobs: [
        {
          jobId: "recent",
          urlImg: require("../assets/images/desk.png")
        },
        {
          jobId: "recent",
          urlImg: require("../assets/images/desk.png")
        },
        {
          jobId: "recent",
          urlImg: require("../assets/images/desk.png")
        },
        {
          jobId: "recent",
          urlImg: require("../assets/images/desk.png")
        },
        {
          jobId: "recent",
          urlImg: require("../assets/images/desk.png")
        }
      ]
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
  padding: 10px;
}

.cardTitle,
.all-categ {
  text-align: center;
  color: black;
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
  margin-left: 50px;
}
.getJob {
  padding-left: 810px;
  margin-right: 400px;
  display: inline-block;
  background-size: 900px;
}
.topFree,
.recentPost {
  text-align: center;
  color: rgb(49, 82, 109);
}
.browseJobTitle {
  padding-top: 18%;
}
.browseJob {
  position: relative;
  background-image: url("../assets/images/freelancer.jpg");
  background-size: 1500px;
  height: 800px;
  padding-right: 700px;
  margin-left: 10px;
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
.cardLabel {
  text-align: left;
  margin-left: 0;
}
.jobCardLabel {
  font-size: 15px;
  color: black;
}
#USD {
  text-align: center;
  padding-left: 1px;
  font-size: 12px;
  margin: 5px;
}
#applicants {
  text-align: center;
  padding-left: 1px;
  font-size: 10px;
  color: black;
}
.jobView {
  margin-left: 30px;
  margin-top: 15px;
}
.jobPostCards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  padding-top: 10px;
}
.cardSpace {
  margin-left: 40px;
}
.downCard {
  background-color: grey;
}
.joinConnect {
  text-align: center;
  margin-right: 500px;
  padding-left: 36%;
  margin-top: 6%;
  padding-bottom: 70px;
}
</style>
