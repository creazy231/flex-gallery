<template>
	<div id="app">
		<flex-gallery images="https://picsum.photos/id/10/200/300,https://picsum.photos/id/1000/200/300,https://picsum.photos/id/1003/200/300,https://picsum.photos/id/1004/200/300,https://picsum.photos/id/1005/200/300,https://picsum.photos/id/1012/200/300,https://picsum.photos/id/1015/200/300,https://picsum.photos/id/1020/200/300" />
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