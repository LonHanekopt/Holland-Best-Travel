<template>
    <div class="container" id="hotels">
        <div class="heading">
            <h1>{{ $t('hotel-heading-h1') }}</h1>
            <p>{{ $t('hotel-heading-p') }}</p>
        </div>
        <hotelLookWidget type="search"></hotelLookWidget>
        <div class="heading">
            <h1>{{ $t('hotel-search-h1') }}</h1>
            <p>{{ $t('hotel-search-p') }}</p>
            <div class="form">
                <select name="city" id="city" v-model="select">
                    <option value="amsterdam" selected>Amsterdam</option>
                    <option value="rotterdam">Rotterdam</option>
                    <option value="the hague">{{ $t('The Hague') }}</option>
                    <option value="utrecht">Utrecht</option>
                </select>
                <button class="btn green" @click="openHotels">{{ $t('hotel-search-btn') }} {{ select }}</button>
            </div>
        </div>
        <div class="widget" v-show="open">
            <hotelLookWidget type="list" :destination="select"></hotelLookWidget>
        </div>
    </div>
</template>

<script>
import hotelLookWidget from '@/components/widgets/hotelLookWidget.vue'

export default {
    data() {
        return {
            open: false,
            select: "amsterdam"
        }
    },
    methods: {
        openHotels() {
            this.open = true;
        }
    },
    components: {
        hotelLookWidget,
    }
}
</script>

<style scoped>
.heading {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin: 1.5em 0;
}

.widget {
    transform: all 0.5s;
}

.form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3em;
}

.form input {
    height: 1.5rem;
    width: 15rem;
    font-size: 1rem;
}

@media screen and (max-width: 800px) {
    .form {
        flex-direction: column;
        gap: 1em;
    }
}
</style>