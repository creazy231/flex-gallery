<template>
	<div v-if="images_store.length && thumbnails_store.length" class="flex-gallery" :class="'flex-gallery-'+customRef">
		<link v-if="customStyles" rel="stylesheet" type="text/css" :href="customStyles">
		<gallery-images v-on:open-image="displayImageLink" :gap="gap" :col="col" :maxHeight="maxHeight" :height="height" :width="width" :images="images_store" :thumbnails="thumbnails_store" :border="border" :borderColor="borderColor" />
		<image-link v-on:close-image="display = false" :images="images_store" :display="display" :index="index" class="noselect" />
	</div>
</template>

<style lang="scss">
	.noselect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Opera and Firefox */
	}
</style>

<script>
    import GalleryImages from "./GalleryImages";
    import ImageLink from "./ImageLink";

    import Vue from 'vue'
    import Vue2TouchEvents from 'vue2-touch-events'
    Vue.use(Vue2TouchEvents);

    export default {
        name: 'flex-gallery',
        components: {ImageLink, GalleryImages },
        props: {
	        customRef: {
		        type: String,
		        required: false,
	        },
	        customStyles: {
		        type: String,
		        required: false,
	        },
            images: {
                required: true,
			},
            thumbnails: {},
            col: {
                type: Number,
                required: false,
                default() {
                    return 4
                }
            },
            gap: {
                type: String,
                required: false,
                default() {
                    return '15px'
                }
            },
	        maxHeight: {
		        type: String,
		        required: false
	        },
	        height: {
		        type: String,
		        required: false,
		        default() {
			        return '300px'
		        }
	        },
	        width: {
		        type: String,
		        required: false,
		        default() {
			        return '1fr'
		        }
	        },
            border: {
                type: String,
                required: false
            },
            borderColor: {
                type: String,
                required: false,
	            default() {
		            return '#000000'
	            }
            },
        },

		data() {
            return {
                images_store: [],
                thumbnails_store: [],
                display: false,
                index: 0,
			}
		},

		beforeMount() {
            this.images_store = this.images.replace('[', '').replace(']', '').split(",");
            if (!this.thumbnails) {
                this.thumbnails_store = this.images.replace('[', '').replace(']', '').split(",");
            } else {
                this.thumbnails_store = this.thumbnails.replace('[', '').replace(']', '').split(",");
			}
        },

		methods: {
            displayImageLink(index) {
                this.display = true;
                this.index = index;
            }
		},
    }
</script>

