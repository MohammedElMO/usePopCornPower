import { useEffect, useRef, useState } from "react"
import Star from "./common/Stars/star"
import { stars } from "../constants/stars"

function Rating({
  ratingStars,
  color = "gold",
  size = 44,
  defaultRating,
  getFilledStars
}: {
  ratingStars: number
  color: string
  size?: number
  defaultRating: number
  getFilledStars: (value: number) => void
}) {
  const starRef = useRef<SVGSVGElement>(null)
  const [colorStars, setColorStars] = useState(stars(ratingStars))
  const [starsAtIndex, setStarAtIndex] = useState(
    !defaultRating ? -1 : defaultRating
  )
  const starRange = colorStars.slice(0, starsAtIndex + 1)
  const filledStars = colorStars.reduce(
    (acc, star) => (star.isHoverd ? acc + 1 : acc),
    0
  )
  useEffect(() => {
    setColorStars(
      colorStars.map((star) =>
        star.id === starRange.find((s) => s.id === star.id)?.id
          ? { ...star, isHoverd: true }
          : { ...star, isHoverd: false }
      )
    )
  }, [])
  return (
    <div className="flex">
      <div>
        {colorStars.map((star) => (
          <Star
            size={size}
            color={color}
            ref={starRef}
            onMouseOver={() => {
              setStarAtIndex(star.id)
              setColorStars(
                colorStars.map((star) =>
                  star.id === starRange.find((s) => s.id === star.id)?.id
                    ? { ...star, isHoverd: true }
                    : { ...star, isHoverd: false }
                )
              )
              getFilledStars(filledStars)
            }}
            onClick={() => {
              setStarAtIndex(star.id)
              getFilledStars(filledStars)
            }}
            key={star.id}
            isHoverd={star.isHoverd}
          />
        ))}
      </div>

      <span>{filledStars}</span>
    </div>
  )
}

export default Rating
