<template>
  <div>
    <div class="filter">
        <div class="filter__btns">
            <div @click='arrGenre' class="filter__btn">По жанрам</div>
            <div @click='arrAvtor' class="filter__btn">По авторам</div>
        </div>

        <div class="filter__wrap">
            <h1>Все книги</h1>
            <ul >
                <li v-for="book in books" :key="book.id">{{allBook(book)}}</li>
            </ul>

            <h1>Фильтрация</h1>
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
        allBook(str) {
            let strFormat = '';
            str.forEach(element => {
                strFormat += element + ' ' 
            });

            return strFormat;
        },
        arrGenre() {
            let genre = this.books.genre;
            let strGenre = '';

            genre.forEach(element => {
                strGenre += element + ' ' 
            });
            
            this.$refs.listBook.innerText = strGenre
        },
        arrAvtor() {
            let avtor = this.books.avtor;
            let strAvtor = '';

            avtor.forEach(element => {
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
