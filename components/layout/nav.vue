<template>
    <div class="nav-section">
        <nav>
            <ul>
                <li class="logo">
                    <img src="/img/logo-novincept.png" alt="Logo Novincept">
                </li>
                <li class="accueil">
                    <NuxtLink class="accueil-btn active-btn" to="/accueil">Accueil</NuxtLink>
                </li>
                <li class="nos-offres">
                    <NuxtLink class="nos-offres-btn" to="/nos-offres">Nos Offres</NuxtLink>
                </li>
                <li class="actualites">
                    <NuxtLink class="actualites-btn" to="/actualiites">Actualités</NuxtLink>
                </li>
                <li class="a-propos">
                    <NuxtLink class="a-propos-btn" to="/a-propos">A propos</NuxtLink>
                </li>
                <li class="btn-contact">
                    <NuxtLink class="nous-contacter-btn" to="/nous-contacter">Nous contacter</NuxtLink>
                </li>
                <li class="btn-devis">
                    <NuxtLink class="devis-btn" to="/devis">Demander un devis</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: "DM Sans";
    }

    .nav-section {
        width: 100%;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
    }

    nav {
        width: 1000px;
        height: 70%;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 18px;
        border: 1px solid var(--Border-border, #E4E4E7);
        background: var(--Background-default, #F6F6F6);
    }

    nav ul {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    nav ul li {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        padding: 0 15px;
    }

    .logo img {
        max-height: 60px;
        object-fit: contain;
    }

    .logo img:hover {
        cursor: pointer;
    }

    .accueil-btn, .nos-offres-btn, .actualites-btn, .a-propos-btn, .nous-contacter-btn, .devis-btn {
        color: var(--Content-default, #71717A);
    }

    .nous-contacter-btn {
        border-radius: 12px;
        border: 1px solid var(--Border-border, #E4E4E7);
        background: var(--Background-back, #FFF);
        box-shadow: 0px 2px 4px 0px rgba(10, 13, 18, 0.05);
        display: flex;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        transition: all 0.3s ease;
    }
    
    .nous-contacter-btn:hover {
        color: var(--Content-default, #838383);
        background: var(--Background-back, #e9e9e9);
    }

    .devis-btn {
        display: flex;
        padding: 12px 24px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        border: 2px solid rgba(255, 255, 255, 0.25);
        color: var(--Content-reversed, #FFF);
        background: var(--Brand-Colors-Primary, #4B3CE4);
        box-shadow: 0px 2px 4px 0px rgba(10, 13, 18, 0.05);
        transition: all 0.3s ease;
    }

    .devis-btn:hover {
        background: var(--Brand-Colors-Primary, #685de6);
    }

    .active-btn {
        color: var(--Content-title, #05070B);
        font-weight: 500;
    }

</style>