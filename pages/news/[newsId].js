import { useRouter, userRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const routeKey = router.query.newsId;
  return (
    <div>
      Route URL is: {routeKey}
      This is a details page.
    </div>
  );
};

export default DetailsPage;
