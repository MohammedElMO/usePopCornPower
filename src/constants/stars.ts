export const stars = (length: number) =>
  Array.from(
    { length },
    (_, id) =>
      (_ = {
        id,
        isHoverd: false,
      }),
  )
