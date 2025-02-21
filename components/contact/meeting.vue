<template>
    <div class="contact-content-form-calendar-container" v-if="!isNext">
        <div class="contact-content-form-calendar-label-container">
            <label for="message" class="contact-content-form-form-calendar-label">Choisissez une date</label>
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
                    <div 
                        class="contact-date" 
                        v-for="date in day.dates" 
                        :key="date" 
                        @click="selectDate(date)" 
                        :class="getDateClassAndStatus(date)"
                    >
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
        <div class="contact-content-form-email-input-container" :class="{ 'error': email === '' }">
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
            <div class="contact-content-form-hour-choices-row" v-for="(row, rowIndex) in chunkedHours" :key="rowIndex">
                <div v-for="hour in row" :key="hour" class="contact-content-form-hour-choice-container" :class="{ 'disabled': isHourDisabled(hour) }" @click="selectHour(hour)">
                    <div class="contact-content-form-hour-choice">{{ hour }}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="meeting-summary-container" v-if="isNext && !isRequestConfirmed && !isError">
        <div class="meeting-summary-column">
            <div class="meeting-summary-item">
                <label class="meeting-summary-label">Date et heure de la réunion</label>
                <p>{{ formattedMeetingDate }} à {{ meetingTime }}</p>
            </div>
            <div class="meeting-summary-item">
                <label class="meeting-summary-label">Adresse mail</label>
                <p>{{ email }}</p>
            </div>
        </div>
        <div class="meeting-summary-column">
            <div class="meeting-summary-item">
                <label class="meeting-summary-label">Nom</label>
                <p>{{ lastName }}</p>
            </div>
            <div class="meeting-summary-item">
                <label class="meeting-summary-label">Prénom</label>
                <p>{{ firstName }}</p>
            </div>
        </div>
    </div>

    <div v-if="isNext && !isRequestConfirmed && !isError" class="meeting-request-input-container">
        <div class="contact-content-form-lastname-container">
            <div class="contact-content-form-lastname-label-container">
                <label for="lastname" class="contact-content-form-lastname-label">Nom</label>
                <div class="contact-content-form-label-star-container">
                    <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star">
                </div>
            </div>
            <div class="contact-content-form-lastname-input-container"  :class="{ 'error': lastName === '' }">
                <input type="text" id="lastname" class="contact-content-form-lastname-input" placeholder="Smith" v-model="lastName">
            </div>
        </div>
        <div class="contact-content-form-firstname-container">
            <div class="contact-content-form-firstname-label-container">
                <label for="firstname" class="contact-content-form-firstname-label">Prénom</label>
                <div class="contact-content-form-label-star-container">
                    <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star">
                </div>
            </div>
            <div class="contact-content-form-firstname-input-container" :class="{ 'error': firstName === '' }">
                <input type="text" id="firstname" class="contact-content-form-firstname-input" placeholder="John" v-model="firstName">
            </div>
        </div>
        <div class="contact-content-form-message">
            <div class="contact-content-form-message-label-container">
                <label for="message" class="contact-content-form-message-label">Message</label>
            </div>
            <div class="contact-content-form-message-input-container">
                <textarea id="message" class="contact-content-form-message-input" placeholder="Nous voulons un site internet..."></textarea>
            </div>
        </div>
    </div>


    <div v-if="isNext && !isRequestConfirmed && !isError" class="meeting-request-buttons">
        <button type="button" class="meeting-request-btn-back" @click="isNext = false">Retour</button>
        <button type="button" class="meeting-request-btn-confirm" @click="confirmRequest">
            Confirmer
            <span v-if="isLoading"><i class="fa fa-circle-o-notch fa-spin"></i></span>
        </button>
    </div>

    <div v-if="isRequestConfirmed && !isError" class="request-confirmation">
        <svg width="115" height="115" viewBox="0 0 133 133" xmlns="http://www.w3.org/2000/svg">
            <g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="filled-circle" fill="#4B3CE4" cx="66.5" cy="66.5" r="54.5"/>
                <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"/>
                <circle id="outline" stroke="#4B3CE4" stroke-width="4" cx="66.5" cy="66.5" r="54.5"/>
                <polyline id="check" stroke="#FFFFFF" stroke-width="5.5" points="41 70 56 85 92 49"/>
            </g>
        </svg>
        <p>Votre demande de réunion a été faite. Si elle est acceptée, vous recevrez un email de confirmation. Si elle est refusée, vous en serez également informé par email.</p>
    </div>

    <div v-if="isError" class="request-error">
        <svg width="115" height="115" viewBox="0 0 133 133" xmlns="http://www.w3.org/2000/svg">
            <g id="cross-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <circle id="filled-circle" fill="#4B3CE4" cx="66.5" cy="66.5" r="54.5"/>
                <circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"/>
                <circle id="outline" stroke="#4B3CE4" stroke-width="4" cx="66.5" cy="66.5" r="54.5"/>
                <line id="cross-line-1" stroke="#FFFFFF" stroke-width="5.5" x1="41" y1="41" x2="92" y2="92"/>
                <line id="cross-line-2" stroke="#FFFFFF" stroke-width="5.5" x1="92" y1="41" x2="41" y2="92"/>
            </g>
        </svg>
        <p>Une erreur s'est produite. Veuillez réessayer plus tard. Si le problème persiste merci de nous contacter par mail : hello@novincept.com</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const isNext = ref(false);
const meetingDate = ref('');
const meetingTime = ref('');
const email = ref('');
const selectedDate = ref(null);

const firstName = ref('');
const lastName = ref('');

const reservedSlots = ref([
    ['2025-10-10', '10h'],
    ['2025-10-10', '14h'],
    ['2025-10-11', '11h'],
    ['2025-10-11', '15h']
]);
const availableHours = ['10h', '11h', '14h', '15h'];

const currentDate = new Date();
const currentMonthIndex = ref(currentDate.getMonth());
const currentYear = ref(currentDate.getFullYear());
const minMonthIndex = currentDate.getMonth();

const months = [
    'JAN', 'FÉV', 'MAR', 'AVR', 'MAI', 'JUI', 'JUIL', 'AOÛ', 'SEP', 'OCT', 'NOV', 'DÉC'
];
const currentMonth = computed(() => months[currentMonthIndex.value]);

const days = computed(() => {
    const month = currentMonthIndex.value;
    const year = currentYear.value;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    const result = Array.from({ length: 7 }, (_, i) => ({
        name: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'][i],
        dates: []
    }));
    let dayCounter = 1;
    let isFilling = false;

    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j === (firstDay === 0 ? 6 : firstDay - 1)) isFilling = true;
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

const formattedMeetingDate = computed(() => {
    if (!meetingDate.value || typeof meetingDate.value !== 'string') return '';

    const date = new Date(meetingDate.value.replace(/-/g, '/'));

    if (isNaN(date.getTime())) return 'Date invalide';

    let formattedDate = date.toLocaleDateString('fr-FR', { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    });

    formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

    return formattedDate;
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
    if (currentMonthIndex.value === minMonthIndex && currentYear.value === currentDate.getFullYear()) return;
    if (currentMonthIndex.value === 0) {
        currentMonthIndex.value = 11;
        currentYear.value--;
    } else {
        currentMonthIndex.value--;
    }
};

const getDateClassAndStatus = (date) => {
    if (!date) return '';

    const formattedDate = `${currentYear.value}-${String(currentMonthIndex.value + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const today = new Date();
    const inputDate = new Date(formattedDate);
    const timeDifference = today - inputDate;
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    return {
        'contact-day-selected': selectedDate.value === formattedDate,
        'contact-day-already': reservedSlots.value.some(slot => slot[0] === formattedDate),
        'day-disabled': Math.abs(dayDifference) < 3 || inputDate < today,
    };
};


const selectDate = (date) => {
    if (!date) return;

    const formattedDate = `${currentYear.value}-${String(currentMonthIndex.value + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    const today = new Date();
    const inputDate = new Date(formattedDate);
    const timeDifference = today - inputDate;
    const dayDifference = timeDifference / (1000 * 60 * 60 * 24);

    if (Math.abs(dayDifference) < 3 || inputDate < today) {
        return;
    }

    selectedDate.value = formattedDate;
};



const isHourDisabled = (hour) => {
    if (!selectedDate.value) return true;

    return reservedSlots.value.some(slot => slot[0] === selectedDate.value && slot[1] === hour);
};


const selectHour = (hour) => {
    if (!email.value) {
        console.log('Veuillez entrer votre email');
        return;
    }
    if (isHourDisabled(hour)) return;
    meetingDate.value = selectedDate.value;
    meetingTime.value = hour;
    isNext.value = true;
};

const chunkedHours = computed(() => {
    const chunkSize = 2;
    const result = [];
    for (let i = 0; i < availableHours.length; i += chunkSize) {
        result.push(availableHours.slice(i, i + chunkSize));
    }
    return result;
});

const isRequestConfirmed = ref(false);
const isError = ref(false);
const isLoading = ref(false);

const confirmRequest = async () => {
    isLoading.value = true;
    if (!email.value) {
        console.log('Veuillez entrer votre email');
        isNext.value = false;
        return;
    }

    if (!selectedDate.value) {
        console.log('Veuillez sélectionner une date');
        isNext.value = false;
        return;
    }

    if (!meetingTime.value) {
        console.log('Veuillez sélectionner une heure');
        isNext.value = false;
        return;
    }

    if (!firstName.value) {
        console.log('Veuillez entrer votre prénom');
        return;
    }

    if (!lastName.value) {
        console.log('Veuillez entrer votre nom');
        return;
    }

    // Ajout de la requête à l'API
    console.log(meetingDate.value, meetingTime.value);
    const timestamp = Math.floor(new Date(`${meetingDate.value} ${meetingTime.value.replace('h', ':00')}`).getTime() / 1000); // Convertir en timestamp UNIX
    const response = await fetch('/api/new_meeting', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            lastName: lastName.value,
            firstName: firstName.value,
            email: email.value,
            message: document.getElementById('message').value, // Récupération du message
            timestamp: timestamp,
        }),
    });

    const data = await response.json();


    if (data.body.error === false) {
        isRequestConfirmed.value = true; // Affiche la page de confirmation
    } else {
        isError.value = true; // Affiche la page d'erreur
    }
    isLoading.value = false;
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

    .contact-date.contact-day-already {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6px;
        gap: 10px;
        width: 18px;
        height: 18px;
        background: rgba(75, 60, 228, 0.15);
        border-radius: 6px;
        flex: none;
        flex-grow: 0;
    }

    .contact-date.contact-day-already .contact-date-content {
        height: 18px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #4B3CE4;
        flex: none;
        order: 0;
        flex-grow: 0;
    }


    .contact-date.contact-day-selected {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 6px;
        gap: 10px;
        width: 18px;
        height: 18px;
        background: #4B3CE4;
        border-radius: 6px;
        flex: none;
        flex-grow: 0;
    }

    .contact-date.contact-day-selected .contact-date-content {
        height: 18px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #FFFFFF;
        flex: none;
        order: 0;
        flex-grow: 0;
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
        color: #3F3F46;
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

    .contact-content-form-hour-choice-container.disabled {
        background: rgba(0, 0, 0, 0.5); /* Rideau foncé */
        cursor: not-allowed; /* Curseur non autorisé */
    }

    .meeting-request-input-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .meeting-summary-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
    }

    .meeting-summary-column {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        flex: none;
        order: 0;
        flex-grow: 0;
        gap: 20px;
    }

    .meeting-summary-item {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 7px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .meeting-summary-label {
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

    .meeting-summary-item p {
        width: 240px;
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

    .meeting-request-buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0px;
        gap: 12px;
        flex: none;
        order: 2;
        align-self: stretch;
        flex-grow: 0;
        width: 480px;
    }

    .meeting-request-btn-back {
        width: 50%;
        height: 47px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #4B3CE4;
        background: #FFFFFF;
        border: 1px solid #4B3CE4;
        box-shadow: 0px 2px 4px rgba(10, 13, 18, 0.05);
        border-radius: 12px;
        flex: none;
        order: 0;
        flex-grow: 0;
        cursor: pointer;
    }

    .meeting-request-btn-confirm {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 50%;
        height: 47px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #FFFFFF;
        background: #4B3CE4;
        border: 1px solid #4B3CE4;
        box-shadow: 0px 2px 4px rgba(10, 13, 18, 0.05);
        border-radius: 12px;
        flex: none;
        order: 1;
        flex-grow: 0;
        cursor: pointer;
    }

    .request-confirmation {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 20px;
        gap: 20px;
        width: 440px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 3;
        align-self: stretch;
        flex-grow: 0;
    }

    .request-confirmation svg {
        width: 115px;
        height: 115px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .request-confirmation p {
        width: 360px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #05070B;
        flex: none;
        order: 1;
        flex-grow: 0;
        text-align: center;
    }

    #check-group {
        animation: 0.32s ease-in-out 1.03s check-group;
        transform-origin: center;
    }

    #check-group #check {
        animation: 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards check;
        stroke-dasharray: 0, 75px;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    #check-group #outline {
        animation: 0.38s ease-in outline;
        transform: rotate(0deg);
        transform-origin: center;
    }

    #check-group #white-circle {
        animation: 0.35s ease-in 0.35s forwards circle;
        transform: none;
        transform-origin: center;
    }

    @keyframes outline {
        from {
            stroke-dasharray: 0, 345.576px;
        }
        to {
            stroke-dasharray: 345.576px, 345.576px;
        }
    }
    @keyframes circle {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(0);
        }
    }
    @keyframes check {
        from {
            stroke-dasharray: 0, 75px;
        }
        to {
            stroke-dasharray: 75px, 75px;
        }
    }
    @keyframes check-group {
        from {
            transform: scale(1);
        }
        50% {
            transform: scale(1.09);
        }
        to {
            transform: scale(1);
        }
    }

    .contact-date.day-disabled {
        cursor: not-allowed;
    }

    .contact-date.day-disabled .contact-date-content {
        color: #A1A1AA;
    }

    #cross-group {
        animation: 0.32s ease-in-out 1.03s check-group;
        transform-origin: center;
    }

    #cross-group #check {
        animation: 0.34s cubic-bezier(0.65, 0, 1, 1) 0.8s forwards check;
        stroke-dasharray: 0, 75px;
        stroke-linecap: round;
        stroke-linejoin: round;
    }

    #cross-group #outline {
        animation: 0.38s ease-in outline;
        transform: rotate(0deg);
        transform-origin: center;
    }

    #cross-group #white-circle {
        animation: 0.35s ease-in 0.35s forwards circle;
        transform: none;
        transform-origin: center;
    }


    .request-error {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 50px 20px;
        gap: 20px;
        width: 440px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 3;
        align-self: stretch;
        flex-grow: 0;
    }

    .request-error svg {
        width: 115px;
        height: 115px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .request-error p {
        width: 360px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #05070B;
        flex: none;
        order: 1;
        flex-grow: 0;
        text-align: center;
    }

</style>