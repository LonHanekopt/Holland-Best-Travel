<template>
    <div class="container">
        <div class="heading">
            <div class="icon" id="kiwiTaxi">
                <img src="@/assets/transport.png" alt="">
            </div>
            <h1>{{ $t('kiwiTaxi-header-text-h1') }}</h1>

            <p>{{ $t('kiwiTaxi-header-text-p') }}</p>
        </div>

        <div class="widget">
            <kiwitaxiWidget />
        </div>

        <div class="wrapper">
            <div class="grid">
                <div class="card">
                    <h1>{{ $t('kiwiTaxi-heading-1') }}</h1>
                    <p>{{ $t('kiwiTaxi-content-1') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('kiwiTaxi-heading-2') }}</h1>
                    <p>{{ $t('kiwiTaxi-content-2') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('kiwiTaxi-heading-3') }}</h1>
                    <p>{{ $t('kiwiTaxi-content-3') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('kiwiTaxi-heading-4') }}</h1>
                    <p>{{ $t('kiwiTaxi-content-4') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('kiwiTaxi-heading-5') }}</h1>
                    <p>{{ $t('kiwiTaxi-content-5') }}</p>
                </div>

                <div class="card">
                    <h1>{{ $t('kiwiTaxi-heading-6') }}</h1>
                    <p>{{ $t('kiwiTaxi-content-6') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import kiwitaxiWidget from '@/components/widgets/kiwitaxiWidget'

export default {
    components: {
        kiwitaxiWidget
    }
}
</script>

<style scoped>
.heading {
    width: 50vw;
    margin: auto;
}

.heading .icon {
    width: 20%;
    height: 20%;
    margin: 0 auto;
}

.heading h1 {
    font-size: 2.3rem;
    letter-spacing: 2px;
}

.heading p {
    letter-spacing: 2px;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
}

.widget {
    margin: 3rem auto;
}

.wrapper {
    margin-bottom: 3rem;
}

.wrapper .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
    column-gap: 2rem;
}

.wrapper .grid .card {
    user-select: none;
    background-color: #fff;
    border: 2px solid #fff79f;
    padding: 2em;
    border-radius: 1rem;
    transition: all 0.15s;
}

.wrapper .grid .card:hover {
    background-color: #f1f1f1;
    transform: scale(1.01);
    border: 2px solid #d0ca83;
}


.wrapper .grid .card h1 {
    font-size: 2rem;
}

.wrapper .grid .card p {
    margin: 1em 0;
    font-size: 1rem;
}

@media screen and (max-width: 1025px) {
    .wrapper .grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        row-gap: 1rem;
        column-gap: 2rem;
    }
}

@media screen and (max-width: 800px) {
    .heading {
        width: 85vw;
    }
    .heading .icon {
        width: 40%;
        height: 40%;
    }
}

@media screen and (max-width: 500px) {
    .heading .icon {
        width: 50%;
        height: 50%;
    }
}
</style>