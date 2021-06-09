<template>
  <div>
    <Navbar></Navbar>
    <div class="ActionsPage">
      <a
        ><h3 style="color: red; front-size: 40vw; text-align: center;">
          דוח פעילויות
        </h3></a
      >
      <button
        style="color:white;  background-color: #118ab2; text-align: right; margin-left: 70vw;"
      >
        <a style-="front-size: 20vw;">סינון </a>
      </button>
      <div class="window">
        <button
          class="roww"
          v-for="(action, key) in allActivities"
          :key="key"
          v-on:click="
            openModal(action);
            addActCops(action.id);
          "
        >
          <a class="insideButton">
            {{ action.description }}
          </a>
          <a>
            {{ action.date }}
          </a>
        </button>
        <button
          style="background-color: #1b98e0"
          class="nextP"
          v-on:click="openModal2()"
        >
          <i class="fas fa-plus fa-3x"></i>
        </button>
      </div>

      <transition name="fade">
        <div class="modal" v-if="show">
          <div class="modal__backdrop" @click="closeModal()" />

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

            <div class="modal__body">
              <h2>סוג פעולה: {{ currentAction.activity_type }}</h2>
              <h2>זמן מתוכנן לפעילות: {{ currentAction.date }}</h2>
              <h2>כוח מתוכנן: {{ currentActivityCops }}</h2>
              <h2>מטרת הפעילות: {{ currentAction.description }}</h2>
              <h2>אישור הפעילות: {{ currentAction.approved }}</h2>
              <h2>מיקום: {{ currentAction.location }}</h2>
              <slot name="body" />
            </div>

            <div class="modal__footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </transition>

      <transition name="fade">
        <div class="modal" v-if="show2">
          <div class="modal__backdrop" @click="closeModal2()" />

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
                <input
                  type="text"
                  id="kind"
                  name="kind"
                  v-model="kind"
                  placeholder="סוג הפעולה.."
                />
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
                <input
                  type="text"
                  id="force"
                  name="force"
                  v-model="force"
                  placeholder="כוח מתוכנן.."
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
                <input
                  type="text"
                  id="approve"
                  name="approve"
                  v-model="approve"
                  placeholder="אישור הפעילות.."
                />
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
                class="omri"
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
  </div>
</template>

<script>
const moment = require("moment");
import axios from "axios";
import Navbar from "./Navbar";

export default {
  name: "actionsPage",
  components: {
    Navbar
  },
  data() {
    return {
      show: false,
      show2: false,
      currentAction: null,
      allActivities: null,
      allUsers: null,
      allCops: null,
      currentActivityCops: []
    };
  },
  async created() {
    await axios
      .get("http://localhost:8081/activities/all")
      .then(response => {
        this.allActivities = response.data;
      })
      .catch(e => {
        throw e;
      });

    console.log(this.allActivities);
    console.log(1);

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
        this.allCops = response.data;
      })
      .catch(e => {
        throw e;
      });

    this.changeDates();
    console.log(this.allActivities);
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal(theDude) {
      this.currentAction = theDude;
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
    changeDates() {
      var format = "YYYY-MM-DD";
      this.allActivities.forEach(element => {
        var newDate = new Date(element.date);
        element.date = moment(newDate).format(format);
        console.log(element.date);
      });
    },
    addActCops(id) {
      this.currentActivityCops = [];
      this.allCops.forEach(element2 => {
        if (id == element2.activity) {
          this.currentActivityCops.push(element2.cop_name);
        }
      });
      this.changeLocation();
    },
    addAction() {
      console.log(this.actions);
      this.actions.push({
        description: this.description,
        date: this.time,
        location: this.location,
        kind: this.kind,
        power: this.force,
        target: this.target,
        approvedBy: this.approve
      });
      console.log(this.actions);
    }
  }
};
</script>

<style>
.roww {
  width: 100%;
  background-color: #1b98e0;
}

.omri {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.window {
  background-color: #b4c5e4;
  top: 20%;
  height: 100vh;
  width: 74%;
  margin-left: 10%;
  padding-top: 80px;
  padding-left: 50px;
  padding-right: 50px;
}

.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
}
.modal__backdrop {
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
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  z-index: 2;
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
}
.modal__body {
  padding: 10px 20px 10px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  text-align: right;
  flex: right;
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
