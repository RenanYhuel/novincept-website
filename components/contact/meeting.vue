<template>
    <div class="contact-content-form-calendar-container" v-if="!isNext">
        <div class="contact-content-form-calendar-label-container">
            <label for="message" class="contact-content-form-form-calendar-label">Choisisez une date</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star" />
            </div>
        </div>
        <div class="contact-content-form-calendar">
            <div class="contact-content-form-calendar-month-container">
                <div class="calendar-month-arrow_left" @click="previousMonth">
                    <img src="/img/icons/arrow-left-grey.svg" alt="" class="calendar-month-arrow_left-icon" />
                </div>
                <div class="calendar-month">{{ currentMonth }} {{ currentYear }}</div>
                <div class="calendar-month-arrow_right" @click="nextMonth">
                    <img src="/img/icons/arrow-right-grey.svg" alt="" class="calendar-month-arrow_right-icon" />
                </div>
            </div>
            <div class="contact-content-form-day">
                <div class="contact-column" v-for="(day, index) in days" :key="index">
                    <div class="contact-day">{{ day.name }}</div>
                    <div class="contact-date" v-for="date in day.dates" :key="date">
                        <div class="contact-date-content">{{ date }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-content-form-email-container" v-if="!isNext">
        <div class="contact-content-form-email-label-container">
            <label for="email" class="contact-content-form-email-label">Adresse mail</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star" />
            </div>
        </div>
        <div class="contact-content-form-email-input-container">
            <img src="/img/icons/email.svg" alt="" class="contact-content-form-email-input-icon" />
            <input type="email" id="email" class="contact-content-form-email-input" placeholder="john.smith@example.com" v-model="email" />
        </div>
    </div>

    <div class="contact-content-form-hour" v-if="!isNext">
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
    <div v-if="isNext" class="meeting-request-input-container">
        <div class="meeting-request-name-container">
        <label for="lastname" class="meeting-request-label">Nom</label>
        <div class="meeting-request-input-container">
            <input type="text" id="lastname" class="meeting-request-input" placeholder="Smith">
        </div>
        </div>

        <div class="meeting-request-firstname-container">
        <label for="firstname" class="meeting-request-label">Prénom</label>
        <div class="meeting-request-input-container">
            <input type="text" id="firstname" class="meeting-request-input" placeholder="John">
        </div>
        </div>
    </div>

    <div class="meeting-summary-container" v-if="isNext">
        <div class="meeting-summary-item">
        <label class="meeting-summary-label">Date de la réunion</label>
        <p>{{ meetingDate }}</p>
        </div>
        <div class="meeting-summary-item">
        <label class="meeting-summary-label">Heure de la réunion</label>
        <p>{{ meetingTime }}</p>
        </div>
        <div class="meeting-summary-item">
        <label class="meeting-summary-label">Adresse mail</label>
        <p>{{ email }}</p>
        </div>
    </div>

    <div class="meeting-request-buttons" v-if="isNext">
        <button type="button" class="meeting-request-btn-back" @click="isNext = false">Retour</button>
        <button type="button" class="meeting-request-btn-confirm" @click="confirmRequest">Confirmer</button>
    </div>

    <div v-if="isRequestConfirmed !== null" class="request-status-container">
        <img v-if="isRequestConfirmed" src="/img/icons/check.svg" alt="Succès" class="request-status-icon">
        <img v-if="isRequestConfirmed === false" src="/img/icons/cross.svg" alt="Échec" class="request-status-icon">
        <p v-if="isRequestConfirmed" class="request-status-text">La demande de réunion a été demandée, vous recevrez un email pour savoir si votre demande a été acceptée ou refusée.</p>
        <p v-if="isRequestConfirmed === false" class="request-status-text">Il y a eu une erreur dans la demande de réunion. Veuillez réessayer.</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const selectedHour = ref(null);
const isNext = ref(false);

const meetingDate = ref('');
const meetingTime = ref('');
const email = ref('');

const currentDate = new Date();
const currentMonthIndex = ref(currentDate.getMonth());
const currentYear = ref(currentDate.getFullYear());
const minMonthIndex = currentDate.getMonth(); // Mois actuel pour empêcher de revenir en arrière

const months = [
    'JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUI', 'JUIL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'
];

const currentMonth = computed(() => months[currentMonthIndex.value]);

const days = computed(() => {
    const month = currentMonthIndex.value;
    const year = currentYear.value;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, daysInMonth).getDay();

    const weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const result = weekDays.map(name => ({ name, dates: [] }));

    let dayCounter = 1;
    let isFilling = false;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j === (firstDay === 0 ? 6 : firstDay - 1)) {
                isFilling = true;
            }
            if (isFilling && dayCounter <= daysInMonth) {
                result[j].dates.push(dayCounter);
                dayCounter++;
            } else {
                result[j].dates.push(null);
            }
        }
    }

    return result;
});

const nextMonth = () => {
    if (currentMonthIndex.value === 11) {
        currentMonthIndex.value = 0;
        currentYear.value++;
    } else {
        currentMonthIndex.value++;
    }
};

const previousMonth = () => {
    if (currentMonthIndex.value === minMonthIndex && currentYear.value === currentDate.getFullYear()) {
        return;
    }
    if (currentMonthIndex.value === 0) {
        currentMonthIndex.value = 11;
        currentYear.value--;
    } else {
        currentMonthIndex.value--;
    }
};

const selectHour = (hour) => {
    if (!email.value) {
        console.log('Please enter your email');
        return;
    }
    selectedHour.value = hour;
    isNext.value = true;
    meetingTime.value = hour;
};

const confirmRequest = () => {
    isRequestConfirmed.value = true;
};

const isRequestConfirmed = ref(null);
</script>



<style>
    .contact-content-form-calendar-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
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
        padding: 18px;
        gap: 18px;
        width: 480px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-calendar-month-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        width: 134px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .calendar-month-arrow_left {
        width: 20px;
        height: 20px;
        flex: none;
        order: 0;
        flex-grow: 0;
        color: #A1A1AA;
        cursor: pointer;
    }

    .calendar-month-arrow_right {
        width: 20px;
        height: 20px;
        flex: none;
        order: 2;
        flex-grow: 0;
        color: #A1A1AA;
        cursor: pointer;
    }

    .calendar-month {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 78px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #05070B;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .contact-content-form-day {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 282px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .contact-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 8px;
        width: 30px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-day {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 18px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        text-transform: uppercase;
        line-height: 18px;
        color: #3F3F46;
        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;
    }

    .contact-date {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6px;
        gap: 10px;
        width: 18px;
        height: 18px;
        border-radius: 6px;
        flex: none;
        flex-grow: 0;
        cursor: pointer;
    }

    .contact-date-content {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 18px;
        height: 18px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #71717A;
        flex: none;
        order: 0;
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
        padding: 12px 18px;
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