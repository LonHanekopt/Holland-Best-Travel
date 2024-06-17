<template>
    <div class="bg">
        <div class="container bg-wrapper">
            <div class="heading">
                <h1>{{ $t('Overview of the Netherlands') }}</h1>
                <p>{{ $t('overview-p') }}</p>
            </div>
            <div class="heading">
                <h1>{{ $t('Plan Your Adventure') }}</h1>
                <p>{{ $t('Plan Your Adventure-p') }}</p>
            </div>
            <div class="heading">
                <h1>{{ $t('Discover the Netherlands') }}</h1>
                <p>{{ $t('Discover the Netherlands-p') }}</p>
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
    background-image: linear-gradient(rgba(1, 1, 1, 0.6), rgba(1, 1, 1, 0.6)), url("@/assets/fits.webp");
    background-attachment: scroll;
    color: #fff;
    height: 80vh;
}

.bg .bg-wrapper {
    position: relative;
    top: 25%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    align-self: center;
}

.bg .bg-wrapper .heading {
    flex: 0 0 29%;
    border: 1px solid #fff;
    padding: 2em 0.4em;
    transition: all 0.2s;
    user-select: none;
}

.bg .bg-wrapper .heading:hover {
    border: 1px solid #dbdbdb;
    transform: scale(0.95);
    flex: 0 0 36%;
}

.bg .bg-wrapper .heading h1 {
    letter-spacing: 3px;
    font-size: 2rem;
}

.bg .bg-wrapper .heading p {
    margin-top: 1rem;
    letter-spacing: 1px;
    font-size: 1.2rem;
}

@media (max-width: 1200px) {
    .bg {
        height: auto;
        padding: 3em 0;
    }
}

@media (max-width: 800px) {
    .bg .bg-wrapper {
        flex-wrap: wrap;
        gap: 1rem;
    }

    .bg .bg-wrapper .heading {
        flex: 0 0 29%;
        border: 1px solid #fff;
        padding: 2em 0.4em;
        transition: all 0.2s;
        user-select: none;
    }
}

@media (max-width: 500px) {}

@media (max-width: 400px) {}
</style>