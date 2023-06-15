/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту - НЕОБЯЗАТЕЛЬНО

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv=document.querySelector('.promo__adv'),
      promoImages=promoAdv.querySelectorAll('img'),
      genre=document.querySelector('.promo__genre'),
      promoBg=document.querySelector('.promo__bg'),
      films=document.querySelector('.promo__interactive-list'),
      form=document.querySelector('.add'),
      input=document.querySelector('.adding__input');


//Удаление рекламных блоков

promoImages.forEach(item=>{
    item.remove();
})

//Изменение жанра
genre.textContent='ДРАМА'

//Изменение фона 
promoBg.style.backgroundImage='url(../img/bg.jpg)'

// //Формирование списка фильмов




const renderFilms=()=>{


    films.innerHTML='';

    let movies=movieDB.movies;
    movies=movies.sort();
    movies.forEach((item,index)=>{
        
        if(item.length>21){
            item=`${item.slice(0,21)}...`
        }

        films.innerHTML+=
        `<li class="promo__interactive-item">${index+1}.${item}
            <div class="delete"></div>
        </li>`
    })

    const deleteBtn=document.querySelectorAll('.delete');
    deleteBtn.forEach((item,index)=>{

        item.addEventListener('click',()=>{
            item.parentElement.remove();
            movieDB.movies.splice(index,1)
            renderFilms();
        })
    })
}

//Добавление нового фильма

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    input.value ? movieDB.movies.push(input.value) : null;
    renderFilms();
})

renderFilms();



