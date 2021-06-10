<template>
  <div class="reportPage">
    <Navbar></Navbar>
    <a
      ><h3 class="lastReports" style="text-align: center; font-size: 4vw">
        דיווחים אחרונים
      </h3></a
    >

    <div class="window" style="border-color: orange">
      <div>
        <button class="rowWindow ">
          <div v-for="(reports, key) in allReports" :key="key">
            <div
              v-for="(report, index) in reports"
              :key="index"
              v-on:click="openModal(report)"
            >
              {{ report.type }}
              {{ report.date }}
            </div>
          </div>
        </button>
      </div>
    </div>

    <transition name="fade">
      <div class="modal" v-if="show">
        <div class="modal__backdrop" @click="closeModal()" />

        <div class="modal__dialog" style="background-color: #001233">
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
            <div class="modal_title d-flex justify-content-center">
              פרטים נוספים
            </div>
          </div>

          <div class="modal__body">
            <div v-for="(report, index) in currentReport" :key="report">
              {{ report }} : {{ index }}
            </div>
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
import Navbar from "./Navbar";

export default {
  name: "ReportPage",
  components: {
    Navbar
  },
  data() {
    return {
      show: false,
      show2: false,
      allReports: null,
      currentActivityCops: [],
      currentReport: {},
      allUsersReports: null
    };
  },
  async created() {
    await axios
      .get(
        "http://police-server-securityapp2.apps.openforce.openforce.biz/reports/allEventsReported"
      )
      .then(response => {
        this.allReports = response.data;
      })
      .catch(e => {
        console.log("An error occurred: " + e.message);
        throw e;
      });

    await axios
      .get(
        "http://police-server-securityapp2.apps.openforce.openforce.biz/reports/usersNameReports"
      )
      .then(response => {
        this.allUsersReports = response.data;
      })
      .catch(err => {
        console.log(
          "An error occurred while getting users reports from server: " +
            err.message
        );
        throw err;
      });

    this.changeDates();
  },
  methods: {
    closeModal() {
      this.show = false;
      document.querySelector("body").classList.remove("overflow-hidden");
    },
    openModal(theDude) {
      this.currentReport = theDude;
      delete this.currentReport.id;

      this.allUsersReports.forEach(users => {
        users.forEach(user => {
          if (user.id === this.currentReport.reported_by) {
            this.currentReport["user name"] = user.name;
          }
        });
      });

      delete this.currentReport.reported_by;
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
      var format = "DD/MM/YYYY hh:mm";
      this.allReports.forEach(events => {
        events.forEach(report => {
          var newDate = new Date(report.date);
          report.date = moment(newDate).format(format);

          if (report.type === "חטיפה" || report.type === "תאונה") {
            var newReportDate = new Date(report.report_date);
            report.report_date = moment(newReportDate).format(format);
          }
        });
      });
    }
  }
};
</script>

<style>
.rowWindow {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #5c677d;
  height: 100%;
  font-weight: bold;
  font-size: 170%;
  color: orange;
  border: none;
}

.lastReports {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: white;
  font-weight: bold;
  font-size: 200%;
}

li {
  padding: 1px;
}

ul {
  list-style: none;
}

.modal_title {
  text-align: center;
  font-size: 180%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  color: #e6f9ff;
}

.nextP {
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
  display: flex;
  justify-content: center;
  background-color: #5c677d;
  height: 35vh;
  width: 60%;
  overflow: auto;
  border-radius: 15px 15px;
  border: 0px;
  margin-top: 130px;
  margin-bottom: 200px;
  margin-left: 300px;
  padding: 70px;
  box-shadow: 4px 2px 4px 2px orange;
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
  background-color: #5c677d;
  position: relative;
  width: 600px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  z-index: 2;
  border-radius: 15px 15px 15px;
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
  /* flex: right; */
  background-color: orange;
  font-family: Arial, Helvetica, sans-serif;
  /* background-color: #5c677d; */
  color: #e6f9ff;
  font-size: 130%;
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
