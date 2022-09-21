<script setup>
import './styles.css'
import { ref } from 'vue';

const count = ref(0)
const increment = () => count.value++	
</script>

<template>
	<div>
		Count
		<button @click="increment"> {{ count }} </button>
	</div>
</template>
