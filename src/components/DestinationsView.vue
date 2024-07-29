<template>
    <div class="content container">
        <div class="heading">
            <h1>{{ $t('Discover the Beauty Netherlands') }}</h1>
        </div>
        <div class="grid">
            <div class="image"><img src="@/assets/keukenhof.webp" alt="keukenhof"></div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-1') }}</h1>
                <p>{{ $t('destinations-grid-content-1') }}</p>
            </div>
            <div class="image"><img src="@/assets/hoge-veluwe.webp" alt="veluwe"></div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-2') }}</h1>
                <p>{{ $t('destinations-grid-content-2') }}</p>
            </div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-3') }}</h1>
                <p>{{ $t('destinations-grid-content-3') }}</p>
            </div>
            <div class="image"><img src="@/assets/weerribben.webp" alt="weerribben"></div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-4') }}</h1>
                <p>{{ $t('destinations-grid-content-4') }}</p>
            </div>
            <div class="image"><img src="@/assets/veluwezoom.webp" alt="veluwezoom"></div>

            <div class="image"><img src="@/assets/kinderdijk.webp" alt="kinderdijk"></div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-5') }}</h1>
                <p>{{ $t('destinations-grid-content-5') }}</p>
            </div>
            <div class="image"><img src="@/assets/zaanse.webp" alt="zaanse"></div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-6') }}</h1>
                <p>{{ $t('destinations-grid-content-6') }}</p>
            </div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-7') }}</h1>
                <p>{{ $t('destinations-grid-content-7') }}</p>
            </div>
            <div class="image"><img src="@/assets/texel.webp" alt="texel"></div>
            <div class="text">
                <h1>{{ $t('destinations-grid-heading-8') }}</h1>
                <p>{{ $t('destinations-grid-content-8') }}</p>
            </div>
            <div class="image"><img src="@/assets/zuid.webp" alt="zuid"></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.heading {
    margin: 3rem auto;
}

.heading h1 {
    letter-spacing: 3px;
    font-weight: 200;
}

.content .grid {
    width: inherit;
    display: grid;
    grid-template-columns: 300px 300px 300px 300px;
    grid-auto-rows: 300px;
    margin-bottom: 2em;
}

.content .grid .text {
    margin-top: 20px;
    padding-inline: 10px;
}

.content .grid .text h1 {
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: 2px;
}

.content .grid .text p {
    margin-top: 1rem;
    font-size: 0.85rem;
}

.content .grid .image {
    transition: all 0.2s;
    border-radius: .2rem;
}

.content .grid .image:hover {
    transform: scale(0.9);
}

.content .grid .image img {
    border-radius: .2rem;
}

@media screen and (max-width: 1300px) {
    .content .grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 300px;
        row-gap: 3rem;
    }
}

@media screen and (max-width: 1000px) {
    .content .grid {
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 300px;
        row-gap: 3rem;
    }
}

@media screen and (max-width: 769px) {
    .content .grid .text h1 {
        font-size: 1.5rem;
    }

    .content .grid .text p {
        font-size: 1.2rem;
    }
}

@media screen and (max-width: 400px) {
    .content .grid{
        grid-template-columns: auto;
        grid-auto-rows: auto;
    }
    .content .grid .text h1 {
        font-size: 1.3rem;
    }

    .content .grid .text p {
        font-size: 1rem;
    }
}
</style>