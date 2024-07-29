<template>
    <div class="modal" v-if="cookiesModalShow">
        <div class="flex container">
            <div>
                <h1>{{ $t('cookies-h1') }}</h1>
                <p>{{ $t('cookies-p') }}</p>
            </div>
            <div class="buttons">
                <a href="" class="btn" @click.prevent="customizeCookies()">{{ $t('cookies-customize') }}</a>
                <a href="" class="btn" @click.prevent="hideCookies()">{{ $t('cookies-reject') }}</a>
                <a href="" class="btn" @click.prevent="hideCookies()">{{ $t('cookies-confirm') }}</a>
            </div>
        </div>
    </div>

    <div class="backdrop" v-if="showCustomizeCookiesPanel"></div>
    <div class="customize-modal" v-if="showCustomizeCookiesPanel">
        <div class="content">
            <div class="header">
                <h1>
                    {{$t('cookies-customize-h1')}}
                </h1>
                <span class="material-symbols-outlined" @click="customizeCookies()"> close </span>
            </div>
            <p class="cookies-text">
                {{$t('cookies-customize-p')}}
            </p>

            <div class="carousel">
                <div class="card">
                    <h1>{{$t('cookies-neccessary-h1')}}</h1>
                    <p>{{$t('cookies-neccessary-p')}}</p>
                </div>
                <div class="card">
                    <h1>{{$t('cookies-performance-h1')}}</h1>
                    <p>{{$t('cookies-performance-p')}}</p>
                </div>
                <div class="card">
                    <h1>{{$t('cookies-advertisement-h1')}}</h1>
                    <p>{{$t('cookies-advertisement-p')}}</p>
                </div>
            </div>
        </div>
        <div class="buttons">
            <a href="" class="btn" @click.prevent="hideCookies()">{{ $t('cookies-reject') }}</a>
            <a href="" class="btn" @click.prevent="hideCookies()">{{ $t('cookies-save') }}</a>
            <a href="" class="btn" @click.prevent="hideCookies()">{{ $t('cookies-confirm') }}</a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cookiesModalShow: undefined,
            showCustomizeCookiesPanel: false
        }
    },
    mounted() {
        if (window.localStorage.cookiesModalShow) {
            this.cookiesModalShow = JSON.parse(window.localStorage.getItem('cookiesModalShow'))
        } else {
            this.cookiesModalShow = true
        }
    },
    methods: {
        hideCookies() {
            this.cookiesModalShow = false
            this.showCustomizeCookiesPanel = false
            window.localStorage.setItem('cookiesModalShow', JSON.stringify(this.cookiesModalShow))
        },
        customizeCookies() {
            this.showCustomizeCookiesPanel = !this.showCustomizeCookiesPanel;
            this.cookiesModalShow = !this.cookiesModalShow
        }
    }
}
</script>

<style scoped>
/* Designing for scroll-bar */
::-webkit-scrollbar {
    width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    background: black;
    border-radius: 5px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: gainsboro;
    border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555;
}


.modal {
    z-index: 100;
    position: fixed;
    bottom: 20px;
    left: 20px;
    height: 250px;
    background-color: rgb(29, 34, 37);
    color: #fff;
    width: 40%;
    text-transform: capitalize;
}

.modal .flex {
    height: calc(100% - 4em);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 2em;
}

.flex h1 {
    font-size: 1rem;
    letter-spacing: 2px;
    font-weight: 500;
    text-align: left;
}

.flex p {
    font-size: 0.7rem;
    letter-spacing: 1px;
    font-weight: 300;
    padding-top: 20px;
    text-align: left;
}

.modal .buttons {
    display: flex;
    flex-direction: row;
    gap: 1em;
}

.modal .buttons .btn {
    font-size: 0.6rem;
    border-radius: 0.4rem;
    letter-spacing: 2px;
    padding: 0.8rem 1.2rem 0.9rem 1.2rem;
}

.backdrop {
    position: fixed;
    z-index: 80;
    background-color: rgba(20, 20, 20, 0.445);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.customize-modal {
    z-index: 100;
    position: fixed;
    background-color: rgb(29, 34, 37);
    color: #fff;
    text-transform: capitalize;
    padding: 1em;
    margin: 5rem 2rem 0 2rem;
    padding: 2rem;
}

.customize-modal .content {}

.customize-modal .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.customize-modal h1 {
    text-align: left;
    font-size: 1rem;
}

.customize-modal p {
    text-align: left;
    font-size: 0.7rem;
}

.customize-modal .cookies-text {
    margin-top: 1rem;
    font-size: 0.5rem;
}

.customize-modal .carousel {}

.customize-modal .carousel .card {
    padding-top: 20px;
}

.customize-modal .buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
    margin-top: 2rem;
}

.customize-modal .buttons .btn {
    font-size: 0.6rem;
    border-radius: 0.4rem;
    letter-spacing: 2px;
    padding: 0.8rem 1.2rem 0.9rem 1.2rem;
}
@media (max-width: 600px) {

.customize-modal .carousel{
    height: 200px;
    overflow-y: scroll;
    margin-top: 1rem;
}

.customize-modal .buttons {
    flex-direction: column;
    justify-content: center;
}

.customize-modal .buttons .btn {
    font-size: 0.6rem;
    width: 70%;
    border-radius: 0.4rem;
    letter-spacing: 2px;
    padding: 1rem;
}

.customize-modal {
    margin-top: 1rem;
}

.customize-modal h1 {
    font-size: 1rem;
}

.customize-modal p {
    font-size: 0.6rem;
    margin-top: 10px;
}

.customize-modal .cookies-text {
    margin-top: 1rem;
    font-size: 0.6rem;
}

.customize-modal .buttons .btn{
    font-size: 0.7rem;
}
}

@media (max-width: 376px) {

    .customize-modal .carousel{
        height: 200px;
        overflow-y: scroll;
        margin-top: 1rem;
    }

    .customize-modal .buttons {
        flex-direction: column;
        justify-content: center;
    }

    .customize-modal .buttons .btn {
        font-size: 0.6rem;
        width: 70%;
        border-radius: 0.4rem;
        letter-spacing: 2px;
        padding: 1rem;
    }

    .customize-modal {
        margin-top: 1rem;
    }

    .customize-modal h1 {
        font-size: 1rem;
    }

    .customize-modal p {
        font-size: 0.6rem;
        margin-top: 10px;
    }

    .customize-modal .cookies-text {
        margin-top: 1rem;
        font-size: 0.6rem;
    }

    .customize-modal .buttons .btn{
        font-size: 0.7rem;
    }
}

@media (max-width: 321px) {
    .customize-modal {
        margin-top: 1rem;
    }

    .customize-modal h1 {
        font-size: 1rem;
    }

    .customize-modal p {
        font-size: 0.6rem;
        margin-top: 10px;
    }

    .customize-modal .cookies-text {
        margin-top: 1rem;
        font-size: 0.55rem;
    }

    .customize-modal .buttons{
        margin: 1rem 0 0 0;
    }

    .customize-modal .buttons .btn{
        font-size: 0.7rem;
    }
}

/* 
@media (min-width: 475px) {

}

@media (min-width: 640px) {

}

@media (min-width: 768px) {

}

@media (min-width: 1024px) {

}

@media (min-width: 1288px) {

}

@media (min-width: 1536px) {

}
*/
</style>