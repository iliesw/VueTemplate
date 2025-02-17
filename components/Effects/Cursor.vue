<script setup>

const cursor = ref(null)

onMounted(() => {
    let mouseX = 0;
    let mouseY = 0;
    let scrollX = 0;
    let scrollY = 0;

    const updateCursor = () => {
        const oldX = parseFloat(cursor.value.style.left || 0);
        const oldY = parseFloat(cursor.value.style.top || 0);
        cursor.value.style.left = lerp(oldX, mouseX - scrollX, 0.2) + 'px';
        cursor.value.style.top = lerp(oldY, mouseY - scrollY, 0.2) + 'px';
        requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mousemove', (e) => {
        mouseX = e.pageX;
        mouseY = e.pageY;
        scrollX = window.scrollX || window.pageXOffset;
        scrollY = window.scrollY || window.pageYOffset;
    });

    requestAnimationFrame(updateCursor);
})

onUnmounted(() => {
    document.removeEventListener('mousemove', (e) => {
        cursor.value.style.left = e.pageX + 'px'
        cursor.value.style.top = e.pageY + 'px'
    })
})


</script>



<template>
    <custom-cursor>
        <mycursor ref="cursor"></mycursor>
    </custom-cursor>
</template>


<style>
body {
    cursor: none !important;
}
custom-cursor {

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;


    mycursor {
        position: absolute;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        background-color: #ffffff00;
        backdrop-filter: invert(1);
        pointer-events: none;
        z-index: 9999;

        transform: translate(-50%, -50%);
        
        

    }
}
</style>