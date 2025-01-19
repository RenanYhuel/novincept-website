<template>
    <div class="frame1-container">
        <div class="frame1">
            <div class="frame1-title">
                Prêt à <span class="title-span">propulser</span> votre <span class="title-span">projet</span> à un autre <span class="title-span">niveau</span> ?
            </div>
            <div class="frame1-subcontainer">
                <div class="frame1-subtitle">
                    Consectetur deserunt fugiat consequat ex sint irure nulla est excepteur. Qui non est occaecat sint tempor esse adipisicing.
                </div>
            </div>
            <div class="frame1-button">
                <div class="button-subcontainer">
                    <div class="button-text"><span class="button-span">Demander un devis</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.frame1-container {
    width: 100%;
    padding-top: 203px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.frame1-container .frame1 {
    width: 930px;
    height: 365px;
    top: 203px;
    left: 495px;
    gap: 24px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.frame1-container .frame1 .frame1-title {
    width: 930px;
    height: 210px;
    gap: 0px;
    opacity: 0px;
    color: var(--Content--title);
    font-family: "DM Sans";
    font-size: 84px;
    font-weight: 400;
    line-height: 105px;
    letter-spacing: -5%;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
}

.frame1-container .frame1 .frame1-subcontainer {
    width: 930px;
    height: auto;
    gap: 0px;
    opacity: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.frame1-container .frame1 .frame1-subtitle {
    width: 678px;
    height: 60px;
    gap: 0px;
    opacity: 0px;
    font-family: "DM Sans";
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
}

.frame1-container .frame1 .frame1-button {
    width: 210px;
    height: 47px;
    gap: 12px;
}

.frame1-container .frame1 .frame1-button .button-subcontainer {
    max-width: 210px;
    width: 100%;
    box-sizing: border-box;
    min-height: 47px;
    z-index: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    border: 2px solid rgba(255, 255, 255, 0.25);
    gap: 10px;
    padding: 12px 0px;
    border-radius: 12px;
    background: #4b3ce4ff;
    box-shadow: 0px 2px 4px 0px rgba(10, 13, 18, 0.05);
}


.button-text {
    max-width: 162px;
    width: 100%;
    box-sizing: border-box;
    min-height: 23px;
    z-index: 0;
    transform: rotate(0deg);
    text-align: left;
    line-height: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.button-span {
    font-size: 18px;
    line-height: 18px;
    font-family: DM Sans;
    font-weight: 400;
    text-decoration: none;
    text-transform: none;
    white-space: pre-wrap;
    color: #ffffff;
}



.frame1 .frame1-title span.title-span {
    position: relative;
    color: var(--Colors--Primary);
    font-family: "DM Sans";
    font-size: 84px;
    font-weight: 400;
    line-height: 105px;
    letter-spacing: -5%;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    font-style: italic;
}

.frame1 .frame1-title span.title-span::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 200%;
    transform: translate(-50%, -50%);
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0) 100%);
    mix-blend-mode: lighten;
    pointer-events: none;
    z-index: -1;
}


</style>
