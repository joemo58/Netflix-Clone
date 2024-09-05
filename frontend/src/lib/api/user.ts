import services from "./apiConfig";

const hit = async () => {
  const response = await fetch(services.userService.endpoints.hit);
  const data = await response.json();
  return data;
};

export default hit;