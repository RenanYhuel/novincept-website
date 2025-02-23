<template>
    <div class="contact-content-form-lastname-container" v-if="!isRequestConfirmed">
        <div class="contact-content-form-lastname-label-container">
            <label for="lastname" class="contact-content-form-lastname-label">Nom</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star">
            </div>
        </div>
        <div class="contact-content-form-lastname-input-container">
            <input type="text" id="lastname" class="contact-content-form-lastname-input" placeholder="Smith" v-model="lastname">
        </div>
    </div>
    <div class="contact-content-form-firstname-container" v-if="!isRequestConfirmed">
        <div class="contact-content-form-firstname-label-container">
            <label for="firstname" class="contact-content-form-firstname-label">Prénom</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star">
            </div>
        </div>
        <div class="contact-content-form-firstname-input-container">
            <input type="text" id="firstname" class="contact-content-form-firstname-input" placeholder="John" v-model="firstname">
        </div>
    </div>
    <div class="contact-content-form-email-container" v-if="!isRequestConfirmed">
        <div class="contact-content-form-email-label-container">
            <label for="email" class="contact-content-form-email-label">Adresse mail</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star">
            </div>
        </div>
        <div class="contact-content-form-email-input-container">
            <img src="/img/icons/email.svg" alt="" class="contact-content-form-email-input-icon">
            <input type="email" id="email" class="contact-content-form-email-input" placeholder="john.smith@example.com" v-model="email">
        </div>
    </div>
    <div class="contact-content-form-company" v-if="!isRequestConfirmed">
        <div class="contact-content-form-company-label-container">
            <label for="company" class="contact-content-form-company-label">Nom de l'entreprise</label>
        </div>
        <div class="contact-content-form-company-input-container">
            <input type="text" id="company" class="contact-content-form-company-input" placeholder="Novincept" v-model="company">
        </div>
    </div>
    <div class="contact-content-form-message" v-if="!isRequestConfirmed">
        <div class="contact-content-form-message-label-container">
            <label for="message" class="contact-content-form-message-label">Quelle est votre besoin ?</label>
            <div class="contact-content-form-label-star-container">
                <img src="/img/icons/star_required.svg" alt="" class="contact-content-form-label-star">
            </div>
        </div>
        <div class="contact-content-form-message-input-container">
            <textarea id="message" class="contact-content-form-message-input" placeholder="Nous voulons un site internet..." v-model="message"></textarea>
        </div>
    </div>
    <div class="contact-content-form-submit" @click="envoyer" v-if="!isRequestConfirmed">
        <div type="submit" class="contact-content-form-submit-text">Envoyer ma demande</div>
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
        <p>Votre demande a été envoyée avec succès. Vous recevrez un mail de confirmation et un de nos agents vous répondra sous peu.</p>
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
        <p>Une erreur est survenue. Veuillez réessayer plus tard. Si le problème persiste, contactez-nous directement par email à hello@novincept.com.</p>
    </div>
</template>

<script>
export default {
  data() {
    return {
        lastname: '',
        firstname: '',
        email: '',
        company: '',
        message: '',
        isRequestConfirmed: false,
        isError: false,
    };
  },
  methods: {
    async envoyer() {
      const formData = {
        lastname: this.lastname,
        firstname: this.firstname,
        email: this.email,
        company: this.company,
        message: this.message
      };

      try {
        const response = await fetch('/api/new_contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          this.isRequestConfirmed = true;
          this.isError = false;
          this.resetForm();
        } else {
            this.isError = true;
            this.isRequestConfirmed = true;
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
      }
    },
    resetForm() {
      this.lastname = '';
      this.firstname = '';
      this.email = '';
      this.company = '';
      this.message = '';
    }
  }
};
</script>



<style>
    .contact-content-form-lastname-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 70px;
        flex: none;
        align-self: stretch;
        order: 1;
        flex-grow: 0;
    }

    .contact-content-form-lastname-label-container {
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

    .contact-content-form-lastname-label {
        width: 35px;
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

    .contact-content-form-label-star-container {
        width: 6px;
        height: 18px;
        padding-top: 4px;
        flex: none;
        flex-grow: 0;
        display: flex;
        align-items: start;
    }


    .contact-content-form-lastname-input-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 480px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-lastname-input {
        width: 450px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #3F3F46;
        flex: none;
        order: 1;
        flex-grow: 0;
        border: none;
        outline: none;
    }

    .contact-content-form-firstname-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 70px;
        flex: none;
        order: 2;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-firstname-label-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 68px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-firstname-label {
        width: 58px;
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

    .contact-content-form-firstname-input-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 480px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-firstname-input {
        width: 450px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #3F3F46;
        flex: none;
        order: 1;
        flex-grow: 0;
        border: none;
        outline: none;
    }

    .contact-content-form-email-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 70px;
        flex: none;
        order: 3;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-email-label-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 106px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-email-label {
        width: 96px;
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

    .error {
        border: 1px solid red !important;
    }

    .contact-content-form-email-input-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 480px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-email-input-icon {
        width: 20px;
        height: 20px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-email-input {
        width: 430px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #3F3F46;
        flex: none;
        order: 1;
        flex-grow: 0;
        border: none;
        outline: none;
    }

    .contact-content-form-company {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 70px;
        flex: none;
        order: 4;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-company-label-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 147px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-company-label {
        width: 147px;
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

    .contact-content-form-company-input-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 10px 14px;
        gap: 8px;
        width: 480px;
        height: 43px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-company-input {
        width: 450px;
        height: 21px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #3F3F46;
        flex: none;
        order: 1;
        flex-grow: 0;
        border: none;
        outline: none;
    }

    .contact-content-form-message {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 6px;
        width: 480px;
        height: 150px;
        flex: none;
        order: 5;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-message-label-container {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 0px;
        gap: 4px;
        width: 195px;
        height: 21px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .contact-content-form-message-label {
        width: 185px;
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

    .contact-content-form-message-input-container {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px 14px;
        gap: 8px;
        width: 480px;
        height: 123px;
        background: #FFFFFF;
        border: 1px solid #E4E4E7;
        box-shadow: 0px 1px 2px rgba(10, 13, 18, 0.05);
        border-radius: 8px;
        flex: none;
        order: 1;
        align-self: stretch;
        flex-grow: 0;
    }

    .contact-content-form-message-input {
        width: 100%;
        height: 100%;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 21px;
        color: #3F3F46;
        flex: none;
        order: 1;
        flex-grow: 0;
        border: none;
        outline: none;
        resize: none;
        padding-right: 5px;
    }

    .contact-content-form-message-input::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #F5F5F5;
        cursor: pointer;
    }

    .contact-content-form-message-input::-webkit-scrollbar
    {
        width: 7px;
        background-color: #F5F5F5;
        cursor: pointer;
    }

    .contact-content-form-message-input::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #555;
        cursor: pointer;
    }

    .contact-content-form-submit {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        gap: 10px;
        width: 480px;
        height: 47px;
        background: #4B3CE4;
        box-shadow: 0px 2px 4px rgba(10, 13, 18, 0.05);
        border-radius: 12px;
        flex: none;
        order: 6;
        align-self: stretch;
        flex-grow: 0;
        cursor: pointer;
    }

    .contact-content-form-submit-text {
        width: 190px;
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