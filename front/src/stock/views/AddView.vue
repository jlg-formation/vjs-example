<script setup lang="ts">
import FormAsyncBtn from '@/components/FormAsyncBtn.vue'
import { sleep } from '@/utils'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { NewArticle } from '../interfaces/Article'
import { getNewArticleValidationObject, isFormInvalid } from '../newArticle.validation'
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

const validation = computed(() => getNewArticleValidationObject(newArticle.value))
const isInvalid = computed(() => isFormInvalid(validation.value))

const checkQtyInput = (event: KeyboardEvent) => {
  console.log('event: ', event)
  if (['.', 'e'].includes(event.key)) {
    event.preventDefault()
  }
}
</script>

<template>
  <div class="page">
    <main>
      <h1>Ajouter un article</h1>
      <form @submit.prevent="handleSubmit" ref="addForm">
        <label>
          <span>Nom</span>
          <input type="text" v-model="newArticle.name" :class="{ invalid: validation.name }" />
          <span class="error">
            {{ validation.name }}
          </span>
        </label>
        <label>
          <span>Prix</span>
          <input type="number" v-model="newArticle.price" :class="{ invalid: validation.price }" />
          <span class="error"> {{ validation.price }}</span>
        </label>
        <label>
          <span>Quantité</span>
          <input
            type="number"
            v-model="newArticle.qty"
            :class="{ invalid: validation.qty }"
            pattern="\d+"
            @keypress="checkQtyInput"
          />
          <span class="error">
            {{ validation.qty }}
          </span>
        </label>
        <div class="error">
          {{ errorMsg }}
        </div>
        <FormAsyncBtn :icon="faPlus" :isSubmiting="isSubmiting" :isDisabled="isInvalid">
          <span>Ajouter</span>
        </FormAsyncBtn>
      </form>
    </main>
  </div>
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
      &.invalid {
        border-color: tomato;
        outline-color: tomato;
      }
    }

    span.error {
      height: 1em;
      font-weight: bold;
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
