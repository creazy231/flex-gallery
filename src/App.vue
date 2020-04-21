<template>
	<div id="app">
		<flex-gallery
				images="https://picsum.photos/id/10/1024/768,https://picsum.photos/id/1000/1024/768,https://picsum.photos/id/1003/1024/768,https://picsum.photos/id/1004/1024/768,https://picsum.photos/id/1005/1024/768,https://picsum.photos/id/1012/1024/768,https://picsum.photos/id/1015/1024/768,https://picsum.photos/id/1020/1024/768"
				thumbnails="https://picsum.photos/id/10/300/300,https://picsum.photos/id/1000/300/300,https://picsum.photos/id/1003/300/300,https://picsum.photos/id/1004/300/300,https://picsum.photos/id/1005/300/300,https://picsum.photos/id/1012/300/300,https://picsum.photos/id/1015/300/300,https://picsum.photos/id/1020/300/300"
				border="2px"
				border-color="orange"
				col="4"
				gap="1rem"
		/>
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