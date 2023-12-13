import { useLayoutEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import moment from "moment"

import { size } from "@config/devices"

export const useCurriculumVitae = () => {
  const [scrollWidth, setScrollWidth] = useState<number>(0)
  const [hasScroller, setHasScroller] = useState(false)
  const { i18n } = useTranslation()

  moment.locale(i18n.language)

  const handleEnglish = () => {
    if (i18n.language !== "en") {
      i18n.changeLanguage("en")
    }
  }
  const handleSpanish = () => {
    if (i18n.language !== "es") {
      i18n.changeLanguage("es")
    }
  }

  const handleScroll = () => {
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement
    const height = scrollHeight - clientHeight

    setScrollWidth((scrollTop / height) * 100)
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleResize = () => {
    const { clientWidth } = document.documentElement
    const minWidth = Number(size.md.replace("rem", "")) * 16

    setHasScroller(clientWidth < minWidth)
  }

  useLayoutEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { hasScroller, scrollWidth, handleEnglish, handleSpanish }
}
