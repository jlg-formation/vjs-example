<script setup lang="ts">
import FormAsyncBtn from '@/components/FormAsyncBtn.vue'
import { sleep } from '@/utils'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import type { NewArticle } from '../interfaces/Article'
import { useArticleStore } from '../store/articleStore'

const newArticle = ref<NewArticle>({ name: 'xxx', price: 0, qty: 0 })

const articleStore = useArticleStore()

const router = useRouter()

const isSubmiting = ref(false)
const errorMsg = ref('')

const handleSubmit = async () => {
  try {
    console.log('submit form')
    errorMsg.value = ''
    isSubmiting.value = true
    await sleep(2000)
    await articleStore.add(newArticle.value)
    await router.push('/stock')
  } catch (err) {
    console.log('err: ', err)
    errorMsg.value = 'Problème technique'
  } finally {
    isSubmiting.value = false
  }
}

const addForm = ref<HTMLFormElement>()
</script>

<template>
  <main>
    <h1>Ajouter un article</h1>
    <form @submit.prevent="handleSubmit" ref="addForm">
      <label>
        <span>Nom</span>
        <input type="text" v-model="newArticle.name" />
        <span class="error"></span>
      </label>
      <label>
        <span>Prix</span>
        <input type="number" v-model="newArticle.price" />
        <span class="error"></span>
      </label>
      <label>
        <span>Quantité</span>
        <input type="number" v-model="newArticle.qty" />
        <span class="error"></span>
      </label>
      <div class="error">
        {{ errorMsg }}
      </div>
      <FormAsyncBtn :icon="faPlus" :isSubmiting="isSubmiting">
        <span>Ajouter</span>
      </FormAsyncBtn>
    </form>
  </main>
</template>

<style scoped>
form {
  display: flex;
  flex-flow: column;
  gap: 0.5em;

  width: 100%;
  max-width: 25em;

  label {
    display: flex;
    flex-flow: column;

    input {
      padding: 0.5em 1em;
      border: 0.1em solid #aaa;
      border-radius: 0.3em;
    }

    span.error {
      height: 1em;
    }
  }

  div.error {
    height: 3em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
