<template>

    <header><HeaderView/></header>
    
    <main><MainView/></main>
    
    <section id="learn-more" class="divider"><tripleBlocksDivider/></section>
    
    <section><DestinationsView/></section>

    <section class="divider"><simCard/></section>
    
    <section><eSimView></eSimView></section>
    
    <section class="divider"><flightDeals/></section>

    <section><AviasalesView/></section>

    <section class="divider"><Kiwitaxi/></section>

    <section><kiwitaxiView/></section>

    <section class="divider"><tripPlan/></section>

    <section><hotelView/></section>

</template>

<script>
import HeaderView from '../components/HeaderView.vue'
import MainView from '../components/MainView.vue'
import eSimView from '../components/eSimView.vue'
import DestinationsView from '../components/DestinationsView.vue'
import AviasalesView from '../components/AviasalesView.vue'
import hotelView from '../components/hotelView.vue'
import kiwitaxiView from '../components/kiwitaxiView.vue'

//dividers
import tripleBlocksDivider from '../components/dividers/tripleBlocks.vue'
import tripPlan from '../components/dividers/tripPlan.vue'
import flightDeals from '../components/dividers/flightDeals.vue'
import Kiwitaxi from '../components/dividers/kiwiTaxi.vue'
import simCard from '../components/dividers/simCard.vue'


export default {
    components: {
        HeaderView,
        MainView,
        eSimView,
        DestinationsView,
        AviasalesView,
        tripleBlocksDivider,
        tripPlan,
        simCard,
        Kiwitaxi,
        flightDeals,
        kiwitaxiView,
        hotelView
    }
}
</script>

<style scoped></style>