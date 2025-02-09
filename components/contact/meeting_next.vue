<template>
    <div class="meeting-request-container">
        <div class="meeting-request-input-container">
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

        <div class="meeting-summary-container">
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

        <div class="meeting-request-buttons">
            <button type="button" class="meeting-request-btn-back">Retour</button>
            <button type="button" class="meeting-request-btn-confirm" @click="confirmRequest">Confirmer</button>
        </div>

        <div v-if="isRequestConfirmed !== null" class="request-status-container">
            <img v-if="isRequestConfirmed" src="/img/icons/check.svg" alt="Succès" class="request-status-icon">
            <img v-if="isRequestConfirmed === false" src="/img/icons/cross.svg" alt="Échec" class="request-status-icon">
            <p v-if="isRequestConfirmed" class="request-status-text">La demande de réunion a été demandée, vous recevrez un email pour savoir si votre demande a été acceptée ou refusée.</p>
            <p v-if="isRequestConfirmed === false" class="request-status-text">Il y a eu une erreur dans la demande de réunion. Veuillez réessayer.</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        meetingDate: String,
        meetingTime: String,
        email: String
    },
    data() {
        return {
            isRequestConfirmed: null
        };
    },
    methods: {
        confirmRequest() {
            this.isRequestConfirmed = true;
        }
    }
};
</script>
