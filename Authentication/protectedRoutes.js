import router from "next/router";
import isProtected from "./routeCheck";

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const accessToken = isProtected();
      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        router.replace("/");
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
