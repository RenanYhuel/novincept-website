<script setup lang="ts">
import { NuxtLink } from '#components';

</script>

<template>
    <header>
        <div class="logo">
            <img src="/img/logo-novincept.svg" alt="Logo Novincept">
        </div>
        <div class="hamburger">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <nav class="nav-bar">
            <ul>
                <li class="accueil">
                    <NuxtLink class="accueil-btn active-btn" to="/">Accueil</NuxtLink>
                </li>
                <li class="nos-offres">
                    <NuxtLink class="nos-offres-btn" :class="{ 'active-btn': $route.path === '/nos-offres' }" to="/nos-offres">Nos Offres</NuxtLink>
                </li>
                <li class="actualites">
                    <NuxtLink class="actualites-btn" :class="{ 'active-btn': $route.path === '/actualiites' }" to="/actualiites">Actualités</NuxtLink>
                </li>
                <li class="a-propos">
                    <NuxtLink class="a-propos-btn" :class="{ 'active-btn': $route.path === '/about' }" to="/about">A propos</NuxtLink>
                </li>
                <li class="btn-contact">
                    <NuxtLink class="nous-contacter-btn" to="/contact">Nous contacter</NuxtLink>
                </li>
                <li class="btn-devis">
                    <NuxtLink class="devis-btn" to="/devis">Demander un devis</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


<script scoped>
    export default {
        mounted() {
            const hamburger: any = document.querySelector('.hamburger');
            if (hamburger) {
                hamburger.onclick = function() {
                    const navBar = document.querySelector('.nav-bar');
                    if (navBar) {
                        navBar.classList.toggle('active');
                    }
                    hamburger.classList.toggle('active');
                }
            }
        }
    }
</script>


<style>
    header {
        width: 100%;
        height: 90px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0px;
        position: fixed;
        z-index: 9999;
    }

    .hamburger {
        display: none;
    }

    .nav-bar ul {
        display: flex;
        color: var(--Content-default, #71717A);
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .logo {
        margin-right: 30px;
    }

    .nav-bar ul li a {
        display: block;
        padding: 10px 15px;
        transition: 0.2s;
        margin: 0 4px;
        color: var(--Content-default, #71717A);
        font-family: "DM Sans";
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .nav-bar ul li .active-link {
        color: var(--Content-title, #05070B);
    }

    .nav-bar ul li .nous-contacter-btn {
        color: var(--Content-title, #05070B);
        font-family: "DM Sans";
        font-size: 18px;
        border-radius: 12px;
        border: 1px solid var(--Border-border, #E4E4E7);
        background: var(--Background-back, #FFF);
        box-shadow: 0px 2px 4px 0px rgba(10, 13, 18, 0.05);
    }

    .nav-bar ul li .devis-btn {
        border-radius: 12px;
        color: var(--Content-reversed, #FFF);
        border: 2px solid rgba(255, 255, 255, 0.25);
        background: var(--Brand-Colors-Primary, #4B3CE4);
        box-shadow: 0px 2px 4px 0px rgba(10, 13, 18, 0.05);
    }

    .hamburger {
        display: none;
        cursor: pointer;
        transition: transform 0.3s ease;
    }

    .hamburger .line {
        width: 30px;
        height: 3px;
        background-color: #000;
        margin: 6px 0;
        transition: all 0.3s ease;
    }

    @media only screen and (max-width: 900px) {

        header {
            justify-content: space-around;
            height: 60px;
        }

        .logo {
            z-index: 999;
        }

        .hamburger {
            display: block;
            cursor: pointer;
            z-index: 999;
        }

        .hamburger.active .line:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }

        .hamburger.active .line:nth-child(2) {
            opacity: 0;
        }

        .hamburger.active .line:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }

        .hamburger .line {
            width: 30px;
            height: 3px;
            background-color: #000000;
            margin: 6px 0;
        }

        .nav-bar {
            height: 0;
            position: absolute;
            top: 0px;
            left: 0;
            right: 0;
            width: 100vw;
            transition: 0.5s;
            background-color: #fff;
            overflow: hidden;
            z-index: 0;
        }

        .nav-bar.active {
            height: 450px;
        }

        .nav-bar ul {
            display: block;
            width: fit-content;
            margin: 80px auto 0 auto;
            text-align: center;
            transition: 0.5s;
            opacity: 0;
        }

        .nav-bar.active ul {
            opacity: 1;
        }

        .nav-bar ul li a {
            margin-bottom: 12px;
        }
    }
</style>
