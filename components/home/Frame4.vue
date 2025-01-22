<template>
    <div class="frame4-container">
        <div class="frame4">
            <div class="frame4-header">
                <div class="frame4-header-title">Un processus <span class="frame4-span-primary">simple</span> <br> et <span class="frame4-span-primary frame4-span-special">efficace</span> ! </div>
                <div class="frame4-header-subtitle">Sit ipsum ipsum consequat veniam reprehenderit adipisicing culpa excepteur consequat nostrud voluptate commodo occaecat. Dolore elit minim dolor anim ullamco ullamco in et mollit qui.</div>
                <div class="frame4-header-avis">
                    <div class="frame4-header-avis-header">Approuvé par + 100 personnes</div>
                    <div class="frame4-header-avis-pp">
                        <img src="/img/example-profile/first.svg" alt="Profile 1">
                        <img src="/img/example-profile/second.svg" alt="Profile 2">
                        <img src="/img/example-profile/third.svg" alt="Profile 3">
                        <img src="/img/example-profile/fourth.svg" alt="Profile 4">
                        <img src="/img/example-profile/fifth.svg" alt="Profile 5">
                    </div>
                    <div class="frame4-header-avis-link">
                        <div class="frame4-header-avis-link-text">Voir les avis</div>
                        <div class="frame4-header-avis-link-icon">
                            <img src="/img/icons/arrow-right.svg" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="presentation">
                <div class="presentation-section">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Premier échange pour comprendre les besoins</div>
                            <div class="card-subtitle">On commence par une discussion pour bien cerner votre projet. À partir de là, on vous propose un devis clair et détaillé.</div>
                        </div>
                        <div class="card-image">
                            <img src="/img/section_presentation/first.svg" alt="">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Réalisation du cahiers des charges</div>
                            <div class="card-subtitle">Vous prenez le temps de valider le devis ou de demander des modifications si nécessaire. Pas de stress, on s’adapte pour que tout corresponde à vos attentes.</div>
                        </div>
                        <div class="card-image">
                            <img src="/img/section_presentation/second.svg" alt="">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Validation et ajustements du devis</div>
                            <div class="card-subtitle">Vous prenez le temps de valider le devis ou de demander des modifications si nécessaire. Pas de stress, on s’adapte pour que tout corresponde à vos attentes.</div>
                        </div>
                        <div class="card-image">
                            <img src="/img/section_presentation/third.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="presentation-section">
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Création dans les délais définis</div>
                            <div class="card-subtitle">Une fois le devis validé, on démarre la réalisation. On respecte les délais fixés pour vous livrer un résultat à la hauteur de vos attentes.</div>
                        </div>
                        <div class="card-image">
                            <img src="/img/section_presentation/fourth.svg" alt="">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Livraison avec présentation en direct</div>
                            <div class="card-subtitle">Vous prenez le temps de valider le devis ou de demander des modifications si nécessaire. Pas de stress, on s’adapte pour que tout corresponde à vos attentes.</div>
                        </div>
                        <div class="card-image">
                            <img src="/img/section_presentation/fifth.svg" alt="">
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header">
                            <div class="card-title">Support et maintenance en option</div>
                            <div class="card-subtitle">Une fois le devis validé, on démarre la réalisation. On respecte les délais fixés pour vous livrer un résultat à la hauteur de vos attentes.</div>
                        </div>
                        <div class="card-image">
                            <img src="/img/section_presentation/sixth.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.frame4-container {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 192px;
}
.frame4-container .frame4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 48px;
    width: 1440px;
    height: 980px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.frame4-container .frame4 .frame4-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 1440px;
    height: 120px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

}

.frame4-container .frame4 .frame4-header .frame4-header-title {
    margin: 0 auto;
    width: 463px;
    height: 120px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 125%;
    color: #05070B;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.frame4-container .frame4 .frame4-span-primary {
    color: var(--Colors--Primary);
}

.frame4-container .frame4 .frame4-span-special {
    position: relative;
}

.frame4-container .frame4 .frame4-header-title .frame4-span-special::after {
    content: '';
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        80deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
    );
    background-position: 100% 0%;
    z-index: 1;
    pointer-events: none;
}


.frame4-container .frame4 .frame4-header .frame4-header-subtitle {
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 464px;
    height: 108px;
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

.frame4-container .frame4 .frame4-header .frame4-header-avis {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    margin: 0 auto;
    width: 464px;
    height: 105px;
    flex: none;
    order: 2;
    flex-grow: 0;
}

.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-header {
    width: 464px;
    height: 27px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: #71717A;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

}

.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-pp {

    display: flex;
    flex-direction: row-reverse;    
    align-items: flex-start;
    padding: 0px;
    isolation: isolate;
    width: 106px;
    height: 30px;
    flex: none;
    order: 1;
    flex-grow: 0;

}


.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-pp img {
    width: 30px;
    height: 30px;
    border: 2px solid #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px -5px;
    z-index: 4;
    border: none;
}


.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    order: 2;
    gap: 0px;
}

.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-link .frame4-header-avis-link-text {
    height: 24px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #05070B;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-link .frame4-header-avis-link-icon {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 2px;
    height: 18px;
    width: 18px;
}

.frame4-container .frame4 .frame4-header .frame4-header-avis .frame4-header-avis-link .frame4-header-avis-link-icon img {
    padding-top: 2.5px;
    width: 5.17px;
    height: 8.98px;
}

.frame4-container .frame4 .presentation {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 24px;
    width: 1440px;
    height: 812px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.frame4-container .frame4 .presentation .presentation-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;
    width: 1440px;
    height: 394px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.frame4-container .frame4 .presentation .presentation-section .card {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 12px 0px;
    width: 464px;
    height: 394px;
    background: #F6F6F6;
    border: 1px solid #E4E4E7;
    border-radius: 24px;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.frame4-container .frame4 .presentation .presentation-section .card .card-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 6px;
    width: 440px;
    height: 162px;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;

}

.frame4-container .frame4 .presentation .presentation-section .card .card-header .card-title {
    width: 416px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 125%;
    color: #05070B;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
}

.frame4-container .frame4 .presentation .presentation-section .card .card-header .card-subtitle {
    width: 416px;
    height: 72px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #71717A;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}

.frame4-container .frame4 .presentation .presentation-section .card .card-image {
    display: flex;
    width: 440px;
    height: 196px;
    border-radius: 12px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
}



</style>