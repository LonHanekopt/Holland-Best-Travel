<template>
    <div class="container">
        <div class="heading">
            <h1>{{ $t('main-heading-h1') }}</h1>
            <p>{{ $t('main-heading-p') }}</p>
        </div>
        <div class="grid">
            <div class="text">
                <div class="icon"><img src="@/assets/leaf.png" alt="leaf"></div>
                <div class="heading">
                    <h1>{{ $t('main-grid-heading-1') }}</h1>
                </div>
                <div class="content">
                    <p>{{ $t('main-grid-content-1') }}</p>
                </div>
            </div>
            <div class="text">
                <div class="icon"><img src="@/assets/parchment.png" alt="leaf"></div>
                <div class="heading">
                    <h1 style="white-space: pre;">{{ $t('main-grid-heading-2') }}</h1>
                </div>
                <div class="content">
                    <p>{{ $t('main-grid-content-2') }}</p>
                </div>
            </div>
            <div class="text">
                <div class="icon"><img src="@/assets/adventurer.png" alt="leaf"></div>
                <div class="heading">
                    <h1>{{ $t('main-grid-heading-3') }}</h1>
                </div>
                <div class="content">
                    <p>{{ $t('main-grid-content-3') }}</p>
                </div>
            </div>
            <div class="text">
                <div class="icon"><img src="@/assets/flower.png" alt="leaf"></div>
                <div class="heading">
                    <h1>{{ $t('main-grid-heading-4') }}</h1>
                </div>
                <div class="content">
                    <p>{{ $t('main-grid-content-4') }}</p>
                </div>
            </div>
            <div class="text">
                <div class="icon"><img src="@/assets/nightlife.png" alt="leaf"></div>
                <div class="heading">
                    <h1>{{ $t('main-grid-heading-5') }}</h1>
                </div>
                <div class="content">
                    <p>{{ $t('main-grid-content-5') }}</p>
                </div>
            </div>
            <div class="text">
                <div class="icon"><img src="@/assets/idea.png" alt="leaf"></div>
                <div class="heading">
                    <h1>{{ $t('main-grid-heading-6') }}</h1>
                </div>
                <div class="content">
                    <p>{{ $t('main-grid-content-6') }}</p>
                </div>
            </div>
        </div>
        <div class="bottom">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.heading {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.heading h1 {
    width: 100%;
}

.heading p {
    width: 55%;
}

.grid {
    margin: 2rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
    column-gap: 2rem;
}

.grid .text {}

.grid .text .icon {
    width: 100px;
    margin: auto;
}

.grid .text h1 {
    font-size: 1.7rem;
}

.grid .text p {
    font-size: 0.8rem;
}

.bottom p {
    margin: 1rem 0;
    font-size: 1rem;
}

@media (max-width: 1200px) {
    .heading p {
        width: 75%;
    }

    .grid .text p {
        font-size: 1rem;
    }
}

@media (max-width: 1024px) {
    .grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-auto-rows: 1fr;
        row-gap: 1rem;
        column-gap: 2rem;
    }
}

@media (max-width: 800px) {
    .heading {
        padding-top: 3rem;
        gap: 2rem;
    }

    .grid {
        display: flex;
        flex-direction: column;
        gap: 3em;
    }

    .heading h1{
        font-size: 2.5rem;
    }

    .grid .text h1{
        font-size: 2.5rem;
    }

    .grid .text p {
        font-size: 1.7rem;
    }

    .heading p {
        font-size: 1.4rem;
    }
}

@media (max-width: 500px) {
    .grid {}
}
</style>