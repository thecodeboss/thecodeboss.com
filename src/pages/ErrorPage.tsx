import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <Header />
      <main>
        <h3>Oops, something went wrong! 😨</h3>
        {isRouteErrorResponse(error) && (
          <p>
            {error.status === 404 &&
              "You find yourself in a mysterious place, lost in the void. The numbers 404 are written upon the wall. Curious. How did you end up here? 🕵️‍♂️"}
            {error.status === 500 &&
              "The server is on fire! 🔥 (No seriously, how did you manage to get a 500 error on my site?)"}
          </p>
        )}
        <Link to="/">
          <i className="fa-solid fa-house fa-lg"></i> Go back
        </Link>
      </main>
      <Footer />
    </>
  );
}
