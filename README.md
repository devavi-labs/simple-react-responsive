# Simple React Responsive

A simple React component for media query breakpoints.

## Install

### NPM

```
$ npm i simple-react-responsive
```

### Yarn

```
$ yarn add simple-react-responsive
```

## Usage

After installing, Wrap the root component in <ResponsiveBreakpointsProvider>. This will provide the default breakpoints inside your app.

### Example

```
import React from 'react'
import { ResponsiveBreakpointsProvider } from 'simple-react-responsive'

const App = () => {
    return (
        <ResponsiveBreakpointsProvider>
        // ...all your other components here
        </ResponsiveBreakpointsProvider>
    )
}

export default App
```

Then use <Responsive> component to wrap any component to make it responsive.

### Example 

The following code will render the <MyComponent> only in devices with screen size larger than mobile devices.

```
<Responsive
    type="above"
    screen="mobile"
>
    <MyComponent>
</Responsive>
```

## Custom Breakpoints

You can define your own breakpoints when you use the <ResponsiveBreakpointsProvider> like

```
const customBreakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 992,
    largeScreen: 1200,
    wideScreen: 1920
}

return (
    <ResponsiveBreakpointsProvider breakpoints={customBreakpoints}>
    // ...all your other components here
    </ResponsiveBreakpointsProvider>
)
```

## Props

You can pass the following props in the <Responsive> component

| Name    | Expected values                                            | Default   |
| ------- | ---------------------------------------------------------- | --------- |
| type    | "below", "only" or "above"                                 | "above"   |
| screen  | "mobile", "tablet", "desktop", "largeScreen", "wideScreen" | "mobile"  |