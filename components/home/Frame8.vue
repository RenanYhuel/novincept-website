<template>
    <div class="frame8-container">
        <div class="frame8">
            <div class="frame8-infos">
                <div class="frame8-infos-header">
                    <div class="frame8-infos-header-title">Des <span class="frame8-infos-header-title-highlight">questions ?</span> Contactez nous !</div>
                    <div class="frame8-infos-header-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.</div>
                </div>
                <div class="frame8-infos-cards">
                    <div class="frame8-infos-card">
                        <div class="frame8-infos-card-icon">
                            <img src="/img/icons/linkedin_special.svg" alt="">
                        </div>
                        <div class="frame8-infos-card-header">
                            <div class="frame8-infos-card-header-title">Connectons-nous sur Linkedin ! </div>
                            <div class="frame8-infos-card-header-subtitle">linkedin.com/novincept</div>
                        </div>
                    </div>
                    <div class="frame8-infos-card">
                        <div class="frame8-infos-card-icon">
                            <img src="/img/icons/x_special.svg" alt="">
                        </div>
                        <div class="frame8-infos-card-header">
                            <div class="frame8-infos-card-header-title">Abonnez vous à notre compte X !</div>
                            <div class="frame8-infos-card-header-subtitle">x.com/novincept</div>
                        </div>
                    </div>
                    <div class="frame8-infos-card">
                        <div class="frame8-infos-card-icon">
                            <img src="/img/icons/insta_special.svg" alt="">
                        </div>
                        <div class="frame8-infos-card-header">
                            <div class="frame8-infos-card-header-title">Abonnez vous à notre Instagram !</div>
                            <div class="frame8-infos-card-header-subtitle">instagram.com/novincept</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="frame8-contact">
                <div class="frame8-contact-container">
                    <div class="frame8-contact-container-label">
                        <label for="frame8-contact">Nom</label>
                        <div class="star_required">
                            <img src="/img/icons/star_required.svg" alt="">
                        </div>
                    </div>
                    <input type="text" id="frame8-contact" class="frame8-contact-container-input" placeholder="Smith">
                </div>
                <div class="frame8-contact-container">
                    <div class="frame8-contact-container-label">
                        <label for="frame8-contact">Prénom</label>
                        <div class="star_required">
                            <img src="/img/icons/star_required.svg" alt="">
                        </div>
                    </div>
                    <input type="text" id="frame8-contact" class="frame8-contact-container-input" placeholder="John">
                </div>
                <div class="frame8-contact-container">
                    <div class="frame8-contact-container-label">
                        <label for="frame8-contact">Email</label>
                        <div class="star_required">
                            <img src="/img/icons/star_required.svg" alt="">
                        </div>
                    </div>
                    <div class="frame8-contact-container-input">
                        <img src="/img/icons/email.svg" alt="">
                        <input type="email" id="frame8-contact" class="frame8-contact-special-mail" placeholder="john.smith@example.com">
                    </div>
                </div>
                <div class="frame8-contact-container">
                    <div class="frame8-contact-container-label">
                        <label for="frame8-contact">Nom de l’entreprise</label>
                    </div>
                    <input type="text" id="frame8-contact" class="frame8-contact-container-input" placeholder="Novincept">
                </div>
                <div class="frame8-contact-container">
                    <div class="frame8-contact-container-label">
                        <label for="frame8-contact">Quelle est votre besoin ?</label>
                        <div class="star_required">
                            <img src="/img/icons/star_required.svg" alt="">
                        </div>
                    </div>
                    <textarea id="frame8-contact" class="frame8-contact-special-enter" placeholder="Nous voulons un site internet..."></textarea>
                </div>

                <div class="frame8-contact-container frame8-button">
                    <span class="button_primary">Envoyer</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .frame8-container {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 192px;
    }

    .frame8 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 146px;
        width: 1440px;
        height: 645px;
        flex: none;
        order: 5;
        flex-grow: 0;
    }

    .frame8-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 48px;
        margin: 0 auto;
        width: 830px;
        height: 478px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame8-infos-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 701px;
        height: 255px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame8-infos-header-title {
        width: 619px;
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

    .frame8-infos-header-subtitle {
        width: 701px;
        height: 81px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame8-infos-cards {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0px;
        gap: 12px;
        width: 830px;
        height: 175px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame8-infos-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        gap: 12px;
        width: 268.67px;
        height: 175px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .frame8-infos-card-icon {
        width: 39px;
        height: 39px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame8-infos-card-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 220.67px;
        height: 76px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame8-infos-card-header-title {
        width: 220.67px;
        height: 46px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 125%;
        color: #05070B;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame8-infos-card-header-subtitle {
        width: 174px;
        height: 24px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .frame8-contact {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        gap: 24px;
        margin: 0 auto;
        width: 464px;
        height: 645px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 282px 113px rgba(0, 0, 0, 0.01), 0px 158px 95px rgba(0, 0, 0, 0.05), 0px 70px 70px rgba(0, 0, 0, 0.09), 0px 18px 39px rgba(0, 0, 0, 0.1);
        border-radius: 24px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .frame8-contact-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 416px;
        height: 70px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .frame8-contact-container-label {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 45px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame8-contact-container-label label {
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #3F3F46;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame8-contact-container-input {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 416px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;

        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #A1A1AA;
    }

    .frame8-contact-container-input img {
        width: 20px;
        height: 20px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .frame8-contact-container .frame8-contact-special-enter {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px 14px;
        gap: 8px;
        width: 416px;
        height: 123px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #A1A1AA;
        resize: none;

    }

    .frame8-contact-container .frame8-contact-special-mail {
        box-sizing: border-box;
        width: 350px;
        height: 100%;
        flex: none;
        order: 1;
        flex-grow: 0;
        outline: none;
        border: none;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #A1A1AA;
        background: #FFFFFF;
    }


    .frame8-button {
        margin-top: 80px;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;
        width: 416px;
        height: 47px;
        background: #4B3CE4;
        box-shadow: 0px 2px 4px rgba(10, 13, 18, 0.05);
        border-radius: 12px;
        flex: none;
        order: 5;
        align-self: stretch;
        flex-grow: 0;
        cursor: pointer;
    }

    .frame8-button .button_primary {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 172px;
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


</style>