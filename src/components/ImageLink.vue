<template>
	<transition name="fade" mode="out-in">
		<div v-if="display" class="image-link">
			<div @click.prevent="closeImage" class="close"></div>
			<div @click.prevent="closeImage" class="backdrop"></div>
			<div class="image-container">
				<div class="image-box" :class="loading ? 'loading' : ''">
					<span v-if="loading" class="backgroundAnimation loader"></span>
					<div v-if="images.length > 1" @click.prevent="previousImage" class="arrow arrow__left">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"> <g> <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
					</div>
					<div v-if="images.length > 1" @click.prevent="nextImage" class="arrow arrow__right">
						<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"> <g> <path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z "/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
					</div>
					<img @load="loading = false" v-touch:swipe.left="previousImage" v-touch:swipe.right="nextImage" :src="images[index]" alt="">
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
    export default {
        name: "image-link",

        props: {
            images: {
                required: true,
            },
            display: {},
            index: {},
        },

        data() {
            return {
                loading: true,
            }
        },

        methods: {
            closeImage() {
                this.$emit('close-image');
            },
            nextImage() {
                if (this.images.length > 1) {
                    this.loading = true;
                    if (this.index + 1 >= this.images.length) {
                        this.index = 0;
                    } else {
                        this.index++;
                    }
                }
            },
            previousImage() {
                if (this.images.length > 1) {
                    this.loading = true;
                    if (this.index - 1 < 0) {
                        this.index = this.images.length - 1;
                    } else {
                        this.index--;
                    }
                }
            },
        }
    };
</script>

<style lang="scss" scoped>

	.fade-enter-active, .fade-leave-active {
		transition: all 0.25s;
	}

	.fade-enter, .fade-leave-active {
		opacity: 0;
	}

	.image-link {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1000;
		max-width: 100vw;
		max-height: 100vh;

		.image-container {
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 6px;
			line-height: 0;
			margin: 0 auto;

			.image-box {
				position: relative;
				max-height: 90vh;
				max-width: 90vw;

				&:after {
					opacity: 0;
					content: '';
					position: absolute;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;
					background-color: rgba(white, .3);
					visibility: hidden;
					border-radius: 4px;
				}

				&.loading {
					&:after, .loader {
						opacity: 1;
						visibility: visible;
					}
				}

				@media (max-width: 576px) {
					max-height: 99vh;
					max-width: 99vw;
				}

				&:hover {
					.arrow {
						opacity: 1;
						cursor: pointer;
					}
				}

				.arrow {
					fill: white;
					background: rgb(0, 0, 0);
					position: absolute;
					top: 0;
					bottom: 0;
					display: flex;
					align-items: center;
					transition: opacity .35s;
					opacity: 0;

					&.arrow__left {
						left: 0;
						background: linear-gradient(90deg, rgba(0, 0, 0, 0.4990371148459384) 0%, rgba(255, 255, 255, 0) 100%);
						justify-content: flex-start;
						padding: 50px 60px 50px 20px;
					}

					&.arrow__right {
						right: 0;
						background: linear-gradient(270deg, rgba(0, 0, 0, 0.4990371148459384) 0%, rgba(255, 255, 255, 0) 100%);
						justify-content: flex-end;
						padding: 50px 20px 50px 60px;
					}

					svg {
						width: 35px;
					}
				}

				img {
					max-width: 100%;
					max-height: 80vh;
					border-radius: 4px;
				}

				.loader {
					opacity: 0;
					left: 0;
					position: absolute;
					right: 0;
					top: 0;
					z-index: 12;
					visibility: hidden;
				}

				.backgroundAnimation {
					height: 4px;
					background: #27c4f5 -webkit-gradient(linear, left top, right top, from(#27c4f5), color-stop(#a307ba), color-stop(#fd8d32), color-stop(#70c050), to(#27c4f5));
					background: #27c4f5 linear-gradient(to right, #27c4f5, #a307ba, #fd8d32, #70c050, #27c4f5);
					background-size: 500%;
					-webkit-animation: 2s linear infinite barprogress, .3s fadein;
					animation: 2s linear infinite barprogress, .3s fadein;
					width: 100%;
				}

				@-webkit-keyframes barprogress {
					0% {
						background-position: 0% 0
					}
					to {
						background-position: 125% 0
					}
				}
				@keyframes barprogress {
					0% {
						background-position: 0% 0
					}
					to {
						background-position: 125% 0
					}
				}

				@-webkit-keyframes fadein {
					0% {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}

				@keyframes fadein {
					0% {
						opacity: 0
					}
					to {
						opacity: 1
					}
				}
			}
		}
	}

	.close {
		cursor: pointer;
		-moz-transition: background-color 0.2s ease-in-out;
		-webkit-transition: background-color 0.2s ease-in-out;
		-ms-transition: background-color 0.2s ease-in-out;
		transition: background-color 0.2s ease-in-out;
		z-index: 10;
		display: block;
		position: absolute;
		top: 0.75rem;
		right: 0.75rem;
		width: 4rem;
		height: 4rem;
		border-radius: 100%;
		background-position: center;
		background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='20px' height='20px' viewBox='0 0 20 20' zoomAndPan='disable'%3E%3Cstyle%3Eline %7B stroke: %23ffffff%3B stroke-width: 1%3B %7D%3C/style%3E%3Cline x1='2' y1='2' x2='18' y2='18' /%3E%3Cline x1='18' y1='2' x2='2' y2='18' /%3E%3C/svg%3E");
		background-size: 30px 30px;
		background-repeat: no-repeat;

		&:hover {
			background-color: rgba(255, 255, 255, 0.075);
		}
	}

	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgba(black, .5);
	}
</style>