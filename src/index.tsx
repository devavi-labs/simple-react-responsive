import * as React from 'react'

export interface IResponsiveBreakpoints {
    // Minimum width for mobile devices
    mobile?: number | undefined
    // Minimum width for tablet devices
    tablet?: number | undefined
    // Minimum width for desktop devices
    desktop?: number | undefined
    // Minimum width for large screen devices
    largeScreen?: number | undefined
    // Minimum width for wide screen devices
    wideScreen?: number | undefined
}

export const defaultResponsiveBreakpoints: IResponsiveBreakpoints = {
    mobile: 0,
    tablet: 768,
    desktop: 992,
    largeScreen: 1200,
    wideScreen: 1920
}

export const BreakpointsContext = React.createContext({})

export interface IResponsiveBreakpointsProviderProps {
    breakpoints?: IResponsiveBreakpoints
}

export const ResponsiveBreakpointsProvider: React.FC<IResponsiveBreakpointsProviderProps> = (
    { breakpoints = defaultResponsiveBreakpoints, children }
) => {
    return (
        <BreakpointsContext.Provider value={{ ...defaultResponsiveBreakpoints, ...breakpoints }}>
            {children}
        </BreakpointsContext.Provider>
    )
}

export type IResponsiveScreens = "mobile" | "tablet" | "desktop" | "largeScreen" | "wideScreen"

type useMediaQueryProps = {
    query: string
}
const useMediaQuery = ({ query }: useMediaQueryProps) => {
    const [match, setMatch] = React.useState(false);
    const canMatch = typeof window === 'object' && typeof window.matchMedia === 'function';

    const queryMedia = React.useCallback(() => {
        const queryList = window.matchMedia(query);
        setMatch(queryList?.matches || false);
        return queryList;
    }, [canMatch]);

    React.useEffect(() => {
        if (!canMatch) return
        const queryList = queryMedia();
        if (queryList) queryList.onchange = queryMedia
    }, [queryMedia, canMatch]);

    return match;
};

export interface IResponsiveProps {
    /**
     * Type of media query
     * @example type="below" ==> "(max-width: any)"
     * @example type="only" ==> "(min-width: any) and (max-width: any)"
     * @example type="above" ==> "(min-width: any)"
     */
    type?: "below" | "only" | "above"
    screen?: IResponsiveScreens
}

export const Responsive: React.FC<IResponsiveProps> = (
    { type = "above", screen = "mobile", children }
) => {
    const breakpoints = React.useContext(BreakpointsContext)
    let min: number | undefined
    let max: number | undefined
    let upperLevelScreen: IResponsiveScreens | undefined

    upperLevelScreen = screen === "mobile" ? "tablet"
        : screen === "tablet" ? "desktop"
            : screen === "desktop" ? "largeScreen"
                : "wideScreen"
    min = type === "only" ? breakpoints[screen]
        : type === "above" ? breakpoints[upperLevelScreen]! - 1
            : undefined
    max = type === "below" ? breakpoints[screen]
        : type === "only" ? breakpoints[upperLevelScreen]! - 1
            : undefined

    const match = useMediaQuery(
        {
            query:
                max !== undefined
                    ? `(min-width: ${min}px) and (max-width: ${max}px)`
                    : `(min-width: ${min}px)`
        }
    )

    return (
        <div style={{
            display: match ? "block" : "none"
        }} >
            {children}
        </div>
    )
}

export default Responsive

