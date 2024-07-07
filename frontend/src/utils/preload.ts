import {
  educationExperiences,
  openSourceProjects,
  workExperiences,
  workProjects,
} from "@/constants";

const preloadImage = (src: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = src;
  });
};

export const preloadImages = async () => {
  const images = [
    ...educationExperiences.flatMap((experience) => [experience.image?.url]),
    ...openSourceProjects.flatMap((project) => [project.image?.url]),
    ...workExperiences.flatMap((experience) => [experience.image?.url]),
    ...workProjects.flatMap((project) => [project.image?.url]),
  ].filter((url): url is string => url !== undefined);

  await Promise.all(images.map(preloadImage));
};
