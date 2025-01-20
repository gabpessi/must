import { useInView } from 'react-intersection-observer';

const useFadeIn = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // A animação ocorre apenas na primeira vez que o elemento entra na viewport
    threshold: 0,
    
  });

  return { ref, inView };
};

export default useFadeIn;