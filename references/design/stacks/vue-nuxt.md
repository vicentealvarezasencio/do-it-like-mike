# Vue / Nuxt — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Composition

### Use Composition API for new projects

Composition API offers better TypeScript support and logic reuse

| | Guidance |
|---|---------|
| **Do** | <script setup> for components |
| **Don't** | Options API for new projects |
| **Good** | `<script setup>` |
| **Bad** | `export default { data() }` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/extras/composition-api-faq.html |

### Use script setup syntax

Cleaner syntax with automatic exports

| | Guidance |
|---|---------|
| **Do** | <script setup> with defineProps |
| **Don't** | setup() function manually |
| **Good** | `<script setup>` |
| **Bad** | `<script> setup() { return {} }` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/api/sfc-script-setup.html |

## Reactivity

### Use ref for primitives

ref() for primitive values that need reactivity

| | Guidance |
|---|---------|
| **Do** | ref() for strings numbers booleans |
| **Don't** | reactive() for primitives |
| **Good** | `const count = ref(0)` |
| **Bad** | `const count = reactive(0)` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/essentials/reactivity-fundamentals.html |

### Use reactive for objects

reactive() for complex objects and arrays

| | Guidance |
|---|---------|
| **Do** | reactive() for objects with multiple properties |
| **Don't** | ref() for complex objects |
| **Good** | `const state = reactive({ user: null })` |
| **Bad** | `const state = ref({ user: null })` |
| **Severity** | Medium |


### Access ref values with .value

Remember .value in script unwrap in template

| | Guidance |
|---|---------|
| **Do** | Use .value in script |
| **Don't** | Forget .value in script |
| **Good** | `count.value++` |
| **Bad** | `count++ (in script)` |
| **Severity** | High |


### Use computed for derived state

Computed properties cache and update automatically

| | Guidance |
|---|---------|
| **Do** | computed() for derived values |
| **Don't** | Methods for derived values |
| **Good** | `const doubled = computed(() => count.value * 2)` |
| **Bad** | `const doubled = () => count.value * 2` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/essentials/computed.html |

### Use shallowRef for large objects

Avoid deep reactivity for performance

| | Guidance |
|---|---------|
| **Do** | shallowRef for large data structures |
| **Don't** | ref for large nested objects |
| **Good** | `const bigData = shallowRef(largeObject)` |
| **Bad** | `const bigData = ref(largeObject)` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/api/reactivity-advanced.html#shallowref |

## Watchers

### Use watchEffect for simple cases

Auto-tracks dependencies

| | Guidance |
|---|---------|
| **Do** | watchEffect for simple reactive effects |
| **Don't** | watch with explicit deps when not needed |
| **Good** | `watchEffect(() => console.log(count.value))` |
| **Bad** | `watch(count, (val) => console.log(val))` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/guide/essentials/watchers.html |

### Use watch for specific sources

Explicit control over what to watch

| | Guidance |
|---|---------|
| **Do** | watch with specific refs |
| **Don't** | watchEffect for complex conditional logic |
| **Good** | `watch(userId, fetchUser)` |
| **Bad** | `watchEffect with conditionals` |
| **Severity** | Medium |


### Clean up side effects

Return cleanup function in watchers

| | Guidance |
|---|---------|
| **Do** | Return cleanup in watchEffect |
| **Don't** | Leave subscriptions open |
| **Good** | `watchEffect((onCleanup) => { onCleanup(unsub) })` |
| **Bad** | `watchEffect without cleanup` |
| **Severity** | High |


## Props

### Define props with defineProps

Type-safe prop definitions

| | Guidance |
|---|---------|
| **Do** | defineProps with TypeScript |
| **Don't** | Props without types |
| **Good** | `defineProps<{ msg: string }>()` |
| **Bad** | `defineProps(['msg'])` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/typescript/composition-api.html#typing-component-props |

### Use withDefaults for default values

Provide defaults for optional props

| | Guidance |
|---|---------|
| **Do** | withDefaults with defineProps |
| **Don't** | Defaults in destructuring |
| **Good** | `withDefaults(defineProps<Props>(), { count: 0 })` |
| **Bad** | `const { count = 0 } = defineProps()` |
| **Severity** | Medium |


### Avoid mutating props

Props should be read-only

| | Guidance |
|---|---------|
| **Do** | Emit events to parent for changes |
| **Don't** | Direct prop mutation |
| **Good** | `emit('update:modelValue', newVal)` |
| **Bad** | `props.modelValue = newVal` |
| **Severity** | High |


## Emits

### Define emits with defineEmits

Type-safe event emissions

| | Guidance |
|---|---------|
| **Do** | defineEmits with types |
| **Don't** | Emit without definition |
| **Good** | `defineEmits<{ change: [id: number] }>()` |
| **Bad** | `emit('change', id) without define` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits |

### Use v-model for two-way binding

Simplified parent-child data flow

| | Guidance |
|---|---------|
| **Do** | v-model with modelValue prop |
| **Don't** | :value + @input manually |
| **Good** | `<Child v-model="value"/>` |
| **Bad** | `<Child :value="value" @input="value = $event"/>` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/guide/components/v-model.html |

## Lifecycle

### Use onMounted for DOM access

DOM is ready in onMounted

| | Guidance |
|---|---------|
| **Do** | onMounted for DOM operations |
| **Don't** | Access DOM in setup directly |
| **Good** | `onMounted(() => el.value.focus())` |
| **Bad** | `el.value.focus() in setup` |
| **Severity** | High |
| **Docs** | https://vuejs.org/api/composition-api-lifecycle.html |

### Clean up in onUnmounted

Remove listeners and subscriptions

| | Guidance |
|---|---------|
| **Do** | onUnmounted for cleanup |
| **Don't** | Leave listeners attached |
| **Good** | `onUnmounted(() => window.removeEventListener())` |
| **Bad** | `No cleanup on unmount` |
| **Severity** | High |


### Avoid onBeforeMount for data

Use onMounted or setup for data fetching

| | Guidance |
|---|---------|
| **Do** | Fetch in onMounted or setup |
| **Don't** | Fetch in onBeforeMount |
| **Good** | `onMounted(async () => await fetchData())` |
| **Bad** | `onBeforeMount(async () => await fetchData())` |
| **Severity** | Low |


## Components

### Use single-file components

Keep template script style together

| | Guidance |
|---|---------|
| **Do** | .vue files for components |
| **Don't** | Separate template/script files |
| **Good** | `Component.vue with all parts` |
| **Bad** | `Component.js + Component.html` |
| **Severity** | Low |


### Use PascalCase for components

Consistent component naming

| | Guidance |
|---|---------|
| **Do** | PascalCase in imports and templates |
| **Don't** | kebab-case in script |
| **Good** | `<MyComponent/>` |
| **Bad** | `<my-component/>` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/style-guide/rules-strongly-recommended.html |

### Prefer composition over mixins

Composables replace mixins

| | Guidance |
|---|---------|
| **Do** | Composables for shared logic |
| **Don't** | Mixins for code reuse |
| **Good** | `const { data } = useApi()` |
| **Bad** | `mixins: [apiMixin]` |
| **Severity** | Medium |


## Composables

### Name composables with use prefix

Convention for composable functions

| | Guidance |
|---|---------|
| **Do** | useFetch useAuth useForm |
| **Don't** | getData or fetchApi |
| **Good** | `export function useFetch()` |
| **Bad** | `export function fetchData()` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/reusability/composables.html |

### Return refs from composables

Maintain reactivity when destructuring

| | Guidance |
|---|---------|
| **Do** | Return ref values |
| **Don't** | Return reactive objects that lose reactivity |
| **Good** | `return { data: ref(null) }` |
| **Bad** | `return reactive({ data: null })` |
| **Severity** | Medium |


### Accept ref or value params

Use toValue for flexible inputs

| | Guidance |
|---|---------|
| **Do** | toValue() or unref() for params |
| **Don't** | Only accept ref or only value |
| **Good** | `const val = toValue(maybeRef)` |
| **Bad** | `const val = maybeRef.value` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/api/reactivity-utilities.html#tovalue |

## Templates

### Use v-bind shorthand

Cleaner template syntax

| | Guidance |
|---|---------|
| **Do** | :prop instead of v-bind:prop |
| **Don't** | Full v-bind syntax |
| **Good** | `<div :class="cls">` |
| **Bad** | `<div v-bind:class="cls">` |
| **Severity** | Low |


### Use v-on shorthand

Cleaner event binding

| | Guidance |
|---|---------|
| **Do** | @event instead of v-on:event |
| **Don't** | Full v-on syntax |
| **Good** | `<button @click="handler">` |
| **Bad** | `<button v-on:click="handler">` |
| **Severity** | Low |


### Avoid v-if with v-for

v-if has higher priority causes issues

| | Guidance |
|---|---------|
| **Do** | Wrap in template or computed filter |
| **Don't** | v-if on same element as v-for |
| **Good** | `<template v-for><div v-if>` |
| **Bad** | `<div v-for v-if>` |
| **Severity** | High |
| **Docs** | https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for |

### Use key with v-for

Proper list rendering and updates

| | Guidance |
|---|---------|
| **Do** | Unique key for each item |
| **Don't** | Index as key for dynamic lists |
| **Good** | `v-for="item in items" :key="item.id"` |
| **Bad** | `v-for="(item, i) in items" :key="i"` |
| **Severity** | High |


## State

### Use Pinia for global state

Official state management for Vue 3

| | Guidance |
|---|---------|
| **Do** | Pinia stores for shared state |
| **Don't** | Vuex for new projects |
| **Good** | `const store = useCounterStore()` |
| **Bad** | `Vuex with mutations` |
| **Severity** | Medium |
| **Docs** | https://pinia.vuejs.org/ |

### Define stores with defineStore

Composition API style stores

| | Guidance |
|---|---------|
| **Do** | Setup stores with defineStore |
| **Don't** | Options stores for complex state |
| **Good** | `defineStore('counter', () => {})` |
| **Bad** | `defineStore('counter', { state })` |
| **Severity** | Low |


### Use storeToRefs for destructuring

Maintain reactivity when destructuring

| | Guidance |
|---|---------|
| **Do** | storeToRefs(store) |
| **Don't** | Direct destructuring |
| **Good** | `const { count } = storeToRefs(store)` |
| **Bad** | `const { count } = store` |
| **Severity** | High |
| **Docs** | https://pinia.vuejs.org/core-concepts/#destructuring-from-a-store |

## Routing

### Use useRouter and useRoute

Composition API router access

| | Guidance |
|---|---------|
| **Do** | useRouter() useRoute() in setup |
| **Don't** | this.$router this.$route |
| **Good** | `const router = useRouter()` |
| **Bad** | `this.$router.push()` |
| **Severity** | Medium |
| **Docs** | https://router.vuejs.org/guide/advanced/composition-api.html |

### Lazy load route components

Code splitting for routes

| | Guidance |
|---|---------|
| **Do** | () => import() for components |
| **Don't** | Static imports for all routes |
| **Good** | `component: () => import('./Page.vue')` |
| **Bad** | `component: Page` |
| **Severity** | Medium |
| **Docs** | https://router.vuejs.org/guide/advanced/lazy-loading.html |

### Use navigation guards

Protect routes and handle redirects

| | Guidance |
|---|---------|
| **Do** | beforeEach for auth checks |
| **Don't** | Check auth in each component |
| **Good** | `router.beforeEach((to) => {})` |
| **Bad** | `Check auth in onMounted` |
| **Severity** | Medium |


## Performance

### Use v-once for static content

Skip re-renders for static elements

| | Guidance |
|---|---------|
| **Do** | v-once on never-changing content |
| **Don't** | v-once on dynamic content |
| **Good** | `<div v-once>{{ staticText }}</div>` |
| **Bad** | `<div v-once>{{ dynamicText }}</div>` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/api/built-in-directives.html#v-once |

### Use v-memo for expensive lists

Memoize list items

| | Guidance |
|---|---------|
| **Do** | v-memo with dependency array |
| **Don't** | Re-render entire list always |
| **Good** | `<div v-for v-memo="[item.id]">` |
| **Bad** | `<div v-for> without memo` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/api/built-in-directives.html#v-memo |

### Use shallowReactive for flat objects

Avoid deep reactivity overhead

| | Guidance |
|---|---------|
| **Do** | shallowReactive for flat state |
| **Don't** | reactive for simple objects |
| **Good** | `shallowReactive({ count: 0 })` |
| **Bad** | `reactive({ count: 0 })` |
| **Severity** | Low |


### Use defineAsyncComponent

Lazy load heavy components

| | Guidance |
|---|---------|
| **Do** | defineAsyncComponent for modals dialogs |
| **Don't** | Import all components eagerly |
| **Good** | `defineAsyncComponent(() => import())` |
| **Bad** | `import HeavyComponent from` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/components/async.html |

## TypeScript

### Use generic components

Type-safe reusable components

| | Guidance |
|---|---------|
| **Do** | Generic with defineComponent |
| **Don't** | Any types in components |
| **Good** | `<script setup lang="ts" generic="T">` |
| **Bad** | `<script setup> without types` |
| **Severity** | Medium |
| **Docs** | https://vuejs.org/guide/typescript/composition-api.html |

### Type template refs

Proper typing for DOM refs

| | Guidance |
|---|---------|
| **Do** | ref<HTMLInputElement>(null) |
| **Don't** | ref(null) without type |
| **Good** | `const input = ref<HTMLInputElement>(null)` |
| **Bad** | `const input = ref(null)` |
| **Severity** | Medium |


### Use PropType for complex props

Type complex prop types

| | Guidance |
|---|---------|
| **Do** | PropType<User> for object props |
| **Don't** | Object without type |
| **Good** | `type: Object as PropType<User>` |
| **Bad** | `type: Object` |
| **Severity** | Medium |


## Testing

### Use Vue Test Utils

Official testing library

| | Guidance |
|---|---------|
| **Do** | mount shallowMount for components |
| **Don't** | Manual DOM testing |
| **Good** | `import { mount } from '@vue/test-utils'` |
| **Bad** | `document.createElement` |
| **Severity** | Medium |
| **Docs** | https://test-utils.vuejs.org/ |

### Test component behavior

Focus on inputs and outputs

| | Guidance |
|---|---------|
| **Do** | Test props emit and rendered output |
| **Don't** | Test internal implementation |
| **Good** | `expect(wrapper.text()).toContain()` |
| **Bad** | `expect(wrapper.vm.internalState)` |
| **Severity** | Medium |


## Forms

### Use v-model modifiers

Built-in input handling

| | Guidance |
|---|---------|
| **Do** | .lazy .number .trim modifiers |
| **Don't** | Manual input parsing |
| **Good** | `<input v-model.number="age">` |
| **Bad** | `<input v-model="age"> then parse` |
| **Severity** | Low |
| **Docs** | https://vuejs.org/guide/essentials/forms.html#modifiers |

### Use VeeValidate or FormKit

Form validation libraries

| | Guidance |
|---|---------|
| **Do** | VeeValidate for complex forms |
| **Don't** | Manual validation logic |
| **Good** | `useField useForm from vee-validate` |
| **Bad** | `Custom validation in each input` |
| **Severity** | Medium |


## Accessibility

### Use semantic elements

Proper HTML elements in templates

| | Guidance |
|---|---------|
| **Do** | button nav main for purpose |
| **Don't** | div for everything |
| **Good** | `<button @click>` |
| **Bad** | `<div @click>` |
| **Severity** | High |


### Bind aria attributes dynamically

Keep ARIA in sync with state

| | Guidance |
|---|---------|
| **Do** | :aria-expanded="isOpen" |
| **Don't** | Static ARIA values |
| **Good** | `:aria-expanded="menuOpen"` |
| **Bad** | `aria-expanded="true"` |
| **Severity** | Medium |


## SSR

### Use Nuxt for SSR

Full-featured SSR framework

| | Guidance |
|---|---------|
| **Do** | Nuxt 3 for SSR apps |
| **Don't** | Manual SSR setup |
| **Good** | `npx nuxi init my-app` |
| **Bad** | `Custom SSR configuration` |
| **Severity** | Medium |
| **Docs** | https://nuxt.com/ |

### Handle hydration mismatches

Client/server content must match

| | Guidance |
|---|---------|
| **Do** | ClientOnly for browser-only content |
| **Don't** | Different content server/client |
| **Good** | `<ClientOnly><BrowserWidget/></ClientOnly>` |
| **Bad** | `<div>{{ Date.now() }}</div>` |
| **Severity** | High |


