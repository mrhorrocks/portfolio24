// composables/useThumbNailData.ts
import data from '~/assets/data/mhox-homepage.json';

export const useThumbNailData = () => {
  const homepageData = ref(data);

  return {
    homepageData
  };
};