import { useInView } from 'react-intersection-observer';

const useFadeIn = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0,
    
  });

  return { ref, inView };
};

export default useFadeIn;