import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

// 컴포넌트가 새로 생성되도 다시 observer가 생성되지 않고 전역적으로 사용하기 위해 컴포넌트 밖에 선언하였다.
let observer = null
const LOAD_IMG_EVENT_TYPE = 'loadImage'

// Custom Event
// 화면 안으로 들어왔을 때 실행될 이벤트에 해당하는 함수이다.
const onIntersection = (entries, io) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      io.unobserve(entry.target)
      entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE))
    }
  })
}

const Image = ({
  lazy,
  threshold = 0.5,
  placeholder,
  src,
  block,
  width,
  height,
  alt,
  mode,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  const imageStyle = {
    display: block ? 'block' : undefined,
    width,
    height,
    objectFit: mode, // cover, fill, contain
  }

  // Image 컴포넌트가 로드 되면 lazy를 확인해서 false => true로 상래를 변환한다.
  // 이후 lazy가 true가 되면 본격적으로 작동되도록 한다.
  useEffect(() => {
    if (!lazy) {
      setLoaded(true)
      return
    }

    const handleLoadImage = () => setLoaded(true)

    const imgElement = imgRef.current
    imgElement &&
      imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)

    return () => {
      imgElement &&
        imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage)
    }
  }, [lazy])

  useEffect(() => {
    if (!lazy) return
    observer = new IntersectionObserver(onIntersection, { threshold })
    imgRef.current && observer.observe(imgRef.current)
  }, [lazy, threshold])

  return (
    <img
      ref={imgRef}
      src={loaded ? src : placeholder}
      alt={alt}
      style={{ ...props.style, ...imageStyle }}
    />
  )
}

Image.propTypes = {
  lazy: PropTypes.bool,
  threshold: PropTypes.number,
  src: PropTypes.string.isRequired,
  block: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  alt: PropTypes.string,
  mode: PropTypes.string,
}

export default Image
