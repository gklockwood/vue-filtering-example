<template>
    <h3>Filter By Category</h3> 
    <input type="text" v-model="name" placeholder="Filter By Name"/>
    
    <select v-model="category">
        <option value="Accessories">Accessories</option>
        <option value="Laptop">Laptop</option>
        <option value="Stationary">Stationary</option>value
    </select> 

    <ul>
        <li v-for="product in filterProductsByCategory" :key="product">Product Name : {{product.name}} - Price : {{product.price}} ({{product.category}})</li>
    </ul>
    <ul>
        <li v-for="product in filterProductsByName" :key="product">Product Name : {{product.name}} - Price : {{product.price}} ({{product.category}})</li>
    </ul>
    
</template>

<script>
    import {
        ref,
        reactive,
        computed
    } from 'vue';
    export default {
        setup() {
            const products = reactive([{
                name: "Keyboard",
                price: 44,
                category: 'Accessories'
            }, {
                name: "Mouse",
                price: 20,
                category: 'Accessories'
            }, {
                name: "Monitor",
                price: 399,
                category: 'Accessories'
            }, {
                name: "Dell XPS",
                price: 599,
                category: 'Laptop'
            }, {
                name: "MacBook Pro",
                price: 899,
                category: 'Laptop'
            }, {
                name: "Pencil Box",
                price: 6,
                category: 'Stationary'
            }, {
                name: "Pen",
                price: 2,
                category: 'Stationary'
            }, {
                name: "USB Cable",
                price: 7,
                category: 'Accessories'
            }, {
                name: "Eraser",
                price: 2,
                category: 'Stationary'
            }, {
                name: "Highlighter",
                price: 5,
                category: 'Stationary'
            }]);


            const category = ref('');
            const filterProductsByCategory = computed(function() {
                return products.filter(product => !product.category.indexOf(category.value))
            })


            const name = ref('');
            const filterProductsByName = computed(function() {
                return products.filter(product => !product.name.toLowerCase().indexOf(name.value.toLowerCase()))
            })



            return {
                products,
                name,
                category,
                filterProductsByCategory,
                filterProductsByName
            }
        }
    };
</script>