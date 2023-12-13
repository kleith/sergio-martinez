export const getLanguage = () => {
  const language = navigator.language || navigator.userLanguage
  const lang = language?.split("-")[0]

  return lang
}
