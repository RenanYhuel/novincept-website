<template>
    <div class="offers-frame4-container">
        <div class="offers-frame4">
            <div class="offers-frame4-header">
                <div class="offers-frame4-header-title">
                    Trouver vos <span class="offers-frame4-header-title-highlight">réponses</span> dans notre <span class="offers-frame4-header-title-highlight">foire au questions</span> !
                </div>
                <div class="offers-frame4-header-subtitle-container">
                    <div class="offers-frame4-header-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.
                    </div>
                </div>
            </div>
            <div class="offers-frame4-content">
                <div class="offers-frame4-content-card">
                    <img src="/img/icons/pen.png" alt="" class="offers-frame4-content-card-icon">
                    <div class="offers-frame4-content-card-infos">
                        <div class="offers-frame4-content-card-infos-title">Personnalisation complète et modifications mineures gratuites</div>
                        <div class="offers-frame4-content-card-infos-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="offers-frame4-content-card">
                    <img src="/img/icons/phone.svg" alt="" class="offers-frame4-content-card-icon">
                    <div class="offers-frame4-content-card-infos">
                        <div class="offers-frame4-content-card-infos-title">Assistance 24h/24 et 7j/7 grâce à notre équipe compétante</div>
                        <div class="offers-frame4-content-card-infos-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="offers-frame4-content-card">
                    <img src="/img/icons/ok.png" alt="" class="offers-frame4-content-card-icon">
                    <div class="offers-frame4-content-card-infos">
                        <div class="offers-frame4-content-card-infos-title">Une simplicité d’utilisation hors du commun !</div>
                        <div class="offers-frame4-content-card-infos-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .offers-frame4-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-bottom: 192px;
    }

    .offers-frame4 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px;
        gap: 60px;
        width: 1440px;
        height: 559px;
        background: #F6F6F6;
        border-radius: 24px;
        flex: none;
        order: 3;
        flex-grow: 0;
    }

    .offers-frame4-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 1320px;
        height: 150px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .offers-frame4-header-title {
        margin: 0 auto;
        width: 682px;
        height: 150px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 125%;
        color: #05070B;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .offers-frame4-header-title-highlight {
        background: radial-gradient(29.05% 29.05% at 24.08% 63.75%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #4B3CE4;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        background-blend-mode: plus-lighter, normal;
    }

    .offers-frame4-header-subtitle-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 24px 0px 0px;
        gap: 10px;
        width: 568px;
        height: 105px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .offers-frame4-header-subtitle {
        width: 568px;
        height: 81px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .offers-frame4-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px;
        gap: 60px;
        width: 100%;
        height: 229px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .offers-frame4-content-card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 400px;
        height: 229px;
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .offers-frame4-content-card-icon {
        width: 60px;
        height: 60px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .offers-frame4-content-card-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 400px;
        height: 144px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .offers-frame4-content-card-infos-title {
        width: 400px;
        height: 60px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        letter-spacing: -0.05em;
        color: #05070B;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .offers-frame4-content-card-infos-subtitle {
        width: 400px;
        height: 72px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }
</style>