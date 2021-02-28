<template>
  <v-layout row wrap>
    <v-flex xs12>
      <div class="blue-grey lighten-4">
        <v-carousel
          class="carousel-items"
          cycle
          height="400"
          hide-delimiter-background
          show-arrows-on-hover
          ><div class="title">
            <v-carousel-item
              v-for="item in items"
              :src="item.src"
              :key="item.id"
              ><div class="title">
                <div class="my-10 mx-10 px-lg-15 mb-16">
                  <h1>{{ item.title }}</h1>
                </div>
                <div class="my-10 mx-10 mb-16">
                  <h2>{{ item.msg }}</h2>
                </div>
                <div>
                  <v-btn
                    class="ma-16 my-10 mx-10 mb-16 "
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
          <div id="inspire" class="v-app-wrap">
            <v-card :loading="loading" class="mx-auto my-7 " max-width="250">
              <v-img
                height="250"
                src="https://media.istockphoto.com/photos/graphic-designer-drawing-sketches-logo-design-picture-id1191609321?b=1&k=6&m=1191609321&s=170667a&w=0&h=mRMdYSZgLKi7BR51IiQClkswoFcrwX4wQWn0qohEbnQ="
              ></v-img>

              <v-card-text>
                <v-row align="center" class="mx-0"> </v-row>
                <v-card-title class="cardLabel mx-2"
                  >Graphic Design</v-card-title
                >
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
              <v-avatar size="100" class="grey lighten-2 px-0 mx-16">
                <v-img :src="connect.avImg"> </v-img>
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

        <h1 class="topFree px-16 mx-16">Top Rated Freelancers</h1>
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
                <v-responsive class="pt-6">
                  <v-avatar size="150" class="grey lighten-2 my-6  pt-1 mx-16">
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
              access to view or apply to various projects.Are you ready to
              provide services to clients? Click on the link button below.
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
        <v-spascer></v-spascer>

        <h1 class="recentPost mx-16 px-16">Recently Posted Jobs</h1>
        <div class="jobPostCards">
          <div class="cardSpace">
            <div id="inspire" class="v-app-wrap">
              <v-card
                :loading="loading"
                class="mx-auto my-7"
                max-width="220"
                max-height="260"
              >
                <v-responsive class="pt-4">
                  <v-avatar size="120" class="grey lighten-2 pa-1 mx-12">
                    <v-img
                      height="250"
                      src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg"
                    ></v-img>
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
          <div class="cardSpace">
            <div id="inspire" class="v-app-wrap">
              <v-card
                :loading="loading"
                class="mx-auto my-7"
                max-width="220"
                max-height="260"
              >
                <v-responsive class="pt-4">
                  <v-avatar size="120" class="grey lighten-2 pa-1 mx-12">
                    <v-img
                      height="250"
                      src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg"
                    ></v-img>
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
          <div class="cardSpace">
            <div id="inspire" class="v-app-wrap">
              <v-card
                :loading="loading"
                class="mx-auto my-7"
                max-width="220"
                max-height="260"
              >
                <v-responsive class="pt-4">
                  <v-avatar size="120" class="grey lighten-2 pa-1 mx-12">
                    <v-img
                      height="250"
                      src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg"
                    ></v-img>
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
          <div class="cardSpace">
            <div id="inspire" class="v-app-wrap">
              <v-card
                :loading="loading"
                class="mx-auto my-7"
                max-width="220"
                max-height="260"
              >
                <v-responsive class="pt-4">
                  <v-avatar size="120" class="grey lighten-2 pa-1 mx-12">
                    <v-img
                      height="250"
                      src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg"
                    ></v-img>
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
          <div class="cardSpace">
            <div id="inspire" class="v-app-wrap">
              <v-card
                :loading="loading"
                class="mx-auto my-7"
                max-width="220"
                max-height="260"
              >
                <v-responsive class="pt-4">
                  <v-avatar size="120" class="grey lighten-2 pa-1 mx-12">
                    <v-img
                      height="250"
                      src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340__340.jpg"
                    ></v-img>
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
      topFL: [
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
          avImg:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRcw3Gf2JPKbeo_o7375URaTRCk1Wxc9_sA&usqp=CAU"
        },
        {
          avTitle: "Connect with Freelancers",
          avMsg:
            "Search freelancers, view freelancer profiles and accept job applications from freelancers",
          avImg:
            "data:image/jpeg;base64,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"
        },
        {
          avTitle: "Collaborate on project",
          avMsg:
            "Award jobs to preferred freelancers and work together on your project in our secure, easy-to-use workspace",
          avImg:
            "data:image/jpeg;base64,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"
        },
        {
          avTitle: "Rate Freelancer",
          avMsg:
            "Complete jobs, make payment and rate freelancers after the project is done",
          avImg:
            "data:image/jpeg;base64,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"
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
  padding: 10px;
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
.browseJob {
  position: relative;
  background-image: url("https://www.thebalancecareers.com/thmb/VQ0aQbzEPffFGsKzuYgcuCMwKiM=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/concentrated-african-american-woman-brainstorming-while-coding-data-on-desktop-pc--956379138-4a01208ffe554f70911e1364b192db5c.jpg");
  padding-right: 700px;
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
  padding-left: 500px;
  margin-top: 30px;
  padding-bottom: 70px;
}
</style>
