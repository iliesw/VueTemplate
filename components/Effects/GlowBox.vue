<script setup>
let count = ref(15);

</script>

<template>
    <div class="center-box" style="--size:3">
        <!-- START Box -->
        <div class="animated-border-box-glow"></div>
        <div class="animated-border-box">
            <!-- Inside the Box -->
        </div>
        <!-- END -->
    </div>
</template>


<style>

.animated-border-box, .animated-border-box-glow{
  height: 100%;
  width: 100%;
  position: absolute;
  overflow: hidden; 
  z-index: 0;
	border-radius: 10px;
}

.animated-border-box-glow{
  overflow: hidden;
  /* Glow Blur */
  filter: blur(10px);
}

.animated-border-box:before, .animated-border-box-glow:before {
  content: '';
  z-index: -2;
  text-align: center;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(0deg);
  position: absolute;
	width: 99999px;
	height: 99999px;
	background-repeat: no-repeat;
	background-position: 0 0;
  /*border color, change middle color*/
	background-image: conic-gradient(rgba(0,0,0,0), #ed5819, rgba(0,0,0,0) 25%);
  /* change speed here */
	animation: rotate 4s linear infinite;
}

.animated-border-box:after {
	content: '';
	position: absolute;
	z-index: -1;
  /* border width */
	left: calc(var(--size) * 1px);
	top: calc(var(--size) * 1px);;
  /* double the px from the border width left */
	width: calc(100% - calc(var(--size) * 2px));
	height: calc(100% - calc(var(--size) * 2px));
  /*bg color*/
	background: #0e0e0e;
  /*box border radius*/
	border-radius: 8px;
}

@keyframes rotate {
	100% {
		transform: translate(-50%, -50%) rotate(1turn);
	}
}

/*// Border Animation END//*/




.center-box{
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #0e0e0e;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid #ffffff11;
}
</style>