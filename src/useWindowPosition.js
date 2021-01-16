import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id, number) {
  const [animation, setAnimation] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offsetSetHeight = window.document.getElementById(id).offsetHeight;
      const scrollTop = window.document.getElementById(id).scrollTop;
      if (scrollTop > offsetSetHeight * number) {
        setAnimation(true);
      }
      if (scrollTop < offsetSetHeight * number) {
        setAnimation(false);
      }

      console.log(scrollTop, "scroll");
      console.log(offsetSetHeight, "offset");
    }

    window.document
      .getElementById(id)
      .addEventListener("scroll", updatePosition);
    updatePosition();
    return () =>
      window.document
        .getElementById(id)
        .removeEventListener("scroll", updatePosition);
  }, [id]);
  return animation;
}
