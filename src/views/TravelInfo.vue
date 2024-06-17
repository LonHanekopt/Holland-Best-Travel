<template>
    <div class="container">
        <div class="heading">
            <h1>{{ $t('travelInfo-header-text') }}</h1>
        </div>
        <div class="image">
            <img src="@/assets/destination.webp" alt="amsterdam">
        </div>

        <div class="flex">
            <div class="card">
                <h1>{{ $t('travelInfo-heading-1') }}</h1>
                <p>{{ $t('travelInfo-content-1') }}</p>
                <ul class="flex">
                    <li><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank">{{
                            $t('travelInfo-li-1') }}</a></li>
                    <li><a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/index.html" target="_blank">{{
                            $t('travelInfo-li-2') }}</a></li>
                    <li>{{ $t('travelInfo-li-3') }}</li>
                </ul>
            </div>

            <div class="card">
                <h1>{{ $t('travelInfo-heading-2') }}</h1>
                <p>{{ $t('travelInfo-content-2') }}</p>
                <ul class="flex">
                    <li><a href="https://kiwitaxi.com/" target="_blank">{{ $t('travelInfo-li-4') }}</a></li>
                    <li><a href="https://www.rome2rio.com/" target="_blank">{{ $t('travelInfo-li-5') }}</a></li>
                    <li><a href="https://www.rentalcars.com/" target="_blank">{{ $t('travelInfo-li-6') }}</a></li>
                    <li>{{ $t('travelInfo-li-7') }}</li>
                </ul>
            </div>

            <div class="card">
                <h1>{{ $t('travelInfo-heading-3') }}</h1>
                <p>{{ $t('travelInfo-content-3') }}</p>
                <ul class="flex">
                    <li><a href="https://www.viator.com/" target="_blank">Viator</a>: {{ $t('travelInfo-li-8') }}</li>
                    <li><a href="https://www.getyourguide.com/" target="_blank">GetYourGuide</a>: {{
                        $t('travelInfo-li-9') }}</li>
                    <li><a href="https://www.tripadvisor.com/" target="_blank">TripAdvisor</a>: {{
                        $t('travelInfo-li-10') }}</li>
                </ul>
            </div>

            <div class="card">
                <h1>{{ $t('travelInfo-heading-4') }}</h1>
                <p>{{ $t('travelInfo-content-4') }}</p>
                <ul class="flex">
                    <li><a href="https://www.xe.com/" target="_blank">XE Currency Exchange</a>: {{
                        $t('travelInfo-li-11') }}</li>
                    <li><a href="https://www.travelex.com/" target="_blank">Travelex</a>: {{ $t('travelInfo-li-12') }}
                    </li>
                    <li>{{ $t('travelInfo-li-13') }}</li>
                </ul>
            </div>

            <div class="card">
                <h1>{{ $t('travelInfo-heading-5') }}</h1>
                <p>{{ $t('travelInfo-content-5') }}</p>
                <ul class="flex">
                    <li>{{ $t('travelInfo-li-14') }}</li>
                    <li>{{ $t('travelInfo-li-15') }}</li>
                    <li>{{ $t('travelInfo-li-16') }}</li>
                </ul>
            </div>

            <div class="card">
                <h1>{{ $t('travelInfo-heading-6') }}</h1>
                <p>{{ $t('travelInfo-content-6') }}</p>
                <ul class="flex">
                    <li><a href="https://weather.com/" target="_blank">Weather</a>: {{ $t('travelInfo-li-17') }}</li>
                    <li><a href="https://www.accuweather.com/" target="_blank">AccuWeather</a>: {{
                        $t('travelInfo-li-18') }}</li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
    font-size: 2.2rem;
    letter-spacing: 2px;
    font-weight: 300;
}

p {
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: 1px;
    margin-top: 1em;
}

.image {
    width: 65%;
    margin: 0 auto;
    ;
}

.image img {
    border-radius: 2rem;
}

.heading {
    /* border: 1px solid black; */
    padding: 3em;
}

.heading h1 {
    font-size: 2.5rem;
    font-weight: 400;
}

.flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: left;
    padding: 2rem 2rem;
}

@media screen and (max-width: 500px) {
    h1 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1rem;
    }

    .heading h1 {
        font-size: 2rem;
    }
}
</style>