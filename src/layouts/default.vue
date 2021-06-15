<template lang="pug">
router-view
</template>

<style>
#app {
  --bg-primary: #ffffff;
  --bg-colored: rgb(251, 246, 237);

  --text-primary: #173e66;
  --text-secondary: #748ba3;
  background-color: var(--bg-primary);
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background-color: rgba(255, 221, 0, 0.8);

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 5px;
}
</style>
