const apiConfig = {
  userService: process.env.NEXT_PUBLIC_USER_SERVICE_API,
  contentService: process.env.NEXT_PUBLIC_CONTENT_SERVICE_API,
  streamingService: process.env.NEXT_PUBLIC_STREAMING_SERVICE_API,
};

const services = {
  userService: {
    id: "userService",
    name: "User Service",
    endpoints: {
      hit: `${apiConfig.userService}/hit`,
      subscription: `${apiConfig.userService}/updateSubscription`,
    },
  },
  contentService: {
    id: "contentService",
    name: "Content Service",
    endpoints: {
      hit: `${apiConfig.contentService}/hit`,
    },
  },
  streamingService: {
    id: "streamingService",
    name: "Streaming Service",
    endpoints: {
      hit: `${apiConfig.streamingService}/hit`,
    },
  },
};

export default services;
