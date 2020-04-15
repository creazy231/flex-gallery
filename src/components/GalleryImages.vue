<template>
	<div class="gallery" :style="`--col: ${col}; --gap: ${gap}; --maxHeight: ${maxHeight}; --height: ${height};`">
		<div v-for="(thumbnail, index) in thumbnails" :key="`image-${index}`" class="image-rate">
			<a href="#" v-on:click.prevent="openImage(index)" :style="'background-image: url('+ thumbnail +')'"></a>
		</div>
	</div>
</template>

<script>
    export default {
        name: 'gallery',
        props: {
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
		        required: false,
		        default() {
			        return '235px'
		        }
	        },
	        height: {
		        type: String,
		        required: false,
		        default() {
			        return '200px'
		        }
	        },
        },

        methods: {
            openImage(index) {
                this.$emit('open-image', index);
			}
		}
    }
</script>

<style lang="scss">
	.gallery {
		display: grid;
		grid-template-columns: repeat(var(--col), 1fr);
		grid-gap: var(--gap);
		line-height: 0;

		.image-rate {
			position: relative;
			max-height: var(--maxHeight);
			overflow: hidden;
			display: flex;
			align-items: center;
			justify-content: center;

			a {
				width: 100%;
				height: var(--height);
				background-size: cover;
				background-repeat: no-repeat;
				background-position: center;
			}

			img {
				width: 100%;
				height: auto;
				border-radius: 1.5px;
			}
		}
	}
</style>