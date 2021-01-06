<template>
  <div>
    <nav>
      <div class="logo">
        <router-link to="/">
          <img class="baa-logo" src="../assets/logoBAA.gif" alt="" />
        </router-link>
      </div>
      <ul class="nav-links" :class="navActive ? 'nav-active' : ''">
        <li>
          <a><router-link to="/">Home</router-link></a>
        </li>
        <li v-if="!user.loggedIn">
          <a><router-link to="/login">Login</router-link></a>
        </li>
        <li v-else>
          <a @click="signOut">Signout</a>
        </li>
        <li v-if="!user.loggedIn">
          <a><router-link to="/register">Register</router-link></a>
        </li>
        <li v-if="user.loggedIn">
          <a><router-link to="/projects">Projects</router-link></a>
        </li>
      </ul>
      <div class="burger" @click="toggleBurger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </nav>
  </div>
</template>


<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
                   this.$router.replace({ name: 'Home' });
        });
      alert('You Have been Log Out succesfully');
    },
    toggleBurger() {
      this.navActive = !this.navActive;
      const nav = document.querySelector('.nav-links');
      const navLinks = document.querySelectorAll('.nav-links li');

      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navLinkFade 1.5s ease forwards ${
            index / 7 + 0.1
          }s`;
        }
      });
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  mounted() {
    let recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'navbarScript.js');
    document.head.appendChild(recaptchaScript);
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  background: #fcec0c;
  border-bottom: solid black 5px;

  font-family: "Poppins", sans-serif;
}
.logo {
  color: rgb(226, 226, 226);
  text-transform: uppercase;
  letter-spacing: 5px;
}
.baa-logo {
  width: 110px;
}
.nav-links {
  display: flex;
  justify-content: space-around;
  width: 40%;
}
.nav-links li {
  list-style: none;
}
.nav-links a {
  color: black;
  text-decoration: none;
  letter-spacing: 3px;
  font-weight: bold;
  font-size: 19px;
  cursor: pointer;
}
.nav-links a:focus {
  background: black;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px black, 0 0 25px black, 0 0 50px black,
    0 0 100px black;
  transition: all 0.5s;
}
.nav-links a:target {
  background: black;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px black, 0 0 25px black, 0 0 50px black,
    0 0 100px black;
}
.burger {
  display: none;
  cursor: pointer;
}
.burger div {
  width: 25px;
  height: 3px;
  background-color: black;
  margin: 5px;
  transition: all 0.3 ease;
}

@media screen and (max-width: 1024px) {
  .nav-links {
    width: 60%;
  }
}

@media screen and (max-width: 768px) {
  body {
    overflow-x: hidden;
  }
  .nav-links {
    position: absolute;
    right: 0px;
    height: 92vh;
    top: 8vh;
      background: #fcec0c;
      border-left: 3px solid black;
      border-top-left-radius: 10%;
      border-bottom-left-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  .nav-links li {
    opacity: 1;
  }
  .burger {
    display: block;
  }
}
.nav-active {
  transform: translateX(0%);
}

@keyframes navLinksFade {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>