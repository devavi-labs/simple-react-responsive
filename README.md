# Simple Responsive React

A simple React component for media query breakpoints.

## Install

### NPM

```
$ npm i simple-responsive-react
```

### Yarn

```
$ yarn add simple-responsive-react
```

## Usage

After installing, Wrap the root component in "ResponsiveBreakpointsProvider". This will provide the default breakpoints inside your app.

### Example

```
import React from 'react'
import { ResponsiveBreakpointsProvider } from 'simple-responsive-react'

const App = () => {
    return (
        <ResponsiveBreakpointsProvider>
        // ...all your other components here
        </ResponsiveBreakpointsProvider>
    )
}

export default App
```

Then use "Responsive" component to wrap any component to make it responsive.

### Example 

The following code will render the "MyComponent" only in devices with screen size larger than mobile devices.

```
import Responsive from 'simple-responsive-react'

...

<Responsive
    type="above"
    screen="mobile"
>
    <MyComponent>
</Responsive>
```

## Custom Breakpoints

You can define your own breakpoints when you use the "ResponsiveBreakpointsProvider" like this :

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

You can pass the following props in the "Responsive" component :

| Name    | Expected values                                            | Default   |
| ------- | ---------------------------------------------------------- | --------- |
| type    | "below", "only" or "above"                                 | "above"   |
| screen  | "mobile", "tablet", "desktop", "largeScreen", "wideScreen" | "mobile"  |





### Please star the repo if it helped you!