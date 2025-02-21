<template>
<div class="meeting-container" v-if="!errorMessage">
    <div class="meeting-details">
        <h1 class="meeting-title">Détails de la Réunion</h1>
        <p class="meeting-date"><span class="strong">Date:</span> {{ getFormattedDateAndTime(meeting.scheduledAt).formattedDate }}</p>
        <p class="meeting-time"><span class="strong">Heure:</span> {{ getFormattedDateAndTime(meeting.scheduledAt).formattedTime }}</p>
        <p class="client-name"><span class="strong">Nom:</span> {{ meeting.firstname }} {{ meeting.lastname }}</p>
        <p class="client-email"><span class="strong">Email:</span> {{ meeting.email }}</p>
        <p class="meeting-message"><span class="strong">Message:</span> {{ meeting.message ? meeting.message : 'Aucun message' }}</p>
        <p class="meeting-status" :class="{'red': meeting.status == 'declined', 'green': meeting.status == 'accepted'}"><span class="strong">Statut:</span> {{ meeting.status == "pending" ? "En attente" : meeting.status == "declined" ? "Réunion refusée" : "Réunion acceptée" }}</p>

        <div class="meeting-buttons">
            <button class="accept-button" @click="acceptMeeting" v-if="meeting.status == 'pending'">Accepter</button>
            <button class="decline-button" @click="declineMeeting" v-if="meeting.status == 'pending' || meeting.status == 'accepted'">Refuser</button>    
        </div>
    </div>
</div>
<div v-else class="error-message">
    <p>{{ errorMessage }}</p>
</div>
</template>

<script>
export default {
data() {
    return {
    meeting: {},
    client: {},
    presence: {
        raphael: true,
        zoltan: true
    },
    newGuestEmail: '',
    showInviteInput: false,
    errorMessage: ''
    };
},
created() {
    this.fetchMeetingData();
},
methods: {
    fetchMeetingData() {
        const meetingId = encodeURIComponent(this.$route.params.id);
        fetch(`/api/get_meeting?id=${meetingId}`)
        .then(response => response.json())
        .then(data => {
            if (data.body.meeting && data.body) {
                this.meeting = data.body.meeting;
                console.log(this.meeting);
                this.errorMessage = '';
            } else {
                this.errorMessage = 'Réunion introuvable';
            }
        })
        .catch(error => {
            console.error("Erreur lors de la récupération des données de la réunion:", error);
            this.errorMessage = 'Erreur lors de la récupération des données';
        });
    },
    getFormattedDateAndTime(timestamp) {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' });
        const formattedTime = date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
        return { formattedDate, formattedTime };
    },
    acceptMeeting() {
        const meetingId = this.$route.params.id;
        fetch(`/api/accept_meeting?id=${meetingId}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (!data.body.error) {
                    console.log('Réunion acceptée');
                    this.fetchMeetingData();
                } else {
                    this.errorMessage = 'Erreur lors de l\'acceptation de la réunion';
                }
            })
            .catch(error => {
                console.error("Erreur lors de l'acceptation de la réunion:", error);
                this.errorMessage = 'Erreur lors de l\'acceptation de la réunion : ' + error;
            });
        
    },
    declineMeeting() {
        const meetingId = this.$route.params.id;
        fetch(`/api/decline_meeting?id=${meetingId}`, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (!data.body.error) {
                    console.log('Réunion refusée');
                    this.fetchMeetingData();
                } else {
                    this.errorMessage = 'Erreur lors du refus de la réunion';
                }
            })
            .catch(error => {
                console.error("Erreur lors du refus de la réunion:", error);
                this.errorMessage = 'Erreur lors du refus de la réunion';
            });
    },
}
};
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap');

    .meeting-container {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        gap: 20px;
        max-width: calc(100% - 60px);
    }

    .meeting-details {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        border-radius: 8px;
        padding: 20px;
        max-width: calc(100% - 40px);
    }

    .meeting-title {
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
        font-size: 24px;
        color: #4B3CE4;
    }

    .meeting-date, .meeting-time, .client-name, .client-email, .meeting-message, .meeting-status {
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
        color: #05070B;
    }

    .meeting-status .strong {
        color: #4B3CE4 !important;
    }

    .meeting-buttons {
        display: flex;
        gap: 10px;
    }

    .accept-button, .decline-button, .invite-button {
        padding: 10px 20px;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }

    .accept-button {
        background: #4B3CE4;
        color: #FFFFFF;
    }

    .decline-button {
        background: #E4E4E7;
        color: #3F3F46;
    }

    .error-message {
        background-color: #f8d7da;
        color: #721c24;
        border: 1px solid #f5c6cb;
        border-radius: 5px;
        padding: 15px;
        margin-top: 20px;
        text-align: center;
        font-family: 'DM Sans', sans-serif;
    }

    .strong {
        font-weight: 700;
    }

    .red {
        color: #FF0000;
    }

    .green {
        color: #00FF00;
    }
</style>
