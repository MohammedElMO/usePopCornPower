import { useEffect, useRef, useState } from "react"
import { stars } from "../constants/stars"
import Star from "./common/Stars/star"

function Rating() {
  const starRef = useRef<SVGSVGElement>(null)
  const [colorStars, setColorStars] = useState(stars)
  const [starsAtIndex, setStarAtIndex] = useState(-1)
  const starRange = colorStars.slice(0, starsAtIndex + 1)
  const filledStars = colorStars.reduce(
    (acc, star) => (star.isHoverd ? acc + 1 : acc),
    0,
  )
  return (
    <div className="rating">
      <div>
        {colorStars.map((star) => (
          <Star
            ref={starRef}
            onMouseOver={() => {
              setStarAtIndex(star.id)
              setColorStars(
                colorStars.map((star) =>
                  star.id === starRange.find((s) => s.id === star.id)?.id
                    ? { ...star, isHoverd: true }
                    : { ...star, isHoverd: false },
                ),
              )
            }}
            onClick={() => {
              setStarAtIndex(star.id ? 0 : star.id  )
            }}
            key={star.id}
            isHoverd={star.isHoverd}
          />
        ))}
      </div>

      <span>{filledStars }</span>
    </div>
  )
}

export default Rating
