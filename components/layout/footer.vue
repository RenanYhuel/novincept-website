<script setup lang="ts">
import Footer_header from './footer_header.vue';

</script>

<template>
    <Footer_header/>
    <div class="footer-section">
        <footer>
            <div class="section1">
                <div class="part1">
                    <img class="img1" src="/img/logo-novincept.svg" alt="Logo Novincept">
                    <span>Consectetur deserunt fugiat consequat ex sint irure nulla est excepteur. Qui non est occaecat.</span>
                    <img class="img2" src="/img/carte.png" alt="Carte Emplacement Novincept">
                </div>
                <div class="part2">
                    <div class="legales">
                        <h3>Légales</h3>
                        <ul>
                            <li><NuxtLink to="#"><span class="txt">Conditions générales d’utiliation</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Conditions générales de vente</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Cookies</span></NuxtLink></li>
                        </ul>
                    </div>
                    <div class="site">
                        <h3>Site</h3>
                        <ul>
                            <li><NuxtLink to="#"><span class="txt">Nos offres</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Actualités</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">A propos</span></NuxtLink></li>
                        </ul>
                    </div>
                    <div class="entreprise">
                        <h3>Entreprise</h3>
                        <ul>
                            <li><NuxtLink to="#"><span class="txt">Contact</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Support</span></NuxtLink></li>
                        </ul>
                    </div>
                    <div class="emploi">
                        <h3>Emploi</h3>
                        <ul>
                            <li><NuxtLink to="#"><span class="txt">Offres d'emploi</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Stages</span></NuxtLink></li>
                        </ul>
                    </div>
                    <div class="reseaux">
                        <h3>Réseaux</h3>
                        <ul>
                            <li><NuxtLink to="#"><span class="txt">Linkedin</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Twitter (X)</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Discord</span></NuxtLink></li>
                            <li><NuxtLink to="#"><span class="txt">Instagram</span></NuxtLink></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="separation"></div>
            <div class="section2">
                <div class="section2-part1">
                    <h3>© 2025 Novincept. Tous droits réservés.</h3>
                </div>
                <div class="section2-part2">
                    <button class="fr-btn">FR</button>
                    <button class="en-btn">EN</button>
                    <button class="light-btn"><img src="/img/icons/light-icon.png" alt="light icon"></button>
                    <button class="dark-btn"><img src="/img/icons/night-icon.png" alt="night icon"></button>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
    .footer-section {
        display: flex;
        padding: 80px 215px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        align-self: stretch;
    }

    footer {
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 438px;
        display: flex;
        flex-direction: column;
    }

    .section1 {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 50px;
    }

    .part1 {
        display: flex;
        flex-direction: column;
        width: 45%;
        height: 300px;
    }

    .part1 .img1 {
        width: 45%;
        height: 100px;
    }

    .part1 .img2 {
        width: 70%;
        height: 70%;
    }

    .part1 span {
        color: var(--Content-default, #71717A);
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
        margin-bottom: 20px;
    }

    .separation {
        width: 100%;
        height: 1.5px;
        background-color: var(--Border-border, #E4E4E7);
        margin: 20px 0;
    }

    .part2 {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-evenly;
        margin-left: 200px;
    }

    .part2 h3 {
        color: var(--Content-default, #71717A);
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .part2 ul li .txt {
        color: var(--Content-title, #05070B);
        font-family: "DM Sans";
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 170%;
    }

    .section2 {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        margin-top: 50px;
    }

    .section2-part1 h3 {
        color: var(--Content-default, #71717A);
        font-family: "DM Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
    }

    .section2-part2 {
        display: flex;
        justify-content: space-between;
        gap: 15px;
        align-items: center;
    }

    .section2-part2 button {
        background-color: #f5f5f5;
        border-radius: 30px;
        padding: 10px 20px;
        border: 1px solid var(--Border-border, #E4E4E7);
        display: flex;
        align-items: center;
        justify-content: center; 
        height: 40px;
    }

    .section2-part2 button img {
        width: 18px;
        height: 18px;
    }

    .section2-part2 button:hover {
        cursor: pointer;
        border: 1px solid var(--Border-border, #b6b6b6);
    }

</style>
