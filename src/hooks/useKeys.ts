import { useEffect, useRef } from "react"

const useKeys = <T>(
  key: string,
  ev: keyof DocumentEventMap,
  callBack: () => void,
  deps: Array<any>
) => {
  const Ref = useRef<T>(null)

  useEffect(() => {
    const onPress = (ev: any) => {
      if (document.activeElement === Ref.current) return
      if (ev.key.toLocaleLowerCase() === key.toLocaleLowerCase()) {
        callBack()
      }
    }
    document.addEventListener(ev, onPress)

    return () => {
      document.removeEventListener(ev, onPress)
    }
  }, [[...deps, key]])

  return { Ref }
}

export default useKeys
