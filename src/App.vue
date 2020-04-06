<template>
	<div id="app">
		<flex-gallery images="http://expose-generator.qwellco.de/resources/expose_resources/1/3/276/Immobilie_01.jpg" max-height="180px" />
		<flex-gallery images="https://tobias-thiele.de/admin/wp-content/uploads/20170617-_MG_5554-1-2-2.jpg" max-height="180px" />
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

