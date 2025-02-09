<template>
    <CustomLayout :nav="true" :footer="false">
        <div class="contact-container">
            <div class="contact-infos-container">
                <div class="contact-infos">
                    <div class="contact-infos-header">
                        <div class="contact-infos-header-title">Des <span class="contact-infos-header-title-highlight">questions ?</span><br> Contactez nous !</div>
                        <div class="contact-infos-header-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.</div>
                    </div>
                    <div class="contact-infos-social">
                        <div class="contact-infos-social-row" >
                            <div class="contact-infos-social-card" >
                                <img src="/img/icons/linkedin_special.svg" alt="" class="contact-infos-social-card-icon" >
                                <div class="contact-infos-social-card-infos" >
                                    <div class="contact-infos-social-card-infos-title" >Connectons-nous sur Linkedin ! </div>
                                    <div class="contact-infos-social-card-infos-content" >linkedin.com/novincept</div>
                                </div>
                            </div>
                            <div class="contact-infos-social-card" >
                                <img src="/img/icons/x_special.svg" alt="" class="contact-infos-social-card-icon" >
                                <div class="contact-infos-social-card-infos" >
                                    <div class="contact-infos-social-card-infos-title" >Abonnez vous à notre compte X !</div>
                                    <div class="contact-infos-social-card-infos-content" >x.com/novincept</div>
                                </div>
                            </div>
                        </div>
                        <div class="contact-infos-social-row" >
                            <div class="contact-infos-social-card" >
                                <img src="/img/icons/insta_special.svg" alt="" class="contact-infos-social-card-icon" >
                                <div class="contact-infos-social-card-infos" >
                                    <div class="contact-infos-social-card-infos-title" >Abonnez vous à notre Instagram !</div>
                                    <div class="contact-infos-social-card-infos-content" >instagram.com/novincept</div>
                                </div>
                            </div>
                            <div class="contact-infos-social-card" >
                                <img src="/img/icons/insta_special.svg" alt="" class="contact-infos-social-card-icon" >
                                <div class="contact-infos-social-card-infos" >
                                    <div class="contact-infos-social-card-infos-title" >Abonnez vous à notre Instagram !</div>
                                    <div class="contact-infos-social-card-infos-content" >instagram.com/novincept</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contact-content-container" >
                <div class="contact-content" >
                    <div class="contact-content-form" >
                        <div class="contact-content-form-method" >
                            <div class="contact-content-form-method-header" >
                                Méthode de contact
                            </div>
                            <div class="contact-content-form-method-options" >
                                <div 
                                    class="contact-content-form-method-options-button" 
                                    :class="{ 'contact-content-form-method-options-button--active': selectedMethod === 'message' }"
                                    @click="toggleMethod('message')"
                                >
                                    <input 
                                        type="radio" 
                                        class="contact-content-form-method-options-button-radio" 
                                        :checked="selectedMethod === 'message'"
                                    >
                                    <div class="contact-content-form-method-options-button-text" >Envoyer un message</div>
                                </div>
                                <div 
                                    class="contact-content-form-method-options-button" 
                                    :class="{ 'contact-content-form-method-options-button--active': selectedMethod === 'meeting' }"
                                    @click="toggleMethod('meeting')"
                                >
                                    <input 
                                        type="radio" 
                                        class="contact-content-form-method-options-button-radio" 
                                        :checked="selectedMethod === 'meeting'"
                                    >
                                    <div class="contact-content-form-method-options-button-text" >Organiser une réunion</div>
                                </div>
                            </div>
                        </div>
                        <Message v-if="selectedMethod === 'message'" />
                        <Meeting v-else-if="selectedMethod === 'meeting' && !isNext" @updateMeeting="handleMeetingUpdate" />
                        <Meeting_next v-else-if="selectedMethod === 'meeting' && isNext" :email="meetingData.email" :hour="meetingData.hour" :date="meetingData.date" />
                    </div>
                </div>
            </div>
        </div>
    </CustomLayout>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Meeting from '~/components/contact/meeting.vue';
    import Meeting_next from '~/components/contact/meeting_next.vue';
    import Message from '~/components/contact/message.vue';
    import CustomLayout from '~/layouts/custom.vue';

    const selectedMethod = ref<string>('message');
    const isNext = ref(false);
    const meetingData = ref({ email: '', hour: '', date: '' });

    const toggleMethod = (method: string) => {
        selectedMethod.value = method;
    };

    const handleMeetingUpdate = (data: { email: string, hour: string, date: string }) => {
        console.log('Meeting updated with:', data); // Vérifiez les données reçues
        meetingData.value = data;
        isNext.value = true; // Assurez-vous que cela est correct
    };

</script>

<style>
    .contact-container {
        padding-top: 95px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        overflow-y: auto;
    }

    .contact-infos-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    .contact-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 48px;
        width: 603px;
        height: 619px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-infos-header {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        width: 603px;
        height: 255px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-infos-header-title {
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

    .contact-infos-header-title-highlight {
        width: 619px;
        height: 150px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 125%;
        letter-spacing: -0.05em;
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

    .contact-infos-header-subtitle {
        width: 603px;
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

    .contact-infos-social {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 603px;
        height: 316px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-infos-social-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 603px;
        height: 152px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-infos-social-card {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 24px;
        gap: 12px;
        width: 300px;
        height: 152px;
        background: #F6F6F6;
        border: 1px solid #E4E4E7;
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .contact-infos-social-card-icon {
        width: 39px;
        height: 39px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-infos-social-card-infos {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        height: 53px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-infos-social-card-infos-title {
        height: 23px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 125%;
        letter-spacing: -0.06rem;
        color: #05070B;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-infos-social-card-infos-content {
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

    .contact-content-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 23px;
        gap: 10px;
        min-width: 50%;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .contact-content {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 40px 273px;
        gap: 10px;
        background: #F6F6F6;
        border-radius: 24px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 1;
    }

    .contact-content-form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-method {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 68px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-method-header {
        width: 153px;
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

    .contact-content-form-method-options {
        display: flex;
        align-items: center;
        padding: 0px;
        gap: 12px;
        height: 41px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-method-options-button {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 234px;
        height: 41px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        flex-grow: 1;
        cursor: pointer;
    }

    .contact-content-form-method-options-button--active {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 234px;
        height: 41px;
        background: linear-gradient(0deg, rgba(75, 60, 228, 0.1), rgba(75, 60, 228, 0.1)), #FFFFFF;
        border: 1px solid #4B3CE4;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        flex-grow: 1;
    }

    .contact-content-form-method-options-button-radio {
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-appearance: none;
        width: 16px;
        height: 16px;
        border: 1px solid #3F3F46;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
    }

    .contact-content-form-method-options-button-radio:checked {
        background-color: #4B3CE4;
        border: 1px solid #4B3CE4;
    }

    .contact-content-form-method-options-button-radio:checked::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    .contact-content-form-method-options-button--active .contact-content-form-method-options-button-radio {
        border: 1px solid #4B3CE4;
    }

    .contact-content-form-method-options-button-text {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding-top: 2.5px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 41px;
        color: #3F3F46;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .hidden {
        display: none;
    }
</style>

