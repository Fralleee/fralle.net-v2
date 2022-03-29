import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"

// #region styled
const FadeImage = styled.img`
  @keyframes imageSwap {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  animation: imageSwap 600ms ease-in-out forwards;
`
// #endregion

type PropTypes = {
  className?: string
  src: string
  alt?: string
}
const CrossfadeImage = ({ className, src, alt }: PropTypes) => {
  const [topSrc, setTopSrc] = useState<string | undefined>(src)
  const [bottomSrc, setBottomSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (topSrc !== src) {
      setTopSrc(src)
      setBottomSrc(topSrc)
    }
  }, [src, topSrc])

  return (
    <>
      <img key={topSrc} className={className} src={topSrc} alt={alt} />
      <FadeImage key={bottomSrc} className={className} src={bottomSrc} alt={alt} />
    </>
  )
}

export default CrossfadeImage
