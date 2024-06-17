<template>
    <div class="top">
        <!-- <aviasalesWidget :type="1"></aviasalesWidget>
        <aviasalesWidget :type="3"></aviasalesWidget>
        <aviasalesWidget :type="5"></aviasalesWidget> -->
        <div class="heading">
            <h1>{{ $t('aviasales-heading-h1') }}</h1>
            <p>{{ $t('aviasales-heading-p') }}</p>
        </div>
    </div>
    <div class="content">
        <div class="wrapper">
            <div class="item">
                <div class="widget">
                    <div class="image">
                        <img src="@/assets/amsterdam.webp" alt="Amsterdam">
                    </div>
                    <div class="aviasales-widget">
                        <aviasalesWidget :type="2" destination="AMS" origin="LON"></aviasalesWidget>
                    </div>
                </div>
                <div class="text">
                    <div class="icon">
                        <img src="@/assets/amsterdamIcon.png" alt="Amsterdam">
                    </div>
                    <h1>{{ $t('aviasales-amsterdam-h1') }}</h1>
                    <p>{{ $t('aviasales-amsterdam-p') }}</p>
                </div>
            </div>
            <div class="item reverse">
                <div class="widget">
                    <div class="image">
                        <img src="@/assets/rotterdam.avif" alt="Amsterdam">
                    </div>
                    <div class="aviasales-widget">
                        <aviasalesWidget :type="2" destination="RTM" origin="lon"></aviasalesWidget>
                    </div>
                </div>
                <div class="text">
                    <div class="icon">
                        <img src="@/assets/rotterdamIcon.png" alt="Amsterdam">
                    </div>
                    <h1>{{ $t('aviasales-rotterdam-h1') }}</h1>
                    <p>{{ $t('aviasales-rotterdam-p') }}</p>
                </div>
            </div>
            <div class="item">
                <div class="widget">
                    <div class="image">
                        <img src="@/assets/hague.webp" alt="The Hague">
                    </div>
                    <div class="aviasales-widget">
                        <aviasalesWidget :type="2" destination="RTM" origin="lon"></aviasalesWidget>
                    </div>
                </div>
                <div class="text">
                    <div class="icon">
                        <img src="@/assets/hagueIcon.png" alt="Hague">
                    </div>
                    <h1>{{ $t('aviasales-hague-h1') }}</h1>
                    <p>{{ $t('aviasales-hague-p') }}</p>
                </div>
            </div>
            <div class="item reverse">
                <div class="widget">
                    <div class="image">
                        <img src="@/assets/utrecht.webp" alt="Utrecht">
                    </div>
                    <div class="aviasales-widget">
                        <aviasalesWidget :type="2" destination="RTM" origin="Lon"></aviasalesWidget>
                    </div>
                </div>
                <div class="text">
                    <div class="icon">
                        <img src="@/assets/utrechtIcon.png" alt="Utrecth">
                    </div>
                    <h1>{{ $t('aviasales-utrecht-h1') }}</h1>
                    <p>{{ $t('aviasales-utrecht-p') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import aviasalesWidget from '@/components/widgets/aviasalesWidget.vue'

export default {
    components: {
        aviasalesWidget,
    }
}
</script>

<style scoped>
.top {
    width: 80vw;
    margin: 2rem auto;
}

.top .heading {
    border: 2px solid black;
    width: 60%;
    padding: 2rem 0;
    margin: 3rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.top .heading p {
    margin-top: 1rem;
    letter-spacing: 2px;
}

.top .heading h1 {
    width: 100%;
    letter-spacing: 2px;
}

.top .heading p {
    width: 55%;
}

.content .wrapper {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 1em;
}

.content .wrapper .item {
    display: flex;
    flex-direction: row;
    padding: 0 2rem;
    margin: auto;
}

.content .wrapper .item.reverse {
    flex-direction: row-reverse;
}

.content .wrapper .item .widget {
    flex: 0 0 50%;
    display: flex;
    flex-direction: column;
}

.content .wrapper .item .text {
    margin-top: 1em;
}

.content .wrapper .item .text .icon {
    height: 30%;
    width: 30%;
    margin: 0 auto 1.3rem auto;
}

.content .wrapper .item .image {
    height: 40%;
    width: 90%;
    margin: 0 auto 0 auto;
}

.content .wrapper .item .image img {
    border-radius: 1.2rem;
    object-fit: cover;
    object-position: bottom;
}

.content .wrapper .item .text h1 {
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: 3px;
}

.content .wrapper .item .text p {
    width: 80%;
    font-size: 1rem;
    margin-top: 1.4rem;
    margin-left: auto;
    margin-right: auto;
}

@media (max-width: 1200px) {}

@media (max-width: 1024px) {
    .content .wrapper .item {
        padding: 1em;
    }

    .content .wrapper .item .image {
        height: auto;
        width: 40vw;
    }

    .content .wrapper .aviasales-widget {
        width: 40vw;
        margin: auto;
    }
}

@media (max-width: 800px) {
    .content .wrapper .item {
        flex-direction: column-reverse;
    }

    .content .wrapper .item.reverse {
        flex-direction: column-reverse;
    }

    .content .wrapper .item .image {
        height: auto;
        width: 80vw;
        margin-top: 3rem;
    }

    .content .wrapper .aviasales-widget {
        width: 80vw;
        margin: auto;
    }

    .top .heading {
        width: 100%;
        padding: 2rem 0;
        margin: 3rem auto;
    }
}

@media (max-width: 500px) {}
</style>