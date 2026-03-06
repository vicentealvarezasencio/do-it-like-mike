# Flutter — Design Guidelines

> Stack-specific design implementation guidelines.
> Source: UI/UX Pro Max (converted to MIKE format).

---

## Widgets

### Use StatelessWidget when possible

Immutable widgets are simpler

| | Guidance |
|---|---------|
| **Do** | StatelessWidget for static UI |
| **Don't** | StatefulWidget for everything |
| **Good** | `class MyWidget extends StatelessWidget` |
| **Bad** | `class MyWidget extends StatefulWidget (static)` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/StatelessWidget-class.html |

### Keep widgets small

Single responsibility principle

| | Guidance |
|---|---------|
| **Do** | Extract widgets into smaller pieces |
| **Don't** | Large build methods |
| **Good** | `Column(children: [Header() Content()])` |
| **Bad** | `500+ line build method` |
| **Severity** | Medium |


### Use const constructors

Compile-time constants for performance

| | Guidance |
|---|---------|
| **Do** | const MyWidget() when possible |
| **Don't** | Non-const for static widgets |
| **Good** | `const Text('Hello')` |
| **Bad** | `Text('Hello') for literals` |
| **Severity** | High |
| **Docs** | https://dart.dev/guides/language/language-tour#constant-constructors |

### Prefer composition over inheritance

Combine widgets using children

| | Guidance |
|---|---------|
| **Do** | Compose widgets |
| **Don't** | Extend widget classes |
| **Good** | `Container(child: MyContent())` |
| **Bad** | `class MyContainer extends Container` |
| **Severity** | Medium |


## State

### Use setState correctly

Minimal state in StatefulWidget

| | Guidance |
|---|---------|
| **Do** | setState for UI state changes |
| **Don't** | setState for business logic |
| **Good** | `setState(() { _counter++; })` |
| **Bad** | `Complex logic in setState` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/State/setState.html |

### Avoid setState in build

Never call setState during build

| | Guidance |
|---|---------|
| **Do** | setState in callbacks only |
| **Don't** | setState in build method |
| **Good** | `onPressed: () => setState(() {})` |
| **Bad** | `build() { setState(); }` |
| **Severity** | High |


### Use state management for complex apps

Provider Riverpod BLoC

| | Guidance |
|---|---------|
| **Do** | State management for shared state |
| **Don't** | setState for global state |
| **Good** | `Provider.of<MyState>(context)` |
| **Bad** | `Global setState calls` |
| **Severity** | Medium |


### Prefer Riverpod or Provider

Recommended state solutions

| | Guidance |
|---|---------|
| **Do** | Riverpod for new projects |
| **Don't** | InheritedWidget manually |
| **Good** | `ref.watch(myProvider)` |
| **Bad** | `Custom InheritedWidget` |
| **Severity** | Medium |
| **Docs** | https://riverpod.dev/ |

### Dispose resources

Clean up controllers and subscriptions

| | Guidance |
|---|---------|
| **Do** | dispose() for cleanup |
| **Don't** | Memory leaks from subscriptions |
| **Good** | `@override void dispose() { controller.dispose(); }` |
| **Bad** | `No dispose implementation` |
| **Severity** | High |


## Layout

### Use Column and Row

Basic layout widgets

| | Guidance |
|---|---------|
| **Do** | Column Row for linear layouts |
| **Don't** | Stack for simple layouts |
| **Good** | `Column(children: [Text(), Button()])` |
| **Bad** | `Stack for vertical list` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/Column-class.html |

### Use Expanded and Flexible

Control flex behavior

| | Guidance |
|---|---------|
| **Do** | Expanded to fill space |
| **Don't** | Fixed sizes in flex containers |
| **Good** | `Expanded(child: Container())` |
| **Bad** | `Container(width: 200) in Row` |
| **Severity** | Medium |


### Use SizedBox for spacing

Consistent spacing

| | Guidance |
|---|---------|
| **Do** | SizedBox for gaps |
| **Don't** | Container for spacing only |
| **Good** | `SizedBox(height: 16)` |
| **Bad** | `Container(height: 16)` |
| **Severity** | Low |


### Use LayoutBuilder for responsive

Respond to constraints

| | Guidance |
|---|---------|
| **Do** | LayoutBuilder for adaptive layouts |
| **Don't** | Fixed sizes for responsive |
| **Good** | `LayoutBuilder(builder: (context constraints) {})` |
| **Bad** | `Container(width: 375)` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/LayoutBuilder-class.html |

### Avoid deep nesting

Keep widget tree shallow

| | Guidance |
|---|---------|
| **Do** | Extract deeply nested widgets |
| **Don't** | 10+ levels of nesting |
| **Good** | `Extract widget to method or class` |
| **Bad** | `Column(Row(Column(Row(...))))` |
| **Severity** | Medium |


## Lists

### Use ListView.builder

Lazy list building

| | Guidance |
|---|---------|
| **Do** | ListView.builder for long lists |
| **Don't** | ListView with children for large lists |
| **Good** | `ListView.builder(itemCount: 100, itemBuilder: ...)` |
| **Bad** | `ListView(children: items.map(...).toList())` |
| **Severity** | High |
| **Docs** | https://api.flutter.dev/flutter/widgets/ListView-class.html |

### Provide itemExtent when known

Skip measurement

| | Guidance |
|---|---------|
| **Do** | itemExtent for fixed height items |
| **Don't** | No itemExtent for uniform lists |
| **Good** | `ListView.builder(itemExtent: 50)` |
| **Bad** | `ListView.builder without itemExtent` |
| **Severity** | Medium |


### Use keys for stateful items

Preserve widget state

| | Guidance |
|---|---------|
| **Do** | Key for stateful list items |
| **Don't** | No key for dynamic lists |
| **Good** | `ListTile(key: ValueKey(item.id))` |
| **Bad** | `ListTile without key` |
| **Severity** | High |


### Use SliverList for custom scroll

Custom scroll effects

| | Guidance |
|---|---------|
| **Do** | CustomScrollView with Slivers |
| **Don't** | Nested ListViews |
| **Good** | `CustomScrollView(slivers: [SliverList()])` |
| **Bad** | `ListView inside ListView` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/SliverList-class.html |

## Navigation

### Use Navigator 2.0 or GoRouter

Declarative routing

| | Guidance |
|---|---------|
| **Do** | go_router for navigation |
| **Don't** | Navigator.push for complex apps |
| **Good** | `GoRouter(routes: [...])` |
| **Bad** | `Navigator.push everywhere` |
| **Severity** | Medium |
| **Docs** | https://pub.dev/packages/go_router |

### Use named routes

Organized navigation

| | Guidance |
|---|---------|
| **Do** | Named routes for clarity |
| **Don't** | Anonymous routes |
| **Good** | `Navigator.pushNamed(context '/home')` |
| **Bad** | `Navigator.push(context MaterialPageRoute())` |
| **Severity** | Low |


### Handle back button (PopScope)

Android back behavior and predictive back (Android 14+)

| | Guidance |
|---|---------|
| **Do** | Use PopScope widget (WillPopScope is deprecated) |
| **Don't** | Use WillPopScope |
| **Good** | `PopScope(canPop: false, onPopInvoked: (didPop) => ...)` |
| **Bad** | `WillPopScope(onWillPop: ...)` |
| **Severity** | High |
| **Docs** | https://api.flutter.dev/flutter/widgets/PopScope-class.html |

### Pass typed arguments

Type-safe route arguments

| | Guidance |
|---|---------|
| **Do** | Typed route arguments |
| **Don't** | Dynamic arguments |
| **Good** | `MyRoute(id: '123')` |
| **Bad** | `arguments: {'id': '123'}` |
| **Severity** | Medium |


## Async

### Use FutureBuilder

Async UI building

| | Guidance |
|---|---------|
| **Do** | FutureBuilder for async data |
| **Don't** | setState for async |
| **Good** | `FutureBuilder(future: fetchData())` |
| **Bad** | `fetchData().then((d) => setState())` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html |

### Use StreamBuilder

Stream UI building

| | Guidance |
|---|---------|
| **Do** | StreamBuilder for streams |
| **Don't** | Manual stream subscription |
| **Good** | `StreamBuilder(stream: myStream)` |
| **Bad** | `stream.listen in initState` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html |

### Handle loading and error states

Complete async UI states

| | Guidance |
|---|---------|
| **Do** | ConnectionState checks |
| **Don't** | Only success state |
| **Good** | `if (snapshot.connectionState == ConnectionState.waiting)` |
| **Bad** | `No loading indicator` |
| **Severity** | High |


### Cancel subscriptions

Clean up stream subscriptions

| | Guidance |
|---|---------|
| **Do** | Cancel in dispose |
| **Don't** | Memory leaks |
| **Good** | `subscription.cancel() in dispose` |
| **Bad** | `No subscription cleanup` |
| **Severity** | High |


## Theming

### Use ThemeData

Consistent theming

| | Guidance |
|---|---------|
| **Do** | ThemeData for app theme |
| **Don't** | Hardcoded colors |
| **Good** | `Theme.of(context).primaryColor` |
| **Bad** | `Color(0xFF123456) everywhere` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/material/ThemeData-class.html |

### Use ColorScheme

Material 3 color system

| | Guidance |
|---|---------|
| **Do** | ColorScheme for colors |
| **Don't** | Individual color properties |
| **Good** | `colorScheme: ColorScheme.fromSeed()` |
| **Bad** | `primaryColor: Colors.blue` |
| **Severity** | Medium |


### Access theme via context

Dynamic theme access

| | Guidance |
|---|---------|
| **Do** | Theme.of(context) |
| **Don't** | Static theme reference |
| **Good** | `Theme.of(context).textTheme.bodyLarge` |
| **Bad** | `TextStyle(fontSize: 16)` |
| **Severity** | Medium |


### Support dark mode

Respect system theme

| | Guidance |
|---|---------|
| **Do** | darkTheme in MaterialApp |
| **Don't** | Light theme only |
| **Good** | `MaterialApp(theme: light, darkTheme: dark)` |
| **Bad** | `MaterialApp(theme: light)` |
| **Severity** | Medium |


## Animation

### Use implicit animations

Simple animations

| | Guidance |
|---|---------|
| **Do** | AnimatedContainer AnimatedOpacity |
| **Don't** | Explicit for simple transitions |
| **Good** | `AnimatedContainer(duration: Duration())` |
| **Bad** | `AnimationController for fade` |
| **Severity** | Low |
| **Docs** | https://api.flutter.dev/flutter/widgets/AnimatedContainer-class.html |

### Use AnimationController for complex

Fine-grained control

| | Guidance |
|---|---------|
| **Do** | AnimationController with Ticker |
| **Don't** | Implicit for complex sequences |
| **Good** | `AnimationController(vsync: this)` |
| **Bad** | `AnimatedContainer for staggered` |
| **Severity** | Medium |


### Dispose AnimationControllers

Clean up animation resources

| | Guidance |
|---|---------|
| **Do** | dispose() for controllers |
| **Don't** | Memory leaks |
| **Good** | `controller.dispose() in dispose` |
| **Bad** | `No controller disposal` |
| **Severity** | High |


### Use Hero for transitions

Shared element transitions

| | Guidance |
|---|---------|
| **Do** | Hero for navigation animations |
| **Don't** | Manual shared element |
| **Good** | `Hero(tag: 'image' child: Image())` |
| **Bad** | `Custom shared element animation` |
| **Severity** | Low |
| **Docs** | https://api.flutter.dev/flutter/widgets/Hero-class.html |

## Forms

### Use Form widget

Form validation

| | Guidance |
|---|---------|
| **Do** | Form with GlobalKey |
| **Don't** | Individual validation |
| **Good** | `Form(key: _formKey child: ...)` |
| **Bad** | `TextField without Form` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/Form-class.html |

### Use TextEditingController

Control text input

| | Guidance |
|---|---------|
| **Do** | Controller for text fields |
| **Don't** | onChanged for all text |
| **Good** | `final controller = TextEditingController()` |
| **Bad** | `onChanged: (v) => setState()` |
| **Severity** | Medium |


### Validate on submit

Form validation flow

| | Guidance |
|---|---------|
| **Do** | _formKey.currentState!.validate() |
| **Don't** | Skip validation |
| **Good** | `if (_formKey.currentState!.validate())` |
| **Bad** | `Submit without validation` |
| **Severity** | High |


### Dispose controllers

Clean up text controllers

| | Guidance |
|---|---------|
| **Do** | dispose() for controllers |
| **Don't** | Memory leaks |
| **Good** | `controller.dispose() in dispose` |
| **Bad** | `No controller disposal` |
| **Severity** | High |


## Performance

### Use const widgets

Reduce rebuilds

| | Guidance |
|---|---------|
| **Do** | const for static widgets |
| **Don't** | No const for literals |
| **Good** | `const Icon(Icons.add)` |
| **Bad** | `Icon(Icons.add)` |
| **Severity** | High |


### Avoid rebuilding entire tree

Minimal rebuild scope

| | Guidance |
|---|---------|
| **Do** | Isolate changing widgets |
| **Don't** | setState on parent |
| **Good** | `Consumer only around changing widget` |
| **Bad** | `setState on root widget` |
| **Severity** | High |


### Use RepaintBoundary

Isolate repaints

| | Guidance |
|---|---------|
| **Do** | RepaintBoundary for animations |
| **Don't** | Full screen repaints |
| **Good** | `RepaintBoundary(child: AnimatedWidget())` |
| **Bad** | `Animation without boundary` |
| **Severity** | Medium |
| **Docs** | https://api.flutter.dev/flutter/widgets/RepaintBoundary-class.html |

### Profile with DevTools

Measure before optimizing

| | Guidance |
|---|---------|
| **Do** | Flutter DevTools profiling |
| **Don't** | Guess at performance |
| **Good** | `DevTools performance tab` |
| **Bad** | `Optimize without measuring` |
| **Severity** | Medium |
| **Docs** | https://docs.flutter.dev/tools/devtools |

## Accessibility

### Use Semantics widget

Screen reader support

| | Guidance |
|---|---------|
| **Do** | Semantics for accessibility |
| **Don't** | Missing accessibility info |
| **Good** | `Semantics(label: 'Submit button')` |
| **Bad** | `GestureDetector without semantics` |
| **Severity** | High |
| **Docs** | https://api.flutter.dev/flutter/widgets/Semantics-class.html |

### Support large fonts

MediaQuery text scaling

| | Guidance |
|---|---------|
| **Do** | MediaQuery.textScaleFactor |
| **Don't** | Fixed font sizes |
| **Good** | `style: Theme.of(context).textTheme` |
| **Bad** | `TextStyle(fontSize: 14)` |
| **Severity** | High |


### Test with screen readers

TalkBack and VoiceOver

| | Guidance |
|---|---------|
| **Do** | Test accessibility regularly |
| **Don't** | Skip accessibility testing |
| **Good** | `Regular TalkBack testing` |
| **Bad** | `No screen reader testing` |
| **Severity** | High |


## Testing

### Use widget tests

Test widget behavior

| | Guidance |
|---|---------|
| **Do** | WidgetTester for UI tests |
| **Don't** | Unit tests only |
| **Good** | `testWidgets('...' (tester) async {})` |
| **Bad** | `Only test() for UI` |
| **Severity** | Medium |
| **Docs** | https://docs.flutter.dev/testing |

### Use integration tests

Full app testing

| | Guidance |
|---|---------|
| **Do** | integration_test package |
| **Don't** | Manual testing only |
| **Good** | `IntegrationTestWidgetsFlutterBinding` |
| **Bad** | `Manual E2E testing` |
| **Severity** | Medium |


### Mock dependencies

Isolate tests

| | Guidance |
|---|---------|
| **Do** | Mockito or mocktail |
| **Don't** | Real dependencies in tests |
| **Good** | `when(mock.method()).thenReturn()` |
| **Bad** | `Real API calls in tests` |
| **Severity** | Medium |


## Platform

### Use Platform checks

Platform-specific code

| | Guidance |
|---|---------|
| **Do** | Platform.isIOS Platform.isAndroid |
| **Don't** | Same code for all platforms |
| **Good** | `if (Platform.isIOS) {}` |
| **Bad** | `Hardcoded iOS behavior` |
| **Severity** | Medium |


### Use kIsWeb for web

Web platform detection

| | Guidance |
|---|---------|
| **Do** | kIsWeb for web checks |
| **Don't** | Platform for web |
| **Good** | `if (kIsWeb) {}` |
| **Bad** | `Platform.isWeb (doesn't exist)` |
| **Severity** | Medium |


## Packages

### Use pub.dev packages

Community packages

| | Guidance |
|---|---------|
| **Do** | Popular maintained packages |
| **Don't** | Custom implementations |
| **Good** | `cached_network_image` |
| **Bad** | `Custom image cache` |
| **Severity** | Medium |
| **Docs** | https://pub.dev/ |

### Check package quality

Quality before adding

| | Guidance |
|---|---------|
| **Do** | Pub points and popularity |
| **Don't** | Any package without review |
| **Good** | `100+ pub points` |
| **Bad** | `Unmaintained packages` |
| **Severity** | Medium |


