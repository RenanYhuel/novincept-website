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
                <div class="calendar-month-arrow_left">
                    <img src="/img/icons/arrow-left.svg" alt="" class="calendar-month-arrow_left-icon" />
                </div>
                <div class="calendar-month">Mai 2022</div>
                <div class="calendar-month-arrow_right">
                    <img src="/img/icons/arrow-right.svg" alt="" class="calendar-month-arrow_right-icon" />
                </div>
            </div>
            <div class="contact-content-from-day">
                <div class="column">
                    <div class="date">Lun</div>
                    <div class="date">5</div>
                    <div class="date">12</div>
                    <div class="date">19</div>
                    <div class="date">26</div>
                </div>
                <div class="column">
                    <div class="date">Mar</div>
                    <div class="date">6</div>
                    <div class="date">13</div>
                    <div class="date">20</div>
                    <div class="date">27</div>
                </div>
                <div class="column">
                    <div class="date">Mer</div>
                    <div class="date">7</div>
                    <div class="date">14</div>
                    <div class="date">21</div>
                    <div class="date">28</div>
                </div>
                <div class="column">
                    <div class="date">Jeu</div>
                    <div class="date">1</div>
                    <div class="date">8</div>
                    <div class="date">15</div>
                    <div class="date">22</div>
                </div>
                <div class="column">
                    <div class="date">Ven</div>
                    <div class="date">2</div>
                    <div class="date">9</div>
                    <div class="date">16</div>
                    <div class="date">23</div>
                </div>
                <div class="column">
                    <div class="date">Sam</div>
                    <div class="date">3</div>
                    <div class="date">10</div>
                    <div class="date">17</div>
                    <div class="date">24</div>
                </div>
                <div class="column">
                    <div class="date">Dim</div>
                    <div class="date">4</div>
                    <div class="date">11</div>
                    <div class="date">18</div>
                    <div class="date">25</div>
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

<script setup lang="ts">
    import { ref } from 'vue';

    const selectedHour = ref<string | null>(null);
    const isNext = ref(false);

    const meetingDate = ref('');
    const meetingTime = ref('');
    const email = ref('');

    const selectHour = (hour: string) => {
        if (!email.value) {
            console.log('Please enter your email');
            return;
        }
        selectedHour.value = hour;
        isNext.value = true;
        meetingTime.value = hour;
    };

    const confirmRequest = () => {
        // Logic to handle the confirmation (submit form or something else)
        isRequestConfirmed.value = true; // Just an example
    };

    const isRequestConfirmed = ref<boolean | null>(null);
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