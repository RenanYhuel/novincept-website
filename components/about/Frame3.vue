<template>
    <div class="about-frame3-container">
        <div class="about-frame3">
            <div class="about-frame3-header">
                <div class="about-frame3-header-title">
                    Nos <span class="about-frame3-header-title-highlight">valeurs fondamental</span> dans tout nos <span class="about-frame3-header-title-highlight">projet.</span>
                </div>
                <div class="about-frame3-header-subtitle">
                    <div class="about-frame3-header-subtitle-content">
                        Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.
                    </div>
                </div>
            </div>
            <div class="about-frame3-content">
                <div class="about-frame3-content-skill_card">
                    <img src="/img/icons/lock.svg" alt="" class="about-frame3-content-skill_card-icon">
                    <div class="about-frame3-content-skill_card-infos">
                        <div class="about-frame3-content-skill_card-infos-title">La sécurité, notre priorité absolue</div>
                        <div class="about-frame3-content-skill_card-infos-content">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="about-frame3-content-skill_card">
                    <img src="/img/icons/stars.svg" alt="" class="about-frame3-content-skill_card-icon">
                    <div class="about-frame3-content-skill_card-infos">
                        <div class="about-frame3-content-skill_card-infos-title">La simplicité au cœur de nos solutions</div>
                        <div class="about-frame3-content-skill_card-infos-content">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="about-frame3-content-skill_card">
                    <img src="/img/icons/pen.png" alt="" class="about-frame3-content-skill_card-icon">
                    <div class="about-frame3-content-skill_card-infos">
                        <div class="about-frame3-content-skill_card-infos-title">La personnalisation avant tout</div>
                        <div class="about-frame3-content-skill_card-infos-content">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .about-frame3-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        margin-bottom: 192px;
    }

    .about-frame3 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px;
        gap: 60px;
        width: 1440px;
        height: 528px;
        background: #F6F6F6;
        border-radius: 24px;
        flex: none;
        order: 2;
        flex-grow: 0;
    }

    .about-frame3-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 100%;
        height: 150px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .about-frame3-header-title {
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

    .about-frame3-header-subtitle {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 24px 0px 0px;
        gap: 10px;
        margin: 0 auto;
        width: 568px;
        height: 105px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .about-frame3-header-subtitle-content {
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

    .about-frame3-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px;
        gap: 60px;
        width: 100%;
        height: 198px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .about-frame3-content-skill_card {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        height: 198px;
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .about-frame3-content-skill_card-icon {
        width: 60px;
        height: 60px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .about-frame3-content-skill_card-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        height: 114px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .about-frame3-content-skill_card-infos-title {
        height: 30px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        color: #05070B;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .about-frame3-content-skill_card-infos-content {
        width: 400px;
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

    .about-frame3-header-title-highlight {
        margin: 0 auto;
        width: 682px;
        height: 150px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 125%;
        background: radial-gradient(58.32% 58.33% at 21.17% 12.5%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #4B3CE4;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        background-blend-mode: plus-lighter, normal;
        flex: none;
        order: 0;
        flex-grow: 0;
    }
</style>