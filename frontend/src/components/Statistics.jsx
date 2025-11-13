import { useState, useEffect, useRef } from 'react';
import { FaUsers, FaRoute, FaMapMarkerAlt, FaHiking } from 'react-icons/fa';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: FaUsers,
      value: 9000,
      suffix: 'k+',
      label: 'Happy Travelers'
    },
    {
      icon: FaRoute,
      value: 2000,
      suffix: 'k+',
      label: 'Tours Done'
    },
    {
      icon: FaMapMarkerAlt,
      value: 25,
      suffix: '+',
      label: 'Destinations'
    },
    {
      icon: FaHiking,
      value: 20,
      suffix: '+',
      label: 'Activities'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon: Icon, value, suffix, label, isVisible, delay }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let counter;
    const timer = setTimeout(() => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      counter = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
    }, delay);

    return () => {
      clearTimeout(timer);
      if (counter) clearInterval(counter);
    };
  }, [isVisible, value, delay]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      const kValue = Math.floor(num / 1000);
      return kValue.toString();
    }
    return num.toString();
  };

  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon in hexagon */}
      <div className="relative mb-3 sm:mb-4">
        <div 
          className="bg-orange-600 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-white shadow-lg"
          style={{
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
        >
          <Icon className="text-2xl sm:text-3xl" />
        </div>
      </div>

      {/* Number */}
      <div className="text-gray-900 mb-2">
        <span className="text-4xl sm:text-5xl font-bold">
          {formatNumber(count)}
        </span>
        <span className="text-4xl sm:text-5xl font-bold">{suffix}</span>
      </div>

      {/* Label */}
      <div className="text-gray-700 text-base sm:text-lg font-medium">
        {label}
      </div>
    </div>
  );
};

export default Statistics;

