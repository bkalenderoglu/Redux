import React from "react";
import { useSelector } from "react-redux";
import { useParams, Redirect } from "react-router";

function QuoteDetail() {
  const { quote_id } = useParams();
  const quote = useSelector((state) =>
    state.quotes.items.find((item) => item.quote_id === Number(quote_id))
  );

  if (!quote) {
    return <Redirect to="/quotes" />;
  }

  return (
    <div>
      <h1>Quote Detail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
}

export default QuoteDetail;