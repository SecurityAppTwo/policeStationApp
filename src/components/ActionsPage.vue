<template>
  <div class="ActionsPage">
    <Navbar></Navbar>
    <a
      ><h1
        style="color: white; font-size: 150%; text-align: center; margin-top: 3%; font-family: Arial;"
      >
        דוח פעילויות
      </h1></a
    >
    <select
      v-model="idk"
      style="background-color: orange; text-align: right; margin-left: 70vw;"
    >
      <option disabled value="">Please select one</option>
      <option>הכל</option>
      <option>הסתיים</option>
      <option>מתוכנן</option>
      <option>פעיל</option>
    </select>
    <select
      v-model="idk2"
      style="background-color: orange; text-align: right; margin-left: 20vw;"
    >
      <option disabled value="">Please select one</option>
      <option>הכל</option>
      <option>מארב</option>
      <option>פטרול</option>
      <option>מחסום מכוניות</option>
      <option>עוקץ</option>
    </select>
    <div class="windows" style="margin-top: 3%">
      <button
        class="rowww"
        v-for="(action, key) in filterByStatus()"
        :key="key"
        v-on:click="
          openModal(action);
          addActCops(action.id);
        "
      >
        <a style="float:right;">
          {{ action.description }}
        </a>
        <a style="float: left;">
          {{ action.date }}
        </a>
      </button>
    </div>
    <button
      style="background-color: #33415C; margin-left: 45%; width: 10%;   border-radius: 25px; "
      class="nextP"
      v-on:click="openModal2()"
    >
      <i class="fas fa-plus fa-3x"></i>
    </button>

    <transition name="fade">
      <div class="modals" v-if="show">
        <div class="modals__backdrop" @click="closeModal()" />

        <div class="modal__dialog">
          <div class="modal__header">
            <slot name="header" />
            <button type="button" class="modal__close" @click="closeModal()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="modals__body">
            <h2>סוג פעולה: {{ currentAction.activity_type }}</h2>
            <h2>זמן מתוכנן לפעילות: {{ currentAction.date }}</h2>
            <h2>כוח מתוכנן: {{ currentActivityCops }}</h2>
            <h2>מטרת הפעילות: {{ currentAction.description }}</h2>
            <h2>אישור הפעילות: {{ currentAction.approved }}</h2>
            <!-- <h2>מיקום: {{ currentAction.location }}</h2> -->
            <button
              class="buttons"
              style="background-color: green;"
              v-on:click="
                changeStatus(currentAction.id, 1);
                closeModal();
                openModal3(1);
              "
            >
              הוצא פעולה !
            </button>
            <button
              class="buttons"
              style="background-color: red;"
              v-on:click="
                changeStatus(currentAction.id, 3);
                closeModal();
                openModal3(2);
              "
            >
              סיים פעולה !
            </button>
            <slot name="body" />
          </div>

          <div class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="modals" v-if="show3">
        <div class="modals__backdrop" @click="closeModal3()" />
        <div>
          <img
            v-if="this.currGif === 1"
            src="https://media1.giphy.com/media/Wozl9UAP6DG9vOotl8/giphy.gif?cid=ecf05e476xpgl8lyvuz5vjwdseufm0150kuzujs5eonlq9n4&rid=giphy.gif&ct=g"
            style="width:70%; height: auto; margin-left: 14%; margin-top: 3%"
          />
          <img
            v-if="this.currGif === 2"
            src="https://media.tenor.com/images/48a68ac274ee718ff561d20c52daeb78/tenor.gif"
            style="width:70%; height: auto; margin-left: 14%; margin-top: 3%"
          />
          <div class="modal__header">
            <h1 style="color: red;"></h1>
            <slot name="header" />
            <button type="button" class="modal__close" @click="closeModal3()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="modal__body"></div>

          <div class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div class="modals" v-if="show2">
        <div class="modals__backdrop" @click="closeModal2()" />

        <div class="modal__dialog">
          <div class="modal__header">
            <h1 style="color: red;">
              פעילות חדשה
            </h1>
            <slot name="header" />
            <button type="button" class="modal__close" @click="closeModal2()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512">
                <path
                  fill="currentColor"
                  d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
                ></path>
              </svg>
            </button>
          </div>

          <div class="modal__body">
            <div>
              <input
                type="text"
                id="location"
                name="location"
                v-model="description"
                placeholder="מיקום.."
              />
              <label for="fname">תיאור</label>
            </div>
            <div>
              <select v-model="type">
                <option disabled value="">Please select one</option>
                <option
                  v-bind:value="type.id"
                  v-for="(type, key) in allTypes"
                  :key="key"
                >
                  {{ type.name }}
                </option>
              </select>
              <label for="fname">סוג הפעולה</label>
            </div>
            <div>
              <input
                type="text"
                id="time"
                name="time"
                v-model="time"
                placeholder="זמן מתכונן.."
              />
              <label for="fname">זמן מתוכנן לפעילות</label>
            </div>
            <div>
              <vueMultiSelect
                :options="{ multi: true }"
                v-model="power"
                :selectOptions="this.allUsers"
              />
              <label for="fname">כוח מתוכנן</label>
            </div>
            <div>
              <input
                type="text"
                id="target"
                name="target"
                v-model="target"
                placeholder="מטרת הפעילות.."
              />
              <label for="fname">מטרת הפעילות</label>
            </div>
            <div>
              <select v-model="approve">
                <option disabled value="">Please select one</option>
                <option
                  v-bind:value="user.id"
                  v-for="(user, key) in allUsers"
                  :key="key"
                >
                  {{ user.name }}
                </option>
              </select>
              <label for="fname">אישור הפעילות</label>
            </div>
            <div>
              <input
                type="text"
                id="location"
                name="location"
                v-model="location"
                placeholder="מיקום.."
              />
              <label for="fname">מיקום</label>
            </div>
            <button
              class="buttons"
              style="background-color: green;"
              v-on:click="
                addAction();
                closeModal2();
              "
            >
              יצירת פעולה
            </button>
            <slot name="body" />
          </div>

          <div class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
const moment = require("moment");
import axios from "axios";
import vueMultiSelect from "vue-multi-select";
import "vue-multi-select/dist/lib/vue-multi-select.css";
import Navbar from "./Navbar";

export default {
  name: "ActionsPage",
  components: { vueMultiSelect, Navbar },
  data() {
    return {
      description: "",
      approve: "",
      location: "",
      type: "",
      target: "",
      power: "",
      time: "",
      idk: "",
      idk2: "",
      show: false,
      show2: false,
      show3: false,
      currGif: null,
      currentAction: null,
      allActivities: null,
      allUsers: null,
      allCops: [],
      allTypes: null,
      currentActivityCops: []
    };
  },
  async created() {
    await axios
      .get("http://localhost:8081/activities/types")
      .then(response => {
        this.allTypes = response.data.map(type => ({
          name: type.name,
          id: type.id
        }));
      })
      .catch(e => {
        throw e;
      });
    await axios
      .get("http://localhost:8081/activities/all")
      .then(response => {
        this.allActivities = response.data;
      })
      .catch(e => {
        throw e;
      });

    await axios
      .get("http://localhost:8081/activities/users")
      .then(response => {
        this.allUsers = response.data;
      })
      .catch(e => {
        throw e;
      });

    await axios
      .get("http://localhost:8081/activities/cops")
      .then(response => {
        this.allCops = response.data.map(cop => ({
          name: cop.cop_name,
          id: cop.cop,
          activity: cop.activity
        }));
      })
      .catch(e => {
        throw e;
      });

    this.changeDates();
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    async changeStatus(id, status) {
      console.log(id);
      await axios.put("http://localhost:8081/activities/changeStatus", {
        id: id,
        theStatus: status
      });

      await axios
        .get("http://localhost:8081/activities/all")
        .then(response => {
          this.allActivities = response.data;
        })
        .catch(e => {
          throw e;
        });
      this.changeDates();
    },

    filterByStatus() {
      if (this.idk === "") {
        this.idk = "הכל";
      }
      if (this.idk2 === "") {
        this.idk2 = "הכל";
      }
      // if (this.allActivities) {
      //   this.allActivities.sort(function(a, b) {
      //     return new Date(b.date) - new Date(a.date);
      //   });
      // }
      if (this.idk === "הכל" && this.idk2 === "הכל") {
        return this.allActivities;
      }

      if (this.idk === "הכל" && this.idk2 !== "הכל") {
        return this.allActivities.filter(
          activity => activity.activity_type === this.idk2
        );
      }

      if (this.idk !== "הכל" && this.idk2 === "הכל") {
        return this.allActivities.filter(
          activity => activity.activity_status === this.idk
        );
      }

      return this.allActivities.filter(
        activity =>
          activity.activity_status === this.idk &&
          activity.activity_type === this.idk2
      );
    },
    openModal(theDude) {
      this.currentAction = theDude;
      console.log(this.currentAction);
      this.show = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    changeLocation() {
      this.allUsers.forEach(element => {
        if (element.name === this.currentActivityCops[0]) {
          this.currentAction.location = `${element.lon} , ${element.lat}`;
        }
      });
    },
    closeModal2() {
      this.show2 = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal2() {
      this.show2 = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    openModal3(hello) {
      this.currGif = hello;
      this.show3 = true;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    closeModal3() {
      this.currGif = null;
      this.show3 = false;
      document.querySelector("body").classList.add("overflow-hidden");
    },
    changeDates() {
      var format = "YYYY-MM-DD";
      this.allActivities.forEach(element => {
        var newDate = new Date(element.date);
        element.date = moment(newDate).format(format);
      });
    },
    addActCops(id) {
      this.currentActivityCops = [];
      this.allCops.forEach(element2 => {
        if (id == element2.activity) {
          this.currentActivityCops.push(element2.name);
        }
      });
      this.changeLocation();
    },
    async addAction() {
      //   const newActivity = {
      //     description: this.description,
      //     date: this.time,
      //     location: this.location,
      //     type: this.type,
      //     power: this.power.map(current => current.id),
      //     target: this.target,
      //     approvedBy: this.approve
      //   };
      await axios
        .post("http://localhost:8081/activities/addActivity", {
          description: this.description,
          time: this.time,
          location: this.location,
          type: this.type,
          power: this.power.map(current => current.id),
          approve: this.approve
        })
        .then(function(response) {
          console.log(response);
        });

      await axios
        .get("http://localhost:8081/activities/all")
        .then(response => {
          this.allActivities = response.data;
        })
        .catch(e => {
          throw e;
        });

      this.changeDates();
    }
  }
};
</script>

<style>
.rowww {
  width: 100%;
  background-color: #33415c;
  height: 100px;
  text-align: right;
  color: white;
  direction: rtl;
  border-radius: 30px;
  border-style: inset;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 150%;
  /* margin-left: 10%; */
}

.rowww:hover {
  background-color: #001845;
}

.multiselect {
  width: "10vw";
}

.buttons {
  background-color: #002855; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 50%;
  flex: center;
  justify-content: center;
}

.windows {
  background-color: orange;
  height: 46vh;
  width: 71%;
  margin-left: 14%;
  overflow: auto;
}

.modals {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.modals__backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
.modal__dialog {
  background-color: #ffffff;
  position: relative;
  width: 50vw;
  margin-top: 30%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  z-index: 2;
  height: 50vh;
}
.modal__close {
  width: 30px;
  height: 30px;
}
.modal__header {
  padding: 20px 20px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
}
.modals__body {
  padding: 10px 20px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: right;
  flex: right;
  flex: 3;
  border-radius: 15px 50px;
  background-color: #002855;
}
.modal__footer {
  padding: 10px 20px 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
