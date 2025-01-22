<template>
    <div class="frame5-container">
        <div class="frame5">
            <div class="frame5-header">
                <div class="frame5-header-title">Nos <span class="frame5-header-title-span">compétences</span> à votre <span class="frame5-header-title-span">service</span> ! </div>
                <div class="frame5-header-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.</div>
            </div>
            <div class="frame5-content">
                <div class="frame-content-card first-card">
                    <div class="frame5-content-card-icon">
                        <img src="/img/icons/lock.svg" alt="">
                    </div>
                    <div class="frame5-content-card-subtitle">
                        <div class="frame5-content-card-subtitle-title">Sécurité maximale pour vos données</div>
                        <div class="frame5-content-card-subtitle-desc">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="frame-content-card second-card">
                    <div class="frame5-content-card-icon">
                        <img src="/img/icons/law.svg" alt="">
                    </div>
                    <div class="frame5-content-card-subtitle">
                        <div class="frame5-content-card-subtitle-title">Restez toujours en conformité, sans effort</div>
                        <div class="frame5-content-card-subtitle-desc">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="frame-content-card third-card">
                    <div class="frame5-content-card-icon">
                        <img src="/img/icons/energy.svg" alt="">
                    </div>
                    <div class="frame5-content-card-subtitle">
                        <div class="frame5-content-card-subtitle-title">Accélérez vos projets à la vitesse de l’éclair</div>
                        <div class="frame5-content-card-subtitle-desc">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
                <div class="frame-content-card fourth-card">
                    <div class="frame5-content-card-icon">
                        <img src="/img/icons/stars.svg" alt="">
                    </div>
                    <div class="frame5-content-card-subtitle">
                        <div class="frame5-content-card-subtitle-title">Des solutions intuitives pour vous simplifier la vie</div>
                        <div class="frame5-content-card-subtitle-desc">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.frame5-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 192px;
}

.frame5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 48px;
    width: 1440px;
    height: 608px;
    flex: none;
    align-self: stretch;
    flex-grow: 0;
}

.frame5-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 952px;
    height: 255px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.frame5-header-title {
    width: 568px;
    height: 150px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 60px;
    line-height: 125%;
    text-align: center;
    color: #05070B;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.frame5-header-title-span {
    color: var(--Colors--Primary);
    position: relative;
}

.frame5-header-title-span::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        80deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    background-position: 100% 0%;
    z-index: 1;
    pointer-events: none;
}

.frame5-header-subtitle {
    width: 568px;
    height: 81px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #71717A;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.frame5-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    padding: 0px;
    gap: 24px;
    isolation: isolate;
    width: 1440px;
    height: 305px;
    flex: none;
    order: 1;
    flex-grow: 0;
}

.frame-content-card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 24px;
    width: 342px;
    height: 305px;
    background: #FFFFFF;
    border: 1px solid #E4E4E7;
    border-radius: 12px;
}

.frame5-content-card-icon {
    width: 60px;
    height: 60px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.frame5-content-card-subtitle {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    width: 294px;
    height: 168px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.frame5-content-card-subtitle-title {
    width: 294px;
    height: 60px;
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

.frame5-content-card-subtitle-desc {
    width: 294px;
    height: 96px;
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