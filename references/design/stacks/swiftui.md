# SwiftUI — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Views

### Use struct for views

SwiftUI views are value types

| | Guidance |
|---|---------|
| **Do** | struct MyView: View |
| **Don't** | class MyView: View |
| **Good** | `struct ContentView: View { var body: some View }` |
| **Bad** | `class ContentView: View` |
| **Severity** | High |
| **Docs** | https://developer.apple.com/documentation/swiftui/view |

### Keep views small and focused

Single responsibility for each view

| | Guidance |
|---|---------|
| **Do** | Extract subviews for complex layouts |
| **Don't** | Large monolithic views |
| **Good** | `Extract HeaderView FooterView` |
| **Bad** | `500+ line View struct` |
| **Severity** | Medium |


### Use body computed property

body returns the view hierarchy

| | Guidance |
|---|---------|
| **Do** | var body: some View { } |
| **Don't** | func body() -> some View |
| **Good** | `var body: some View { Text("Hello") }` |
| **Bad** | `func body() -> Text` |
| **Severity** | High |


### Prefer composition over inheritance

Compose views using ViewBuilder

| | Guidance |
|---|---------|
| **Do** | Combine smaller views |
| **Don't** | Inheritance hierarchies |
| **Good** | `VStack { Header() Content() }` |
| **Bad** | `class SpecialView extends BaseView` |
| **Severity** | Medium |


## State

### Use @State for local state

Simple value types owned by view

| | Guidance |
|---|---------|
| **Do** | @State for view-local primitives |
| **Don't** | @State for shared data |
| **Good** | `@State private var count = 0` |
| **Bad** | `@State var sharedData: Model` |
| **Severity** | High |
| **Docs** | https://developer.apple.com/documentation/swiftui/state |

### Use @Binding for two-way data

Pass mutable state to child views

| | Guidance |
|---|---------|
| **Do** | @Binding for child input |
| **Don't** | @State in child for parent data |
| **Good** | `@Binding var isOn: Bool` |
| **Bad** | `$isOn to pass binding` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/binding |

### Use @StateObject for reference types

ObservableObject owned by view

| | Guidance |
|---|---------|
| **Do** | @StateObject for view-created objects |
| **Don't** | @ObservedObject for owned objects |
| **Good** | `@StateObject private var vm = ViewModel()` |
| **Bad** | `@ObservedObject var vm = ViewModel()` |
| **Severity** | High |
| **Docs** | https://developer.apple.com/documentation/swiftui/stateobject |

### Use @ObservedObject for injected objects

Reference types passed from parent

| | Guidance |
|---|---------|
| **Do** | @ObservedObject for injected dependencies |
| **Don't** | @StateObject for injected objects |
| **Good** | `@ObservedObject var vm: ViewModel` |
| **Bad** | `@StateObject var vm: ViewModel (injected)` |
| **Severity** | High |
| **Docs** | https://developer.apple.com/documentation/swiftui/observedobject |

### Use @EnvironmentObject for shared state

App-wide state injection

| | Guidance |
|---|---------|
| **Do** | @EnvironmentObject for global state |
| **Don't** | Prop drilling through views |
| **Good** | `@EnvironmentObject var settings: Settings` |
| **Bad** | `Pass settings through 5 views` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/environmentobject |

### Use @Published in ObservableObject

Automatically publish property changes

| | Guidance |
|---|---------|
| **Do** | @Published for observed properties |
| **Don't** | Manual objectWillChange calls |
| **Good** | `@Published var items: [Item] = []` |
| **Bad** | `var items: [Item] { didSet { objectWillChange.send() } }` |
| **Severity** | Medium |


## Observable

### Use @Observable macro (iOS 17+)

Modern observation without Combine

| | Guidance |
|---|---------|
| **Do** | @Observable class for view models |
| **Don't** | ObservableObject for new projects |
| **Good** | `@Observable class ViewModel { }` |
| **Bad** | `class ViewModel: ObservableObject` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/observation |

### Use @Bindable for @Observable

Create bindings from @Observable

| | Guidance |
|---|---------|
| **Do** | @Bindable var vm for bindings |
| **Don't** | @Binding with @Observable |
| **Good** | `@Bindable var viewModel` |
| **Bad** | `$viewModel.name with @Observable` |
| **Severity** | Medium |


## Layout

### Use VStack HStack ZStack

Standard stack-based layouts

| | Guidance |
|---|---------|
| **Do** | Stacks for linear arrangements |
| **Don't** | GeometryReader for simple layouts |
| **Good** | `VStack { Text() Image() }` |
| **Bad** | `GeometryReader for vertical list` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/vstack |

### Use LazyVStack LazyHStack for lists

Lazy loading for performance

| | Guidance |
|---|---------|
| **Do** | Lazy stacks for long lists |
| **Don't** | Regular stacks for 100+ items |
| **Good** | `LazyVStack { ForEach(items) }` |
| **Bad** | `VStack { ForEach(largeArray) }` |
| **Severity** | High |
| **Docs** | https://developer.apple.com/documentation/swiftui/lazyvstack |

### Use GeometryReader sparingly

Only when needed for sizing

| | Guidance |
|---|---------|
| **Do** | GeometryReader for responsive layouts |
| **Don't** | GeometryReader everywhere |
| **Good** | `GeometryReader for aspect ratio` |
| **Bad** | `GeometryReader wrapping everything` |
| **Severity** | Medium |


### Use spacing and padding consistently

Consistent spacing throughout app

| | Guidance |
|---|---------|
| **Do** | Design system spacing values |
| **Don't** | Magic numbers for spacing |
| **Good** | `.padding(16) or .padding()` |
| **Bad** | `.padding(13), .padding(17)` |
| **Severity** | Low |


### Use frame modifiers correctly

Set explicit sizes when needed

| | Guidance |
|---|---------|
| **Do** | .frame(maxWidth: .infinity) |
| **Don't** | Fixed sizes for responsive content |
| **Good** | `.frame(maxWidth: .infinity)` |
| **Bad** | `.frame(width: 375)` |
| **Severity** | Medium |


## Modifiers

### Order modifiers correctly

Modifier order affects rendering

| | Guidance |
|---|---------|
| **Do** | Background before padding for full coverage |
| **Don't** | Wrong modifier order |
| **Good** | `.padding().background(Color.red)` |
| **Bad** | `.background(Color.red).padding()` |
| **Severity** | High |


### Create custom ViewModifiers

Reusable modifier combinations

| | Guidance |
|---|---------|
| **Do** | ViewModifier for repeated styling |
| **Don't** | Duplicate modifier chains |
| **Good** | `struct CardStyle: ViewModifier` |
| **Bad** | `.shadow().cornerRadius() everywhere` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/viewmodifier |

### Use conditional modifiers carefully

Avoid changing view identity

| | Guidance |
|---|---------|
| **Do** | if-else with same view type |
| **Don't** | Conditional that changes view identity |
| **Good** | `Text(title).foregroundColor(isActive ? .blue : .gray)` |
| **Bad** | `if isActive { Text().bold() } else { Text() }` |
| **Severity** | Medium |


## Navigation

### Use NavigationStack (iOS 16+)

Modern navigation with type-safe paths

| | Guidance |
|---|---------|
| **Do** | NavigationStack with navigationDestination |
| **Don't** | NavigationView for new projects |
| **Good** | `NavigationStack { }` |
| **Bad** | `NavigationView { } (deprecated)` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/navigationstack |

### Use navigationDestination

Type-safe navigation destinations

| | Guidance |
|---|---------|
| **Do** | .navigationDestination(for:) |
| **Don't** | NavigationLink(destination:) |
| **Good** | `.navigationDestination(for: Item.self)` |
| **Bad** | `NavigationLink(destination: DetailView())` |
| **Severity** | Medium |


### Use @Environment for dismiss

Programmatic navigation dismissal

| | Guidance |
|---|---------|
| **Do** | @Environment(\.dismiss) var dismiss |
| **Don't** | presentationMode (deprecated) |
| **Good** | `@Environment(\.dismiss) var dismiss` |
| **Bad** | `@Environment(\.presentationMode)` |
| **Severity** | Low |


## Lists

### Use List for scrollable content

Built-in scrolling and styling

| | Guidance |
|---|---------|
| **Do** | List for standard scrollable content |
| **Don't** | ScrollView + VStack for simple lists |
| **Good** | `List { ForEach(items) { } }` |
| **Bad** | `ScrollView { VStack { ForEach } }` |
| **Severity** | Low |
| **Docs** | https://developer.apple.com/documentation/swiftui/list |

### Provide stable identifiers

Use Identifiable or explicit id

| | Guidance |
|---|---------|
| **Do** | Identifiable protocol or id parameter |
| **Don't** | Index as identifier |
| **Good** | `ForEach(items) where Item: Identifiable` |
| **Bad** | `ForEach(items.indices, id: \.self)` |
| **Severity** | High |


### Use onDelete and onMove

Standard list editing

| | Guidance |
|---|---------|
| **Do** | onDelete for swipe to delete |
| **Don't** | Custom delete implementation |
| **Good** | `.onDelete(perform: delete)` |
| **Bad** | `.onTapGesture for delete` |
| **Severity** | Low |


## Forms

### Use Form for settings

Grouped input controls

| | Guidance |
|---|---------|
| **Do** | Form for settings screens |
| **Don't** | Manual grouping for forms |
| **Good** | `Form { Section { Toggle() } }` |
| **Bad** | `VStack { Toggle() }` |
| **Severity** | Low |
| **Docs** | https://developer.apple.com/documentation/swiftui/form |

### Use @FocusState for keyboard

Manage keyboard focus

| | Guidance |
|---|---------|
| **Do** | @FocusState for text field focus |
| **Don't** | Manual first responder handling |
| **Good** | `@FocusState private var isFocused: Bool` |
| **Bad** | `UIKit first responder` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/focusstate |

### Validate input properly

Show validation feedback

| | Guidance |
|---|---------|
| **Do** | Real-time validation feedback |
| **Don't** | Submit without validation |
| **Good** | `TextField with validation state` |
| **Bad** | `TextField without error handling` |
| **Severity** | Medium |


## Async

### Use .task for async work

Automatic cancellation on view disappear

| | Guidance |
|---|---------|
| **Do** | .task for view lifecycle async |
| **Don't** | onAppear with Task |
| **Good** | `.task { await loadData() }` |
| **Bad** | `onAppear { Task { await loadData() } }` |
| **Severity** | Medium |
| **Docs** | https://developer.apple.com/documentation/swiftui/view/task(priority:_:) |

### Handle loading states

Show progress during async operations

| | Guidance |
|---|---------|
| **Do** | ProgressView during loading |
| **Don't** | Empty view during load |
| **Good** | `if isLoading { ProgressView() }` |
| **Bad** | `No loading indicator` |
| **Severity** | Medium |


### Use @MainActor for UI updates

Ensure UI updates on main thread

| | Guidance |
|---|---------|
| **Do** | @MainActor on view models |
| **Don't** | Manual DispatchQueue.main |
| **Good** | `@MainActor class ViewModel` |
| **Bad** | `DispatchQueue.main.async` |
| **Severity** | Medium |


## Animation

### Use withAnimation

Animate state changes

| | Guidance |
|---|---------|
| **Do** | withAnimation for state transitions |
| **Don't** | No animation for state changes |
| **Good** | `withAnimation { isExpanded.toggle() }` |
| **Bad** | `isExpanded.toggle()` |
| **Severity** | Low |
| **Docs** | https://developer.apple.com/documentation/swiftui/withanimation(_:_:) |

### Use .animation modifier

Apply animations to views

| | Guidance |
|---|---------|
| **Do** | .animation(.spring()) on view |
| **Don't** | Manual animation timing |
| **Good** | `.animation(.easeInOut)` |
| **Bad** | `CABasicAnimation equivalent` |
| **Severity** | Low |


### Respect reduced motion

Check accessibility settings

| | Guidance |
|---|---------|
| **Do** | Check accessibilityReduceMotion |
| **Don't** | Ignore motion preferences |
| **Good** | `@Environment(\.accessibilityReduceMotion)` |
| **Bad** | `Always animate regardless` |
| **Severity** | High |


## Preview

### Use #Preview macro (Xcode 15+)

Modern preview syntax

| | Guidance |
|---|---------|
| **Do** | #Preview for view previews |
| **Don't** | PreviewProvider protocol |
| **Good** | `#Preview { ContentView() }` |
| **Bad** | `struct ContentView_Previews: PreviewProvider` |
| **Severity** | Low |


### Create multiple previews

Test different states and devices

| | Guidance |
|---|---------|
| **Do** | Multiple previews for states |
| **Don't** | Single preview only |
| **Good** | `#Preview("Light") { } #Preview("Dark") { }` |
| **Bad** | `Single preview configuration` |
| **Severity** | Low |


### Use preview data

Dedicated preview mock data

| | Guidance |
|---|---------|
| **Do** | Static preview data |
| **Don't** | Production data in previews |
| **Good** | `Item.preview for preview` |
| **Bad** | `Fetch real data in preview` |
| **Severity** | Low |


## Performance

### Avoid expensive body computations

Body should be fast to compute

| | Guidance |
|---|---------|
| **Do** | Precompute in view model |
| **Don't** | Heavy computation in body |
| **Good** | `vm.computedValue in body` |
| **Bad** | `Complex calculation in body` |
| **Severity** | High |


### Use Equatable views

Skip unnecessary view updates

| | Guidance |
|---|---------|
| **Do** | Equatable for complex views |
| **Don't** | Default equality for all views |
| **Good** | `struct MyView: View Equatable` |
| **Bad** | `No Equatable conformance` |
| **Severity** | Medium |


### Profile with Instruments

Measure before optimizing

| | Guidance |
|---|---------|
| **Do** | Use SwiftUI Instruments |
| **Don't** | Guess at performance issues |
| **Good** | `Profile with Instruments` |
| **Bad** | `Optimize without measuring` |
| **Severity** | Medium |


## Accessibility

### Add accessibility labels

Describe UI elements

| | Guidance |
|---|---------|
| **Do** | .accessibilityLabel for context |
| **Don't** | Missing labels |
| **Good** | `.accessibilityLabel("Close button")` |
| **Bad** | `Button without label` |
| **Severity** | High |
| **Docs** | https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:)-1d7jv |

### Support Dynamic Type

Respect text size preferences

| | Guidance |
|---|---------|
| **Do** | Scalable fonts and layouts |
| **Don't** | Fixed font sizes |
| **Good** | `.font(.body) with Dynamic Type` |
| **Bad** | `.font(.system(size: 16))` |
| **Severity** | High |


### Use semantic views

Proper accessibility traits

| | Guidance |
|---|---------|
| **Do** | Correct accessibilityTraits |
| **Don't** | Wrong semantic meaning |
| **Good** | `Button for actions Image for display` |
| **Bad** | `Image that acts like button` |
| **Severity** | Medium |


## Testing

### Use ViewInspector for testing

Third-party view testing

| | Guidance |
|---|---------|
| **Do** | ViewInspector for unit tests |
| **Don't** | UI tests only |
| **Good** | `ViewInspector assertions` |
| **Bad** | `Only XCUITest` |
| **Severity** | Medium |


### Test view models

Unit test business logic

| | Guidance |
|---|---------|
| **Do** | XCTest for view model |
| **Don't** | Skip view model testing |
| **Good** | `Test ViewModel methods` |
| **Bad** | `No unit tests` |
| **Severity** | Medium |


### Use preview as visual test

Previews catch visual regressions

| | Guidance |
|---|---------|
| **Do** | Multiple preview configurations |
| **Don't** | No visual verification |
| **Good** | `Preview different states` |
| **Bad** | `Single preview only` |
| **Severity** | Low |


## Architecture

### Use MVVM pattern

Separate view and logic

| | Guidance |
|---|---------|
| **Do** | ViewModel for business logic |
| **Don't** | Logic in View |
| **Good** | `ObservableObject ViewModel` |
| **Bad** | `@State for complex logic` |
| **Severity** | Medium |


### Keep views dumb

Views display view model state

| | Guidance |
|---|---------|
| **Do** | View reads from ViewModel |
| **Don't** | Business logic in View |
| **Good** | `view.items from vm.items` |
| **Bad** | `Complex filtering in View` |
| **Severity** | Medium |


### Use dependency injection

Inject dependencies for testing

| | Guidance |
|---|---------|
| **Do** | Initialize with dependencies |
| **Don't** | Hard-coded dependencies |
| **Good** | `init(service: ServiceProtocol)` |
| **Bad** | `let service = RealService()` |
| **Severity** | Medium |


