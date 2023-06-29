import { useDrag } from 'react-use-gesture';
import { useSpring, animated } from 'react-spring';

interface ProductProps {
    width: number;
    color: string;
    disabled?: boolean;
  }
  
  const Product = ({ width, color, disabled }: ProductProps) => {
    const pos = useSpring({ x: 0, y: 0});
    const bind = useDrag((params) => {
      pos.x.set(params.offset[0]);
      pos.y.set(params.offset[1]);
    });
  
    if (disabled) {
      return (
        <div className="absolute left-0 top-0">
            <div className="flex">
                {Array(width / 10)
                    .fill(null)
                    .map((_, colIndex) => (
                      <div
                        className={`${color} border border-white w-16 h-16 rounded-md opacity-50`}
                      ></div>
                ))}
            </div>
        </div>
      );
    }
  
    return (
        <animated.div {...bind()} style={{ x: pos.x, y: pos.y,}} className="absolute left-0 top-0">
          <div className="flex">
            {Array(width / 10)
                .fill(null)
                .map((_, colIndex) => (
                  <div
                    className={`${color} border border-white w-16 h-16 rounded-md`}
                  ></div>
            ))}
          </div>
        </animated.div>   
    );
  };

export default Product