import React, { useEffect, useState } from "react";
import Drawing, { brushFromSrc } from "react-drawing";

export default function Canvas () {
  const [ screenSize, getDimension ] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight,
  });


  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension);

    return(() => {
      window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  return (
    <Drawing
      containerWidth={screenSize.dynamicWidth}
      containerHeight={screenSize.dynamicHeight}
      width={screenSize.dynamicWidth}
      height={screenSize.dynamicHeight}
      brush={brushFromSrc(
        "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v790-nunny-78.png?w=800&dpr=1&fit=default&crop=default&auto=null&fm=png&q=75&vib=3&con=3&usm=15&bg=transparent&ixlib=js-2.1.2&s=061375995652876f8c7ef8d2080bc990",
        {
          width: 80,
          height: 80
        })}
    />
  )
}
