<template>
  <div>
    <div class="filter">
        <div class="filter__btns">
            <div @click='arrGenre' class="filter__btn">По жанрам</div>
            <div @click='arrAvtor' class="filter__btn">По авторам</div>
        </div>

        <div class="filter__wrap">
            <h1>Вывод</h1>
            <!-- <ul  v-for="book in genre" :key="book">
                <li>{{book}}</li>
            </ul> -->
            <p ref="listBook"></p>
        </div>

    </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            
        }
    },
    computed: {
        books() {
            return this.$store.state.books;
        }
    },
    methods: {
        arrGenre() {
            let genre = this.books.genre;
            let strGenre = '';

            genre.forEach(element => {
                console.log(element)
                strGenre += element + ' ' 
            });
            
            this.$refs.listBook.innerText = strGenre
        },
        arrAvtor() {
            let avtor = this.books.avtor;
            let strAvtor = '';

            avtor.forEach(element => {
                console.log(element)
                strAvtor += element + ' ' 
            });
            
            this.$refs.listBook.innerText = strAvtor
        }
    }
}
  
</script>

<style lang="stylus">
    .filter 
        text-align left

        &__btns
            display flex
            justify-content space-between
            width 200px
            margin-bottom 50px
        
        &__btn
            cursor pointer

</style>
