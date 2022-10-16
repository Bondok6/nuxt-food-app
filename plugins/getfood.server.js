// tell nuxt to do this on server side only
export default async ({ store }) => {
  await store.dispatch("getFoodData");
};
