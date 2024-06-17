<template>
    <div class="bg">
        <div class="wrapper container">
            <h1>{{ $t('header-h1') }}
            </h1>
            <p>{{ $t('header-p') }}</p>
            <div class="button">
                <a class="btn" href="#learn-more">
                    {{ $t('learn-more') }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
    background-image: linear-gradient(rgba(1, 1, 1, 0.5), rgba(1, 1, 1, 0.5)), url("@/assets/rainbow.webp");
    color: #fff;
    background-position: center;
    height: 80vh;
    background-attachment: scroll;
}

.wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
}

.wrapper h1 {
    width: 100%;
    letter-spacing: 2px;
}

.wrapper p {
    letter-spacing: 1px;
    font-size: 1.3rem;
    font-weight: 300;
    width: 65%;
}

@media (max-width: 1200px) {}

@media (max-width: 800px) {
    .bg {
        height: auto;
        padding: 3rem 0;
    }
}

@media (max-width: 500px) {}
</style>