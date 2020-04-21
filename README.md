# Web Component Flex Gallery

## Project setup / development / build
```
# Project setup
yarn install

# Compiles and hot-reloads for development
yarn serve

# Compiles and minifies for production
yarn build
```
---

## How to use
After you have executed `yarn build`, move the generated `dist/flex-gallery.min.js` to your project and include the following files into your websites header:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/2.3.0/webcomponents-bundle.js"></script>
<script src="js/flex-gallery.min.js"></script>
```
now you can use the Flex Gallery as follows:
```html
<flex-gallery images="https://picsum.photos/id/10/200/300,https://picsum.photos/id/1000/200/300,https://picsum.photos/id/1003/200/300,https://picsum.photos/id/1004/200/300,https://picsum.photos/id/1005/200/300,https://picsum.photos/id/1012/200/300,https://picsum.photos/id/1015/200/300,https://picsum.photos/id/1020/200/300" />
```

##Arguments
| **argument**     	| **type**   	| **required** 	| **default** 	| **description**                                                                       	|
|--------------	|--------	|----------	|---------	|-----------------------------------------------------------------------------------	|
| images       	| String 	| true     	|         	| String of image URLs **serarated by comma**                                           	|
| thumbnails   	| String 	| false    	|         	| String of thumbnail image URLs **serarated by comma**                                 	|
| col          	| Number 	| false    	| 4       	| Number of columns of the gallery grid                                             	|
| gap          	| String 	| false    	| 15px    	| Column and Row gap of the gallery grid                                            	|
| maxHeight    	| String 	| false    	|         	| maximum height of each element inside the gallery grid                            	|
| height       	| String 	| false    	| 300px   	| height of each element inside the gallery grid                                    	|
| width        	| String 	| false    	| 1fr     	| width of each element inside the gallery grid                                     	|
| border       	| String 	| false    	|         	| border of each element inside the gallery grid (Example: 3px = border: 3px solid) 	|
| borderColor  	| String 	| false    	| #000000 	| border color of each element inside the gallery grid                              	|
| customRef    	| String 	| false    	|         	| add a custom class to the gallery to select this gallery using `customStyles`     	|
| customStyles 	| String 	| false    	|         	| link to custom style sheet                                                        	|
To manually style the grid of the gallery in `customStyles` please use CSS-Grid https://css-tricks.com/snippets/css/complete-guide-grid/