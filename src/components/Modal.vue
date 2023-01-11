<template>
    <teleport to=".modals-container">
        <div 
            class="modal">
            <h1>
                <slot name="title" />
            </h1>
            <slot />
            <button>Hide modal</button>

        </div>
    </teleport>
</template>


<style>
.modal {
    background: beige;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>