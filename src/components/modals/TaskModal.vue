<template>
  <div class="pop-browse" id="popBrowse">
    <div class="pop-browse__container">
      <div class="pop-browse__block">
        <div class="pop-browse__content">
          <div class="pop-browse__top-block">
            <h3 class="pop-browse__ttl">Название задачи</h3>
            <div class="categories__theme theme-top _orange _active-category">
              <p class="_orange">Web Design</p>
            </div>
          </div>
          <div class="pop-browse__status status">
            <p class="status__p subttl">Статус</p>
            <div class="status__themes">
              <div class="status__theme _hide">
                <p>Без статуса</p>
              </div>
              <div class="status__theme _gray">
                <p class="_gray">Нужно сделать</p>
              </div>
              <div class="status__theme _hide">
                <p>В работе</p>
              </div>
              <div class="status__theme _hide">
                <p>Тестирование</p>
              </div>
              <div class="status__theme _hide">
                <p>Готово</p>
              </div>
            </div>
          </div>
          <div class="pop-browse__wrap">
            <form class="pop-browse__form form-browse" id="formBrowseCard" action="#">
              <div class="form-browse__block">
                <label for="textArea01" class="subttl">Описание задачи</label>
                <textarea
                  class="form-browse__area"
                  name="text"
                  id="textArea01"
                  readonly
                  placeholder="Введите описание задачи..."
                ></textarea>
              </div>
            </form>
            <BaseCalendar />
          </div>
          <div class="theme-down__categories theme-down">
            <p class="categories__p subttl">Категория</p>
            <div class="categories__theme _orange _active-category">
              <p class="_orange">Web Design</p>
            </div>
          </div>
          <div class="pop-browse__btn-browse">
            <div class="btn-group">
              <button class="btn-browse__edit _btn-bor _hover03">
                <a href="#">Редактировать задачу</a>
              </button>
              <button class="btn-browse__delete _btn-bor _hover03">
                <a href="#">Удалить задачу</a>
              </button>
            </div>
            <button class="btn-browse__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
          </div>
          <div class="pop-browse__btn-edit _hide">
            <div class="btn-group">
              <button class="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
              <button class="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
              <button class="btn-edit__delete _btn-bor _hover03" id="btnDelete">
                <a href="#">Удалить задачу</a>
              </button>
            </div>
            <button class="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseCalendar from '@/components/ui/BaseCalendar.vue'
</script>

<style lang="scss" scoped>
.pop-browse {
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
}
.pop-browse__container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
}
.pop-browse__block {
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
}
.pop-browse__content {
  display: block;
  text-align: left;
}
.pop-browse__content .categories__theme {
  opacity: 1;
}
.pop-browse__content .theme-down {
  display: none;
  margin-bottom: 20px;
}
.pop-browse__content .theme-top {
  display: block;
}
.pop-browse__top-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.pop-browse__ttl {
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
}
.pop-browse__wrap {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.pop-browse__form {
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
}
.pop-browse__btn-browse,
.pop-browse__btn-edit {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
}
.pop-browse__btn-browse button,
.pop-browse__btn-edit button {
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
}
.pop-browse__btn-browse .btn-group button,
.pop-browse__btn-edit .btn-group button {
  margin-right: 8px;
}
</style>
