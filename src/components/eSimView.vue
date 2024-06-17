<template>
    <div class="container">
        <div class="heading">

        </div>

        <div class="widget">
            <airaloWidget />
        </div>

        <div class="flex">
            <div class="card">
                <h1>{{ $t('eSim-heading-1') }}</h1>
                <p>{{ $t('eSim-content-1') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-2') }}</h1>
                <p>{{ $t('eSim-content-2') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-3') }}</h1>
                <p>{{ $t('eSim-content-3') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-4') }}</h1>
                <p>{{ $t('eSim-content-4') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-5') }}</h1>
                <p>{{ $t('eSim-content-5') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-6') }}</h1>
                <p>{{ $t('eSim-content-6') }}</p>
            </div>
        </div>

        <h1 class="how-to-text">{{ $t('eSim-instructions-text') }}</h1>

        <div class="flex instructions">
            <div class="card">
                <h1>{{ $t('eSim-heading-7') }}</h1>
                <p>{{ $t('eSim-content-7') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-8') }}</h1>
                <p>{{ $t('eSim-content-8') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-9') }}</h1>
                <p>{{ $t('eSim-content-9') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-10') }}</h1>
                <p>{{ $t('eSim-content-10') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-11') }}</h1>
                <p>{{ $t('eSim-content-11') }}</p>
            </div>

            <div class="card">
                <h1>{{ $t('eSim-heading-12') }}</h1>
                <p>{{ $t('eSim-content-12') }}</p>
            </div>

        </div>
    </div>
</template>

<script>
import airaloWidget from '@/components/widgets/airaloWidget'

export default {
    components: {
        airaloWidget
    }
}
</script>

<style scoped>
h1 {
    font-size: 1.3rem;
    font-weight: 400;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.widget {
    margin: 3rem auto;
}

.flex {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    text-align: left;
}

.flex .card {
    user-select: none;
}


.flex .card p {
    margin: 1em 0;
    font-size: 1rem;
}

.how-to-text {
    font-size: 2.3rem;
    letter-spacing: 3px;
    margin: 2rem auto;
}

.instructions {
    width: 80%;
    margin-bottom: 2rem;
}

.instructions h1 {
    font-size: 1rem;
    font-weight: 300;
    letter-spacing: 3px;
    margin: 2rem auto;
}
</style>