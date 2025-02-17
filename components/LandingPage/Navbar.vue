<template>
    <nav>
        <logo>Nothing Ai <blink>_</blink></logo>

        <div>
            <button v-on:click="Notif('Service Not Avaliable Yet',{closeButton:{}})">Try it Now</button>
        </div>
    </nav>
</template>

<style scoped>
    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;

        logo{
            font-family: "Code"
        }

        blink{
            animation: blink 1s infinite;
        }


        
    }
    @keyframes blink{
        0%{
            opacity: 0;
        }
        49%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity:1;
        }
    }
</style>