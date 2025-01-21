<template>
    <div class="frame3-container">
        <div class="founders-section">
            <div class="left-section">
                <div class="text-section">
                    <h2>
                        Un petit mot de nos <span class="highlight">fondateurs !</span>
                    </h2>
                    <p>
                        Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.
                    </p>
                </div>
            </div>
            <div class="right-section" style="position: relative;">
                <div class="card zolt">
                    <div class="card-title">
                        <div class="card-name">Zoltán Vanel</div>
                        <div class="icons">
                            <img src="/img/icons/linkedin.svg" alt="">
                            <img src="/img/icons/twitter.svg" alt="">
                        </div>
                    </div>
                    <div class="card-desc">Minim cupidatat Lorem nulla culpa duis.</div>
                </div>

                <div class="card raph">
                    <div class="card-title">
                        <div class="card-name">Raphael Tchiftbachian</div>
                        <div class="icons">
                            <img src="/img/icons/linkedin.svg" alt="">
                            <img src="/img/icons/discord.svg" alt="">
                            <img src="/img/icons/insta.svg" alt="">
                        </div>
                    </div>
                    <div class="card-desc">Minim cupidatat Lorem nulla culpa duis.</div>
                </div>
                <img
                    src="/img/section_fonda/image.png"
                    alt="Photo des fondateurs"
                    class="founders-image"
                />
            </div>
        </div>
    </div>
</template>



<style>
    .frame3-container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 192px;
    }

    .frame3-container .founders-section {
        display: flex;
        align-items: center;
        gap: 0px;
        background-color: var(--Background--default);
        width: 1433px;
        height: 389px;
        border-radius: 24px;

    }

    .frame3-container .founders-section .left-section {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--Background--default);
        width: 598px;
        border-radius: 24px 0 0 24px;
    }

    .frame3-container .founders-section .right-section {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('/img/section_fonda/background.svg');
        width: calc(100% - 598px);
        border-radius: 0 24px 24px 0;
    }

    .frame3-container .founders-section .left-section .text-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 509px;
        height: 282px;
        gap: 24px;

    }


    .frame3-container .founders-section .left-section .text-section h2 {
        width: 509px;
        height: 150px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 125%;
        letter-spacing: -5%;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame3-container .founders-section .left-section .text-section p {
        width: 464px;
        height: 108px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        flex-grow: 0;

    }
    
    .frame3-container .founders-section .left-section .text-section .highlight {
        color: var(--Colors--Primary);
    }

    .frame3-container .founders-section img.founders-image {
        width: 1009px;
        height: 642px;
        position: absolute;
        bottom: 0;
    }

    .frame3-container .founders-section .right-section .card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        gap: 10px;
        position: absolute;
        background: #FFFFFF;
        border-radius: 12px;
        z-index: 2000;
    }

    .frame3-container .founders-section .right-section .card.zolt {
        bottom: 12px;
        left: 0;
    }

    .frame3-container .founders-section .right-section .card.raph {
        bottom: 12px;
        right: 12px;
    }

    .frame3-container .founders-section .right-section .card .card-title {
        display: flex;
        gap: 12px;
    }

    .frame3-container .founders-section .right-section .card .card-title .card-name {

        height: 30px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        letter-spacing: -0.05em;
        color: #05070B;
        flex: none;
        order: 0;
        flex-grow: 0;

    }

    .frame3-container .founders-section .right-section .card .card-title .icons {
        display: flex;
        gap: 12px;
        align-items: center;

    }

    .frame3-container .founders-section .right-section .card .card-title .icons img {
        width: 18px;
        height: 18px;
    }

    .frame3-container .founders-section .right-section .card .card-desc {
        width: 290px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        flex-grow: 0;
    }
</style>