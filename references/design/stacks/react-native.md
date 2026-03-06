# React Native — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Components

### Use functional components

Hooks-based components are standard

| | Guidance |
|---|---------|
| **Do** | Functional components with hooks |
| **Don't** | Class components |
| **Good** | `const App = () => { }` |
| **Bad** | `class App extends Component` |
| **Severity** | Medium |
| **Docs** | https://reactnative.dev/docs/intro-react |

### Keep components small

Single responsibility principle

| | Guidance |
|---|---------|
| **Do** | Split into smaller components |
| **Don't** | Large monolithic components |
| **Good** | `<Header /><Content /><Footer />` |
| **Bad** | `500+ line component` |
| **Severity** | Medium |


### Use TypeScript

Type safety for props and state

| | Guidance |
|---|---------|
| **Do** | TypeScript for new projects |
| **Don't** | JavaScript without types |
| **Good** | `const Button: FC<Props> = () => { }` |
| **Bad** | `const Button = (props) => { }` |
| **Severity** | Medium |


### Colocate component files

Keep related files together

| | Guidance |
|---|---------|
| **Do** | Component folder with styles |
| **Don't** | Flat structure |
| **Good** | `components/Button/index.tsx styles.ts` |
| **Bad** | `components/Button.tsx styles/button.ts` |
| **Severity** | Low |


## Styling

### Use StyleSheet.create

Optimized style objects

| | Guidance |
|---|---------|
| **Do** | StyleSheet for all styles |
| **Don't** | Inline style objects |
| **Good** | `StyleSheet.create({ container: {} })` |
| **Bad** | `style={{ margin: 10 }}` |
| **Severity** | High |
| **Docs** | https://reactnative.dev/docs/stylesheet |

### Avoid inline styles

Prevent object recreation

| | Guidance |
|---|---------|
| **Do** | Styles in StyleSheet |
| **Don't** | Inline style objects in render |
| **Good** | `style={styles.container}` |
| **Bad** | `style={{ margin: 10, padding: 5 }}` |
| **Severity** | Medium |


### Use flexbox for layout

React Native uses flexbox

| | Guidance |
|---|---------|
| **Do** | flexDirection alignItems justifyContent |
| **Don't** | Absolute positioning everywhere |
| **Good** | `flexDirection: 'row'` |
| **Bad** | `position: 'absolute' everywhere` |
| **Severity** | Medium |
| **Docs** | https://reactnative.dev/docs/flexbox |

### Handle platform differences

Platform-specific styles

| | Guidance |
|---|---------|
| **Do** | Platform.select or .ios/.android files |
| **Don't** | Same styles for both platforms |
| **Good** | `Platform.select({ ios: {}, android: {} })` |
| **Bad** | `Hardcoded iOS values` |
| **Severity** | Medium |
| **Docs** | https://reactnative.dev/docs/platform-specific-code |

### Use responsive dimensions

Scale for different screens

| | Guidance |
|---|---------|
| **Do** | Dimensions or useWindowDimensions |
| **Don't** | Fixed pixel values |
| **Good** | `useWindowDimensions()` |
| **Bad** | `width: 375` |
| **Severity** | Medium |


## Navigation

### Use React Navigation

Standard navigation library

| | Guidance |
|---|---------|
| **Do** | React Navigation for routing |
| **Don't** | Manual navigation management |
| **Good** | `createStackNavigator()` |
| **Bad** | `Custom navigation state` |
| **Severity** | Medium |
| **Docs** | https://reactnavigation.org/ |

### Type navigation params

Type-safe navigation

| | Guidance |
|---|---------|
| **Do** | Typed navigation props |
| **Don't** | Untyped navigation |
| **Good** | `navigation.navigate<RootStackParamList>('Home', { id })` |
| **Bad** | `navigation.navigate('Home', { id })` |
| **Severity** | Medium |


### Use deep linking

Support URL-based navigation

| | Guidance |
|---|---------|
| **Do** | Configure linking prop |
| **Don't** | No deep link support |
| **Good** | `linking: { prefixes: [] }` |
| **Bad** | `No linking configuration` |
| **Severity** | Medium |
| **Docs** | https://reactnavigation.org/docs/deep-linking/ |

### Handle back button

Android back button handling

| | Guidance |
|---|---------|
| **Do** | useFocusEffect with BackHandler |
| **Don't** | Ignore back button |
| **Good** | `BackHandler.addEventListener` |
| **Bad** | `No back handler` |
| **Severity** | High |


## State

### Use useState for local state

Simple component state

| | Guidance |
|---|---------|
| **Do** | useState for UI state |
| **Don't** | Class component state |
| **Good** | `const [count, setCount] = useState(0)` |
| **Bad** | `this.state = { count: 0 }` |
| **Severity** | Medium |


### Use useReducer for complex state

Complex state logic

| | Guidance |
|---|---------|
| **Do** | useReducer for related state |
| **Don't** | Multiple useState for related values |
| **Good** | `useReducer(reducer initialState)` |
| **Bad** | `5+ useState calls` |
| **Severity** | Medium |


### Use context sparingly

Context for global state

| | Guidance |
|---|---------|
| **Do** | Context for theme auth locale |
| **Don't** | Context for frequently changing data |
| **Good** | `ThemeContext for app theme` |
| **Bad** | `Context for list item data` |
| **Severity** | Medium |


### Consider Zustand or Redux

External state management

| | Guidance |
|---|---------|
| **Do** | Zustand for simple Redux for complex |
| **Don't** | useState for global state |
| **Good** | `create((set) => ({ }))` |
| **Bad** | `Prop drilling global state` |
| **Severity** | Medium |


## Lists

### Use FlatList for long lists

Virtualized list rendering

| | Guidance |
|---|---------|
| **Do** | FlatList for 50+ items |
| **Don't** | ScrollView with map |
| **Good** | `<FlatList data={items} />` |
| **Bad** | `<ScrollView>{items.map()}</ScrollView>` |
| **Severity** | High |
| **Docs** | https://reactnative.dev/docs/flatlist |

### Provide keyExtractor

Unique keys for list items

| | Guidance |
|---|---------|
| **Do** | keyExtractor with stable ID |
| **Don't** | Index as key |
| **Good** | `keyExtractor={(item) => item.id}` |
| **Bad** | `keyExtractor={(_, index) => index}` |
| **Severity** | High |


### Optimize renderItem

Memoize list item components

| | Guidance |
|---|---------|
| **Do** | React.memo for list items |
| **Don't** | Inline render function |
| **Good** | `renderItem={({ item }) => <MemoizedItem item={item} />}` |
| **Bad** | `renderItem={({ item }) => <View>...</View>}` |
| **Severity** | High |


### Use getItemLayout for fixed height

Skip measurement for performance

| | Guidance |
|---|---------|
| **Do** | getItemLayout when height known |
| **Don't** | Dynamic measurement for fixed items |
| **Good** | `getItemLayout={(_, index) => ({ length: 50, offset: 50 * index, index })}` |
| **Bad** | `No getItemLayout for fixed height` |
| **Severity** | Medium |


### Implement windowSize

Control render window

| | Guidance |
|---|---------|
| **Do** | Smaller windowSize for memory |
| **Don't** | Default windowSize for large lists |
| **Good** | `windowSize={5}` |
| **Bad** | `windowSize={21} for huge lists` |
| **Severity** | Medium |


## Performance

### Use React.memo

Prevent unnecessary re-renders

| | Guidance |
|---|---------|
| **Do** | memo for pure components |
| **Don't** | No memoization |
| **Good** | `export default memo(MyComponent)` |
| **Bad** | `export default MyComponent` |
| **Severity** | Medium |


### Use useCallback for handlers

Stable function references

| | Guidance |
|---|---------|
| **Do** | useCallback for props |
| **Don't** | New function on every render |
| **Good** | `useCallback(() => {}, [deps])` |
| **Bad** | `() => handlePress()` |
| **Severity** | Medium |


### Use useMemo for expensive ops

Cache expensive calculations

| | Guidance |
|---|---------|
| **Do** | useMemo for heavy computations |
| **Don't** | Recalculate every render |
| **Good** | `useMemo(() => expensive(), [deps])` |
| **Bad** | `const result = expensive()` |
| **Severity** | Medium |


### Avoid anonymous functions in JSX

Prevent re-renders

| | Guidance |
|---|---------|
| **Do** | Named handlers or useCallback |
| **Don't** | Inline arrow functions |
| **Good** | `onPress={handlePress}` |
| **Bad** | `onPress={() => doSomething()}` |
| **Severity** | Medium |


### Use Hermes engine

Improved startup and memory

| | Guidance |
|---|---------|
| **Do** | Enable Hermes in build |
| **Don't** | JavaScriptCore for new projects |
| **Good** | `hermes_enabled: true` |
| **Bad** | `hermes_enabled: false` |
| **Severity** | Medium |
| **Docs** | https://reactnative.dev/docs/hermes |

## Images

### Use expo-image

Modern performant image component for React Native

| | Guidance |
|---|---------|
| **Do** | Use expo-image for caching, blurring, and performance |
| **Don't** | Use default Image for heavy lists or unmaintained libraries |
| **Good** | `<Image source={url} cachePolicy='memory-disk' /> (expo-image)` |
| **Bad** | `<FastImage source={url} />` |
| **Severity** | Medium |
| **Docs** | https://docs.expo.dev/versions/latest/sdk/image/ |

### Specify image dimensions

Prevent layout shifts

| | Guidance |
|---|---------|
| **Do** | width and height for remote images |
| **Don't** | No dimensions for network images |
| **Good** | `<Image style={{ width: 100 height: 100 }} />` |
| **Bad** | `<Image source={{ uri }} /> no size` |
| **Severity** | High |


### Use resizeMode

Control image scaling

| | Guidance |
|---|---------|
| **Do** | resizeMode cover contain |
| **Don't** | Stretch images |
| **Good** | `resizeMode="cover"` |
| **Bad** | `No resizeMode` |
| **Severity** | Low |


## Forms

### Use controlled inputs

State-controlled form fields

| | Guidance |
|---|---------|
| **Do** | value + onChangeText |
| **Don't** | Uncontrolled inputs |
| **Good** | `<TextInput value={text} onChangeText={setText} />` |
| **Bad** | `<TextInput defaultValue={text} />` |
| **Severity** | Medium |


### Handle keyboard

Manage keyboard visibility

| | Guidance |
|---|---------|
| **Do** | KeyboardAvoidingView |
| **Don't** | Content hidden by keyboard |
| **Good** | `<KeyboardAvoidingView behavior="padding">` |
| **Bad** | `No keyboard handling` |
| **Severity** | High |
| **Docs** | https://reactnative.dev/docs/keyboardavoidingview |

### Use proper keyboard types

Appropriate keyboard for input

| | Guidance |
|---|---------|
| **Do** | keyboardType for input type |
| **Don't** | Default keyboard for all |
| **Good** | `keyboardType="email-address"` |
| **Bad** | `keyboardType="default" for email` |
| **Severity** | Low |


## Touch

### Use Pressable

Modern touch handling

| | Guidance |
|---|---------|
| **Do** | Pressable for touch interactions |
| **Don't** | TouchableOpacity for new code |
| **Good** | `<Pressable onPress={} />` |
| **Bad** | `<TouchableOpacity onPress={} />` |
| **Severity** | Low |
| **Docs** | https://reactnative.dev/docs/pressable |

### Provide touch feedback

Visual feedback on press

| | Guidance |
|---|---------|
| **Do** | Ripple or opacity change |
| **Don't** | No feedback on press |
| **Good** | `android_ripple={{ color: 'gray' }}` |
| **Bad** | `No press feedback` |
| **Severity** | Medium |


### Set hitSlop for small targets

Increase touch area

| | Guidance |
|---|---------|
| **Do** | hitSlop for icons and small buttons |
| **Don't** | Tiny touch targets |
| **Good** | `hitSlop={{ top: 10 bottom: 10 }}` |
| **Bad** | `44x44 with no hitSlop` |
| **Severity** | Medium |


## Animation

### Use Reanimated

High-performance animations

| | Guidance |
|---|---------|
| **Do** | react-native-reanimated |
| **Don't** | Animated API for complex |
| **Good** | `useSharedValue useAnimatedStyle` |
| **Bad** | `Animated.timing for gesture` |
| **Severity** | Medium |
| **Docs** | https://docs.swmansion.com/react-native-reanimated/ |

### Run on UI thread

worklets for smooth animation

| | Guidance |
|---|---------|
| **Do** | Run animations on UI thread |
| **Don't** | JS thread animations |
| **Good** | `runOnUI(() => {})` |
| **Bad** | `Animated on JS thread` |
| **Severity** | High |


### Use gesture handler

Native gesture recognition

| | Guidance |
|---|---------|
| **Do** | react-native-gesture-handler |
| **Don't** | JS-based gesture handling |
| **Good** | `<GestureDetector>` |
| **Bad** | `<View onTouchMove={} />` |
| **Severity** | Medium |
| **Docs** | https://docs.swmansion.com/react-native-gesture-handler/ |

## Async

### Handle loading states

Show loading indicators

| | Guidance |
|---|---------|
| **Do** | ActivityIndicator during load |
| **Don't** | Empty screen during load |
| **Good** | `{isLoading ? <ActivityIndicator /> : <Content />}` |
| **Bad** | `No loading state` |
| **Severity** | Medium |


### Handle errors gracefully

Error boundaries and fallbacks

| | Guidance |
|---|---------|
| **Do** | Error UI for failed requests |
| **Don't** | Crash on error |
| **Good** | `{error ? <ErrorView /> : <Content />}` |
| **Bad** | `No error handling` |
| **Severity** | High |


### Cancel async operations

Cleanup on unmount

| | Guidance |
|---|---------|
| **Do** | AbortController or cleanup |
| **Don't** | Memory leaks from async |
| **Good** | `useEffect cleanup` |
| **Bad** | `No cleanup for subscriptions` |
| **Severity** | High |


## Accessibility

### Add accessibility labels

Describe UI elements

| | Guidance |
|---|---------|
| **Do** | accessibilityLabel for all interactive |
| **Don't** | Missing labels |
| **Good** | `accessibilityLabel="Submit form"` |
| **Bad** | `<Pressable> without label` |
| **Severity** | High |
| **Docs** | https://reactnative.dev/docs/accessibility |

### Use accessibility roles

Semantic meaning

| | Guidance |
|---|---------|
| **Do** | accessibilityRole for elements |
| **Don't** | Wrong roles |
| **Good** | `accessibilityRole="button"` |
| **Bad** | `No role for button` |
| **Severity** | Medium |


### Support screen readers

Test with TalkBack/VoiceOver

| | Guidance |
|---|---------|
| **Do** | Test with screen readers |
| **Don't** | Skip accessibility testing |
| **Good** | `Regular TalkBack testing` |
| **Bad** | `No screen reader testing` |
| **Severity** | High |


## Testing

### Use React Native Testing Library

Component testing

| | Guidance |
|---|---------|
| **Do** | render and fireEvent |
| **Don't** | Enzyme or manual testing |
| **Good** | `render(<Component />)` |
| **Bad** | `shallow(<Component />)` |
| **Severity** | Medium |
| **Docs** | https://callstack.github.io/react-native-testing-library/ |

### Test on real devices

Real device behavior

| | Guidance |
|---|---------|
| **Do** | Test on iOS and Android devices |
| **Don't** | Simulator only |
| **Good** | `Device testing in CI` |
| **Bad** | `Simulator only testing` |
| **Severity** | High |


### Use Detox for E2E

End-to-end testing

| | Guidance |
|---|---------|
| **Do** | Detox for critical flows |
| **Don't** | Manual E2E testing |
| **Good** | `detox test` |
| **Bad** | `Manual testing only` |
| **Severity** | Medium |
| **Docs** | https://wix.github.io/Detox/ |

## Native

### Use native modules carefully

Bridge has overhead

| | Guidance |
|---|---------|
| **Do** | Batch native calls |
| **Don't** | Frequent bridge crossing |
| **Good** | `Batch updates` |
| **Bad** | `Call native on every keystroke` |
| **Severity** | High |


### Use Expo when possible

Simplified development

| | Guidance |
|---|---------|
| **Do** | Expo for standard features |
| **Don't** | Bare RN for simple apps |
| **Good** | `expo install package` |
| **Bad** | `react-native link package` |
| **Severity** | Low |
| **Docs** | https://docs.expo.dev/ |

### Handle permissions

Request permissions properly

| | Guidance |
|---|---------|
| **Do** | Check and request permissions |
| **Don't** | Assume permissions granted |
| **Good** | `PermissionsAndroid.request()` |
| **Bad** | `Access without permission check` |
| **Severity** | High |
| **Docs** | https://reactnative.dev/docs/permissionsandroid |

