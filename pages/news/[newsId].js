import { useRouter, userRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const routeKey = router.query.newsId;
  return (
    <div>
      <h1> This is a details page.</h1>
      Route URL is: {routeKey}
    </div>
  );
};

export default DetailsPage;
