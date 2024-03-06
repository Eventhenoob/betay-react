import { motion } from "framer-motion";
import useMousePosition from "../../hooks/useMousePosition";
import styles from "./sytle.module.css";
import useMobile from "../../utils/useMobile";
interface CursorMaskProps {
  isHovered?: boolean;
}
const CursorMask = ({ isHovered = false }: CursorMaskProps) => {
  const isMobile = useMobile();
  const { x, y } = useMousePosition();
  const size = isHovered ? 200 : 40;

  return (
    <>
      {!isMobile && (
        <motion.div
          className={styles["mask"] + " fixed top-0 left-0"}
          animate={{
            WebkitMaskPosition: `${(x || 0) - size / 2}px ${
              (y || 0) - size / 2
            }px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        ></motion.div>
      )}
    </>
  );
};

export default CursorMask;
