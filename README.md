# Web Component Flex Gallery

![](https://i.imgur.com/Fae8Qla.png)

![](https://i.imgur.com/jJ2vIDT.png)

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
<flex-gallery
        images="https://picsum.photos/id/10/1024/768,https://picsum.photos/id/1000/1024/768,https://picsum.photos/id/1003/1024/768,https://picsum.photos/id/1004/1024/768,https://picsum.photos/id/1005/1024/768,https://picsum.photos/id/1012/1024/768,https://picsum.photos/id/1015/1024/768,https://picsum.photos/id/1020/1024/768"
        thumbnails="https://picsum.photos/id/10/300/300,https://picsum.photos/id/1000/300/300,https://picsum.photos/id/1003/300/300,https://picsum.photos/id/1004/300/300,https://picsum.photos/id/1005/300/300,https://picsum.photos/id/1012/300/300,https://picsum.photos/id/1015/300/300,https://picsum.photos/id/1020/300/300"
        border="2px"
        border-color="orange"
        col="4"
        gap="1rem"
/>
```

## Arguments
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
