<template>
	<div id="app">
		<flex-gallery images="https://expose.imogent.com/resources/expose_resources/1/19/1839/5.8%20Badezimmer.jpg,https://expose.imogent.com/resources/expose_resources/1/19/1840/5.8%20K%C3%BCch.jpg,https://expose.imogent.com/resources/expose_resources/1/19/1841/5.8%20Kuech_2.jpg,https://expose.imogent.com/resources/expose_resources/1/19/1842/5.8%20Wohnzimmer.jpg" height="199px" width="205px" border="3px" border-color="green" />
	</div>
</template>

<script>
	import Vue from 'vue'
    import FlexGallery from "./components/FlexGallery";

    export default {
        name: 'app',
        components: {FlexGallery},
		beforeMount() {
            window.Vue = Vue;
        }
    }
</script>