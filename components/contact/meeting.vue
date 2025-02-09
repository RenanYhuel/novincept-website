<template>
    <div class="contact-content-form-calendar-container">
        <div class="contact-content-form-calendar-label-container">
            <label for="message" class="contact-content-form-form-calendar-label">Choisisez une date</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star" />
            </div>
        </div>
        <div class="contact-content-form-calendar"></div>
    </div>

    <div class="contact-content-form-email-container">
        <div class="contact-content-form-email-label-container">
            <label for="email" class="contact-content-form-email-label">Adresse mail</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star" />
            </div>
        </div>
        <div class="contact-content-form-email-input-container">
            <img src="/img/icons/email.svg" alt="" class="contact-content-form-email-input-icon" />
            <input type="email" id="email" class="contact-content-form-email-input" placeholder="john.smith@example.com" />
        </div>
    </div>

    <div class="contact-content-form-hour">
        <div class="contact-content-form-hour-label-container">
            <label for="hour" class="contact-content-form-hour-label">Choisissez une heure</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star" />
            </div>
        </div>
        <div class="contact-content-form-hour-choices-container">
            <div class="contact-content-form-hour-choices-row">
                <div class="contact-content-form-hour-choice-container" @click="selectHour('10h')">
                    <div class="contact-content-form-hour-choice">10h</div>
                </div>
                <div class="contact-content-form-hour-choice-container" @click="selectHour('14h')">
                    <div class="contact-content-form-hour-choice">14h</div>
                </div>
            </div>
            <div class="contact-content-form-hour-choices-row">
                <div class="contact-content-form-hour-choice-container" @click="selectHour('11h')">
                    <div class="contact-content-form-hour-choice">11h</div>
                </div>
                <div class="contact-content-form-hour-choice-container" @click="selectHour('15h')">
                    <div class="contact-content-form-hour-choice">15h</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, defineEmits } from 'vue';

    const emit = defineEmits<{
        (event: 'updateMeeting', payload: { email: string, hour: string, date: string }): void;
    }>();

    const selectedHour = ref<string | null>(null);
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const meetingDateInput = document.getElementById('meetingDate') as HTMLInputElement;

    const isNext = ref(false);

    const selectHour = (hour: string) => {
        console.log(hour);
        selectedHour.value = hour;

        if (emailInput && emailInput.value && meetingDateInput && meetingDateInput.value && selectedHour.value) {
            isNext.value = true;
            emit('updateMeeting', {
                email: emailInput.value,
                hour: selectedHour.value,
                date: meetingDateInput.value
            });
        } else {
            isNext.value = false;
        }
    };
</script>

<style>
    .contact-content-form-calendar-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 328px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-calendar-label-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 151px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-form-calendar-label {
        width: 141px;
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

    .contact-content-form-calendar {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 24px;
        gap: 24px;
        width: 480px;
        height: 301px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-hour {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 133px;
        flex: none;
        order: 3;
        align-self: stretch;
        flex-grow: 0;
        cursor: pointer;
    }

    .contact-content-form-hour-label-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 165px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-hour-label {
        width: 157px;
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

    .contact-content-form-hour-choices-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 480px;
        height: 106px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-hour-choices-row {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 480px;
        height: 47px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-hour-choice-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;
        width: 234px;
        height: 47px;
        background: #4B3CE4;
        box-shadow: 0px 2px 4px rgba(10, 13, 18, 0.05);
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 1;
    }

    .contact-content-form-hour-choice {
        width: 45px;
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