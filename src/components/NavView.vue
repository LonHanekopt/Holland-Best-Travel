<template>
    <div class="nav">
        <div class="wrapper">
            <div class="logo"><img src="@/assets/logo.webp" alt="#"></div>
            <ul class="navbar-menu">
                <li class="navbar-item">
                    <RouterLink to="/">{{ $t('Home') }}</RouterLink>
                </li>
                <!-- <li class="navbar-item">
                    <RouterLink id="explore-regions" to="/explore">{{ $t('explore') }}</RouterLink>
                </li> -->
                <li class="navbar-item dropdown">
                    <a style="display: flex;" @click.prevent>{{ $t('activities') }} <span
                            class="material-symbols-outlined">arrow_drop_down</span></a>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><router-link to="amsterdam-activities">Amsterdam</router-link></li>
                        <li class="dropdown-item"><router-link to="rotterdam-activities">Rotterdam</router-link></li>
                        <li class="dropdown-item"><router-link to="hague-activities">The Hague</router-link></li>
                        <li class="dropdown-item"><router-link to="utrecht-activities">Utrecht</router-link></li>
                    </ul>
                </li>
                <li class="navbar-item dropdown">
                    <a style="display: flex;" @click.prevent>{{ $t('accomodations') }} <span
                            class="material-symbols-outlined">arrow_drop_down</span></a>

                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><router-link to="/hotels">Hotels</router-link></li>
                        <li class="dropdown-item"><router-link to="/hostels">Hotsels</router-link></li>
                        <li class="dropdown-item"><router-link to="/airbnb">AirBnb</router-link></li>
                    </ul>
                </li>
                <li class="navbar-item">
                    <RouterLink id="" to="/travel-info">{{ $t('travelinfo') }}</RouterLink>
                </li>
                <li class="navbar-item">
                    <RouterLink id="" to="/contact">{{ $t('contact-us') }}</RouterLink>
                </li>
            </ul>
            <div class="locale">
                <select @change="changeLang($event)" name="locale" id="locale" ref="locale">
                    <option value="en">EN</option>
                    <option value="nl">NL</option>
                </select>
                <div class="mobile-menu" @click="showMenu">
                    <img src="@/assets/menu.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <aside ref="sidemenu">
        <div class="sidemenu">
            <div class="items">
                <span class="material-symbols-outlined" @click="closeMenu()"> close </span>
                <ul>
                    <li>
                        <RouterLink id="explore-regions" to="/">{{ $t('Home') }}</RouterLink>
                    </li>
                    <li>
                        <a style="display: flex;" @click.prevent>{{ $t('activities') }} </a>
                        <div class="indent">
                            <router-link to="amsterdam-activities">Amsterdam</router-link>

                            <router-link to="rotterdam-activities">Rotterdam</router-link>

                            <router-link to="hague-activities">The Hague</router-link>
                            <router-link to="utrecht-activities">Utrecht</router-link>
                        </div>
                    </li>
                    <li>
                        <a style="display: flex;" @click.prevent>{{ $t('accomodations') }} </a>
                        <div class="indent">
                            <router-link to="/hotels"><a href="">Hotels</a></router-link>
                            <router-link to="/hostels">Hotsels</router-link>
                            <router-link to="/airbnb">AirBnb</router-link>
                        </div>
                    </li>
                    <li>
                        <RouterLink to="/travel-info">{{ $t('travelinfo') }}</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/contact">{{ $t('contact-us') }}</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
</template>

<script>

export default {
    mounted() {
        this.$refs['locale'].value = this.$i18n.locale;
    },
    methods: {
        changeLang(event) {
            this.$i18n.locale = event.target.value
        },
        closeMenu() {
            this.$refs.sidemenu.style['display'] = 'none';
        },
        showMenu() {
            this.$refs.sidemenu.style['display'] = 'block';
        }
    }
}
</script>

<style scoped>
aside {
    display: none;
}

aside .sidemenu * {
    z-index: 100 !important;
}

.items {
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.748);
    height: 100%;
    position: fixed;
    width: 30%;
    color: white;
}

.items span {
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.4rem;
}

.items ul {
    display: flex;
    flex-direction: column;
    margin: 3rem;
    justify-content: flex-start;
    gap: 1rem;
}

.items a {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
}

.items .indent {
    margin-top: 0.3rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    padding: 0.4em 0;
}

.items .indent a {
    font-size: 0.7rem;
    font-weight: 400;
    text-align: left;
}

.items a.active {
    color: #1fe260;
}

.mobile-menu {
    height: 30px;
    display: none;
}

.locale {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2em;
}

.locale #locale {
    font-size: 0.7rem;
}

select {
    border: 1px solid rgb(97, 189, 181);
    padding: 1em 2em;
    border-radius: 5px;
}

select:focus {
    outline: none;
}

.nav {
    background-color: #f7f5f5;
}

.nav .wrapper {
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.nav .wrapper .logo {
    width: 70px;
    cursor: pointer;
}

.nav .wrapper .logo img {
    border-radius: 1rem;
}

.nav .wrapper .links {
    display: inherit;
    gap: 1rem;
}

.navbar-menu {
    list-style: none;
    display: flex;
    gap: 1rem;
}

.navbar-item {
    position: relative;
}

.navbar-item a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    display: block;
}

.navbar-item a:hover {
    color: rgb(65, 134, 167);
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f7f5f5;
    padding: 0.5rem 0;
}

.dropdown-item a {
    padding: 0.5rem 1rem;
    display: block;
}

.dropdown-item a:hover {
    background-color: #e3e3e3;
}

.navbar-item.dropdown:hover .dropdown-menu {
    display: block;
}

@media screen and (max-width: 800px) {
    .nav .wrapper {
        justify-content: space-between;
        padding: 0 3em;
    }

    .flex {
        display: flex;
        gap: 2em;
    }

    .mobile-menu {
        display: block;
    }

    .navbar-menu {
        display: none;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 45%;
    }

    .items a {
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    .items .indent a {
        font-size: 0.7rem;
        font-weight: 400;
    }
}

@media screen and (max-width: 500px) {
    .items {
        width: 55%;
    }

    .items ul {
        align-items: center;
    }
}
</style>