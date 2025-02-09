<template>
    <div class="about-frame5-container">
        <div class="about-frame5">
            <div class="about-frame5-header">
                <div class="about-frame5-header-title">
                    Trouver vos <span class="about-frame5-header-title-highlight">réponses</span> dans notre <span class="about-frame5-header-title-highlight">foire au questions</span> !
                </div>
                <div class="about-frame5-header-subtitle">
                    Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.
                </div>
            </div>
            <div class="about-frame5-content">
                <template v-for="(question, index) in questions" :key="index">
                    <div :class="['about-frame5-content-question_card', { 'about-frame5-content-question_card--active': activeQuestionIndex === index }]">
                        <div class="about-frame5-content-question_card-header" @click="toggleQuestion(index)">
                            <div class="about-frame5-content-question_card-header-title">{{ question.title }}</div>
                            <img :src="activeQuestionIndex === index ? '/img/icons/less.svg' : '/img/icons/plus.svg'" alt="" class="about-frame5-content-question_card-header-icon">
                        </div>
                        <div class="about-frame5-content-question_card-content">
                            {{ question.content }}
                        </div>
                    </div>
                    <img src="/img/icons/line.svg" alt="" class="about-frame5-content-line">

                </template>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                activeQuestionIndex: null,
                questions: [
                    { title: 'Combien de temps la préstation dur ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                    { title: 'Comment puis-je passer une commande ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                    { title: 'Quand puis-je m\'attendre à recevoir ma livraison ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                    { title: 'Y a-t-il des options de personnalisation disponibles ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                    { title: 'Le budget est fixe ou il peut s\'adapter ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                    { title: 'Quelle est votre politique de retour ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                    { title: 'Puis-je suivre l\'état de ma commande en ligne ?', content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique nam nisi quasi consectetur voluptatibus optio quaerat. Doloribus sint iure pariatur, hic minus alias. Aspernatur itaque, consequatur magni sequi adipisci deserunt.' },
                ],
            };
        },
        methods: {
            toggleQuestion(index) {
                this.activeQuestionIndex = this.activeQuestionIndex === index ? null : index;
            },
        },
    };
</script>


<style>
    .about-frame5-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        margin-bottom: 192px;
    }

    .about-frame5 {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 72px;
        width: 1440px;
        height: 618px;
        flex: none;
        order: 4;
        flex-grow: 0;
    }

    .about-frame5-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        margin: 0 auto;
        width: 687px;
        height: 255px;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .about-frame5-header-title {
        width: 687px;
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

    .about-frame5-header-title-highlight {
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

    .about-frame5-header-subtitle {
        width: 568px;
        height: 81px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .about-frame5-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;
        margin: 0 auto;
        height: 618px;
        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .about-frame5-content-question_card {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px;
        gap: 72px;
        height: 30px;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
        width: 100%;
    }

    .about-frame5-content-question_card--active {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 12px;
        width: 671px;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
        width: 100%;
        margin-bottom: 72px;
    }

    .about-frame5-content-question_card-header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0px;
        gap: 72px;
        height: 30px;
        flex: none;
        order: 0;
        align-self: stretch;
        flex-grow: 0;
        width: 100%;
        cursor: pointer;
    }

    .about-frame5-content-question_card-header-title {
        height: 30px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 125%;
        color: #05070B;
        flex: none;
        order: 0;
        flex-grow: 0;
    }

    .about-frame5-content-question_card-header-icon {
        width: 24px;
        height: 24px;
        flex: none;
        order: 1;
        flex-grow: 0;
        cursor: pointer;
    }

    .about-frame5-content-question_card--active .about-frame5-content-question_card-content {
        display: block;
        width: 619px;
        height: auto;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #71717A;
        flex: none;
        order: 1;
        flex-grow: 0;
        opacity: 0;
        animation: slideDown 0.5s forwards;
    }

    .about-frame5-content-question_card-content {
        display: none;
    }

    .about-frame5-content-question_card--inactive .about-frame5-content-question_card-content {
        opacity: 0;
        animation: slideUp 0.5s forwards;
    }

    @keyframes slideDown {
        0% {
            opacity: 0;
            transform: translateY(-20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideUp {
        0% {
            opacity: 1;
            transform: translateY(0);
        }
        100% {
            opacity: 0;
            transform: translateY(-20px);
        }
    }

    .about-frame5-content-line {
        width: 671px;
        opacity: 0.1;
        flex: none;
        align-self: stretch;
        flex-grow: 0;
    }

</style>


