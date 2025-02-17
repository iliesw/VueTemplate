<template>
    <main>
        <titles>
            <x>✨ Version 2.15 is out -- Try it Now →</x>
            <h1>Empower Your Learning with</h1>
            <h1>AI-Driven Intelligence</h1>
        </titles>

        <EffectsGlowBox />
        <glow></glow>
        <EffectsStars />
        <div>
            <display></display>
            <display></display>
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 200px 0;
    align-items: center;
    font-family: "Code";
    color: #f5f5f5;
}

glow{
    position: absolute;
    width: 100%;
    height: 180%;
    background: radial-gradient( #ff6a00a8 0%, #000000 70%);
    mask: linear-gradient(180deg, #000000 0%, #00000000 70%);
    z-index: -1;
}

titles {
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 4rem;
        font-weight: 700;
    }

    h1:last-child {
        background: linear-gradient(180deg, #ffffff, #898989);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 5.3rem;
        margin-top: -20px;
        position: relative;

        
    }

    x {
        background: #14141468;
        align-self: center;
        padding: 0.4rem .9rem;
        padding-top: .5rem;
        font-size: 13px;
        border: 1px solid #ffffff1a;
        border-radius: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
}

display {
    display: block;
    position: relative;
    width: 100%;
    height: 500px;
    border-radius: 15px;
    background-color: #0e0e0e;
    z-index: 1;
}

div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
}

@keyframes rotate {
    0% {
        rotate: 360deg;
    }

    100% {
        rotate: 0deg;
    }
}
</style>
