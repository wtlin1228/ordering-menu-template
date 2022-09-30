import { useCallback } from "react"
import {
  APP_BAR_HEIGHT,
  TABS_HEIGHT,
  CATEGORY_HEIGHT,
} from "../constants/elementHeight"
import { useAppBarStatus } from "../components/AppBarStatusProvider"

export const useVerticalScrollTo = () => {
  const { shouldShowAppBar, lockTrigger, unlockTrigger, manualTrigger } =
    useAppBarStatus()

  return useCallback(
    (position) => {
      lockTrigger()

      let y = position + window.pageYOffset - CATEGORY_HEIGHT - TABS_HEIGHT + 2
      if (shouldShowAppBar) {
        y -= APP_BAR_HEIGHT
      }
      scrollTo(0, y)

      if (window.pageYOffset < 100 && !shouldShowAppBar) {
        manualTrigger()
      } else {
        setTimeout(() => {
          unlockTrigger()
        }, 100)
      }
    },
    [lockTrigger, manualTrigger, shouldShowAppBar, unlockTrigger]
  )
}
