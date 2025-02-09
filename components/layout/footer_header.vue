<template>
    <div class="frame9-container">
        <div class="frame9">
            <div class="frame9-content">
                <div class="frame9-content-infos">
                    <div class="frame9-content-infos-title">
                        Nos <span class="frame9-content-infos-title-highlight">compétences</span> à votre <span class="frame9-content-infos-title-highlight">service</span> !
                    </div>
                    <div class="frame9-content-infos-subtitle">
                        Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.                    
                    </div>
                </div>
                <div class="frame9-call_to_action">
                    <div class="frame9-call_to_action-devis-btn">
                        <div class="frame9-call_to_action-devis-btn-text">Demander un devis</div>
                    </div>
                    <div class="frame9-call_to_action-contact-btn">
                        <div class="frame9-call_to_action-contact-btn-text">Nous contacter</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .frame9-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
    }

    .frame9 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px 120px;
        gap: 10px;
        width: 1442px;
        height: 375px;
        background: #05070B;
        border-radius: 24px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame9-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 10px;
        height: 255px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame9-content-infos {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        margin: 0 auto;
        width: 568px;
        height: 255px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame9-content-infos-title {
        width: 568px;
        height: 150px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 125%;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame9-content-infos-subtitle {
        width: 568px;
        height: 81px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #A1A1AA;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .frame9-call_to_action {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 12px;
        margin: 0 auto;
        width: 401px;
        height: 47px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .frame9-call_to_action-devis-btn {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;
        width: 210px;
        height: 47px;
        background: #4B3CE4;
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;
    }

    .frame9-call_to_action-devis-btn-text {
        width: 162px;
        height: 23px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame9-call_to_action-contact-btn {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;
        width: 179px;
        height: 47px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 12px;
        flex: none;
        order: 1;
        flex-grow: 0;
        cursor: pointer;
    }

    .frame9-call_to_action-contact-btn-text {
        width: 131px;
        height: 23px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame9-content-infos-title-highlight {
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