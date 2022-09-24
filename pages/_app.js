import "../styles/globals.css"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

function SafeHydrate({ children }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  )
}

const theme = createTheme({
  palette: {
    primary: {
      light: "#008092",
      main: "#0099B5",
      dark: "#EFF3F4",
    },
    error: {
      light: "#AD2626",
      main: "#D84F4F",
      dark: "#F9E5E5",
    },
    warning: {
      light: "#DD8705",
      main: "#FBB03F",
      dark: "#FFF6E9",
    },
    info: {
      light: "#28526F",
      main: "#498DBE",
      dark: "#E5EFF6",
    },
    success: {
      light: "#648F2B",
      main: "#8CC63F",
      dark: "#EEF7E4",
    },
  },
})

function MyApp({ Component, pageProps }) {
  return (
    <SafeHydrate>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SafeHydrate>
  )
}

export default MyApp
