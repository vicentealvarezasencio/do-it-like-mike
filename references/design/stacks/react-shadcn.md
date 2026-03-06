# React + shadcn/ui — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## State

### Use useState for local state

Simple component state should use useState hook

| | Guidance |
|---|---------|
| **Do** | useState for form inputs toggles counters |
| **Don't** | Class components this.state |
| **Good** | `const [count, setCount] = useState(0)` |
| **Bad** | `this.state = { count: 0 }` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useState |

### Lift state up when needed

Share state between siblings by lifting to parent

| | Guidance |
|---|---------|
| **Do** | Lift shared state to common ancestor |
| **Don't** | Prop drilling through many levels |
| **Good** | `Parent holds state passes down` |
| **Bad** | `Deep prop chains` |
| **Severity** | Medium |
| **Docs** | https://react.dev/learn/sharing-state-between-components |

### Use useReducer for complex state

Complex state logic benefits from reducer pattern

| | Guidance |
|---|---------|
| **Do** | useReducer for state with multiple sub-values |
| **Don't** | Multiple useState for related values |
| **Good** | `useReducer with action types` |
| **Bad** | `5+ useState calls that update together` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useReducer |

### Avoid unnecessary state

Derive values from existing state when possible

| | Guidance |
|---|---------|
| **Do** | Compute derived values in render |
| **Don't** | Store derivable values in state |
| **Good** | `const total = items.reduce(...)` |
| **Bad** | `const [total, setTotal] = useState(0)` |
| **Severity** | High |
| **Docs** | https://react.dev/learn/choosing-the-state-structure |

### Initialize state lazily

Use function form for expensive initial state

| | Guidance |
|---|---------|
| **Do** | useState(() => computeExpensive()) |
| **Don't** | useState(computeExpensive()) |
| **Good** | `useState(() => JSON.parse(data))` |
| **Bad** | `useState(JSON.parse(data))` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useState#avoiding-recreating-the-initial-state |

## Effects

### Clean up effects

Return cleanup function for subscriptions timers

| | Guidance |
|---|---------|
| **Do** | Return cleanup function in useEffect |
| **Don't** | No cleanup for subscriptions |
| **Good** | `useEffect(() => { sub(); return unsub; })` |
| **Bad** | `useEffect(() => { subscribe(); })` |
| **Severity** | High |
| **Docs** | https://react.dev/reference/react/useEffect#connecting-to-an-external-system |

### Specify dependencies correctly

Include all values used inside effect in deps array

| | Guidance |
|---|---------|
| **Do** | All referenced values in dependency array |
| **Don't** | Empty deps with external references |
| **Good** | `[value] when using value in effect` |
| **Bad** | `[] when using props/state in effect` |
| **Severity** | High |
| **Docs** | https://react.dev/reference/react/useEffect#specifying-reactive-dependencies |

### Avoid unnecessary effects

Don't use effects for transforming data or events

| | Guidance |
|---|---------|
| **Do** | Transform data during render handle events directly |
| **Don't** | useEffect for derived state or event handling |
| **Good** | `const filtered = items.filter(...)` |
| **Bad** | `useEffect(() => setFiltered(items.filter(...)))` |
| **Severity** | High |
| **Docs** | https://react.dev/learn/you-might-not-need-an-effect |

### Use refs for non-reactive values

Store values that don't trigger re-renders in refs

| | Guidance |
|---|---------|
| **Do** | useRef for interval IDs DOM elements |
| **Don't** | useState for values that don't need render |
| **Good** | `const intervalRef = useRef(null)` |
| **Bad** | `const [intervalId, setIntervalId] = useState()` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useRef |

## Rendering

### Use keys properly

Stable unique keys for list items

| | Guidance |
|---|---------|
| **Do** | Use stable IDs as keys |
| **Don't** | Array index as key for dynamic lists |
| **Good** | `key={item.id}` |
| **Bad** | `key={index}` |
| **Severity** | High |
| **Docs** | https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key |

### Memoize expensive calculations

Use useMemo for costly computations

| | Guidance |
|---|---------|
| **Do** | useMemo for expensive filtering/sorting |
| **Don't** | Recalculate every render |
| **Good** | `useMemo(() => expensive(), [deps])` |
| **Bad** | `const result = expensiveCalc()` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useMemo |

### Memoize callbacks passed to children

Use useCallback for functions passed as props

| | Guidance |
|---|---------|
| **Do** | useCallback for handlers passed to memoized children |
| **Don't** | New function reference every render |
| **Good** | `useCallback(() => {}, [deps])` |
| **Bad** | `const handler = () => {}` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useCallback |

### Use React.memo wisely

Wrap components that render often with same props

| | Guidance |
|---|---------|
| **Do** | memo for pure components with stable props |
| **Don't** | memo everything or nothing |
| **Good** | `memo(ExpensiveList)` |
| **Bad** | `memo(SimpleButton)` |
| **Severity** | Low |
| **Docs** | https://react.dev/reference/react/memo |

### Avoid inline object/array creation in JSX

Create objects outside render or memoize

| | Guidance |
|---|---------|
| **Do** | Define style objects outside component |
| **Don't** | Inline objects in props |
| **Good** | `<div style={styles.container}>` |
| **Bad** | `<div style={{ margin: 10 }}>` |
| **Severity** | Medium |


## Components

### Keep components small and focused

Single responsibility for each component

| | Guidance |
|---|---------|
| **Do** | One concern per component |
| **Don't** | Large multi-purpose components |
| **Good** | `<UserAvatar /><UserName />` |
| **Bad** | `<UserCard /> with 500 lines` |
| **Severity** | Medium |


### Use composition over inheritance

Compose components using children and props

| | Guidance |
|---|---------|
| **Do** | Use children prop for flexibility |
| **Don't** | Inheritance hierarchies |
| **Good** | `<Card>{content}</Card>` |
| **Bad** | `class SpecialCard extends Card` |
| **Severity** | Medium |
| **Docs** | https://react.dev/learn/thinking-in-react |

### Colocate related code

Keep related components and hooks together

| | Guidance |
|---|---------|
| **Do** | Related files in same directory |
| **Don't** | Flat structure with many files |
| **Good** | `components/User/UserCard.tsx` |
| **Bad** | `components/UserCard.tsx + hooks/useUser.ts` |
| **Severity** | Low |


### Use fragments to avoid extra DOM

Fragment or <> for multiple elements without wrapper

| | Guidance |
|---|---------|
| **Do** | <> for grouping without DOM node |
| **Don't** | Extra div wrappers |
| **Good** | `<>{items.map(...)}</>` |
| **Bad** | `<div>{items.map(...)}</div>` |
| **Severity** | Low |
| **Docs** | https://react.dev/reference/react/Fragment |

## Props

### Destructure props

Destructure props for cleaner component code

| | Guidance |
|---|---------|
| **Do** | Destructure in function signature |
| **Don't** | props.name props.value throughout |
| **Good** | `function User({ name, age })` |
| **Bad** | `function User(props)` |
| **Severity** | Low |


### Provide default props values

Use default parameters or defaultProps

| | Guidance |
|---|---------|
| **Do** | Default values in destructuring |
| **Don't** | Undefined checks throughout |
| **Good** | `function Button({ size = 'md' })` |
| **Bad** | `if (size === undefined) size = 'md'` |
| **Severity** | Low |


### Avoid prop drilling

Use context or composition for deeply nested data

| | Guidance |
|---|---------|
| **Do** | Context for global data composition for UI |
| **Don't** | Passing props through 5+ levels |
| **Good** | `<UserContext.Provider>` |
| **Bad** | `<A user={u}><B user={u}><C user={u}>` |
| **Severity** | Medium |
| **Docs** | https://react.dev/learn/passing-data-deeply-with-context |

### Validate props with TypeScript

Use TypeScript interfaces for prop types

| | Guidance |
|---|---------|
| **Do** | interface Props { name: string } |
| **Don't** | PropTypes or no validation |
| **Good** | `interface ButtonProps { onClick: () => void }` |
| **Bad** | `Button.propTypes = {}` |
| **Severity** | Medium |


## Events

### Use synthetic events correctly

React normalizes events across browsers

| | Guidance |
|---|---------|
| **Do** | e.preventDefault() e.stopPropagation() |
| **Don't** | Access native event unnecessarily |
| **Good** | `onClick={(e) => e.preventDefault()}` |
| **Bad** | `onClick={(e) => e.nativeEvent.preventDefault()}` |
| **Severity** | Low |
| **Docs** | https://react.dev/reference/react-dom/components/common#react-event-object |

### Avoid binding in render

Use arrow functions in class or hooks

| | Guidance |
|---|---------|
| **Do** | Arrow functions in functional components |
| **Don't** | bind in render or constructor |
| **Good** | `const handleClick = () => {}` |
| **Bad** | `this.handleClick.bind(this)` |
| **Severity** | Medium |


### Pass event handlers not call results

Pass function reference not invocation

| | Guidance |
|---|---------|
| **Do** | onClick={handleClick} |
| **Don't** | onClick={handleClick()} causing immediate call |
| **Good** | `onClick={handleClick}` |
| **Bad** | `onClick={handleClick()}` |
| **Severity** | High |


## Forms

### Controlled components for forms

Use state to control form inputs

| | Guidance |
|---|---------|
| **Do** | value + onChange for inputs |
| **Don't** | Uncontrolled inputs with refs |
| **Good** | `<input value={val} onChange={setVal}>` |
| **Bad** | `<input ref={inputRef}>` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react-dom/components/input#controlling-an-input-with-a-state-variable |

### Handle form submission properly

Prevent default and handle in submit handler

| | Guidance |
|---|---------|
| **Do** | onSubmit with preventDefault |
| **Don't** | onClick on submit button only |
| **Good** | `<form onSubmit={handleSubmit}>` |
| **Bad** | `<button onClick={handleSubmit}>` |
| **Severity** | Medium |


### Debounce rapid input changes

Debounce search/filter inputs

| | Guidance |
|---|---------|
| **Do** | useDeferredValue or debounce for search |
| **Don't** | Filter on every keystroke |
| **Good** | `useDeferredValue(searchTerm)` |
| **Bad** | `useEffect filtering on every change` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/useDeferredValue |

## Hooks

### Follow rules of hooks

Only call hooks at top level and in React functions

| | Guidance |
|---|---------|
| **Do** | Hooks at component top level |
| **Don't** | Hooks in conditions loops or callbacks |
| **Good** | `const [x, setX] = useState()` |
| **Bad** | `if (cond) { const [x, setX] = useState() }` |
| **Severity** | High |
| **Docs** | https://react.dev/reference/rules/rules-of-hooks |

### Custom hooks for reusable logic

Extract shared stateful logic to custom hooks

| | Guidance |
|---|---------|
| **Do** | useCustomHook for reusable patterns |
| **Don't** | Duplicate hook logic across components |
| **Good** | `const { data } = useFetch(url)` |
| **Bad** | `Duplicate useEffect/useState in components` |
| **Severity** | Medium |
| **Docs** | https://react.dev/learn/reusing-logic-with-custom-hooks |

### Name custom hooks with use prefix

Custom hooks must start with use

| | Guidance |
|---|---------|
| **Do** | useFetch useForm useAuth |
| **Don't** | fetchData or getData for hook |
| **Good** | `function useFetch(url)` |
| **Bad** | `function fetchData(url)` |
| **Severity** | High |


## Context

### Use context for global data

Context for theme auth locale

| | Guidance |
|---|---------|
| **Do** | Context for app-wide state |
| **Don't** | Context for frequently changing data |
| **Good** | `<ThemeContext.Provider>` |
| **Bad** | `Context for form field values` |
| **Severity** | Medium |
| **Docs** | https://react.dev/learn/passing-data-deeply-with-context |

### Split contexts by concern

Separate contexts for different domains

| | Guidance |
|---|---------|
| **Do** | ThemeContext + AuthContext |
| **Don't** | One giant AppContext |
| **Good** | `<ThemeProvider><AuthProvider>` |
| **Bad** | `<AppProvider value={{theme user...}}>` |
| **Severity** | Medium |


### Memoize context values

Prevent unnecessary re-renders with useMemo

| | Guidance |
|---|---------|
| **Do** | useMemo for context value object |
| **Don't** | New object reference every render |
| **Good** | `value={useMemo(() => ({...}), [])}` |
| **Bad** | `value={{ user, theme }}` |
| **Severity** | High |


## Performance

### Use React DevTools Profiler

Profile to identify performance bottlenecks

| | Guidance |
|---|---------|
| **Do** | Profile before optimizing |
| **Don't** | Optimize without measuring |
| **Good** | `React DevTools Profiler` |
| **Bad** | `Guessing at bottlenecks` |
| **Severity** | Medium |
| **Docs** | https://react.dev/learn/react-developer-tools |

### Lazy load components

Use React.lazy for code splitting

| | Guidance |
|---|---------|
| **Do** | lazy() for routes and heavy components |
| **Don't** | Import everything upfront |
| **Good** | `const Page = lazy(() => import('./Page'))` |
| **Bad** | `import Page from './Page'` |
| **Severity** | Medium |
| **Docs** | https://react.dev/reference/react/lazy |

### Virtualize long lists

Use windowing for lists over 100 items

| | Guidance |
|---|---------|
| **Do** | react-window or react-virtual |
| **Don't** | Render thousands of DOM nodes |
| **Good** | `<VirtualizedList items={items}/>` |
| **Bad** | `{items.map(i => <Item />)}` |
| **Severity** | High |


### Batch state updates

React 18 auto-batches but be aware

| | Guidance |
|---|---------|
| **Do** | Let React batch related updates |
| **Don't** | Manual batching with flushSync |
| **Good** | `setA(1); setB(2); // batched` |
| **Bad** | `flushSync(() => setA(1))` |
| **Severity** | Low |
| **Docs** | https://react.dev/learn/queueing-a-series-of-state-updates |

## ErrorHandling

### Use error boundaries

Catch JavaScript errors in component tree

| | Guidance |
|---|---------|
| **Do** | ErrorBoundary wrapping sections |
| **Don't** | Let errors crash entire app |
| **Good** | `<ErrorBoundary><App/></ErrorBoundary>` |
| **Bad** | `No error handling` |
| **Severity** | High |
| **Docs** | https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary |

### Handle async errors

Catch errors in async operations

| | Guidance |
|---|---------|
| **Do** | try/catch in async handlers |
| **Don't** | Unhandled promise rejections |
| **Good** | `try { await fetch() } catch(e) {}` |
| **Bad** | `await fetch() // no catch` |
| **Severity** | High |


## Testing

### Test behavior not implementation

Test what user sees and does

| | Guidance |
|---|---------|
| **Do** | Test renders and interactions |
| **Don't** | Test internal state or methods |
| **Good** | `expect(screen.getByText('Hello'))` |
| **Bad** | `expect(component.state.name)` |
| **Severity** | Medium |
| **Docs** | https://testing-library.com/docs/react-testing-library/intro/ |

### Use testing-library queries

Use accessible queries

| | Guidance |
|---|---------|
| **Do** | getByRole getByLabelText |
| **Don't** | getByTestId for everything |
| **Good** | `getByRole('button')` |
| **Bad** | `getByTestId('submit-btn')` |
| **Severity** | Medium |
| **Docs** | https://testing-library.com/docs/queries/about#priority |

## Accessibility

### Use semantic HTML

Proper HTML elements for their purpose

| | Guidance |
|---|---------|
| **Do** | button for clicks nav for navigation |
| **Don't** | div with onClick for buttons |
| **Good** | `<button onClick={...}>` |
| **Bad** | `<div onClick={...}>` |
| **Severity** | High |
| **Docs** | https://react.dev/reference/react-dom/components#all-html-components |

### Manage focus properly

Handle focus for modals dialogs

| | Guidance |
|---|---------|
| **Do** | Focus trap in modals return focus on close |
| **Don't** | No focus management |
| **Good** | `useEffect to focus input` |
| **Bad** | `Modal without focus trap` |
| **Severity** | High |


### Announce dynamic content

Use ARIA live regions for updates

| | Guidance |
|---|---------|
| **Do** | aria-live for dynamic updates |
| **Don't** | Silent updates to screen readers |
| **Good** | `<div aria-live="polite">{msg}</div>` |
| **Bad** | `<div>{msg}</div>` |
| **Severity** | Medium |


### Label form controls

Associate labels with inputs

| | Guidance |
|---|---------|
| **Do** | htmlFor matching input id |
| **Don't** | Placeholder as only label |
| **Good** | `<label htmlFor="email">Email</label>` |
| **Bad** | `<input placeholder="Email"/>` |
| **Severity** | High |


## TypeScript

### Type component props

Define interfaces for all props

| | Guidance |
|---|---------|
| **Do** | interface Props with all prop types |
| **Don't** | any or missing types |
| **Good** | `interface Props { name: string }` |
| **Bad** | `function Component(props: any)` |
| **Severity** | High |


### Type state properly

Provide types for useState

| | Guidance |
|---|---------|
| **Do** | useState<Type>() for complex state |
| **Don't** | Inferred any types |
| **Good** | `useState<User | null>(null)` |
| **Bad** | `useState(null)` |
| **Severity** | Medium |


### Type event handlers

Use React event types

| | Guidance |
|---|---------|
| **Do** | React.ChangeEvent<HTMLInputElement> |
| **Don't** | Generic Event type |
| **Good** | `onChange: React.ChangeEvent<HTMLInputElement>` |
| **Bad** | `onChange: Event` |
| **Severity** | Medium |


### Use generics for reusable components

Generic components for flexible typing

| | Guidance |
|---|---------|
| **Do** | Generic props for list components |
| **Don't** | Union types for flexibility |
| **Good** | `<List<T> items={T[]}>` |
| **Bad** | `<List items={any[]}>` |
| **Severity** | Medium |


## Patterns

### Container/Presentational split

Separate data logic from UI

| | Guidance |
|---|---------|
| **Do** | Container fetches presentational renders |
| **Don't** | Mixed data and UI in one |
| **Good** | `<UserContainer><UserView/></UserContainer>` |
| **Bad** | `<User /> with fetch and render` |
| **Severity** | Low |


### Render props for flexibility

Share code via render prop pattern

| | Guidance |
|---|---------|
| **Do** | Render prop for customizable rendering |
| **Don't** | Duplicate logic across components |
| **Good** | `<DataFetcher render={data => ...}/>` |
| **Bad** | `Copy paste fetch logic` |
| **Severity** | Low |
| **Docs** | https://react.dev/reference/react/cloneElement#passing-data-with-a-render-prop |

### Compound components

Related components sharing state

| | Guidance |
|---|---------|
| **Do** | Tab + TabPanel sharing context |
| **Don't** | Prop drilling between related |
| **Good** | `<Tabs><Tab/><TabPanel/></Tabs>` |
| **Bad** | `<Tabs tabs={[]} panels={[...]}/>` |
| **Severity** | Low |


