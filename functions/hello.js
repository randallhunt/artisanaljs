"use strict";

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
    },
    body: JSON.stringify({
      success: "Yes, it works.",
    }),
  };

  callback(null, response);
};
