import React, { useRef } from "react";
import {
  motion,
  useInView,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";

interface PieChartProps {
  data: number[];
  colors: string[];
  duration?: number;
  delayStep?: number;
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  colors,
  duration = 1,
  delayStep = 0.5,
}) => {
  const chartRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(chartRef, {
    once: true,
    margin: "0px 0px -20% 0px",
  });

  const total = data.reduce((sum, value) => sum + value, 0);

  const cumulativeAngles = data.reduce((acc: number[], value, index) => {
    const prevAngle = index > 0 ? acc[index - 1] : -90;
    acc.push(prevAngle + (value / total) * 360);
    return acc;
  }, []);

  const createArcPath = (startAngle: number, endAngle: number): string => {
    const startX = 100 + 90 * Math.cos(startAngle * (Math.PI / 180));
    const startY = 100 + 90 * Math.sin(startAngle * (Math.PI / 180));
    const endX = 100 + 90 * Math.cos(endAngle * (Math.PI / 180));
    const endY = 100 + 90 * Math.sin(endAngle * (Math.PI / 180));

    const angle = endAngle - startAngle;

    return `
      M 100,100
      L ${startX},${startY}
      A 90,90 0 ${angle > 180 ? 1 : 0},1 ${endX},${endY}
      Z
    `;
  };

  return (
    <motion.svg
      ref={chartRef}
      width="200"
      height="200"
      viewBox="0 0 200 200"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Define clip path for the donut hole */}
      <defs>
        <clipPath id="donut-hole">
          <path
            d="
            M 0,0
            H 200
            V 200
            H 0
            V 0
            Z
            M 100,100
            m -54,0
            a 54,54 0 1,0 108,0
            a 54,54 0 1,0 -108,0
            Z
          "
          />
        </clipPath>
      </defs>

      {/* Group for segments with clip path applied */}
      <g clipPath="url(#donut-hole)">
        {data.map((value, index) => {
          const startAngle = index === 0 ? -90 : cumulativeAngles[index - 1];
          const endAngle = cumulativeAngles[index];
          const progress = useMotionValue(0);

          const pathD = useTransform(progress, (latest) => {
            const currentEndAngle =
              startAngle + (endAngle - startAngle) * latest;
            return createArcPath(startAngle, currentEndAngle);
          });

          if (isInView) {
            animate(progress, 1, {
              duration,
              delay: index * delayStep,
              ease: "easeOut",
            });
          }

          return (
            <motion.path
              key={index}
              fill={colors[index % colors.length]}
              stroke="#fff"
              strokeWidth="0"
              d={pathD}
            />
          );
        })}
      </g>
    </motion.svg>
  );
};

export default PieChart;
